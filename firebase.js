var firebaseConfig = {
  apiKey: "AIzaSyBnF5Xqj1mioHeQpIqEzz0Qr1vpR-vNSpc",
  authDomain: "valobasha-e0de9.firebaseapp.com",
  databaseURL: "https://valobasha-e0de9.firebaseio.com",
  projectId: "valobasha-e0de9",
  storageBucket: "",
  messagingSenderId: "503654778164",
  appId: "1:503654778164:web:1251b3377898734d26d161",
  measurementId: "G-XWMBVYTW1J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(user =>
  {
    if(user)
    {
      console.log('user log in :',user);
      document.getElementById("Log_out").style.display = "block";
      document.getElementById("Log_in").style.display = "none";
      localStorage.setItem('logged','yes');
    }
    else{
      console.log('user logged out');
      document.getElementById("Log_out").style.display = "none";
      document.getElementById("Log_in").style.display = "block";
      localStorage.setItem('logged','no');
    }
  })
  const logout = document.getElementById("Log_out");
	logout.addEventListener('click', (e) => {
		e.preventDefault();
		auth.signOut().then(() =>{
		console.log('logged out !');
		});
	});