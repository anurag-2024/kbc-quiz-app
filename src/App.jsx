import "./App.css";
import React, { useEffect, useState } from "react";
import Trivia from "./components/Trivia";
import data from "./data";
import Timer from "./components/Timer";
import Start from "./components/Start";
function App() {
    const [username, setusername] = useState(null);
    const [questionNumber, setQuestionNUmber] = useState(1);
    const [timeOut, settimeOut] = useState(false);
    const [earned, setearned] = useState("$ 0");
    const moneyPyramid = [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
    ].reverse();

    useEffect(() => {
        questionNumber > 1 && setearned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
    }, [moneyPyramid, questionNumber])
    return (
        <div className="app">
            {username ? (<><div className="main">
                {timeOut ? (<h1 className="endText">You have earned :{earned} </h1>) : (<><div className="top">
                    <div className="timer"><Timer settimeOut={settimeOut} questionNumber={questionNumber} /></div>
                </div>
                    <div className="bottom"><Trivia data={data} settimeOut={settimeOut} questionNumber={questionNumber} setQuestionNUmber={setQuestionNUmber} /></div>
                </>)}
            </div>
                <div className="pyramid">
                    <ul className="moneyList">
                        {moneyPyramid.map(money => {
                            return <li className={questionNumber === money.id ? "moneyListItem active" : "moneyListItem"} >
                                <span className="moneyListItemNumber">{money.id}</span>
                                <span className="moneyListItemAmount">{money.amount}</span>
                            </li>
                        })}

                    </ul>
                </div></>) : (<Start setusername={setusername} />)}

        </div>
    );
}
export default App;

