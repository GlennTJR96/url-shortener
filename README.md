
# Glenn's URL Shortener
For example, 

Given input: `https://facebook.com/hello/this/is/glenn/coool`

It will return: `http://localhost:XXXX/wqe1234` (shortened)

If you enter the shortened url, you will be redirected to the original link

## Setup Info

### Database: Postgres 13
Please ensure that you have PostGres 13 installed. The remaining creation will be handled via `Sequalize` on NodeJs

### For NodeJs
```
npm install
nodemon server.js   #you may use node server.js too if you want
```

### For Angular
```
npm install
ng serve
```

### Tests
Currently, only some Angular tests are written.
Karma-Jasmine test are run ChromeHeadless 
```
ng test
```