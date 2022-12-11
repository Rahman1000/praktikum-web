function login(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (username == "ahmad2017" && password == "integrity") {
        alert("Login berhasil!")
        window.location.replace('loginsuccess.html')
    } else{
        alert('Login gagal, username atau password salah')
    }
}