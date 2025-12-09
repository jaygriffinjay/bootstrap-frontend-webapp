import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProviders } from './theme/theme';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProviders>
      <GlobalStyles />
      <App />
    </ThemeProviders>
  </StrictMode>
);
