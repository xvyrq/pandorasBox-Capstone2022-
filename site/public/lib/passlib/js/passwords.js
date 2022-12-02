function passCheck () {
    const password = document.getElementById("passInput").value;
    const box1 = document.getElementById("card1");
    const box2 = document.getElementById("card2"); 
    const box3 = document.getElementById("card3"); 
    const box4 = document.getElementById("card4");     

    //length requirements
    if (password.length >= 12) {
        box1.style.borderColor = "green";
        box1.style.color = "green";    
    } else if (password.length == 0){
        box1.style.borderColor = "black";
        box1.style.color = "black"; 
    }
    else {
        box1.style.borderColor = "red";
        box1.style.color = "red"; 
    }

    //at least one upper and lowercase letter
    var caseReqs = /^(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    console.log (caseReqs.test(password));
    if(password.match(caseReqs)) {
        box2.style.borderColor = "green"
        box2.style.color = "green"; 
    }
    else if (password.length == 0){
        box2.style.borderColor = "black";
        box2.style.color = "black"; 
    }
    else {
        box2.style.borderColor = "red";
        box2.style.color = "red"; 
    }
    //at least one symbol and number
    var specialReqs = /^(?=.*\d)(?=.*[!@#$%^&*]).{4,}$/;
    console.log (specialReqs.test(password));
    if(password.match(specialReqs)) {
        box3.style.borderColor = "green";
        box3.style.color = "green"; 
    }
    else if (password.length == 0){
        box3.style.borderColor = "black";
        box3.style.color = "black"; 
    }
    else {
        box3.style.borderColor = "red";
        box3.style.color = "red"; 
    }
    //no common phrases or names
    // takes an array of the 100 most common passwords and checks user input against the list for matching elements
    const commonPW = ['123456', 'password', '12345678', 'qwerty', '123456789', '12345', '1234', '111111', '1234567', 'dragon', '123123', 'baseball', 'abc123', 'football', 'monkey', 'letmein', '696969', 'shadow', 'master', '666666', 'qwertyuiop', '123321', 'mustang', '1234567890', 'michael', '654321', 'pussy', 'superman', '1qaz2wsx', '7777777', 'fuckyou', '121212', '000000', 'qazwsx', '123qwe', 'killer', 'trustno1', 'jordan', 'jennifer', 'zxcvbnm', 'asdfgh', 'hunter', 'buster', 'soccer', 'harley', 'batman', 'andrew', 'tigger', 'sunshine', 'iloveyou', 'fuckme', '2000', 'charlie', 'robert', 'thomas', 'hockey', 'ranger', 'daniel', 'starwars', 'klaster', '112233', 'george', 'asshole', 'computer', 'michelle', 'jessica', 'pepper', '1111', 'zxcvbn', '555555', '11111111', '131313', 'freedom', '777777', 'pass', 'fuck', 'maggie', '159753', 'aaaaaa', 'ginger', 'princess', 'joshua', 'cheese', 'amanda', 'summer', 'love', 'ashley', '6969', 'nicole', 'chelsea', 'biteme', 'matthew', 'access', 'yankees', '987654321', 'dallas', 'austin', 'thunder', 'taylor', 'matrix']
    
    if (commonPW.includes(password)) {
      box4.style.borderColor = "red";
      box4.style.color = "red"; 
    }
    else if (password.length == 0){
        box4.style.borderColor = "black";
        box4.style.color = "black"; 
    }
    else {
        box4.style.borderColor = "green";
        box4.style.color = "green"; 
        }
    
    //check for repeat chars
    // const sortedpw = password.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    // console.log(sortedpw);
    
    
}   