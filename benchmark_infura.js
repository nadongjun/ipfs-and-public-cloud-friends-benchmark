//const node_dropbox = require('node-dropbox');

import { create } from 'ipfs-http-client'

const projectId = 'xxxx';
const projectSecret = 'xxx';
const auth = 'Basic' + Buffer.from(projectId+ '\'' + projectSecret).toString('base64')

const client = create({
    host: 'ipfs.infura.io',
    port: '5001',
    protocol: 'https',
    headers: {
        Authorization: auth,
    },
  })//({ host: 'gateway.ipfs.io', port: 443, protocol: 'https' })
const { cid } = await client.add('Hello world!')
console.log(cid)

async function benchmarkIpfsUpload() {
    let start =  new Date();  // 시작

    ipfs =  await IPFS.create()

    fileBuffer = new Buffer.from("/dataset/2048kb", 'utf8');

     const { cid } = await ipfs.add('hi')
    console.log(cid)
    let end =  new Date();  // 종료

    console.log(end - start); // 경과시간(밀리초)
}
/*
async function benchmarkIpfsDownload(cid) {
    start =  new Date();  // 다운로드 시작
    ipfs =  await IPFS.create()

    for await (const file of ipfs.get(cid)) {
        console.log(file.path)

        end =  new Date();  // 종료
        console.log(end - start); // 경과시간(밀리초)
    }
}*/
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

//benchmarkIpfsUpload()
//benchmarkIpfsDownload('QmdckCoPuhEtiNzREtqpYn8dBgY8ifcG82Q4eyEdGCLEiu')

 