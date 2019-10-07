


 const loginForm = document.querySelector('#login_form');
 document.getElementById("submit-btn").addEventListener('click',(e)=>
{   e.preventDefault();



    const email = loginForm['inputEmail'].value;
    const password = loginForm['inputPassword'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred =>
        
          { 
            console.log(cred.user);
           
                window.location='index.html';
        
        },err=>
        {
            let msg;
            console.log("dhukse");
            switch(err.code)
            {
                case "auth/wrong-password":
                    msg = " your email or password is incorrect!";
                    loginForm.reset();
                    console.log('112');
                    break;
            }
            alert(msg);
        }
        );
});

