import "./Trivia.css";
import React, { useEffect, useState } from 'react';
import useSound from "use-sound";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";
import Starting from "../assets/Starting.mp3";
export default function Trivia({ data, settimeOut, questionNumber, setQuestionNUmber }) {
  const [question, setquestion] = useState(null);
  const [selctedanswer, setSelectedAnswer] = useState(null);
  const [classname, setclassname] = useState(null);
  const [letsPlay] = useSound(Starting,{volume:0.3});
  const [correctAns] = useSound(correct,{volume:0.7});
  const [wrongAns] = useSound(wrong,{volume:0.4});
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  useEffect(() => {
    setquestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  useEffect(() => {
    if (questionNumber > 15) {
      return settimeOut(true);
    }
  })
  useEffect(() => {
    letsPlay();
  }, [letsPlay]);
  const handleClick = (ans) => {
    setSelectedAnswer(ans);
    setclassname("answer active");
    delay(1500, () => setclassname(ans.correct ? "answer correct" : "answer wrong"));
    delay(2000, () => {
      if (ans.correct) {
        correctAns();
        delay(1000, () => {
          setQuestionNUmber(prev => prev + 1);
          setSelectedAnswer(null);
        })

      }
      else {
        wrongAns();
        delay(1000, () => {
          settimeOut(true);
        })
      }
    })
  }
  return (
    <div className='trivia'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answer.map(ans => {
          return <div className={selctedanswer === ans ? classname : "answer"} onClick={() => handleClick(ans)}>{ans.text}</div>
        })}
      </div>
    </div>
  )
}
