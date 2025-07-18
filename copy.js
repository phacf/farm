import clipboard from 'clipboardy';
import fs from 'fs';

const code = fs.readFileSync('./build/game.js', 'utf-8');
clipboard.writeSync(code);
console.log('Código copiado para área de transferência!');
