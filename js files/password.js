let password = document.getElementById('password')
let password_error = document.getElementById('password-error')

function password_check(){
        if(password.value==""){
            password_error.innerText="Enter Your Password"
        }
        else if(password.value!="abc"){
            password_error.innerText="Wrong Password"
        }
        else{
            window.open('../html pages/welcome.html')
        }
}