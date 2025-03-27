const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Route to serve the bootcamps JSON data
app.get('/bootcamps', (req, res) => {
  const filePath = path.join(__dirname, 'bootcamps.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
