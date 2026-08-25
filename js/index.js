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
    details: `SunBlock is a web app designed to help users find shaded areas during peak UV hours.

              It uses geolocation to provide real-time shade information and suggests nearby shaded locations.

              SunBlock was created by myself, Zyllian James Fran, Harman Kaur, Kelly Bayingana, and Taeu Gim using Bootstrap, Node.js, and MongoDB.`,
    image: "./images/sunblock.jpg",
  },
];

const projectGrid = document.querySelector("#projects .project-grid");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "card project-card";

  const img = document.createElement("img");
  img.src = "./images/sunb.png";
  img.alt = `Screenshot of the ${project.title} project`;
  img.className = "card-img-top";
  card.appendChild(img);

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = project.title;

  const text = document.createElement("p");
  text.className = "card-text";
  text.textContent = project.description;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn-secondary more-info";
  button.dataset.index = String(index);
  button.textContent = "More info";
  button.setAttribute("aria-label", `More information about ${project.title}`);

  body.append(title, text, button);
  card.appendChild(body);
  projectGrid.appendChild(card);
});

// Modal
const modalElement = document.getElementById("projectModal");
const modal = new bootstrap.Modal(modalElement);
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitleLabel");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll(".more-info").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.index];

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.details;
    modalImage.src = project.image;
    modalImage.alt = `Screenshot of the ${project.title} project`;

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

contacts.forEach((contact) => {
  const link = document.createElement("a");
  link.href = contact.url;
  link.className = `btn btn-secondary btn-lg ${contact.class}`;
  if (contact.url.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noopener";
  }

  const icon = document.createElement("i");
  icon.className = `${contact.icon} me-2`;
  icon.setAttribute("aria-hidden", "true");

  link.append(icon, document.createTextNode(contact.name));
  contactGroup.appendChild(link);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Active nav link highlighting
const navLinks = document.querySelectorAll("nav a[href^='#']");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}
