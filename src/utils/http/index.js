const answers = [
    {
        id: "1",
        answer: "1"
    },
    {
        id: "2",
        answer: "3",
    },
    {
        id: "3",
        answer: "1",
    },
    {
        id: "4",
        answer: "2",
    },
    {
        id: "5",
        answer: "2",
    },
    {
        id: "6",
        answer: "1",
    },
    {
        id: "7",
        answer: "3",
    }
]

const questions = [
    {
        id: "1",
        text: 'What is the current population of the Earth?',
        options: [
            {
                id: "1",
                text: '7.674 billion'
            },
            {
                id: "2",
                text: '7.38 billion',
            },
            {
                id: "3",
                text: '7.153 billion'
            }
        ]
    },
    {
        id: "2",
        text: 'When was George Washington born?',
        options: [
            {
                id: "1",
                text: '1734'
            },
            {
                id: "2",
                text: '1729'
            },
            {
                id: "3",
                text: '1732'
            }
        ]
    },
    {
        id: "3",
        text: 'Who was the 1st Prime Minister of the UK?',
        options: [
            {
                id: "1",
                text: 'Robert Walpole'
            },
            {
                id: "2",
                text: 'Charles Boothe'
            },
            {
                id: "3",
                text: 'Keir Hardie'
            }
        ]
    },
    {
        id: "4",
        text: 'What\'s the third largest planet in the solar system (mass)?',
        options: [
            {
                id: "1",
                text: 'Uranus'
            },
            {
                id: "2",
                text: 'Neptune'
            },
            {
                id: "3",
                text: 'Mars'
            }
        ]
    },
    {
        id: "5",
        text: 'What is definitively and unarguably the best programming language in the world?',
        options: [
            {
                id: "1",
                text: 'JavaScript'
            },
            {
                id: "2",
                text: 'Rust'
            },
            {
                id: "3",
                text: 'C++'
            }
        ]
    },
    {
        id: "6",
        text: 'In which country will you find Alberta?',
        options: [
            {
                id: "1",
                text: 'Canada'
            },
            {
                id: "2",
                text: 'USA'
            },
            {
                id: "3",
                text: 'Japan'
            }
        ]
    },
    {
        id: "7",
        text: 'Where is the River Thames?',
        options: [
            {
                id: "1",
                text: 'Egypt'
            },
            {
                id: "2",
                text: 'Brazil'
            },
            {
                id: "3",
                text: 'London'
            }
        ]
    }
]

export async function get(url) {
    if (url === 'questions') {
        return Promise.resolve({
            data: questions.sort(() => .5 - Math.random()).slice(0, 3)
        })
    }

    if (url === 'answers') {
        return Promise.resolve({
            data: answers
        })
    }
};