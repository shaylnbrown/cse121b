function SwapLetter(text,OldLetter,NewLetter) {
    let strOut="";
    for (let i = 0; i < text.length; i++) { 
        if (text[i] === OldLetter) {
            strOut += NewLetter;
        } else if (text[i] === NewLetter) {
            strOut += OldLetter;
        } else {
            strOut += text[i];
        }
    }
    return strOut;
}

function CreateLetterList()
{
    let Index=0;
    let char='';
    let ListA=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let listB=[];
    let spliceArray=[];
    
    while (listB.length != 26)
    {        
        Index = parseInt(Math.random() * ListA.length)
        char = ListA[Index];        
        if ((char.charCodeAt()-65) != listB.length)
        {
            listB.push(ListA[Index]);
            spliceArray = ListA.splice(Index, 1);
        }
    }
    return listB;
}

function Scramble(text)
{    
    let ascii=0;
    let newText="";
    for (let i = 0; i < text.length; i++) { 
        ascii = text[i].charCodeAt()-65;
        if (ascii>=0 && ascii<26)
        {
            newText += LetterList[ascii];
        }
        else newText += text[i];       
    };
    return newText;
}

const getNewQuote = async () => {
    const response = await fetch("https://api.portkey.uk/quote");
    if (response.ok) Quote = await response.json(); 
    QuoteText=Quote.quote;
    QuoteText=QuoteText.toUpperCase();
    QuoteSpeaker=Quote.speaker;
    QuoteSpeaker=QuoteSpeaker.toUpperCase();
    LetterList = CreateLetterList();
    PuzzleText=Scramble(QuoteText);
    PuzzleSpeaker=Scramble(QuoteSpeaker);
    QuoteElement.textContent=PuzzleText;
    SpeakerElement.textContent=PuzzleSpeaker;
    replaceOld="";
    replaceNew="";
    document.querySelector("#Plan").textContent="Select letter to replace:";
    QuoteElement.style.color="black";
    SpeakerElement.style.color="black";
}

let replaceOld="";
let replaceNew="";
function buttonClick(button)
{
    
    if (replaceOld==="")
    {
        replaceOld=button;
        document.querySelector("#Plan").textContent=`Replace all ${replaceOld}'s with:`;
    }
    else
    {
        replaceNew=button;
        PuzzleText=SwapLetter(PuzzleText,replaceOld,replaceNew);
        PuzzleSpeaker=SwapLetter(PuzzleSpeaker,replaceOld,replaceNew);        
        QuoteElement.textContent=PuzzleText;
        SpeakerElement.textContent=PuzzleSpeaker;
        replaceOld="";
        replaceNew="";
        document.querySelector("#Plan").textContent="Select letter to replace:";
    }
    
    if (PuzzleText===QuoteText && PuzzleSpeaker===QuoteSpeaker)
    {
        QuoteElement.style.color="green";
        SpeakerElement.style.color="green";
    }
    else
    {
        QuoteElement.style.color="black";
        SpeakerElement.style.color="black";
    }
}

const QuoteElement=document.querySelector("#QuoteDisplay");
const SpeakerElement=document.querySelector("#SpeakerDisplay");
let Quote=null;
let QuoteText="";
let QuoteSpeaker="";
let Letterlist=[];
let PuzzleText="";
let SpeakerText="";

getNewQuote();


document.querySelector("#NewQuote").addEventListener("click", () => { getNewQuote()});
document.querySelector("#letterQ").addEventListener("click", () => { buttonClick(document.querySelector("#letterQ").textContent)});
document.querySelector("#letterW").addEventListener("click", () => { buttonClick(document.querySelector("#letterW").textContent)});
document.querySelector("#letterE").addEventListener("click", () => { buttonClick(document.querySelector("#letterE").textContent)});
document.querySelector("#letterR").addEventListener("click", () => { buttonClick(document.querySelector("#letterR").textContent)});
document.querySelector("#letterT").addEventListener("click", () => { buttonClick(document.querySelector("#letterT").textContent)});
document.querySelector("#letterY").addEventListener("click", () => { buttonClick(document.querySelector("#letterY").textContent)});
document.querySelector("#letterU").addEventListener("click", () => { buttonClick(document.querySelector("#letterU").textContent)});
document.querySelector("#letterI").addEventListener("click", () => { buttonClick(document.querySelector("#letterI").textContent)});
document.querySelector("#letterO").addEventListener("click", () => { buttonClick(document.querySelector("#letterO").textContent)});
document.querySelector("#letterP").addEventListener("click", () => { buttonClick(document.querySelector("#letterP").textContent)});
document.querySelector("#letterA").addEventListener("click", () => { buttonClick(document.querySelector("#letterA").textContent)});
document.querySelector("#letterS").addEventListener("click", () => { buttonClick(document.querySelector("#letterS").textContent)});
document.querySelector("#letterD").addEventListener("click", () => { buttonClick(document.querySelector("#letterD").textContent)});
document.querySelector("#letterF").addEventListener("click", () => { buttonClick(document.querySelector("#letterF").textContent)});
document.querySelector("#letterG").addEventListener("click", () => { buttonClick(document.querySelector("#letterG").textContent)});
document.querySelector("#letterH").addEventListener("click", () => { buttonClick(document.querySelector("#letterH").textContent)});
document.querySelector("#letterJ").addEventListener("click", () => { buttonClick(document.querySelector("#letterJ").textContent)});
document.querySelector("#letterK").addEventListener("click", () => { buttonClick(document.querySelector("#letterK").textContent)});
document.querySelector("#letterL").addEventListener("click", () => { buttonClick(document.querySelector("#letterL").textContent)});
document.querySelector("#letterZ").addEventListener("click", () => { buttonClick(document.querySelector("#letterZ").textContent)});
document.querySelector("#letterX").addEventListener("click", () => { buttonClick(document.querySelector("#letterX").textContent)});
document.querySelector("#letterC").addEventListener("click", () => { buttonClick(document.querySelector("#letterC").textContent)});
document.querySelector("#letterV").addEventListener("click", () => { buttonClick(document.querySelector("#letterV").textContent)});
document.querySelector("#letterB").addEventListener("click", () => { buttonClick(document.querySelector("#letterB").textContent)});
document.querySelector("#letterN").addEventListener("click", () => { buttonClick(document.querySelector("#letterN").textContent)});
document.querySelector("#letterM").addEventListener("click", () => { buttonClick(document.querySelector("#letterM").textContent)});