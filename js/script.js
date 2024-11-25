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


const kmDaPercorrere = kmField.value.trim();


let prezzoPerKm = 0.21;
const prezzoTotale = prezzoPerKm * kmDaPercorrere
const scontoUnder18 = 20
const scontoOver65 = 40


form.addEventListener('submit', (event) => {
  event.preventDefault();
  name.innerText = nameField.value.trim()
  
  if (ageField.value === 'minor') {
    offer.innerText = 'Biglietto Minori';
    price.innerText = prezzoTotale - (prezzoTotale * scontoUnder18 / 100).toFixed(2) + '€'
  } else if (ageField.value === 'senior') {
    offer.innerText = 'Biglietto Senior';
    price.innerText = prezzoTotale - (prezzoTotale * scontoOver65 / 100).toFixed(2) + '€'
  } else {
    offer.innerText = 'Biglietto Standard';
    price.innerText = prezzoTotale.toFixed(2) + '€'
  }

  carriage.innerText = Math.ceil(Math.random() * 20)

  cpCode.innerText = Math.ceil(Math.random()* 100000)
 
})




