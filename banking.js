document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputField = document.getElementById('deposit-input')
    const depositInputText = depositInputField.value;
    const newDepositAmount = parseFloat(depositInputText);
    console.log(newDepositAmount);
    
    
})  
