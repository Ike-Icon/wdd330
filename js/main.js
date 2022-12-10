const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
  {
    label: "week2 notes",
    url: "week2/index.html",
  },
  {
    label: "week3 notes",
    url: "week3/index.html",
  },
  {
    label: "week4 notes",
    url: "week4/index.html",
  },
  {
    label: "week5 notes",
    url: "week5/index.html",
  },
  {
    label: "To-Do App",
    url: "todo-project2/index.html",
  },
  {
    label: "week7 notes",
    url: "week7/index.html",
  },
  {
    label: "week8 notes",
    url: "week8/index.html",
  },
  {
    label: "week9 notes",
    url: "week9/index.html",
  },
  {
    label: "week10 notes",
    url: "week10/index.html",
  },
  {
    label: "Tic Tac Toe Game",
    url: "tic-tac-toe-project/tic.html",
  },
  {
    label: "Beat Maker",
    url: "my-beatmaker/index.html",
  },

];

function loadIndex() {
  const ol = document.querySelector("#linkList");

  links.forEach((link) => {
    const li = document.createElement("li");
    const href = document.createElement("a");
    href.setAttribute("href", link.url);
    href.innerText = link.label;

    li.appendChild(href);
    ol.appendChild(li);
  })
}
