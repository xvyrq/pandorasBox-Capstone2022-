function passCheck () {
    const password = document.getElementById("passInput").value;
    const box1 = document.getElementById("card1");
    const box2 = document.getElementById("card2"); 
    const box3 = document.getElementById("card3"); 
    const box4 = document.getElementById("card4");     

    //length requirements
    if (password.length >= 16) {
        box1.style.borderColor = "green";    
    } else if (password.length == 0){
        box1.style.borderColor = "black";
    }
    else {
        box1.style.borderColor = "red";
    }


    var charReqs = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    console.log (charReqs.test(password));
    if(password.match(charReqs)) {
        box2.style.borderColor = "green"
    }
    else if (password.length == 0){
        box2.style.borderColor = "black";
    }
    else {
        box2.style.borderColor = "red";
    }
    //no common phrases or names
    // moved password text file to passlib folder
    


    //check for repeat chars
    // const sortedpw = password.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    // console.log(sortedpw);
    const makeLower = password.toLowerCase();
    var repeatchars = ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh",
    "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt",
    "uu", "vv", "ww", "xx", "yy", "zz", "00", "11", "22", "33", "44", "55",
    "66", "77", "88", "99"];
    console.log(makeLower);

    if (makeLower.match(repeatchars)) {
        box3.style.borderColor = "red";    
    } 
    else if (password.length == 0){
        box3.style.borderColor = "black";
    }
    else {
        box3.style.borderColor = "green";
    }
    
}   