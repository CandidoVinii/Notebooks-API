const puppeteer = require('puppeteer');

const helperFunction = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops'
  );

  // Listo todos os dados vindo do site que tem a classe description, transformo em um array e filtro os nooteboks da lenovo
  const lenovoLaptops = await page.evaluate(() => {
    const laptops = document.querySelectorAll('.description');
    return Array.from(laptops)
      .filter((laptop) => laptop.innerText.includes('Lenovo'))
      .map((lap) => lap.innerText);
  });

  /* Como existe um padrao de como vem as informações eu inteiro sobre o array criado no função lenovooLaptops
  faço o split na string e atribuo ela a chave correspondente no json */
  const computersObject = {};
  lenovoLaptops.map((note, index) => {
    const splitStringInfo = note.split(', ');
    computersObject[index] = {
      id: `${index + 1}`,  
      model: splitStringInfo[0],
      screen: splitStringInfo[1],
      processor: splitStringInfo[2],
      memory: splitStringInfo[3],
      storage: splitStringInfo[4],
      os: splitStringInfo[5],
    };
  });

  //aqui eu transformo o objeto criado acima para um array de objetos
  const computersWithoutIndex = Object.values(computersObject);

  await browser.close();

  return computersWithoutIndex;
};

const getAllNotebooks = async () => {
    const result = await helperFunction();
    if(!result) return false;

    return result;
};

const getNotebookForId = async (id) => {
    const result = await helperFunction();
    const filtered = result.find(notebook => notebook.id === id);

    if(!filtered) return false;

    return filtered;
};

module.exports = { getAllNotebooks, getNotebookForId };
