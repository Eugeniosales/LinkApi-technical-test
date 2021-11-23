const xml2js = require('xml2js');

const parseXml = async (json) => {
    const builder = new xml2js.Builder()
    const xmlData = []
  
    return new Promise (async resolve => {

        const parsedData = builder.buildObject(json);
        xmlData.push(encodeURI(parsedData));
      
      resolve(xmlData);
    })
};

module.exports = parseXml;