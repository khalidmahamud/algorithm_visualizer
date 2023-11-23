export const Bar = ({ width, height, isSwapping, isSorted }) => {
    const barHeight = (height + 1) ** 1.4 + 20;

    const barColor = isSorted ? 'lightGreen' : isSwapping ? 'red' : '';

    return (
        <div className="flex flex-col gap-5 w-auto h-auto">
            <div className="bg-violet-500" style={{backgroundColor: `${barColor}`, width: `${width}px`, height: `${barHeight}px`}}></div>
        </div>
    );
};