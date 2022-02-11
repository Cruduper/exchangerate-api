# _Exchange Rate Calculator_

#### By _**Eric Crudup**_

#### _An application that accesses an exchange rate API to calculate the conversion from USD to other currencies. [GH-Pages site link](https://cruduper.github.io/exchangerate-api)_

## Technologies Used

* _JavaScript_
* _jQuery_
* _BootStrap_
* _Popper.js_
* _npm_
* _Webpack_
* _Babel_
* _ESLint_
* _HTML_
* _CSS_

## Description

_This was built as a test for accessing and using information from API's using promises and XMLhttpRequest's. I was specifically looking to start using some asynchronous code in my programs, and API requests are a great for that. The API used was [ExchangeRate-API](https://app.exchangerate-api.com) because it is free, and allows more than enough API calls to complete the project. The documentation for ExchangeRate-API can be found [here](https://www.exchangerate-api.com/docs/overview)._

## Setup/Installation Requirements

* _clone git repository to a local machine_
* _navigate to root folder of the project using command line_
* _use the '$ npm install' command to install necessary packages_
* _type in '$ npm run build' to build project_
* _type in '$ npm run start' command to open project in browser and start live server_

## API key setup

* _sign up for free ExchangeRate-API account at this website [here](https://www.exchangerate-api.com/) using your email address_
* _click on verification email after signing up to get access to an API key_
* _after verification, sign in and get API key from [your dashboard](https://app.exchangerate-api.com/dashboard)_
* _consult [documentation](https://www.exchangerate-api.com/docs/overview) if you would like to alter this code to use your key in alternate ways_
* _after downloading this repo, in the root folder create a file called ".env" (can be done by navigating to root folder in terminal and using $ touch .env command)_
* _inside of newly created .env file, add an API_KEY variable to store your personal API key, using format API_KEY={your key}. **Example: API_KEY=123456789abcdef**_
* _program should now insert your personal API key in place of ${API_KEY} wherever it appears within backticks (`)_

## Known Bugs

* _No known bugs_

## License

[MIT](https://opensource.org/licenses/MIT)    
If you have any issues or questions, contact me at briefcasemanx@gmail.com    

Copyright (c) _2022_  _Eric Crudup_