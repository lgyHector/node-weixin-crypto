'use strict'
var crypto = require('./lib/crypto.js');

var nc = module.exports = {
    decrypt: function(app, signure, timestamp, nonce, encrypted_xml){
        return crypto.decrypt(app.key, app.token, app.id, signure, timestamp, nonce, encrypted_xml);
    },
    encrypt: function(app, timestamp, nonce, unencrypted_xml){
        return crypto.encrypt(app.key, app.token, app.id, timestamp, nonce, unencrypted_xml);
    }
};