function toggleSection(header) {
    const content = header.nextElementSibling;

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        header.querySelector(".arrow").classList.add("up");
    } else {
        content.style.display = "none";
        header.querySelector(".arrow").classList.remove("up");
    }
}
