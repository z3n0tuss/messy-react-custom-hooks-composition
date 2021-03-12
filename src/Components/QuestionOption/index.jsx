import React from 'react'

const QuestionOption = ({ children, onClick, currentQuestion, optionId }) => {
    const selected = currentQuestion.selectedOption === optionId

    const setSelected = () => {
        onClick(currentQuestion.id, optionId)
    }

    return (
        <div onClick={setSelected} style={{ color: selected ? 'green' : 'black' }}>
            {children}
        </div>
    )
}

export default QuestionOption