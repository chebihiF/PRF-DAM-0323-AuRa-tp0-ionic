const reasonInput = document.querySelector('#input-reason');
const reasonAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');

confirmBtn.addEventListener('click', () => {
    
    const enteredReason = reasonInput.value ;
    const entredAmount = reasonAmount.value ;

    if(
        enteredReason.trim().length <= 0 ||
        entredAmount <= 0 ||
        entredAmount.trim().length <= 0
    ){
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason+ ': $'+ entredAmount
    expensesList.appendChild(newItem);

});