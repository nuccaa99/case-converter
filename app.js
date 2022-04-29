function upperCase() {
    let txt = document.getElementById("textArea").value;
    document.getElementById("textArea").value = txt.toUpperCase();
}

function lowerCase() {
    let txt = document.getElementById("textArea").value;
    document.getElementById("textArea").value = txt.toLowerCase();
}

function properCase() {
    let txt = document.getElementById("textArea").value;
    let splitText = txt.toLowerCase().split(" ");
    let newArr = [];
    splitText.forEach(function (word) {
            newArr.push(word[0].toUpperCase() + word.slice(1))
        }
    )
    document.getElementById("textArea").value = newArr.join(" ");

}

function sentenceCase() {
    let txt = document.getElementById("textArea").value;
    let splitText = txt.toLowerCase().split(". ");
    let newArr = [];
    splitText.forEach(function (sentence) {
            newArr.push(sentence[0].toUpperCase() + sentence.slice(1))
        }
    )

    /*for(let i=0; i<splitText.length; i++) {
        if(i===0) {
            newArr.push(splitText[i].toLowerCase()[0].toUpperCase()+
            splitText[i].slice(1));
        } else {
            newArr.push(splitText[i].toLowerCase()[1].toUpperCase()+
                splitText[i].slice(2));
        }
    }*/

    document.getElementById("textArea").value = newArr.join(". ");
}



function download(filename, text) {
    text = document.getElementById("textArea").value;
    filename = "text.txt";
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
