const submit = document.querySelector('.sbm-btn')
const form = document.querySelector('.form')

const nameField = document.getElementById('name-surname-field')
const kmField = document.getElementById('km-field')
const ageField = document.getElementById('age-field')

const name = document.getElementById('name')
const offer = document.getElementById('offer')
const carriage = document.getElementById('carriage')
const cpCode = document.getElementById('cp-code')
const price = document.getElementById('price')




form.addEventListener('submit', (event) => {
  event.preventDefault();
  name.innerText = nameField.value.trim()
 
})




