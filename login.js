function validate(){
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="javith"&&password=="javith"){
        alert("Login Succesfully");
        return false;
    }
    else{
        alert("Login Fail");
        return true;
    }
}