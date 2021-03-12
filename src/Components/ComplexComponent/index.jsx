import React from 'react'
import { get } from '../../utils'
import QuestionOption from '../QuestionOption'

import './index.css'

const Quiz = () => {
    const [questions, setQuestions] = React.useState([])
    const [score, setScore] = React.useState(null)

    React.useEffect(() => {
        const randomQuestions = get('questions').data
        const allAnswers = get('answers').data

        // combine questions and answers
        const _questions = randomQuestions.map(question => ({
            ...question,
            selectedOption: question.options[0].id,
            answer: allAnswers.find(answer => answer.id === question.id).answer
        }))

        setQuestions(_questions)
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
            <br />
            <br />
            <button onClick={submitAnswers}>Submit</button>
        </div>
    )
}

export default Quiz