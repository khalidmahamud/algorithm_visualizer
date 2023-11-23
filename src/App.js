import { useState } from "react";
import { Header } from "./components/Header";
import { BubbleSort } from "./components/BubbleSort";


function App() {
  const [data, setData] = useState([43,5,28,18,31,22,10,13,36,38,46,3,12,21,42,30,17,16,49,14,8,35,9,23,48,20,2,11,32,27,26,19,44,41,4,37,25,34,6,7,45,24,47,50,33,1,29,39,15,40]);


  const generateArray = (n) => {
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
