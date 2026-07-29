function testButton() {
    let spaceCounter = 0;
    const p1 = document.getElementById('p1').innerText;
    const space = " ";
    //iterate through string, collect each word and operate on it before moving to next word
    for (let i = 0; i < p1.length; i++) {
        if (p1[i] === space) {
            spaceCounter++;
        }
    }
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
