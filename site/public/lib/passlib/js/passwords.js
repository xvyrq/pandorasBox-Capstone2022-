function passCheck () {
    const password = document.getElementById("passInput").value;
    const box1 = document.getElementById("card1");
    const box2 = document.getElementById("card2"); 
    const box3 = document.getElementById("card3"); 
    const box4 = document.getElementById("card4");     

    //length requirements
    if (password.length >= 16) {
        box1.style.borderColor = "green";    
    } else if (password.length = 0){
        box1.style.borderColor = "white";
    }
    else {
        box1.style.borderColor = "red";
    }

    //no common phrases or names
    // moved password text file to passlib folder
    var pw = require("pw");
    var text = pw.readFileSync("100mostCommonPW.txt", "utf-8");
        var textByLine = text.split("/n");
    console.log(pw);
    console.log(text);
}   