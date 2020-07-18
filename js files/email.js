    let email = document.getElementById('email')
    let email_error = document.getElementById('email-error')


    function check_email(){
        if(email.value==""){
            email_error.innerText="Enter Email or Phone"
        }
        else if(email.value!="abc@gmail.com"){
            email_error.innerText="Couldn't find your Google Account"
        }
        else{
            window.open('html pages/password.html')
        }
}

        