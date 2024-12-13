import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
  };

  const convert = () => {
    const conversionRate = currencyInfo[to];
    if (conversionRate) {
      setConvertedAmount(amount * conversionRate);
    } else {
      alert("Conversion rate not available");
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://th.bing.com/th/id/R.053b3e1b50d5c37a373357cf391671e0?rik=jmw%2fIaII3zFLUQ&riu=http%3a%2f%2fgazettereview.com%2fwp-content%2fuploads%2f2016%2f07%2fcurrency.jpg&ehk=XclS4AwBKzxsdGQrr4eL80dJ6IMrru0T2u6qG5BhERo%3d&risl=&pid=ImgRaw&r=0)",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={setAmount}
              onCurrencyChange={setFrom}
              currencyOption={options}
              selectCurrency={from}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            >
              Swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              onCurrencyChange={setTo}
              currencyOption={options}
              selectCurrency={to}
              amountDisable={true}
            />
          </div>
          <div className="w-full text-center mb-4">
              <p className="text-lg font-bold">
                Converted Amount: {convertedAmount.toFixed(2)} {to.toUpperCase()}
              </p>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
