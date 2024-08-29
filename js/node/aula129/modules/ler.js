import { promises as fs } from 'fs';

export default (caminho) => fs.readFile(caminho, 'utf8' /*padrão*/);