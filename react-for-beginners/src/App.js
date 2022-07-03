import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [cost, setCost] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => {
    setCost(Number(event.target.value));
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <select onChange={onChange}>
            {coins.map((coin, index) => (
              <option
                key={`${coin.name} - ${index}`}
                value={coin.quotes.USD.price}
              >
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <form onSubmit={onSubmit}>
            <input
              onChange={(event) => setMoney(Number(event.target.value))}
              value={money}
              type="number"
              placeholder="Enter your USD"
            />
          </form>
        </>
      )}
      <hr />
      {cost !== 0 && money !== 0 ? <strong>{money / cost}</strong> : null}
    </div>
  );
}

export default App;
