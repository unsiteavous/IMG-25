const projects = [
  {
    name: "Yanis",
    promo: "DWWM 8",
    website: "https://yanis_uchiha.gitlab.io/rpg_game/",
    image: "images/dwwm8/yanis 676566a0ea509126376862.png",
  },
  {
    name: "Kadem",
    promo: "DWWM 8",
    website: "https://kdmx.gitlab.io/jeux/",
    image: "images/dwwm8/jeux-kadem.png",
  },
  {
    name: "Alireza",
    promo: "DWWM 8",
    website: "https://dinosaurs-game-b1d94a.gitlab.io/",
    image: "images/dwwm8/Alireza Jump Game.png",
  },
  {
    name: "Clément",
    promo: "DWWM 8",
    website: "https://projet-de-jeu-en-javascript-0ff061.gitlab.io/",
    image: "images/dwwm8/screenfootballfieldwars-clement.jpg",
  },
  {
    name: "Saadia",
    promo: "DWWM 8",
    website: "",
    image: '',
  },
  {
    name: "Steven",
    promo: "DWWM 8",
    website: "https://jeux-mha-730680.gitlab.io/",
    image: 'images/dwwm8/steven_The_ruins_of_Jaku_City.webp',
  },
  {
    name: "Amélie",
    promo: "DWWM 8",
    website: "https://jeu-brief-5-85e7f5.gitlab.io/",
    image: "images/dwwm8/Amelie Lone Rider.png",
  },
  {
    name: "Raiana",
    promo: "DWWM 8",
    website: "https://panda-game-0c8078.gitlab.io/",
    image: "images/dwwm8/raiana pan-da-2.jpg",
  },
  {
    name: "Raphaël",
    promo: "DWWM 8",
    website: "https://ranelli38.gitlab.io/brief-5-projet-de-jeu/",
    image: "images/dwwm8/raphael - Pierre Feuille Ciseaux.png",
  },
  {
    name: "Amel",
    promo: "DWWM 8",
    website: "https://mon-jeu-9b0cc5.gitlab.io/",
    image: "",
  },
  {
    name: "Mehdi",
    promo: "DWWM 8",
    website: "",
    image: "",
  },
  {
    name: "Hervé",
    promo: "DWWM 8",
    website: "https://hervelge.gitlab.io/pac-man/",
    image: "images/dwwm8/Hervé-Pac-Man.png",
  },
  {
    name: "Mylène",
    promo: "DWWM 8",
    website: "https://game-in-js-79ed19.gitlab.io/",
    image: "images/dwwm8/mylène vignette.png",
  },
  {
    name: "Iliès",
    promo: "DWWM 8",
    website: "https://ioulahal.gitlab.io/webgame-beatboss",
    image: "images/dwwm8/iliès BACK.png",
  },
  {
    name: "Vivian",
    promo: "DWWM 8",
    website: "",
    image: "",
  },
  {
    name: "Antoine",
    promo: "DWWM 8",
    website: "",
    image: "",
  }
];

const htmlProjectList = document.querySelector(".project_list");

function displayProjects() {
  console.log(htmlProjectList);

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    htmlProjectList.appendChild(projectCard);
  });
}

function createProjectCard(project) {
  const listItem = document.createElement("li");

  const projectLink = document.createElement("a");
  projectLink.href = project.website ? project.website : "https://lilo.org";
  projectLink.target = "_blank";

  const projectCard = document.createElement("div");
  projectCard.classList.add("game_card");

  const projectImage = document.createElement("img");
  projectImage.src = project.image ? project.image : "./images/default.png";

  const projectOwner = document.createElement("p");
  projectOwner.textContent = `${project.promo} - ${project.name}`;

  listItem.appendChild(projectLink);
  projectLink.appendChild(projectCard);
  projectCard.appendChild(projectImage);
  projectCard.appendChild(projectOwner);

  return listItem;
}

displayProjects();
