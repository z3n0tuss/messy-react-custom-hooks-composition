import React from 'react'
import QuestionOption from '../QuestionOption'
import Score from '../Score'

import useQuiz from './useQuiz'
import './index.css'

const Quiz = () => {
    const { questions, score, finishQuiz, setAnswer } = useQuiz()

    return (
        <div>
            <h1>Questions</h1>
            {score && (
                <Score>
                    {score}
                </Score>
            )}
            {questions.map((question) => (
                <div key={question.id}>
                    <h2>{question.text}</h2>
                    {
                        question.options.map(option => (
                            <QuestionOption
                                onClick={setAnswer}
                                currentQuestion={question}
                                optionId={option.id}
                                key={option.id}
                            >
                                {option.text}
                            </QuestionOption>
                        ))
                    }
                </div>
            ))}
            <button onClick={finishQuiz}>Submit</button>
        </div>
    )
}

export default Quiz