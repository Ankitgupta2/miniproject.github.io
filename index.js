
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
    function fn(){
      alert("Product is added to cart");
    }
    function validateForm() {
      let x = document.forms["myForm"]["fname"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    }
    //extract all fields on the basis of id
let fnameNode=document.getElementById('fname');
let mnameNode=document.getElementById('mname');
let lnameNode=document.getElementById('lname');
let emailNode=document.getElementById('emailid');
let ageNode=document.getElementById('age');
let contactNode=document.getElementById('mobile');
let unameNode=document.getElementById('uname');
let passNode=document.getElementById('pass');
let cpassNode=document.getElementById('c_pass');
let errorNode1=document.getElementById('error1');
let errorNode2=document.getElementById('error2');
let errorNode3=document.getElementById('error3');
let errorNode4=document.getElementById('error4');
let errorNode5=document.getElementById('error5');
let errorNode6=document.getElementById('error6');
let errorNode7=document.getElementById('error7');
let errorNode8=document.getElementById('error8');
let errorNode9=document.getElementById('error9');
const errorBorder="2px solid red";
const successBorder="2px solid green";
function validateForm(){
    let s1=validate1();
    let s2=validate2();
    let s3=validate3();
    let s4=validate4();
    let s5=validate5();
    let s6=validate6();
    let s7=validate7();
    let s8=validate8();
    let s9=validate9();
    console.log(s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9);
    return (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9);
}
function validate1(){
    let fname=fnameNode.value; 
    errorNode1.innerHTML="";  
    if(fname===''){
        errorNode1.innerHTML="First name is required";
        fnameNode.style.border=errorBorder;
        return false;
    }
    else{
        fnameNode.style.border=successBorder;
        return true;
    }
}
function validate2(){
    mnameNode.style.border=successBorder;
    return true;
}
function validate3(){
    let lname=lnameNode.value; 
    errorNode3.innerHTML="";  
    if(lname===''){
        errorNode3.innerHTML="Last name is required";
        lnameNode.style.border=errorBorder;
        return false;
    }
    else{
        lnameNode.style.border=successBorder;
        return true;
    }
}
function validate4(){
    let email=emailNode.value;  // @vinapatil
    errorNode4.innerHTML="";  
    let ss1=email.substring(0,email.indexOf('@'));
    let ss2=email.substring(email.indexOf('@')+1);
   // let index=email.indexOf('@');
   // if(index==0 || index===email.length-1)
    console.log(ss1);
    console.log(ss2);
    if(email===''){
        errorNode4.innerHTML="Email Id is required";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(!email.includes('@')){
        errorNode4.innerHTML="Email Id should contain @";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if (ss1==='' || ss2===''){
        errorNode4.innerHTML="Invalid Email id";
        emailNode.style.border=errorBorder;
        return false;
    }
    else{
        emailNode.style.border=successBorder;
        return true;
    }
}
function validate5(){
    let myage=ageNode.value;  
    console.log(typeof myage);
    errorNode5.innerHTML="";  
    if(myage===''){
        errorNode5.innerHTML="Age is required";
        ageNode.style.border=errorBorder;
        return false;
    }
    else if(parseInt(myage)<0 || parseInt(myage)>110){
        errorNode5.innerHTML="Age should be in the range 0 to 110";
        ageNode.style.border=errorBorder;
        return false;
    }
    else{
        ageNode.style.border=successBorder;
        return true;
    }
}
function validate6(){
    let mobile=contactNode.value;  
    let regExp= new RegExp("^[0-9]{10}$");  //class
    errorNode6.innerHTML="";  
  //  console.log(regExp.test(mobile));   // function
    if(mobile===''){
        errorNode6.innerHTML="Mobile is required";
        contactNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(mobile)==false){
        errorNode6.innerHTML="Please enter valid mobile number";
        contactNode.style.border=errorBorder;
        return false;
    }
    else{
        contactNode.style.border=successBorder;
        return true;
    }
}
function validate7(){
    let username=unameNode.value;  
    errorNode7.innerHTML="";  
    if(username===''){
        errorNode7.innerHTML="username is required";
        unameNode.style.border=errorBorder;
        return false;
    }
    else if(username.length<6 || username.length>12){
        errorNode7.innerHTML="Username should be min 6 and max 12 characters long";
        unameNode.style.border=errorBorder;
        return false;
    }
    else{
        unameNode.style.border=successBorder;
        return true;
    }
}
function validate8(){
    let password=passNode.value;  
    let regExp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})");
    errorNode8.innerHTML="";  
   // console.log(regExp.test(password));   
    if(password===''){
        errorNode8.innerHTML="Password is required";
        passNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(password)==false){
        errorNode8.innerHTML="Password should contain atleast one digit, small letter and capital letter.Password should be min 6 and max 15 characters long";
        passNode.style.border=errorBorder;
        return false;
    }
    else{
        passNode.style.border=successBorder;
        return true;
    }
}

function validate9(){
    let password=passNode.value;  
    let c_password=cpassNode.value;  
    errorNode9.innerHTML="";  
    if(c_password===''){
        errorNode9.innerHTML="Confirm Password is required";
        cpassNode.style.border=errorBorder;
        return false;
    }
    else if(c_password!=password){
        errorNode9.innerHTML="Both passwords should match";
        cpassNode.style.border=errorBorder;
        return false;
    }
    else{
        cpassNode.style.border=successBorder;
        return true;
    }
}