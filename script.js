// document.addEventListener('DOMContentLoaded', function () {
// var all = document.getElementById('all') 
// let array=[]  
// all.addEventListener('submit', function(event){
//    event.preventDefault();
//    var name = document.getElementById('name').value;
//    console.log(name);
//    var age = document.getElementById('age').value;
//    console.log(age) ;
//    var date = document.getElementById('date').value;
//    console.log(date);
//    var email = document.getElementById('email').value;
//    console.log(email)
//    var password = document.getElementById('password').value;
//    console.log(password);
   
// });
// });


document.addEventListener('DOMContentLoaded', function () {
   var form = document.getElementById('loginForm');
   form.addEventListener('submit', function(event){
       event.preventDefault();

       var name = document.getElementById('name').value;
       var age = document.getElementById('age').value;
       var date = document.getElementById('date').value;
       var email = document.getElementById('email').value;
       var password = document.getElementById('password').value;

       console.log('Name:', name);
       console.log('Age:', age);
       console.log('DOB:', date);
       console.log('Email:', email);
       console.log('Password:', password);

       // You can add code here to submit the data to a server using fetch or XMLHttpRequest

       // Clear the form fields after submission
       form.reset();
   });
});