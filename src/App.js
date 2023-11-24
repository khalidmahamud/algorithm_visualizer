import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { BubbleSort } from "./components/BubbleSort";


function App() {
  const [data, setData] = useState([]);

  const n = Math.round((window.innerWidth) / 10);

  useEffect(() => {
    generateArray();
  }, []);


  const generateArray = () => {
    if (n <= 0) {
      return [];
    }

    const array = Array.from({ length: n }, (_, index) => index + 1);

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setData(array);
  }

  return (
    <>
        <Header />
        <BubbleSort data={data} setData={setData} generateArray={generateArray} />
    </>
  );
}

export default App;
