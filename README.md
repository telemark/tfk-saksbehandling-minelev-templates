[![Build Status](https://travis-ci.org/telemark/tfk-saksbehandling-minelev-templates.svg?branch=master)](https://travis-ci.org/telemark/tfk-saksbehandling-minelev-templates)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-saksbehandling-minelev-templates/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-saksbehandling-minelev-templates?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-saksbehandling-minelev-templates.svg)](https://greenkeeper.io/)

# tfk-saksbehandling-minelev-templates

Templates for MinElev
 
Oversikt over alle malene og koder for de ulike ligger [her](docs/templates.md)
 
 ## Installasjon
 
 Fra npm
 
 ```sh
 $ npm install --save tfk-saksbehandling-minelev-templates
 ```
  
 ## Bruk
 
 Send inn id på malen du skal benytte og få fullstendig filbane i retur.
 Send inn id på malen du skal benytte og meta=true og få metadata i retur
 
 Maler
 - atferd
 - fag
 - foresatte
 - hemmelig-adresse
 - orden
 - samtale
 - ikke-samtale
 
 ```JavaScript
 'use strict'
 
 const getTemplatePath = require('tfk-saksbehandling-minelev-templates')
 
 console.log(getTemplatePath('orden'))
 
 //=> path/to/template/orden.docx
 ```
 
 ```JavaScript
  'use strict'
  
  const getTemplateMeta = require('tfk-saksbehandling-minelev-templates')
  
  console.log(getTemplateMeta('orden', true))
  ```
 
 Returns
 
 ```JavaScript
   {
       "file": "orden.docx",
       "archive": {
         "Category": "Dokument ut",
         "SignOff": true,
         "AccessCode": "13",
         "Paragraph": "Offl §13 jfr Fvl §13.1",
         "NoarkClassificationCode": "B31",
         "Status": "J"
       }
   }
   ```
 
 ## Lisens
 
 [MIT](LICENSE)
 
 ![Robohash image of tfk-saksbehandling-minelev-templates](https://robots.kebabstudios.party/tfk-saksbehandling-minelev-templates.png "Robohash image of tfk-saksbehandling-minelev-templates")