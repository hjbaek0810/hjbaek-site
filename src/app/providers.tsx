'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';
import Layout from '@/components/Layout';

const Providers = ({ children }: { children: ReactNode }) => {
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return null
  }
  
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<Layout>{children}</Layout>
		</ThemeProvider>
	);
};

export default Providers;
