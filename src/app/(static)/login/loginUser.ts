import axios from 'axios';

export  default async function loginUser(username:string, password:string) {
  try {
    const response = await axios.post('https://endo-api.eductor.org/auth/login/dashboard', {
      username: username,
      password: password,
    });

    if (response.status === 200) {
      const userData = response.data.data; 

      console.log(userData);

      
      return userData;
    } else {
      console.error('Login failed:', response.data.message);
      return null;
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
}
