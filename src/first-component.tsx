"use client"
import { time } from "console";
import { useEffect, useState } from "react";

const FirstComponent = () => {
  const [time, setTimes] = useState(0);
  const [flag, setFlag] = useState(true);

  const list = [1, 2, 3, 4, 5, 6];

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <p>{time}</p>
    <button onClick={() => setFlag(!flag)}>{flag ? 'Red' : 'Yellow'}</button>
    <button onClick={() => setTimes(time+1)}>+1</button>
    <button onClick={() => setTimes(time-1)}>-1</button>
    {flag && <Flag />}
    {list.map(val => (<p>{val*2}</p>))}
    </div>
  )
}

const Flag = () => {

  const [val, setVal] = useState(0);
  const [val1, setVal1] = useState(0);

  useEffect(() => {
    // mount
    console.log('mount');
    let timer = setInterval(() => setVal(val => val+1), 1000);
    let timer1 = setInterval(() => setVal1(val1 => val1 + 1), 500);
    return () => {
      // unmount
      console.log('unmount');
      clearInterval(timer);                                                     
      clearInterval(timer1);
    };
  }, []);

  useEffect(() => {
    // update
    console.log(val, val1);
  }, [val, val1]);
  
  return (
    <div id="flag" style={{ color: 'red'}}>This is Red!!!! {val}</div>
  );
}

// mount -> update -> unmount

export default FirstComponent;