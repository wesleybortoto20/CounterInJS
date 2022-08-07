// solution 1
function checkPalidromo(string) {
    if(!string) return "No string imput";

    return string.split("").reverse().join("") === string;
}

// solution 2

function checkPalidromo2(string) {
    if(!string) return "No string imput";

    for (let i=0; i < string.lenght / 2; i++){
        if (string[i] !== string[string.lenght -1-i]){
            return false;
        }  
    }
    return true;
}
console.log(checkPalidromo("ovo"));
console.log(checkPalidromo2("ovivo"));



