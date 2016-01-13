# node-weixin-crypto
nodejs weixin message crypto


## Install
```sh
npm install --save node-weixin-crypto
```

## Usage
```js
var nc = require('node-weixin-crypto');

var app = {
    id: '',
    secret: '',
    token: ''
}

var sxml = '<xml>....</xml>';// 接受到的微信加密消息string

var decryptMsg = nc.decrypt(app, signure, timestamp, nonce, sxml);

var xml = '<xml>....</xml>';// 微信明文消息string

var encryptMsg = nc.encrypt(app, timestamp, nonce, xml);

```
