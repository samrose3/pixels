import React from 'react';
import { setup } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';
import { prefix } from 'goober-autoprefixer';
import styledSystemShouldForwardProp from '@styled-system/should-forward-prop';
import type { AppProps } from 'next/app';

import { ThemeProvider, useTheme } from '@polaris/components';
import theme from '@polaris/tokens';

import '../styles/globals.css';

setup(
  React.createElement,
  prefix,
  useTheme,
  shouldForwardProp(styledSystemShouldForwardProp),
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;