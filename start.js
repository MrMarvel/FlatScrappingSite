const express = require('express')
const app = express()
const port = 8414
const folder = '/home/sergey/FlatScrapping'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const serveIndex = require('serve-index');

app.use('/flat-scrapping', serveIndex(folder,
    option={'filter': (name, index, files, dir) => {
            return files[index].includes('.csv') || files[index].includes('.txt');
        }}));

app.get('/flat-scrapping/:filename', function(req, res) {
    res.type('text/plain')
    const options = {
        root:folder,
        headers:{'Content-Type': 'text/plain; charset=utf-8'}
    };
    res.download()
});