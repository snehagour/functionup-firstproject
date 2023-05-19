 import React, { useState } from 'react';
import QuizeData from '../DATA/QuizeData';
import Quizeresult from './Quizeresult';

function Quize() {
    const [currentQues, setCurrentQues] = useState(0);
    const [Score, setScore] = useState(0)
    const [clicked, setClicked] = useState(0)
    const [ShowResult, setShowResult] = useState(false)

    const changeQues = () => {
        updateScore();
        if (currentQues < QuizeData.length - 1) {
            setCurrentQues(currentQues + 1);
            setClicked(0);

        } else {
            setShowResult(true)
        }

    }
    const updateScore = () => {
        if (clicked === QuizeData[currentQues].answer) {
            setScore(Score+1);
        }

    }
    const resultall = () => {
        setShowResult(false)
        setCurrentQues(0)
        setClicked(0);
        setScore(0)
    }
    return (
        <div>
            <p className='heading-txt'>QUIZE APP</p>
            <div className='container'>
                {ShowResult ? (
                    <Quizeresult Score={Score} totalScore={QuizeData.length} TryAgain={resultall} />
                ) : (
                    <>
                        <div className="question">
                            <span id='question-num'>{currentQues+1}.</span>
                            <span id='question-txt'>{QuizeData[currentQues].question}</span>
                            {/* console.log({QuizeData[currentQues].question}) */}

                        </div>

                        <div className="option-container">
                            {QuizeData[currentQues].options.map((option, i) => {
                                return (
                                    <button className={`option-btn ${clicked ===i + 1 ? "checked" : null
                                        }`}
                                        key={i}
                                        onClick={() => setClicked(i + 1)}>
                                        {option}
                                    </button>
                                   )
                            })}

                        </div>
                        <input type="button" value="Next" id='next-button' onClick={changeQues} />
                    </>)}

            </div>
        </div>
    )
}
export default Quize;
