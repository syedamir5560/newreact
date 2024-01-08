
import React, { useState } from 'react'
function Quiz() {


    const questions = [
        {
            questionText: "What is the capital of France?",
            answerOptions: [
                { answerText: "Berlin", isCorrect: false },
                { answerText: "moracco", isCorrect: false },
                { answerText: "Paris", isCorrect: true }

            ],
        },

        {
            questionText: "Which planet is known as the 'Red Planet'?",
            answerOptions: [
                { answerText: "earth", isCorrect: false },
                { answerText: "morsumacco", isCorrect: false },
                { answerText: "marse", isCorrect: true }

            ],
        },

       
        {
            questionText: "Who wrote 'Romeo and Juliet'?",
            answerOptions: [
                { answerText: "iqbal", isCorrect: false },
                { answerText: "ali", isCorrect: false },
                { answerText: "shakspeer", isCorrect: true }

            ],
        },
        {
            questionText: "Who Went to Moon First'?",
            answerOptions: [
                { answerText: "armstrong", isCorrect: true },
                { answerText: "niel nitin mukesh", isCorrect: false },
                { answerText: "kalpana", isCorrect: false }

            ],
        },
        {
            questionText: " where is taj mahal'?",
            answerOptions: [
                { answerText: "Delhi", isCorrect: false },
                { answerText: "Mumbai", isCorrect: false },
                { answerText: "Agra", isCorrect: true }

            ],
        },
        {
            questionText: "Who is father of electricity'?",
            answerOptions: [
                { answerText: "Eienstien", isCorrect: false },
                { answerText: "Nicola tesla", isCorrect: false },
                { answerText: "M. Faraday", isCorrect: true }

            ],
        },
    ];

    let [ques, setQues] = useState(0)
    let [showScore, setShowScore] = useState(false)
    let [score, setScore] = useState(0)

    let handleQ = (para) => {

        let nextQues = ques + 1;

        if (para === true) setScore(score + 1)

        if (nextQues < questions.length) {
            setQues(nextQues)
        }
        else {
            alert("Quize Over");
            setShowScore(true);
        }       
    }
    let x =()=>{
        setShowScore(0)
        setQues(0)
        setScore(0)
    }

    return (
        <>
            <div className='quesans'>
                <div className="pointsection">
                    <h2 className='score'>You Score <span>{score}</span> Points </h2>
                </div>

                <div className='quessection'>
                    <h3>Q {ques + 1}){questions[ques].questionText}</h3>
                </div>

                <div className='anssection'>
                    {
                        questions[ques].answerOptions.map((ele, index) => {
                            return <button key={index} onClick={() => handleQ(ele.isCorrect)}> {ele.answerText}
                            </button>
                        })
                    }
                </div>
                <button onClick={x} className='reset'> Reset Quiz </button>
            </div>

        </>
    )
}

export default Quiz;
