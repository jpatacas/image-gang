const data = [ {
    id: 1, 
    question: "Who is the author of this painting?", 
    answers: [
        {id: 1, ans: "Monet", correct: false}, // correct true || false
        {id: 2, ans: "Picasso", correct: true}, 
        {id: 3, ans: "Da Vinci", correct: false}
    ]
},
{
    id: 2,
    question: "Is it raining?",
    answers:       [
        {id: 1, ans: "Yes", correct: false},
        {id: 2, ans: "no", correct: true}, 
        {id: 3, ans: "maybe", correct: false}
    ]
},
{
    id: 3,
    question: "What year is it?",
    answers:       [
        {id: 1, ans: "2021", correct: false},
        {id: 2, ans: "2001", correct: false}, 
        {id: 3, ans: "2023", correct: true}
    ]
}
]

module.exports = data
