#include <iostream>
#include <string>
#include <node.h>
#include <v8.h>
#include "WXBizMsgCrypt.h"

using namespace EncryptAndDecrypt;
using namespace std;
using namespace tinyxml2;
using namespace v8;

Handle<Value> decrypt(const Arguments& args) {
      HandleScope scope;

      string sEncodingAesKey = WXBizMsgCrypt::toCString(args[0]);//*key;
      string sToken = WXBizMsgCrypt::toCString(args[1]);//*token;
      string sAppid = WXBizMsgCrypt::toCString(args[2]);//*appid;
      string sMsgSignature = WXBizMsgCrypt::toCString(args[3]);//*msg_signature;
      string sTimestamp = WXBizMsgCrypt::toCString(args[4]);//*timestamp;
      string sNonce = WXBizMsgCrypt::toCString(args[5]);//*nonce;
      string sEncryptBase64 = WXBizMsgCrypt::toCString(args[6]);//*encryptBase64;

      WXBizMsgCrypt oWXBizMsgCrypt(sToken,sEncodingAesKey,sAppid);
      string sMsg;
      int ret = oWXBizMsgCrypt.DecryptMsg(sMsgSignature,sTimestamp,sNonce,sEncryptBase64,sMsg);
      Local<String> result = String::New(sMsg.c_str());
      if(ret == 0){
        return scope.Close(result);
      }else{
        return scope.Close(Number::New(ret));
      }
}

Handle<Value> encrypt(const Arguments& args) {
      HandleScope scope;

      string sEncodingAesKey = WXBizMsgCrypt::toCString(args[0]);//*key;
      string sToken = WXBizMsgCrypt::toCString(args[1]);//*token;
      string sAppid = WXBizMsgCrypt::toCString(args[2]);//*appid;
      string sTimestamp = WXBizMsgCrypt::toCString(args[3]);//*timestamp;
      string sNonce = WXBizMsgCrypt::toCString(args[4]);//*nonce;
      string sToXml = WXBizMsgCrypt::toCString(args[5]);//*xml;

      WXBizMsgCrypt oWXBizMsgCrypt(sToken,sEncodingAesKey,sAppid);
      string sEncryptMsg;
      int ret = oWXBizMsgCrypt.EncryptMsg(sToXml,sTimestamp,sNonce,sEncryptMsg);
      Local<String> result = String::New(sEncryptMsg.c_str());
      if(ret == 0){
        return scope.Close(result);
      }else{
        return scope.Close(Number::New(ret));
      }
}

void Init(Handle<Object> target) {
  target->Set(String::NewSymbol("decrypt"),
            FunctionTemplate::New(decrypt)->GetFunction());
  target->Set(String::NewSymbol("encrypt"),
            FunctionTemplate::New(encrypt)->GetFunction());
}

NODE_MODULE(crypto, Init)
