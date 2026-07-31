// Skills
const skills = [
  "Java",
  "Python",
  "SQL",
  "Web Markup Languages: HTML, CSS",
  "Linux",
  "Networking Fundamentals",
];

const skillsList = document.querySelector("#skills .list-group");

skills.forEach((skill) => {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Projects
const projects = [
  {
    title: "SunBlock",
    description: "A web app that helps users find shade during peak UV hours.",
    details: `
        SunBlock is a web app designed to help users find shaded areas during peak UV hours.

        It uses geolocation to provide real-time shade information and suggests nearby shaded locations.

        SunBlock was created by myself, Zyllian James Fran, Harman Kaur, Kelly Bayingana, and Taeu Gim using Bootstrap, Node.js, and MongoDB.
    `,
    image: "./images/sunblock.jpg",
  },
];

const projectsSection = document.querySelector("#projects");

projects.forEach((project, index) => {
  projectsSection.innerHTML += `
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <button
          class="btn btn-secondary more-info"
          data-index="${index}">
          More info
        </button>
      </div>
    </div>
  `;
});

// Modal
const modalElement = document.getElementById("projectModal");
const modal = new bootstrap.Modal(modalElement);
const modalImage = document.getElementById("modalImage");

const modalTitle = modalElement.querySelector(".modal-title");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll(".more-info").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.index];

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.details;
    modalImage.src = project.image;
    modalImage.alt = project.title;

    modal.show();
  });
});

// Contact
const contacts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tinashetoto",
    icon: "bi bi-linkedin",
    class: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/nash-ft",
    icon: "bi bi-github",
    class: "github",
  },
  {
    name: "Email",
    url: "mailto:ttoto@my.bcit.ca",
    icon: "bi bi-envelope-fill",
    class: "email",
  },
];

const contactGroup = document.querySelector(".btn-group");

let html = "";

contacts.forEach((contact) => {
  html += `
    <a href="${contact.url}" target="_blank" class="btn btn-secondary ${contact.class} btn-lg">
      <i class="${contact.icon} me-2"></i>
      ${contact.name}
    </a>
  `;
});

contactGroup.innerHTML = html;
