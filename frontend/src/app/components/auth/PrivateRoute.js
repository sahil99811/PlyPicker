"use client"

import { useRouter } from 'next/navigation'; // Import useRouter from Next.js


export default function PrivateRoute({ children }) {
  const router = useRouter(); // Initialize the router


    router.push('/login'); // Redirect to login page

}
