const comments = document.querySelectorAll('.zd-comment');

function init() {
    comments.forEach(comment => {
        // Add a button to the bottom of each .comment element.
        const btn = document.createElement('button');
        const btnText = document.createTextNode('Copy as Markdown');
        btn.appendChild(btnText);
        comment.appendChild(btn);
        // Send message to background.js when button is clicked.
        btn.addEventListener('click', (e) => {
            browser.runtime.sendMessage({html: `${e.target.parentNode.innerHTML}`, src: 'btn'});
        });
    
        // The context-menu is buggy and doesn't always grab the whole comment.
        comment.addEventListener('contextmenu', (e) => {
            browser.runtime.sendMessage({html: `${e.target.innerHTML}`, src: 'ctx'});
        });
    });
}

init();


