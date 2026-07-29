const tTexts = findText();
console.log("tTexts: ",tTexts);

function findText() {
    const filter = {
        acceptNode(node) {
            //no whitespace
            if (!node.textContent.trim()) {
                return NodeFilter.FILTER_REJECT;
            }
            const parent = node.parentElement;
            if (!parent) {
                return NodeFilter.FILTER_REJECT;
            }
            //get rid of extra crap
            if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    }
    const textTreeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, filter);
    applyBionicReader(textTreeWalker);
    // let count = 0;
    // while (textTreeWalker.nextNode()) {
    //     count++;
    // }
    // return count;
}

function applyBionicReader(nodes) {
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
