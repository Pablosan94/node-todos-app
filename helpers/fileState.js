const fs = require('fs');

const file = './db/data.json';

const storeData = (data) => {
  fs.writeFileSync(file, data);
};

const retrieveData = () => {
  if (!fs.existsSync(file)) {
    return null;
  }

  const data = fs.readFileSync(file, { encoding: 'utf-8' });
  return JSON.parse(data);
};

module.exports = {
  storeData,
  retrieveData,
};
