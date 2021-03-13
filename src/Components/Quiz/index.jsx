import React from 'react'
import { get } from '../../utils'

import './index.css'

const Quiz = () => {
    const [questions, setQuestions] = React.useState([])
    const [score, setScore] = React.useState(null)

    React.useEffect(() => {
        (async function() {
            const randomQuestions = await get('questions')
            const allAnswers = await get('answers')

            const _questions = randomQuestions.data.map(question => ({
                ...question,
                selectedOption: question.options[0].id,
                answer: allAnswers.data.find(answer => answer.id === question.id).answer
            }))

            setQuestions(_questions)
        })()
    }, []);

    const findAndSetSelectedOption = (question, questionId, optionId) => {
        if (question.id !== questionId) {
            return question
        }

        return { ...question, selectedOption: optionId }
    }

    const setAnswer = (questionId, optionId) => {
        setQuestions(questions.map((question) => findAndSetSelectedOption(question, questionId, optionId)))
    }

    const calculateScore = () => {
        return questions.reduce((total, currentQuestion) => {
            if (currentQuestion.answer.toString() === currentQuestion.selectedOption.toString()) {
                return total + 1
            }

            return total
        }, 0)
    }

    const submitAnswers = () => {
        setScore(calculateScore())
    }

    return (
        <div>
            <h1>Questions</h1>
            {score && (
                <div className="score">
                    <p>Score: {score}</p>
                </div>
            )}
            {questions.map((question) => (
                <div key={question.id}>
                    <h2>{question.text}</h2>
                    {
                        question.options.map(option => {
                            const selected = question.selectedOption === option.id

                            return (
                                <div
                                    onClick={() => setAnswer(question.id, option.id)}
                                    style={{ color: selected ? 'green' : 'black' }}
                                >
                                    {option.text}
                                </div>
                            )

                        })
                    }
                </div>
            ))}
            <br />
            <br />
            <button onClick={submitAnswers}>Submit</button>
        </div>
    )
}

export default Quiz