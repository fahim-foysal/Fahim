console.log("from signup.js");
document.getElementById("submit-btn").addEventListener('click',(e)=>{
    e.preventDefault();
    var username=document.getElementById("inputUsername").value;
    var email=document.getElementById("inputEmail").value;
    var password=document.getElementById("inputPassword").value;
    console.log(username,email,password);    
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        console.log('ok');
    });
});