const questions = [
  {
    id: 1,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    answer: "Mitochondria"
  },
  {
    id: 2,
    question: "What is H₂O commonly known as?",
    options: ["Hydrogen", "Oxygen", "Water", "Salt"],
    answer: "Water"
  },
  {
    id: 3,
    question: "What force keeps us on the ground?",
    options: ["Magnetism", "Gravity", "Friction", "Electricity"],
    answer: "Gravity"
  },
  {
    id: 4, 
    question: "What gas do plants release during photosynthesis?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Oxygen"
  },
  {
    id: 5,
    question: "What planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    answer: "Mars"
  },
  {
    id: 6,
    question: "What part of the atom carries a positive charge?",
    options: ["Electron", "Neutron", "Proton", "Nucleus"],
    answer: "Proton"
  },
  {
    id: 7,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    answer: "Au"
  },
  {
    id: 8,
    question: "What gas makes up most of Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
    answer: "Nitrogen"
  },
  {
    id: 9,
    question: "What organ pumps blood through the body?",
    options: ["Lungs", "Kidneys", "Heart", "Liver"],
    answer: "Heart"
  },
  {
    id: 10,
    question: "What is the boiling point of water at sea level?",
    options: ["50°C", "75°C", "100°C", "125°C"],
    answer: "100°C"
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