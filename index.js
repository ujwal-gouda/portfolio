let yearBox = document.getElementById("year");
yearBox.textContent = new Date().getFullYear();

let items = [
    ...document.querySelectorAll(".project"),
    ...document.querySelectorAll(".experience")
];

items.forEach((item) => {
    let btn = document.createElement("button");
    let img = document.createElement("img");

    img.src = "/icons/open_in_new.svg";
    img.alt = "Open in new tab";

    btn.appendChild(img);

    Object.assign(btn.style, {
        padding: "0",
        margin: "0",
        border: "0",
        background: "transparent",
        position: "absolute",
        top: "100%",
        right: "0px",
        display: "none",
        cursor: "pointer"
    });

    if (getComputedStyle(item).position === "static") {
        item.style.position = "relative";
    }

    item.appendChild(btn);

    item.addEventListener("mouseenter", () => {
        btn.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
        btn.style.display = "none";
    });
});