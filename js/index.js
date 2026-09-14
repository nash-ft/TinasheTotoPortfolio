// Skills
const skills = [
  "Java",
  "Python",
  "SQL",
  "C",
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
    demoLink: "https://two800-202610-bby20.onrender.com/",
  },

  {
    title: "GoPlay",
    description: "A web application that helps its users discover nearby sports facilities.",
    details: `GoPlay is a web app designed to help users discover nearby sports facilities and activities.
    
              It uses geolocation to provide real-time information about sports facilities and suggests nearby activities based on user preferences.

              Users can engage in public conversations about different sports.
              
              `,
    image: "./images/goplay1.jpeg",
    image2: "./images/goplay2.jpeg",
    demoLink: "https://goplay-k8sq.onrender.com/",
  },
];

const projectGrid = document.querySelector("#projects .project-grid");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "card project-card"; // background color comes from this class in CSS

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
const modalImage2 = document.getElementById("modalImage2");
const modalTitle = document.getElementById("modalTitleLabel");
const modalDescription = document.getElementById("modalDescription");
const modalDemoLink = document.getElementById("modalDemoLink");

document.querySelectorAll(".more-info").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.index];

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.details;

    modalImage.src = project.image;
    modalImage.alt = `Screenshot of the ${project.title} project`;
    modalImage.style.display = project.image ? "" : "none";

    if (project.image2) {
      modalImage2.src = project.image2;
      modalImage2.alt = `Additional screenshot of the ${project.title} project`;
      modalImage2.style.display = "";
    } else {
      modalImage2.src = "";
      modalImage2.style.display = "none";
    }

    if (project.demoLink) {
      modalDemoLink.href = project.demoLink;
      modalDemoLink.style.display = "";
    } else {
      modalDemoLink.href = "";
      modalDemoLink.style.display = "none";
    }

    modal.show();
  });
});

// Contact
const contacts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tinashetoto",
    icon: "bi bi-linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/nash-ft",
    icon: "bi bi-github",
  },
  {
    name: "Email",
    url: "mailto:ttoto@my.bcit.ca",
    icon: "bi bi-envelope-fill",
  },
];

const contactGroup = document.querySelector(".btn-group");

contacts.forEach((contact) => {
  const link = document.createElement("a");
  link.href = contact.url;
  link.className = "btn btn-secondary";
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