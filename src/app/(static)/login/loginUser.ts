'use client';

import { useRouter } from 'next/router';

export default async function LoginAPI(email: string, password: string) {
  try {
    const response = await fetch('https://endo-api.eductor.org/auth/login/dashboard', {
      method: 'POST',
     
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.status === 200) {
      const userData = await response.json();
      console.log(userData);
      return userData;
    } else {
      const errorData = await response.json();
      console.error('Login failed:', errorData.message);
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}