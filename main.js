// main.js

import { createMenu } from './src/menu.js';  // Adjusted the path to menu.js

createMenu();

const pages = {
  '/index.html': async () => {
    console.log('Home Page Loaded');
  },
  '/page1.html': async () => {
    const module = await import('./src/page1.js');  // Path to page1.js
    module.default();
  },
  '/page2.html': async () => {
    const module = await import('./src/page2.js');  // Path to page2.js
    module.default();
  },
  // Add more pages if needed
};

const path = window.location.pathname;
//console.log (path);
if (pages[path]) {
  pages[path]();
} else {
  console.error('No script found for this page');
}