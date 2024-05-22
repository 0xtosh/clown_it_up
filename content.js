// Replace text content on the loaded page
const replaceTextOnPage = () => {
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        for (let j = 0; j < element.childNodes.length; j++) {
            const node = element.childNodes[j];

            if (node.nodeType === 3) { // Text node
                let text = node.nodeValue;
                const replacedText = text.replace(/cloud/g, 'clown').replace(/Cloud/g, 'Clown');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
};

window.onload = replaceTextOnPage;
