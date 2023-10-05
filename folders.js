const fs = require('fs');

for (let i = 1; i <=3000; i++) {
    const folderName = `${i}`;
fs.mkdirSync(folderName);

fs.mkdirSync(`${folderName}/Обоснование количества`, { recursive: true });
fs.mkdirSync(`${folderName}/Обоснование стоимости`, { recursive: true });
}