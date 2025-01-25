# Typescript-Axios-API-test
API testing of user registration on a random swagger page

The file was run from the command line as : jest testFile.js

Test result at running 8 tests : 

jest testFile.js
  console.log
    Username: henry

      at log (tests/testFile.js:128:25)

  console.log
    Username: henryfonda@testers.com

      at log (tests/testFile.js:129:25)

 PASS  tests/testFile.js
  GET /health-check
    √ should return status code 200 and application/json content type (483 ms)
  POST /users/register
    √ should register a user successfully with status code 200 (375 ms)
    Login API Test
      √ should successfully log in with valid credentials (397 ms)
      √ should successfully log in with valid credentials (398 ms)
    Delete User Account API Test
      √ should successfully delete a user account with a valid token (377 ms)
    Get User Profile API Test
      √ should successfully fetch the user profile with valid token (291 ms)
    Logout API Test
      √ should successfully log out with valid token (308 ms)


