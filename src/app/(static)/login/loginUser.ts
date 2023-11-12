'use client';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function LoginAPI(email: string, password: string) {
  const router = useRouter();

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.post('https://endo-api.eductor.org/auth/login/dashboard', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const userData = response.data.data; 

        console.log(userData);

        // Redirect to home page
        router.push('./');
      } else {
        console.error('Login failed:', response.data.message);
        // Show error message
        alert('Login failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      // Show error message
      alert('Login error: ' + error);
    }
  };
  const x=loginUser(email,password)
  return x;
  // ...
}