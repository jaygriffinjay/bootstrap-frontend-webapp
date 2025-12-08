import { Global } from '@emotion/react';
import type { CSSObject } from '@emotion/react';

const globalStyles: CSSObject = {
  // Reset and global styles for :root
  ':root': {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    lineHeight: 1.5,
    fontWeight: 400,
    colorScheme: 'dark',
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '#121212',
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  // Body styles
  body: {
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '320px',
    minHeight: '100vh',
    backgroundColor: 'var(--background-color)',
  },

  // Link styles
  a: {
    fontWeight: 500,
    color: '#646cff',
    textDecoration: 'inherit',
    '&:hover': {
      color: '#535bf2',
    },
  },

  // Heading styles
  h1: {
    fontSize: '2.5rem',
    lineHeight: 1.2,
    margin: 0,
    textAlign: 'center',
  },

  // Button styles
  button: {
    borderRadius: '4px',
    border: '1px solid transparent',
    padding: '0.5em 1em',
    fontSize: '1em',
    fontFamily: 'inherit',
    backgroundColor: '#1a1a1a',
    cursor: 'pointer',
    transition: 'border-color 0.25s',
    '&:hover': {
      borderColor: '#646cff',
    },
  },

  // Light mode media query
  '@media (prefers-color-scheme: light)': {
    ':root': {
      color: '#213547',
      backgroundColor: '#ffffff',
    },
    'a:hover': {
      color: '#747bff',
    },
    button: {
      backgroundColor: '#f9f9f9',
    },
  },
};

export const GlobalStyles = () => <Global styles={globalStyles} />;