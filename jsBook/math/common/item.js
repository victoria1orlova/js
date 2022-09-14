var onLoaded = function () {
    let button = document.querySelector('#button');
    button.addEventListener('mouseup', (e) => {
        let content = document.querySelector('#content');
        content.innerHTML += "<h1>Hi</h1>"
    });
}