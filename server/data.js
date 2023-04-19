//  Question 1
const data = [ {
    id: 1, 
    image: "/client/assets/VanGogh.jpeg",
    question: "What painting style was used to create this piece?", 
    answers: [
        {id: 1, ans: "Watercolour"},
        {id: 2, ans: "Pastel"}, 
        {id: 3, ans: "Oil"},
        {id: 3, ans: "Acrylic"}
    ]
    , 
    correct_ans_id: 3
},
{ // Question 2
    id: 2,
    image: "/client/assets/Banksy.jpeg", 
    question: "What is the real name of the artist who painted this?", 
    answers: [
        {id: 1, ans: "James Turrell"},
        {id: 2, ans: "Robin Gunningham"}, 
        {id: 3, ans: "Nick Walker"},
        {id: 3, ans: "Benjamin Eine"}
    ]
    , 
    correct_ans_id: 2
},
{ // Question 3
    id: 3, 
    image: "/client/assets/SalvatorMundi.jpeg",
    question: "How much was this record selling piece Salvator Mundi sold for?", 
    answers: [
        {id: 1, ans: "$325.0 million"},
        {id: 2, ans: "$100.8 million"}, 
        {id: 3, ans: "$150.1 million"},
        {id: 4, ans: "$450.3 million"}
    ]
    , 
    correct_ans_id: 4
},
{ // Question 4
    id: 4, 
    image: "/client/assets/JohannesVermeer.jpeg",
    question: "Who was responsible for this piece?", 
    answers: [
        {id: 1, ans: "Sandro Botticelli"},
        {id: 2, ans: "Johannes Vermeer"}, 
        {id: 3, ans: "Michelangelo"},
        {id: 4, ans: "El Greco"}
    ]
    , 
    correct_ans_id: 2
},
{ // Question 5
    id: 5, 
    image: "/client/assets/SandroBotticelli.jpeg",
    question: "What year was this piece created in?", 
    answers: [
        {id: 1, ans: "1567"},
        {id: 2, ans: "1498"}, 
        {id: 3, ans: "1532"},
        {id: 4, ans: "1486"}
    ]
    , 
    correct_ans_id: 4
},
{ // Question 6
    id: 6, 
    image: "/client/assets/ElGreco.jpeg",
    question: "Who drew this artwork?", 
    answers: [
        {id: 1, ans: "El Greco"},
        {id: 2, ans: "Picasso"}, 
        {id: 3, ans: "Da Vinci"},
        {id: 4, ans: "Monet"}
    ]
    , 
    correct_ans_id: 1
},
{ // Question 7
    id: 7, 
    image: "/client/assets/BattleofAlexander.jpeg",
    question: "What famous historical battle does this piece of artwork depict?", 
    answers: [
        {id: 1, ans: "The Battle of San Romano"},
        {id: 2, ans: " The Surrender of Breda"}, 
        {id: 3, ans: "The Battle of Alexander"},
        {id: 4, ans: "The Death of Major Peirson"}
    ]
    , 
    correct_ans_id: 3
},
{ // Question 8
    id: 8, 
    image: "/client/assets/Michelangelo.jpeg",
    question: "Which Italian artist is responsible for The Creation of Adam", 
    answers: [
        {id: 1, ans: "Giovanni Battista Piranesi"},
        {id: 2, ans: "Michelangelo"}, 
        {id: 3, ans: "Masolino da Panicale"},
        {id: 4, ans: "Alessandro Allori"}
    ]
    , 
    correct_ans_id: 2
},
{ // Question 9
    id: 9, 
    image: "/client/assets/Kandinsky.jpeg",
    question: "Which artist specialised in abstract/expressionism artwork?", 
    answers: [
        {id: 1, ans: "Frida Kahlo"},
        {id: 2, ans: "Wassily Kandinsky"}, 
        {id: 3, ans: "Rembrandt"},
        {id: 4, ans: "Pablo Picasso"}
    ]
    , 
    correct_ans_id: 2
},
{ // Question 10
    id: 10, 
    image: "/client/assets/Basquiat.jpeg",
    question: "Which artist rose to fame in the 1980s?", 
    answers: [
        {id: 1, ans: "Eric Fischl"},
        {id: 2, ans: "Julian Schnabel"}, 
        {id: 3, ans: "David Salle"},
        {id: 4, ans: "Jean-Michel Basquiat"}
    ]
    , 
    correct_ans_id: 4
}
]

module.exports = data
