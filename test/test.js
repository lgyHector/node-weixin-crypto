var key = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG'
var token = 'spamtest'
var appid = 'wx2c2769f8efd9abc2'

var signure = '003fee52ecc56afb46c00b5c7721be87860ce785'
var timestamp = '1410349438'
var nonce = '298025754'
var xml = '<xml>\
                <ToUserName><![CDATA[gh_10f6c3c3ac5a]]></ToUserName>\
                <FromUserName><![CDATA[oyORnuP8q7ou2gfYjqLzSIWZf0rs]]></FromUserName>\
                <CreateTime>1411035097</CreateTime>\
                <MsgType><![CDATA[text]]></MsgType>\
                <Content><![CDATA[this is a test message]]></Content>\
                <MsgId>6060349595123187712</MsgId>\
            </xml>';
var base64 = "mfBCs65c67CeJw22u4VT2TD73q5H06+ocrAIxswCaeZ/d/Lw" +
            "0msSZFHY0teqgSYiI1zR2gD2DKrB3TIrmX/liNSDrGqS8jSI/"+
            "WPeKB5VPr7Ezr7gomZAyGCwJSgT1TRFWPfONGJMxuj2nk4faTu"+
            "spAuVIFQ6SHwZuJBZC7mcJp7Cgr9cUhATQWDbOPaE7ukZBTV2Yq"+
            "yzH+UI2AK+J1S47cE79k1RX8t0hcTz/O0hlK8DGXKnvYv88qKQcI"+
            "7z4iaajqHfRVZKBNyOODabs+It+ZfM3dWTeFcPgDbGtIEnpt/EDtu"+
            "uA/zMvtkaKdHdswPnVZQ+xdwbYr3ldGvfT8HlEYEgkgKaThxTFobVl"+
            "wzu2ZkXCjicbP3xdr15Iq48ObgzPpqYuZ3IEoyggZDKClquk0u0orMck4GTF/XyE8yGzc4=";
var sxml =  '<xml><ToUserName><![CDATA[toUser]]></ToUserName><Encrypt><![CDATA['+ base64 + ']]></Encrypt></xml>';

var nc = require('../index.js');

console.log(nc.encrypt(key, token, appid, timestamp, nonce, xml));
console.log(nc.decrypt(key, token, appid, signure, timestamp, nonce, sxml));
