const data = [ {
    id: 1, 
    question: "Who is the author of this painting?", 
    answers: [
        {id: 1, ans: "Monet"}, // correct true || false
        {id: 2, ans: "Picasso"}, 
        {id: 3, ans: "Da Vinci"}
    ]
    , 
    correct_ans_id: 2
},
{
    id: 2,
    question: "Is it raining?",
    answers:       [
        {id: 1, ans: "Yes"},
        {id: 2, ans: "no"}, 
        {id: 3, ans: "maybe"}
    ],
    correct_ans_id: 1
}
]

module.exports = data
