import React from 'react'
import useHTTPWithTransformer from '../../../utils/custom-hooks/useHTTPWithTransformer'
import { calculateScore, combineQuestionAndAnswers, findAndSetSelectedOption } from './logic'

const useQuiz = () => {
    const questionsData = useHTTPWithTransformer(['questions', 'answers'], combineQuestionAndAnswers);
    const [questions, setQuestions] = React.useState([])
    const [score, setScore] = React.useState(0)

    React.useEffect(() => {
        if (questionsData !== null) {
            setQuestions(questionsData);
        }
    }, [questionsData]);

    const setSelectedOption = (questionId, optionId) => {
        setQuestions(questions.map((question) => findAndSetSelectedOption(question, questionId, optionId)))
    }

    const finishQuiz = () => {
        setScore(calculateScore(questions))
    }

    return {
        finishQuiz,
        score,
        questions,
        setSelectedOption,
    }
}

export default useQuiz