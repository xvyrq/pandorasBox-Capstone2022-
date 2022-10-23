function passCheck () {
const password = document.getElementById("passInput").value;
const box1 = document.getElementById("card1");
const box2 = document.getElementById("card2"); 
const box3 = document.getElementById("card3"); 
const box4 = document.getElementById("card4");     

if (password.length > 16) {
    box1.style.borderColor = "green";    
} else {
    box1.style.borderColor = "red";
}


}   