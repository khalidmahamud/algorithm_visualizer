export const Bar = ({ height, isSwapping, isSorted, isInPosition }) => {
    const barHeight = window.innerHeight < 700 ? (height ** 1.3) + 20 : (height ** 1.7) + 20;

    const barColor = isSorted ? 'lightGreen' : isInPosition ? 'mediumPurple' : isSwapping ? 'red' : '';

    return (
        <div className="flex flex-col gap-5 w-auto h-auto">
            <div className="bg-slate-300" style={{backgroundColor: `${barColor}`, width: '5px', height: `${barHeight}px`}}></div>
        </div>
    );
};