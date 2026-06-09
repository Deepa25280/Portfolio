/* =============================================
   Deepa Yadav Portfolio — script.js
   ============================================= */

// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.background = "rgba(11, 12, 16, 0.97)";
  } else {
    navbar.style.background = "rgba(11, 12, 16, 0.85)";
  }
});

// === HAMBURGER MENU ===
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

// === ACTIVE NAV LINK HIGHLIGHT ===
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "var(--accent2)";
    }
  });
}
window.addEventListener("scroll", updateActiveNav);

// === TIMELINE SCROLL ANIMATION ===
const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, idx * 120);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

timelineItems.forEach((item) => observer.observe(item));

// === HERO PHOTO FALLBACK ===
// Tries to load the uploaded photo; shows initials if not found.
// To use your photo: place it as "deepa.jpg" in the same folder as index.html.
const heroPhoto = document.getElementById("heroPhoto");
const heroInitials = document.getElementById("heroInitials");

heroPhoto.addEventListener("error", () => {
  heroPhoto.style.display = "none";
  heroInitials.style.display = "flex";
});

// === SMOOTH REVEAL ON LOAD ===
document.querySelectorAll(".hero-content > *").forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
  setTimeout(
    () => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    },
    100 + i * 100,
  );
});

// === PROJECT CARD HOVER GLOW ===
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(124,106,245,0.08) 0%, var(--bg3) 60%)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "";
  });
});

// === SKILL PILL STAGGER ANIMATION ===
const pillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const pills = entry.target.querySelectorAll(".pill");
        pills.forEach((pill, i) => {
          pill.style.opacity = "0";
          pill.style.transform = "translateY(8px)";
          pill.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;
          setTimeout(
            () => {
              pill.style.opacity = "1";
              pill.style.transform = "translateY(0)";
            },
            50 + i * 50,
          );
        });
        pillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

document
  .querySelectorAll(".skill-group")
  .forEach((group) => pillObserver.observe(group));
