function openLogin() {
    document
        .getElementById("loginPanel")
        .classList.add("active");
}


function closeLogin() {
    document
        .getElementById("loginPanel")
        .classList.remove("active");
}


function explore() {

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}
