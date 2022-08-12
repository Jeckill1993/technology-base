import React, {useState} from 'react';

const EventsExample = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {      // [note3]
        setValue(e.target.value);
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {         // [note3]
        console.log(value);
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {               // [note3]
        console.log('drag');
    }
    const dragWidthPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('dropped');
    }

    return (
        <div>
            <div draggable onDrag={dragHandler}>
                <input type={'text'} value={value} onChange={changeHandler}/>
                <button type={'button'} onClick={clickHandler}>Click</button>
            </div>
            <div
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragWidthPreventHandler}
            >
                <input type={'text'} value={value} onChange={changeHandler}/>
                <button type={'button'} onClick={clickHandler}>Click</button>
            </div>
        </div>
    );
};

export default EventsExample;