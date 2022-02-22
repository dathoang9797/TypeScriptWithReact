import React, { useState, useRef, useEffect } from 'react'

const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const interValRef = useRef<number | null>(null);
    console.log(interValRef.current);

    const stopTimer = () => {
        interValRef.current && window.clearInterval(interValRef.current);
    }

    useEffect(() => {
        // console.log(timer); //Always 0
        interValRef.current = window.setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
            // console.log('timer: ' + timer); //Always 0

        }, 1000)
        return () => {
            console.log('clean up');
            stopTimer();
        }
    }, [])
    console.log('Render');

    return (
        <div>
            HookTimer - {timer} -
            <button onClick={() => { stopTimer() }}>Stop Timer</button>
        </div>
    )
}

export default MutableRef