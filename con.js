const headers = ['name', 'age', 'city'];
const rows = [
  ['Alice', 30, 'New York'],
  ['Bob', 25, 'Los Angeles'],
  ['Charlie', 35, 'Chicago']
];

const jsonArray = [];

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const json = {};

  for (let j = 0; j < headers.length; j++) {
    json[headers[j]] = row[j];
  }

  jsonArray.push(json);
}

console.log(jsonArray);
