import zipfile
import os

with zipfile.ZipFile('mint-garage-theme.zip', 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zipf:
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file not in ['mint-garage-theme.zip', 'mint-garage-minimal.tar.gz', 'create_zip.py']:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, '.')
                zipf.write(file_path, arcname)

print("ZIP file created")
