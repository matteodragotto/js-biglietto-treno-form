const resetForm = document.querySelector('.reset-btn')
const form = document.querySelector('.form')
const yourTicket = document.querySelector('.your-ticket')
const ticket = document.querySelector('.ticket')

const nameField = document.getElementById('name-surname-field')
const kmField = document.getElementById('km-field')
const ageField = document.getElementById('age-field')

const name = document.getElementById('name')
const offer = document.getElementById('offer')
const carriage = document.getElementById('carriage')
const cpCode = document.getElementById('cp-code')
const price = document.getElementById('price')



let prezzoPerKm = 0.21;
const scontoUnder18 = 20
const scontoOver65 = 40


form.addEventListener('submit', (event) => {
  event.preventDefault();
  name.innerText = nameField.value.trim()
  const kmDaPercorrere = kmField.value.trim();
  const prezzoTotale = prezzoPerKm * kmDaPercorrere

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

  yourTicket.classList.remove('hide');
  ticket.classList.remove('hide');
 
})

resetForm.addEventListener('click', () => {
  yourTicket.classList.add('hide')
  ticket.classList.add('hide')
})





