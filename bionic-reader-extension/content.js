const tTexts = countFoundTexts();
console.log("tTexts: ",tTexts);

function countFoundTexts() {
    const textTreeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    highlightTexts(textTreeWalker);
    let count = 0;
    while (textTreeWalker.nextNode()) {
        count++;
    }
    return count;
}

function highlightTexts(textNodes) {
 for (let i = 0; i < 5; i++) {
     console.log(textNodes.nextNode());
 }
}

function applyBionicReader() {
    const p1 = document.getElementById('p1').innerText;
    const anchoredText = addAnchors(p1);
    document.getElementById('p2').innerHTML = anchoredText;
}

function addAnchors(p1) {
    const test = p1.split(/(\s+)/);
    let anchoredText = ""; //fill this with each word and space
    //for each word
    for (let word of test) {
        word = "<b>"+word.slice(0,2)+"</b>"+word.slice(2);
        anchoredText += word;
    }
    return anchoredText;
}
