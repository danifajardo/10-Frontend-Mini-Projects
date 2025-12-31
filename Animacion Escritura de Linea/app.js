// array with all the letters of the phrase
const lettersPhrase = ['H','o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o']
// p element
const phrase = document.getElementById("phrase");
//
let index = 0;
let index2 = lettersPhrase.length;
//
let delay = 1000;
//
function typeLetter(){
    
    if(index < lettersPhrase.length){
        phrase.textContent += lettersPhrase[index];
        index++;
        setTimeout(typeLetter, delay);
    }else{
        //
        phrase.textContent = phrase.textContent.substring(0,--index2);
        //
        if(index2 == 0){
            index = 0;
            index2 = lettersPhrase.length;
            phrase.textContent = "";
        }
        //
        setTimeout(typeLetter, delay);
    }
}
// call the function
typeLetter();