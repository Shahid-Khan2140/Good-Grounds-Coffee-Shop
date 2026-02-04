const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'ui');

fs.readdir(dir, (err, files) => {
  if (err) {
    console.error("Could not list directory", err);
    process.exit(1);
  }

  files.forEach(file => {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts')) return;

    const filePath = path.join(dir, file);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading ${file}`, err);
        return;
      }

      // Regex to match imports with versions like "package@1.2.3"
      // It captures the package name in group 1 and replaces the whole string with just the package name
      const newData = data.replace(/from "([^"]+)@\d+\.\d+\.\d+"/g, 'from "$1"');

      if (newData !== data) {
        fs.writeFile(filePath, newData, 'utf8', (err) => {
          if (err) {
            console.error(`Error writing ${file}`, err);
          } else {
            console.log(`Fixed imports in ${file}`);
          }
        });
      }
    });
  });
});
