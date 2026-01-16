// grab elements
const container = document.querySelector(".icon-container");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = modal.querySelector(".modal-close");

// content for each icon
const contentMap = {
  about: `
    <h2>About Me</h2>
    <p>This is your about section.</p>
  `,
  work: `
    <h2>My Work</h2>
    <p>Projects, experience, portfolio items.</p>
  `,
  contact: `
    <h2>Contact</h2>
    <p>Email: you@example.com</p>
  `
};

// open modal when clicking an icon
container.addEventListener("click", (e) => {
  const link = e.target.closest(".icon-item");
  if (!link) return;

  e.preventDefault();

  const section = link.getAttribute("href").replace("#", "");
  modalBody.innerHTML = contentMap[section] || "";
  modal.style.display = "flex";
});

// close modal when clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// close modal when clicking outside content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
