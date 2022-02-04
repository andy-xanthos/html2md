import TurndownService from "./lib/turndown.js"; // https://github.com/mixmark-io/turndown by mixmark-io

browser.contextMenus.create({
    id: 'html2md',
    title: 'Copy as Markdown',
    contexts: ['all'],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "html2md":
            // The user clicked the "Copy as Markdown" button.
            let td = TurndownService;
            let markdown = td.turndown(html)
            navigator.clipboard.writeText(markdown)
                .then(() => { console.log('Markdown copied to clipboard.') });
    }
});

// Receive the message containing the innerHTML of
// the most recent element that had a context window
// opened on it. 
var html;
browser.runtime.onMessage.addListener((data, sender) => {
    return html = data.html;
});