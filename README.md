# Typescript-Axios-API-test

API testing of user management on a random swagger page  :    https://practice.expandtesting.com/notes/api/api-docs/

The file was run from the command line as : jest testFile.js

Test result at running 8 tests : 

jest testFile.js

The following 2 console.log printouts are related to GET operation. The other commands do not print out information.

  console.log
    Username: henry

      at log (tests/testFile.js:128:25)

  console.log
  
    Username: henryfonda@testers.com

      at log (tests/testFile.js:129:25)

 PASS  tests/testFile.js
 
  GET /health-check
  
    √ should return status code 200 and application/json content type (741 ms)
    
  POST /users/register
  
    √ should register a user successfully with status code 200 (393 ms)
    
    Login API Test
    
      √ should successfully log in with valid credentials (397 ms)
      
      √ should successfully log in with valid credentials (401 ms)
      
      √ unauthorized user (285 ms)
    
    Delete User Account API Test
    
      √ should successfully delete a user account with a valid token (381 ms)
    
    Get User Profile API Test
    
      √ should successfully fetch the user profile with valid token (295 ms)
    
    Logout API Test
    
      √ should successfully log out with valid token (314 ms)

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        3.566 s, estimated 4 s

  
