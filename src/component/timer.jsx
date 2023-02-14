import { useEffect, useState } from "react"
import "./timer.css"
const Timer = () => {
    const [timecount, setTimeCount] = useState(0);

    const [initialValue, setInitialValue] = useState(0)

    let start;
    let newcount;
    const enterClicked = (event) => {
        // console.log(event.key)
        newcount = timecount
        if (event.key == "Enter") {
            start = setInterval(() => {
                if (newcount <= 0) {
                    clearInterval(start)
                }
                // console.log(newcount);
                newcount -= 1;
                setTimeCount(newcount + 1);
            }, 1000)
        }
    }


    useEffect(() => {
        clearInterval(start);
        newcount = initialValue;
        setTimeCount(initialValue)
    }, [initialValue])

    return (
        <>
            <article>
                {timecount > 0 ? <div className="timecount">{timecount}</div> : <div className="timecount">00</div>}
            </article>
            <section onKeyDown={enterClicked}>
                <label htmlFor="timecount">Time Count</label>
                <input type="number" id="timecount"
                    onChange={(e) => {
                        setTimeCount(Math.floor(e.target.value));
                        setInitialValue((e.target.value));
                    }} value={Math.floor(initialValue)} />
            </section >
            <article>
                <h3>Hit Enter to Start Timer</h3>
            </article>
        </>
    )
}
export default Timer;