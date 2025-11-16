const questions = [
  {
    id: 1,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Mars"],
    answer: "Jupiter"
  },
  {
    id: 2,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Leo Tolstoy", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    id: 3,
    question: "What is the capital city of Japan?",
    options: ["Kyoto", "Tokyo", "Osaka", "Nagoya"],
    answer: "Tokyo"
  },
  {
    id: 4,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Zinc"],
    answer: "Oxygen"
  },
  {
    id: 5,
    question: "In computing, what does 'CPU' stand for?",
    options: ["Central Processing Unit", "Computer Power Unit", "Central Performance Utility", "Core Programming Unit"],
    answer: "Central Processing Unit"
  },
  {
    id: 6,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    id: 7,
    question: "Which ocean is the largest?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    id: 8,
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Quartz", "Iron", "Platinum"],
    answer: "Diamond"
  },
  {
    id: 9,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Claude Monet", "Leonardo da Vinci", "Pablo Picasso"],
    answer: "Leonardo da Vinci"
  },
  {
    id: 10,
    question: "Which gas do plants primarily absorb for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  }
];
let qbox = document.getElementById('qbox')
questions.map(function(q){
    let div = document.createElement('div')
    h2 = document.createElement('h2')
    h2.innerHTML = q.question
    div.appendChild(h2)
    q.options.map(function(o){
        btn = document.createElement('button')
        btn.innerHTML = o
        div.appendChild(btn)
        btn.addEventListener('click', function(e){
            check(e,q)
        })
    })
    qbox.appendChild(div)

})
function check(event,q){
    if (event.target.innerHTML == q.answer){
        alert('correct answer')
    }
    else{
        alert('wrong answer')
    }
}