const setOfWords = ["my name is mubashir", "how are you", "im learning javascript and react", "i love my family", "my future is bright inshallah"];

const msg = document.getElementById("msg");
const typeOfWords = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
    let randomWords = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomWords];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);

    let totalStr = typeOfWords.value;
    let wordsCount = wordsCounter(totalStr);

    let speed = Math.round((wordsCount / totalTime) * 60)

    let finalMsg = `you typed total at ${speed} Words pr minutes `
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item, index){
        if(item == words2[index]){
            cnt++;
        }
    })
    let errorWords = (words1.length - cnt);
    return (`${cnt} correct out of ${words1.length} words and the total number of error are ${errorWords}.`)

}

const wordsCounter = (str) =>{
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener("click", function () {
    if (this.innerText == 'Start') {
        typeOfWords.disabled = false;
        playGame();
    }else if (this.innerText == 'Done') {
        typeOfWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }

})
