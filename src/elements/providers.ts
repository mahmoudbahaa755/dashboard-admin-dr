'use client'

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children:any }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  
  return( <ThemeProvider attribute='class'>{children} </ThemeProvider>);


}