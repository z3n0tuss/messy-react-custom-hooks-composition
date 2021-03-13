export const calculateScore = (questions) => {
    return questions.reduce((total, currentQuestion) => {
        if (currentQuestion.answer === currentQuestion.selectedOption) {
            return total + 1
        }

        return total
    }, 0)
}

export const findAndSetSelectedOption = (question, questionId, optionId) => {
    if (question.id !== questionId) {
        return question
    }

    return { ...question, selectedOption: optionId }
}

export const combineQuestionAndAnswers = (questions, answers) => {
    return questions.map(question => ({
        ...question,
        selectedOption: question.options[0].id,
        answer: answers.find(answer => answer.id === question.id).answer,
    }));
}