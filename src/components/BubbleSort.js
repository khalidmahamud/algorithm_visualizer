import { useState, useEffect } from 'react';
import { Bar } from "../components/Bar";

export const BubbleSort = ({ data, generateArray }) => {
    const [sortedData, setSortedData] = useState([...data]);
    const [currIdx1, setCurrIdx1] = useState(-1);
    const [currIdx2, setCurrIdx2] = useState(-1);
    const [lastSorted, setLastSorted] = useState(Number.MAX_SAFE_INTEGER);
    
    useEffect(() => {
        setSortedData([...data]);
        setCurrIdx1(-1);
        setCurrIdx2(-2);
        setLastSorted(Number.MAX_SAFE_INTEGER);
    }, [generateArray]);


    const bubbleSort = async () => {
        const newHeights = [...sortedData];
        let swap = false;

        for (let i = 0; i < newHeights.length - 1; i++) {
            for (let j = 0; j < newHeights.length - i - 1; j++) {
                setCurrIdx1(j);
                setCurrIdx2(j + 1);
                if (newHeights[j] > newHeights[j + 1]) {
                    [newHeights[j], newHeights[j + 1]] = [newHeights[j + 1], newHeights[j]];

                    setSortedData([...newHeights]);

                    swap = true;
                    await new Promise(resolve => setTimeout(resolve, 10));
                }
            }
            

            setCurrIdx1(null);
            setCurrIdx2(null);

            if (!swap) {
                break;
            }

            setLastSorted(newHeights[newHeights.length - i - 1]);
        }
    };


    return (
        <main className='p-5 mt-16 flex flex-col items-center justify-center'>
            <div className="h-full flex flex-col items-center justify-center gap-10">
                <div className='flex gap-3'>
                    <button onClick={() => generateArray()} className="bg-teal-300 px-3 py-2 rounded-md text-blue-900 font-mono">
                        Generate New Array
                    </button>
                    <button onClick={() => bubbleSort()} className="bg-blue-800 px-3 py-2 rounded-md text-slate-200 font-mono">
                        Bubble Sort
                    </button>
                </div>

                <div className="flex items-center justify-center gap-1">
                    <div className="flex items-end justify-center gap-1">
                        {sortedData.map((height, index) => (
                            <Bar
                                key={index}
                                height={height}
                                isSwapping={currIdx1 === index || currIdx2 === index}
                                isSorted={currIdx1 === null || currIdx1 === null}
                                isInPosition={height >= lastSorted}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};
