const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n');
        const hashtable = {};
        let students = -1;
        for (const line of lines) {
          if (line.trim() !== '') {
            const columns = line.split(',');
            const field = columns[3];
            const firstname = columns[0];
            if (students >= 0) {
              if (!Object.hasOwnProperty.call(hashtable, field)) {
                hashtable[field] = [];
              }
              hashtable[field] = [...hashtable[field], firstname];
            }
            students += 1;
          }
        }
        let output = `Number of students: ${students}\n`;
        for (const key in hashtable) {
          if (Object.hasOwnProperty.call(hashtable, key)) {
            output += `Number of students in ${key}: ${hashtable[key].length}. List: ${hashtable[key].join(', ')}\n`;
          }
        }
        resolve(output);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    }).catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port);

module.exports = app;
