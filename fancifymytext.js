const bigButton = document.getElementById("bigButton");
const fancyButton = document.getElementById("textAlter1");
const boringButton = document.getElementById("textAlter2");
const mooButton = document.getElementById("cowUppercase");
const inputText = document.getElementById("inputText");
const textBorder = document.getElementById("textTitle");

const fancyBorder = document.getElementById("fancyTitle");

let s="";

bigButton.onclick = (event) =>biggerText();
fancyButton.onchange = (event) =>fancifyText();
boringButton.onchange = (event) =>normalizeText();
mooButton.onclick = (event) =>capitalizeText();

inputText.style.borderWidth="3px";
inputText.style.borderColor="black";

textBorder.style.borderWidth="10px";
textBorder.style.borderColor="black";

fancyBorder.style.borderWidth="10px";
fancyBorder.style.borderColor="black";

function biggerText(){
    inputText.style.fontSize="24px";
}

function fancifyText(){
    inputText.style.fontWeight="bold";
    inputText.style.color="blue";
    inputText.style.textDecorationColor="blue";
    inputText.style.textDecoration="underline";
}

function normalizeText(){
    s = inputText.value;
    if(inputText.style.fontSize=="24px"&&inputText.style.fontWeight=="bold"&&inputText.style.color=="blue"&&inputText.style.textDecoration=="underline"){
        inputText.style.fontSize="12px";
        inputText.style.fontWeight="normal";
        inputText.style.color="black";
        inputText.style.textDecoration="none";
    }
    if(inputText.style.fontWeight=="bold"&&inputText.style.color=="blue"&&inputText.style.textDecoration=="underline"){
        inputText.style.fontWeight="normal";
        inputText.style.color="black";
        inputText.style.textDecoration="none";
    }
    if(inputText.style.fontSize=="24px"){
        inputText.style.fontSize="12px";
    }
    if(s!=""){
        if(s.endsWith("o")||s.endsWith("O")){
            s=s.toLowerCase();
            inputText.value=s;
        }
        else if(s==s.toUpperCase()){
            s=s.toLowerCase();
            inputText.value=s;
        }
    }
}
function capitalizeText(){
    s = inputText.value.toUpperCase();
    let a = s.split(".");
    s=a.join("Moo");
    inputText.value=s;
}