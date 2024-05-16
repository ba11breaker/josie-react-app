"use client"
import {useEffect, useState, useContext, useRef, memo, useCallback, useMemo, createContext} from 'react';

const style = createContext({
    textColor: true,
    setTextColor: () => {},
});

const Aaa = () => {
    const [num,setNum] = useState(1);
    const [bNum, setBNum] = useState(1);

    const [textColor, setTextColor] = useState<boolean>(true);

    useEffect(() => {
        setInterval(() => {
            setNum(Math.random());
        }, 10000);
    }, []);

    const setVal = useCallback((num: number) => {
        setBNum(num)
    }, []);

    const numMemo = useMemo(() => {
        return num + bNum;
    }, [bNum]);

    return (
    <style.Provider value={{textColor, setTextColor}}>
        <div style={{ color: textColor ? 'black' : 'red'}}>
            <p>Aaa {num}</p>
            <Bbb count={numMemo} setBNum={setVal} />
        </div>
    </style.Provider>
    );
}

const Bbb = ({count, setBNum}: { count: number, setBNum: (val: number) => void;  }) =>  {

    const {textColor} = useContext(style);

    console.log('bbb render', count);
    return (
        <>
        <button onClick={() => setBNum(count+1)} style={{color: textColor}}>changeBbb</button>
        <h2 style={{color: textColor ? 'yellow' : 'red'}}>Bbb {count}</h2>
        <Ccc  />
        </>
    );
};

const Ccc= () => {
    const {textColor, setTextColor} = useContext(style);

    return (
        <>
        <h3 style={{color: textColor ? 'green' : 'blue'}}>Ccc</h3>
        <button style={{color: textColor ? 'green' : 'blue'}} onClick={() => {
            setTextColor(val => !val)
        }}>
            get Red</button>
        </>
    );
};


const MemoBbb = memo(Bbb);

export default Aaa;