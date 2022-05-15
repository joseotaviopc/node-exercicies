import fs from 'fs';
import path from 'path';
import os from 'os';


const [, __filename] = import.meta.url.split('C:/');
console.log(__filename);
const __dirname = path.join(__filename, '..');
console.log(__dirname);
const diretorioACriar = path.join(__dirname, 'teste/teste1/teste2/main.js');

// await fs.promises.mkdir(diretorioACriar, { recursive: true});

console.dir(os);
// console.log(os.freemem);
// console.log(os.userInfo);
// console.log(os.version);