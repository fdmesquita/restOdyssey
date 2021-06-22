//******** Variables

const bookingButton = document.querySelector('#submit');
const confirmationDiv = document.querySelector('.confirmation-container');
const datePickUp = document.querySelector('#reservation-date');
const timePickUp = document.querySelector('#reservation-time');
const numberPickUp = document.querySelector('#reservation-number');


//******** Functions

const resetConfirmation = () => {
    confirmationDiv.classList.remove('confirmation-show-success');
    confirmationDiv.classList.remove('confirmation-show-error');
}

const confirmationGeneration = (dateConfirm, timeConfirm, numberConfirm) => {

    resetConfirmation();

    let now = new Date();
    let currentDay = now.getDate();
    let currentMonth = now.getMonth();
    let currentYear = now.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    console.log(`Current date : ${currentDate}`);
    console.log(`Picked up date : ${dateConfirm}`);

    if((dateConfirm) && (timeConfirm) && (numberConfirm)) {
        if(dateConfirm < currentDate) {
            confirmationDiv.classList.add('confirmation-show-error');
            confirmationDiv.innerHTML = `La date choisie n'est pas valide`;
        } else {
            confirmationDiv.classList.add('confirmation-show-success');
            confirmationDiv.innerHTML = `Réservation confirmé pour ${numberConfirm} personne(s) le ${dateConfirm} à ${timeConfirm}`;
        }
    } else {
        confirmationDiv.classList.add('confirmation-show-error');
        confirmationDiv.innerHTML = `Une erreur s'est produite lors de la réservation`;
    }

    setInterval(() => {
        resetConfirmation();
        confirmationDiv.innerHTML = "";
    }, 5000);
}



//******** Events



bookingButton.addEventListener('click', () => {
    confirmationGeneration(datePickUp.value, timePickUp.value, numberPickUp.value);
});


datePickUp.setAttribute('min',new Date());