var assert = require('assert');
var parser = require('xml2json');
var nc = require('../index.js');

var app = {
    id: 'wx2c2769f8efd9abc2',
    secret: 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG',
    token: 'spamtest'
}
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

describe('node-weixin-crypto node module', function(){

    it('should decrypt a weixin xml message', function(done){
        var decryptMsg = nc.decrypt(app, signure, timestamp, nonce, sxml);
        var msg = parser.toJson(decryptMsg, {object: true});
        assert.equal(true, msg.xml.ToUserName === 'gh_10f6c3c3ac5a');
        assert.equal(true, msg.xml.FromUserName === 'oyORnuP8q7ou2gfYjqLzSIWZf0rs');
        assert.equal(true, msg.xml.CreateTime === '1410349438');
        assert.equal(true, msg.xml.MsgType === 'text');
        assert.equal(true, msg.xml.Content === 'abcdteT');
        assert.equal(true, msg.xml.MsgId === '6057404712141979648');
        done();
    })

    it('should encrypt a weixin xml message', function(done){
        var encryptMsg = nc.encrypt(app, timestamp, nonce, xml);
        var msg = parser.toJson(encryptMsg, {object: true});
        assert.equal(true, msg.xml.TimeStamp === timestamp);
        assert.equal(true, msg.xml.Nonce === nonce);
        done();
    })
})
