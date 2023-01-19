const puppeteer = require('puppeteer');

const helperFunction = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops'
  );

  // Listo todos os dados vindo do site que tem a classe description, transformo em um array e filtro os nooteboks da lenovo
  const lenovoLaptops = await page.evaluate(() => {
    const laptops = Array.from(document.querySelectorAll('.thumbnail'))
      .map(laptop => {
        const description = laptop.querySelector('.description').innerText;
        const price = laptop.querySelector('.price').innerText;
        return { description, price } })
      .filter(laptop => laptop.description.includes('Lenovo'));

    return laptops;
  });

  /* Como existe um padrao de como vem as informações eu inteiro sobre o array criado no função lenovooLaptops
  faço o split na string e atribuo ela a chave correspondente no json */
  const computersObject = {};
  lenovoLaptops.map((note, index) => {
    const splitStringInfo = note.description.split(', ');
    if (splitStringInfo.length === 6) {
      computersObject[index] = {
        id: `${index + 1}`,  
        model: splitStringInfo[0],
        screen: splitStringInfo[1],
        processor: splitStringInfo[2],
        memory: splitStringInfo[3],
        storage: splitStringInfo[4],
        os: splitStringInfo[5],
        price: note.price
      };
    } else if (splitStringInfo.length === 8) {
      computersObject[index] = {
        id: `${index + 1}`,  
        model: splitStringInfo[0],
        color: splitStringInfo[1],
        screen: splitStringInfo[2],
        processor: splitStringInfo[3],
        memory: splitStringInfo[4],
        storage: splitStringInfo[5],
        video_card: splitStringInfo[6],
        os: splitStringInfo[7],
        price: note.price
      };
    } else if (splitStringInfo.length === 7) {
      computersObject[index] = {
        id: `${index + 1}`,  
        model: splitStringInfo[0],
        screen: splitStringInfo[1],
        processor: splitStringInfo[2],
        memory: splitStringInfo[3],
        storage: splitStringInfo[4],
        os: splitStringInfo[6],
        price: note.price
      };
    }
  });

  //aqui eu transformo o objeto criado acima para um array de objetos
  const computersWithoutIndex = Object.values(computersObject);

  await browser.close();

  const orderedPrices = computersWithoutIndex.sort((a, b) => {
    // Converte o preço de string para float antes de comparar
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    // Compara os preços e retorna -1 se A < B, 0 se A = B e 1 se A > B
    if (priceA < priceB) return -1;
    if (priceA > priceB) return 1;
    return 0;
  });
  
  return orderedPrices;
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
