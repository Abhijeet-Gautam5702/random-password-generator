const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementsByClassName("password");

function generatePass(){
    let n = characters.length;
    let pass1 = "", pass2 = "";
    for(let i = 0; i < 15; i++){
        let char1 = characters[Math.floor(Math.random()*n)];
        let char2 = characters[Math.floor(Math.random()*n)];
        pass1+=char1;
        pass2+=char2;
    }
    passwordEl[0].textContent = pass1;
    passwordEl[1].textContent = pass2;
}

