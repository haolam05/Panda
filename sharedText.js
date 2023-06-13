function navBar() {
    var text = `
            <a href="home.html">Home</a>
            <a href="signup.html">Sign Up</a>
            <a href="facts.html">Interesting Facts</a>
            <a href="gallary.html">Gallary</a>
        `;
    document.querySelector("nav").innerHTML = text;
}

function title() {
    var text = `Panda Lovers`;
    document.querySelector("title").innerHTML = text;
}
