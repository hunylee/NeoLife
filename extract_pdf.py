from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextContainer

pdf_path = "/Users/terrylee/Downloads/NeoLife_AI_Investment Deck_2026.pdf"
output_path = "/Users/terrylee/Documents/NeoLife/pdf_content.txt"

try:
    with open(output_path, "w", encoding="utf-8") as out_file:
        for page_layout in extract_pages(pdf_path):
            page_num = page_layout.pageid
            out_folder = f"--- Page {page_num} ---\n"
            out_file.write(out_folder)
            
            page_text = ""
            for element in page_layout:
                if isinstance(element, LTTextContainer):
                    page_text += element.get_text()
            
            out_file.write(page_text + "\n\n")
    print(f"Successfully extracted text to {output_path}")
except Exception as e:
    print(f"Error during extraction: {e}")
