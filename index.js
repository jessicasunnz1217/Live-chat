import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
console.log(dirname);

app.use(express.stctic(path.join(dirname, 'public')));

app.use(express.static('public'));

app.get('/chat', (req, res) => {
    res.send('welcome');
});

app.get('/', (req, res) => {
    res.send('Welcome home');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});