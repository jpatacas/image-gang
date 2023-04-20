//  Question 1
const data = [ {
    id: 1,
    image: "/client/assets/VanGogh.jpeg",
    question: "What painting style was used to create this piece?",
    answers: [
        {id: 1, ans: "Watercolour", correct: false },
        {id: 2, ans: "Pastel", correct: false },
        {id: 3, ans: "Oil", correct: true},
        {id: 4, ans: "Acrylic", correct: false }
    ]
},
{ // Question 2
    id: 2,
    image: "/client/assets/Banksy.jpeg",
    question: "What is the real name of the artist who painted this?",
    answers: [
        {id: 1, ans: "James Turrell", correct: false },
        {id: 2, ans: "Robin Gunningham", correct: true},
        {id: 3, ans: "Nick Walker", correct: false },
        {id: 3, ans: "Benjamin Eine", correct: false }
    ]
},
{ // Question 3
    id: 3,
    image: "/client/assets/SalvatorMundi.jpeg",
    question: "How much was this record selling piece Salvator Mundi sold for?",
    answers: [
        {id: 1, ans: "$325.0 million", correct: false },
        {id: 2, ans: "$100.8 million", correct: false },
        {id: 3, ans: "$150.1 million", correct: false },
        {id: 4, ans: "$450.3 million", correct: true}
    ]
},
{ // Question 4
    id: 4,
    image: "/client/assets/JohannesVermeer.jpeg",
    question: "Who was responsible for this piece?",
    answers: [
        {id: 1, ans: "Sandro Botticelli", correct: false },
        {id: 2, ans: "Johannes Vermeer", correct: true},
        {id: 3, ans: "Michelangelo", correct: false },
        {id: 4, ans: "El Greco", correct: false }
    ]
},
{ // Question 5
    id: 5,
    image: "/client/assets/SandroBotticelli.jpeg",
    question: "What year was this piece created in?",
    answers: [
        {id: 1, ans: "1567", correct: false },
        {id: 2, ans: "1498", correct: false },
        {id: 3, ans: "1532", correct: false },
        {id: 4, ans: "1486", correct: true }
    ]
},
{ // Question 6
    id: 6,
    image: "/client/assets/ElGreco.jpeg",
    question: "Who drew this artwork?",
    answers: [
        {id: 1, ans: "El Greco", correct: true },
        {id: 2, ans: "Picasso", correct: false },
        {id: 3, ans: "Da Vinci", correct: false },
        {id: 4, ans: "Monet", correct: false }
    ]
},
{ // Question 7
    id: 7,
    image: "/client/assets/BattleofAlexander.jpeg",
    question: "What famous historical battle does this piece of artwork depict?",
    answers: [
        {id: 1, ans: "The Battle of San Romano", correct: false },
        {id: 2, ans: " The Surrender of Breda", correct: false },
        {id: 3, ans: "The Battle of Alexander", correct: true },
        {id: 4, ans: "The Death of Major Peirson", correct: false }
    ]
},
{ // Question 8
    id: 8,
    image: "/client/assets/Michelangelo.jpeg",
    question: "Which Italian artist is responsible for The Creation of Adam",
    answers: [
        {id: 1, ans: "Giovanni Battista Piranesi", correct: false },
        {id: 2, ans: "Michelangelo", correct: true },
        {id: 3, ans: "Masolino da Panicale", correct: false },
        {id: 4, ans: "Alessandro Allori", correct: false }
    ]
},
{ // Question 9
    id: 9,
    image: "/client/assets/Kandinsky.jpeg",
    question: "Which artist specialised in abstract/expressionism artwork?",
    answers: [
        {id: 1, ans: "Frida Kahlo", correct: false },
        {id: 2, ans: "Wassily Kandinsky", correct: true },
        {id: 3, ans: "Rembrandt", correct: false },
        {id: 4, ans: "Pablo Picasso", correct: false }
    ]
},
{ // Question 10
    id: 10,
    image: "/client/assets/Basquiat.jpeg",
    question: "Which artist rose to fame in the 1980s?",
    answers: [
        {id: 1, ans: "Eric Fischl", correct: false },
        {id: 2, ans: "Julian Schnabel", correct: false },
        {id: 3, ans: "David Salle", correct: false },
        {id: 4, ans: "Jean-Michel Basquiat", correct: true}
    ]
}
]

module.exports = data
