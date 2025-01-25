import axios from 'axios';

let token : string;

describe('GET /health-check', () => {
  
  it('should return status code 200 and application/json content type', async () => {
    const response = await axios.get('https://practice.expandtesting.com/notes/api/health-check', {
      headers: {
        accept: 'application/json',
      },
    });

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
  });
});

describe('POST /users/register', () => {
  it('should register a user successfully with status code 200', async () => {
    // Accessing command line arguments; assuming they start from index 2
    const name = "knewman";
    const email = "knewman@testers.com";
    const password = "knewman";

    const response = await axios.post('https://practice.expandtesting.com/notes/api/users/register', `name=${name}&email=${email}&password=${password}`, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    expect(response.status).toBe(201);
  });



  describe('Login API Test', () => {
    it('should successfully log in with valid credentials', async () => {
      const url = 'https://practice.expandtesting.com/notes/api/users/login';
      const headers = {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const data = new URLSearchParams({
        email: 'knewman@testers.com',
        password: 'knewman',
      });
  
      try {
        const response = await axios.post(url, data.toString(), { headers });
        
        // Assertions to validate the response
        expect(response.status).toBe(200);
        
        // Adjusted assertion for nested "token" property
        expect(response.data.data).toHaveProperty('token'); 
        token = response.data.data.token; 

        
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });

  describe('Delete User Account API Test', () => {
    it('should successfully delete a user account with a valid token', async () => {
      const url = 'https://practice.expandtesting.com/notes/api/users/delete-account';
      const headers = {
        accept: 'application/json',
        'x-auth-token': `${token}` // Replace with dynamic token if needed
      };
  
      try {
        const response = await axios.delete(url, { headers });
  
        // Assertions to validate the response
        expect(response.status).toBe(200);
        expect(response.data.message).toBeDefined(); // Example assertion for message presence
  
      } catch (error) {
        if (axios.isAxiosError(error)) { 
          console.error("API Error:", error.response?.data || error.message);
          throw error;
        } else {
          console.error("Unexpected Error:", error);
          throw error;
        }
      }
    });
  });

  describe('Login API Test', () => {
    it('should successfully log in with valid credentials', async () => {
      const url = 'https://practice.expandtesting.com/notes/api/users/login';
      const headers = {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const data = new URLSearchParams({
        email: 'henryfonda@testers.com',
        password: 'henryfonda',
      });
  
      try {
        const response = await axios.post(url, data.toString(), { headers });
        
        // Assertions to validate the response
        expect(response.status).toBe(200);
        
        // Adjusted assertion for nested "token" property
        expect(response.data.data).toHaveProperty('token'); 
        token = response.data.data.token; 

        
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });


  describe('Get User Profile API Test', () => {
    it('should successfully fetch the user profile with valid token', async () => {
      const url = 'https://practice.expandtesting.com/notes/api/users/profile';
      const headers = {
        accept: 'application/json',
        'x-auth-token': `${token}`, // Ensure this token is dynamically set after login
      };
  
      try {
        const response = await axios.get(url, { headers });

        console.log(`Username: ${response.data.data.name}`);
        console.log(`Username: ${response.data.data.email}`);

  
        // Assertions to validate successful retrieval of the profile
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('data'); // Check if data property exists in response
        expect(response.data.data).toHaveProperty('email'); // Example assertion for email presence
  
      } catch (error) {
        if (axios.isAxiosError(error)) { 
          console.error("API Error:", error.response?.data || error.message);
          throw error;
        } else {
          console.error("Unexpected Error:", error);
          throw error;
        }
      }
    });
  });




describe('Logout API Test', () => {
  it('should successfully log out with valid token', async () => {
    const url = 'https://practice.expandtesting.com/notes/api/users/logout';
    const headers = {
      accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',

      'x-auth-token': `${token}`, // Use x-auth-token for authentication
    };

    try {

      const response = await axios.delete(url, { headers }); 

      // Assertions to validate the response
      expect(response.status).toBe(200);
      expect(response.data.message).toBeDefined(); // Example assertion for message presence

    } catch (error) {
      if (axios.isAxiosError(error)) { 
        console.error("API Error:", error.response?.data || error.message);
        throw error;
      } else {
        console.error("Unexpected Error:", error);
        throw error;
      }
    }
  });
});





  describe('Login API Test', () => {
    it('unauthorized user', async () => {
      const url = 'https://practice.expandtesting.com/notes/api/users/login';
      const headers = {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const data = new URLSearchParams({
        email: 'nobody@testers.com',
        password: 'nobody',
      });
  
      try {
        await axios.post(url, data.toString(), { headers });
        
        // If no error is thrown, fail the test
        throw new Error('Expected request to fail with status 401');
        
      } catch (error) {
        if (axios.isAxiosError(error)) { 
          // Narrowing down to AxiosError
          expect(error.response?.status).toBe(401);
          expect(error.response?.data.message).toBeDefined(); // Example assertion for message presence
        } else {
          console.error("Unexpected error:", error);
          throw error; // Re-throw unexpected errors
        }
      }
    });
  });

  
});
