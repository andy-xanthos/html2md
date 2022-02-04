const divs = document.querySelectorAll('div');

// Update the targetElement in background.js whenever a div is clicked.
divs.forEach(div => {
    div.addEventListener('contextmenu', (e) => {
        console.log("Sending message...");
        browser.runtime.sendMessage({html: `${e.target.innerHTML}`});
    })
});