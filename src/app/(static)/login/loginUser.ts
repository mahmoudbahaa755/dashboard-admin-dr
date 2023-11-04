import axios from 'axios';

export  default async function loginUser(username, password) {
  try {
    const response = await axios.post('https://endo-api.eductor.org/auth/login/dashboard', {
      username: username,
      password: password,
    });

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      const userData = response.data.data; // This is your user data

      // Now you can use the user data in your Next.js project
      console.log(userData);

      // Example: Store the user data in a state or context for your application to use.
      // You can also set the user's token in a cookie or local storage for authentication.

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
