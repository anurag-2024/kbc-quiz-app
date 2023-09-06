import { useEffect, useState } from 'react';
export default function Timer({ settimeOut, questionNumber }) {
    const [timer, settimer] = useState(30);
    useEffect(() => {
        var interval = null;
        if (timer === 0) { return settimeOut(true) }
        else {
            interval = setInterval(() => {
                settimer((prev) => prev - 1);
            }, 1000);
        }
        return ()=>{
            if(interval){
                clearInterval(interval);
            }
        };
    },[timer,settimeOut]);

   useEffect(()=>{
    settimer(30);
   },[questionNumber]);

    return timer;
}


