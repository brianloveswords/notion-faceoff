(function () {
    if (document.getElementById("faceoff")) {
        return;
    }
    let faceoff = document.createElement("style");
    faceoff.id = "faceoff";
    faceoff.innerHTML = "html body .notion-presence-container { display: none !important; }";
    document.body.appendChild(faceoff);
})();
