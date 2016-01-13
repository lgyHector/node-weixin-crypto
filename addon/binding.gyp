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
        ['OS=="mac"', {
          'include_dirs': [
            'lib/include64',
            'lib/include64/openssl',
            'lib/include64/tinyxml2'
          ]
        }],
        ['OS=="linux"', {
          'cflags': [
            '<!@(pkg-config --cflags openssl tinyxml2)'
          ],
          'ldflags': [
            '<!@(pkg-config --libs-only-L --libs-only-other openssl tinyxml2)'
          ],
          'libraries': [
            '<!@(pkg-config --libs-only-l openssl tinyxml2)'
          ]
        }]
      ]
    }
  ]
}