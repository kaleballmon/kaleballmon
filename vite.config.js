import { resolve } from 'path';
import fs from 'fs';


function getHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  const htmlFiles = {};

  files.forEach(file => {
    if (file.endsWith('.html')) {
      const name = file.replace('.html', '');
      htmlFiles[name] = resolve(dir, file);
    }
  });

  return htmlFiles;
}

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...getHtmlFiles(__dirname + "/notebook"),
      }
    }
  }
};
