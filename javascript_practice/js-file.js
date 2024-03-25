const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "this is the glorious text-content!";

container.appendChild(content);


const first = document.createElement("p");
first.style.cssText = "color: red;";
first.textContent = "Hey I'm red!";

container.appendChild(first);


const second = document.createElement("h3");
second.style.cssText = "color: blue;";
second.textContent = "I'm a blue h3!";

container.appendChild(second);


const third = document.createElement("div");
third.style.cssText = "bolder: 1px solid; background-color: pink;";

const fourth = document.createElement("h1");
fourth.textContent = "I'm in a div";

third.appendChild(fourth);

const fifth = document.createElement("p");
fifth.textContent = "ME TOO!";

third.appendChild(fifth);


container.appendChild(third);


const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World!");

// btn.addEventListener("click", () => {alert("Hello World!")});

btn.addEventListener("click", (e) => {e.target.style.background = "blue";});

const button = document.querySelectorAll("button");

button.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});