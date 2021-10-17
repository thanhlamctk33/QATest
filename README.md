# ASpire Test QA Project

This repository contains sample test files that help you learn how to use TestCafe.

Here you will find examples that demonstrate 
    - Register to the webpage with account
    - Mobile Verification (OPT) with default OPT is 1234
    - Create Business Role
    - Personal Details
    - Business Details
    
 
## Environment Setting Up

1. Install nodejs:
     https://nodejs.org/en/download/
  
2. Install testcafe:
     https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe
    
3. Regarding document how to use testcafe
     https://testcafe.io/documentation/402963/guides/advanced-guides/speed-up-test-execution
    
4. IDE Visual Studio Code   
    https://code.visualstudio.com/download 
    
5. Install report for Test cafe
   ```sh
   npm install testcafe-reporter-html
   ```

## Installation

1. Clone this repository:

    ```sh
    git clone https://github.com/thanhlamctk33/QATest.git
    ```

2. Run Command:

    ```sh
    testcafe  chrome .\TestScript\registration_method_test.js -e  -r xunit:result.xml
    ```

## Usage

Use the `npm test` script to run all tests in Chrome  Firefox, Safari and IE

```sh
testcafe  firefox .\TestScript\registration_method_test.js -e  -r xunit:result.xml
```

```sh
testcafe  safari .\TestScript\registration_method_test.js -e  -r xunit:result.xml
```
You can also run on headless mode:

```sh
testcafe  chrome:headless .\TestScript\registration_method_test.js -e  -r xunit:result.xml
```
