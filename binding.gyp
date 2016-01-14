{
  'targets': [
    {
      'target_name': 'crypto',
      'sources': [
        'addon/src/crypto.cpp',
        'addon/src/WXBizMsgCrypt.cpp',
        'addon/lib/include64/tinyxml2/tinyxml2.cpp'
      ],
      'include_dirs': [
          'addon/lib/include64',
          'addon/lib/include64/openssl',
          'addon/lib/include64/tinyxml2'
      ]
    }
  ]
}