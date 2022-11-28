import ipfshttpclient
import dropbox
"""
from googleapiclient.discovery import build
from googleapiclinet.http import MediaFileUpload
from httplib2 import Http
from oauth2client import file, client, tools
"""
def BenchmarkIpfs() :
    api = ipfshttpclient.connect("/dns/gateway.ipfs.io/tcp/5001/http")
    new_file = api.add('/dataset/64kb')
    #api.get(new_file) # new_file == 'Qm... Your IPFS Hash'

def BenchmarkDropbox() :
    dbx = dropbox.Dropbox(access_token)
    filename = "테스트파일.txt"
    pathname = "/테스트폴더/테스트파일.txt"
    with open(filename, "rb") as f:
        dbx.files_upload(f.read(), pathname, mode=dropbox.files.WriteMode.overwrite)
""""
def BenchmarkGoogleDrive() :
    store = file.Storage('storage.json')
    creds = store.get()

    service = build('drive', 'v3', http=creds.authorize(Http()))

    folder_id = "folder_id"   # 구글드라이브 폴더의 id
    file_paths = "file.csv"   # 업로드하고자 하는 파일

    # 파일을 구글드라이브에 업로드하기
    request_body = {'name': file_paths, 'parents': [folder_id], 'uploadType': 'multipart'}
    media = MediaFileUpload(file_paths, mimetype='text/csv')
    file_info = service.files().create(body=request_body, media_body=media, fields='id,webViewLink').execute()

    # 구글 드라이브 링크 얻기
    print("File webViewLink: ", file_info.get('webViewLink'))
    webviewlink = file_info.get('webViewLink')
"""
BenchmarkIpfs()