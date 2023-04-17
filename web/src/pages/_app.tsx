import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { darkTheme, normalizeCss, globalStyles } from 'stitches.config';

export default function App({ Component, pageProps }: AppProps) {
  normalizeCss();
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
