# /// script
# requires-python = ">=3.10"
# dependencies = ["google-genai", "pillow"]
# ///
"""
Gera a imagem de CAPA de um artigo com o Gemini (Nano Banana), no estilo da marca
Clínica Cristiane Martins Kids & Family. Depois carrega-se a imagem em /admin/media
(ou na edição do artigo).

Uso:
  export GEMINI_API_KEY="a-tua-chave"
  uv run scripts/gerar-capa.py "PROMPT EM INGLÊS" --slug dor-lombar-ao-acordar

  # o PROMPT vem do campo imagem_capa.prompt_geracao do JSON do artigo.

Saída: capas/<slug>.png  (16:9, 2K)
"""
import argparse
import os
import sys
from pathlib import Path

from google import genai
from google.genai import types

# Estilo visual da marca — anexado a qualquer prompt para manter consistência.
# Marca Cristiane Martins Kids & Family: saúde oral infantil, acolhedor, nunca clínico-frio.
BRAND_STYLE = (
    " — Style: warm clean editorial photography for a friendly pediatric dental & family "
    "health brand, soft natural light, calm and reassuring mood, gentle warm palette with a "
    "subtle coral/turquoise accent, shallow depth of field, high detail, child- and "
    "family-friendly, approachable (never cold, sterile or scary), no text, no watermark, "
    "no logos. Wide horizontal composition suitable for a website cover."
)


def main() -> int:
    ap = argparse.ArgumentParser(description="Gera a capa de um artigo (Gemini).")
    ap.add_argument("prompt", help="Prompt em inglês (campo imagem_capa.prompt_geracao).")
    ap.add_argument("--slug", default="capa", help="Nome do ficheiro de saída (sem extensão).")
    ap.add_argument("--ar", default="16:9", help="Aspect ratio (16:9, 4:3, 1:1...).")
    ap.add_argument("--size", default="2K", help="Resolução: 1K, 2K, 4K.")
    ap.add_argument("--out", default="capas", help="Pasta de saída.")
    args = ap.parse_args()

    if not (os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")):
        print("ERRO: define GEMINI_API_KEY (ou GOOGLE_API_KEY) no ambiente.", file=sys.stderr)
        return 1

    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / f"{args.slug}.png"

    client = genai.Client()
    print(f"A gerar capa para '{args.slug}' ({args.ar}, {args.size})…")
    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",  # Nano Banana Pro
        contents=[args.prompt + BRAND_STYLE],
        config=types.GenerateContentConfig(
            image_config=types.ImageConfig(aspect_ratio=args.ar, image_size=args.size),
        ),
    )

    saved = False
    for part in response.candidates[0].content.parts:
        if getattr(part, "as_image", None) and part.as_image():
            part.as_image().save(out_path)
            saved = True
            print(f"✓ Guardada: {out_path}")
        elif getattr(part, "text", None):
            print("Nota do modelo:", part.text)

    if not saved:
        print("ERRO: o modelo não devolveu imagem.", file=sys.stderr)
        return 2
    print("\nPróximo passo: carrega esta imagem em /admin/media (ou na edição do artigo)")
    print("e preenche o ALT e a LEGENDA (usa o imagem_capa.alt / .legenda do JSON).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
