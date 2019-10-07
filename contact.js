console.log('from contactjs');



db.collection('contact').get().then(snapshot => {

    console.log(snapshot.docs);
    snapshot.forEach(doc => {
        const guide = doc.data();
        console.log(guide);
    });
});

document.getElementById("submit-btn").addEventListener('click', (e) => {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("phone").value;
    var comment = document.getElementById("comment").value;
    console.log(name, email, subject, comment);

    db.collection('contact').add(
        {
            Name:name,
            Email : email,
            Phone : subject,
            Message : comment
        }
    ).then(() => {
        console.log('Done!');
        
    });
});