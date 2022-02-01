const Crypto_API = "https://api.coincap.io/v2/assets";
const Currency_API = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";

const list = document.getElementById("lista");

const append = async (data) => {
  const usdPrice = await fetchCurrency();

  data.forEach((coin, index) => {
    if (index >= 10) return;
    const newItem = document.createElement('li');
    const price = parseFloat(coin.priceUsd);
    const inBrl = price*usdPrice;
    newItem.innerText = `${coin.id} (${coin.symbol}): BRL ${inBrl.toFixed(2)}`;
    newItem.setAttribute('class', 'list-item');
    list.appendChild(newItem);
  });
  // for (let index = 0; index < 10; index += 1) {
  //   const id = data[index].id;
  //   const symbol = data[index].symbol;
  //   const price = parseFloat(data[index].priceUsd).toFixed(2);
  //   const newItem = document.createElement("li");
  //   newItem.innerText = `${id} (${symbol}): USD ${price}`;
  //   list.appendChild(newItem);
  // }
};

const fetchCrypto = async () => {
  try {
    const response = await fetch(Crypto_API);
    const object = await response.json();
    const data = object.data;
    append(data);
  } catch (error) {
    console.log(error.message);
  }
};

const fetchCurrency = async () => {
  try {
    const response = await fetch(Currency_API);
    const object = await response.json();
    const usdPrice = object.usd.brl;
    return usdPrice;
  } catch (error) {
    console.log(error.message);
  }
}

fetchCrypto();
