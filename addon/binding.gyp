{
  'targets': [
    {
      'target_name': 'crypto',
      'sources': [
        'src/crypto.cpp',
        'src/WXBizMsgCrypt.cpp',
        'lib/include64/tinyxml2/tinyxml2.cpp'
      ],
      'conditions': [
        ['OS=="linux"', {
          'include_dirs': [
            'lib/include64',
            'lib/include64/openssl',
            'lib/include64/tinyxml2'
          ]
        }]
      ]
    }
  ]
}