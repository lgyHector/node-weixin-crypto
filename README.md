#  [![Build Status][travis-image]][travis-url]
# node-weixin-crypto

此模块是基于微信官方demo代码包中C++代码，使用node-gyp封装为nodejs addon 模块
使用64位openssl,tinyxml2 构建，也包含32位包。有需要可以自行修改gyp文件
进行build。


## Build
编辑addon目录下binding.gyp
```sh
'conditions': [
        ['OS=="linux"', { //根据操作系统不同进行替换如:OS=="mac"
          'include_dirs': [
            'lib/include64',
            'lib/include64/openssl',
            'lib/include64/tinyxml2'
          ]
        }]
      ]
```
进入addon目录执行下面命令：
```sh
node-gyp configure
node-gyp build
```

## Install
```sh
npm install --save node-weixin-crypto
```

## Usage
```js
var nc = require('node-weixin-crypto');

var app = {
    id: '第三方平台appid',
    key: '公众号消息加解密Key',
    token: '公众号消息校验Token'
}

var sxml = '<xml>....</xml>';// 接受到的微信加密消息string

var decryptMsg = nc.decrypt(app, signure, timestamp, nonce, sxml);

var xml = '<xml>....</xml>';// 微信明文消息string

var encryptMsg = nc.encrypt(app, timestamp, nonce, xml);

```