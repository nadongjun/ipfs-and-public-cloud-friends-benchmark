//const node_dropbox = require('node-dropbox');
const IPFS = require('ipfs-core')
var fs = require("fs");

async function benchmarkIpfsUpload() {
    let start =  new Date();  // 시작

    ipfs =  await IPFS.create()

    fileBuffer = new Buffer.from("/dataset/2048kb", 'utf8');

     const { cid } = await ipfs.add(fileBuffer)
    console.log(cid)
    let end =  new Date();  // 종료

    console.log(end - start); // 경과시간(밀리초)
}

async function benchmarkIpfsDownload(cid) {
    start =  new Date();  // 다운로드 시작
    ipfs =  await IPFS.create()

    for await (const file of ipfs.get(cid)) {
        console.log(file.path)
        
            for await (const chunk of file.content) {
            console.log(chunk)
        }
        end =  new Date();  // 종료
        console.log(end - start); // 경과시간(밀리초)
    }
}
/*

function benchmarkDropbox() {
    node_dropbox.Authenticate('key', 'secret', 'redirect_url', function(err, url){
        // redirect user to the url.
        // looks like this: "https://www.dropbox.com/1/oauth2/authorize?client_id=<key_here>&response_type=code&redirect_uri=<redirect_url_here>"
    });
}   

function benchmarkGoogleDrive() {

}
*/

benchmarkIpfsUpload()
//benchmarkIpfsDownload('QmPqoVPxftFduu4WpnwxwaQ4SX9tMY3ATwfcCphJXnmcRM')

 