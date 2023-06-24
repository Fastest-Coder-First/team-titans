'use strict';

const setTheme = (theme) => {
  const root = document.querySelector(':root');
  root.style.setProperty('--background', theme.background);
  root.style.setProperty('--color', theme.color);
  root.style.setProperty('--primary-color', theme.primaryColor);
  root.style.setProperty('--glass-color', theme.glassColor);
};
