
document.getElementById('submit-button').addEventListener('click',function (){
    // User Name or Email Get://............................
    const userInput = document.getElementById("user-email");
    const userEmail = userInput.value; 
    // console.log(userEmail);
    
    
    // User Name or Email Get://............................
    const passwordInput = document.getElementById("user-password");
    const userPassword = passwordInput.value; 
    // console.log(userPassword);



    // Login Data (Email & Password)://..................................
    if (userEmail == 'admin@gmail.com' && userPassword == '1234'){
        alert("Login Successfull")
        window.location.href = "https://topdigiit.github.io/Bank-html-with-login-js/banking"
    } 
    else if (userEmail != 'admin@gmail.com' || userPassword != '1234'){
        alert("User Name or Password is not valid")
    }
    
})
