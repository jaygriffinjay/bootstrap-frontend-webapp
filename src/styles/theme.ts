// Theme tokens - structured data
export interface Theme {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    buttonBg: string;
    buttonHover: string;
    linkColor: string;
    linkHover: string;
  };
}

// Light theme
export const lightTheme: Theme = {
  colors: {
    background: '#ffffff',
    text: '#213547',
    primary: '#0070f3',
    secondary: '#ff0080',
    buttonBg: '#f9f9f9',
    buttonHover: '#646cff',
    linkColor: '#646cff',
    linkHover: '#747bff',
  },
};

// Dark theme
export const darkTheme: Theme = {
  colors: {
    background: '#121212',
    text: 'rgba(255, 255, 255, 0.87)',
    primary: '#0070f3',
    secondary: '#ff0080',
    buttonBg: '#1a1a1a',
    buttonHover: '#646cff',
    linkColor: '#646cff',
    linkHover: '#535bf2',
  },
};
