import os
import sys

def build_sprite(input_dir, output_file):
    svg_symbols = []

    for filename in sorted(os.listdir(input_dir)):
        if not filename.endswith(".svg"):
            continue

        file_path = os.path.join(input_dir, filename)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # viewBox extrahieren
        viewbox = ""
        if "viewBox" in content:
            start = content.find("viewBox")
            quote = '"' if '"' in content[start:start+20] else "'"
            vb_start = content.find(quote, start) + 1
            vb_end = content.find(quote, vb_start)
            viewbox = content[vb_start:vb_end]

        # Inhalt zwischen <svg ...> und </svg>
        inner_start = content.find(">") + 1
        inner_end = content.rfind("</svg>")
        inner_content = content[inner_start:inner_end].strip()

        symbol_id = os.path.splitext(filename)[0]
        symbol = f'<symbol id="emoji-{symbol_id}" viewBox="{viewbox}">\n{inner_content}\n</symbol>'
        svg_symbols.append(symbol)

    sprite_content = (
        '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n'
        + "\n".join(svg_symbols) +
        "\n</svg>"
    )

    with open(output_file, "w", encoding="utf-8") as out:
        out.write(sprite_content)

    print(f"Sprite geschrieben nach: {output_file}")

# ---------------- Hauptteil ----------------
if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Aufruf: python build_sprite.py <eingabe-ordner> <ausgabe-datei>")
    else:
        build_sprite(sys.argv[1], sys.argv[2])
