/* =========================================================
   EDIT YOUR PORTFOLIO HERE
   Change the text, links, skills, projects and timeline below.
   ========================================================= */
const portfolio = {
  name: "Mahrab Ferdous",
  email: "mahrabferdousbd@gmail.com",
  phone: "+8801858476429",
  roles: ["CSE Student", "Aspiring Developer", "Problem Solver", "Tech Explorer"],
  socials: [
    { label: "GitHub", url: "https://github.com/mahrab445" },
    { label: "LinkedIn", url: "https://linkedin.com/in/your-username" },
    { label: "Facebook", url: "https://www.facebook.com/mahrab102/" }
  ],
  skills: [
    { icon: "C", logo: "https://cdn.simpleicons.org/c/A8B9CC", name: "C Programming", level: "Programming" },
    { icon: "Py", logo: "https://cdn.simpleicons.org/python/3776AB", name: "Python", level: "Programming" },
    { icon: "☕", logo: "assets/skill-logos/java.svg", name: "Java", level: "Programming" },
    { icon: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26", name: "HTML", level: "Web Development" },
    { icon: "#", logo: "assets/skill-logos/css.svg", name: "CSS", level: "Web Development" },
    { icon: "JS", logo: "https://cdn.simpleicons.org/javascript/F7DF1E", name: "JavaScript", level: "Web Development" },
    { icon: "Fl", logo: "https://cdn.simpleicons.org/flask/000000", name: "Flask", level: "Backend" },
    { icon: "N", logo: "https://cdn.simpleicons.org/nodedotjs/339933", name: "Node.js", level: "Backend" },
    { icon: "API", logo: "https://cdn.simpleicons.org/postman/FF6C37", name: "REST APIs", level: "Backend" },
    { icon: "SQL", logo: "https://cdn.simpleicons.org/mysql/4479A1", name: "MySQL", level: "Database" },
    { icon: "M", logo: "https://cdn.simpleicons.org/mongodb/47A248", name: "MongoDB", level: "Database" },
    { icon: "⌁", logo: "https://cdn.simpleicons.org/git/F05032", name: "Git", level: "Developer Tools" },
    { icon: "GH", logo: "https://cdn.simpleicons.org/github/181717", name: "GitHub", level: "Developer Tools" },
    { icon: "L", logo: "https://cdn.simpleicons.org/linux/FCC624", name: "Linux", level: "Developer Tools" },
    { icon: "W", logo: "assets/skill-logos/word.svg", name: "Microsoft Word", level: "Productivity" },
    { icon: "X", logo: "assets/skill-logos/excel.svg", name: "Microsoft Excel", level: "Productivity" },
    { icon: "P", logo: "assets/skill-logos/powerpoint.svg", name: "Microsoft PowerPoint", level: "Productivity" },
    { icon: "DSA", logo: "https://cdn.simpleicons.org/leetcode/FFA116", name: "Data Structures & Algorithms", level: "Computer Science" },
    { icon: "OOP", name: "Object-Oriented Programming", level: "Computer Science" },
    { icon: "◈", logo: "https://cdn.simpleicons.org/cisco/1BA0D7", name: "Computer Networking", level: "Computer Science" },
    { icon: "✦", logo: "https://cdn.simpleicons.org/codewars/B1361E", name: "Problem Solving", level: "Core Skills" }
  ],
  projects: [
    {
      title: "Wicked Chat",
      category: "Web",
      type: "MESSAGING & CALLING APP",
      description: "A messaging app for chatting with contacts, making voice calls, and starting video calls. It includes email verification and is deployed on Render.",
      features: ["Chat with contacts", "Voice calls", "Video calls", "Email verification"],
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "TypeScript", "MongoDB", "Brevo", "Metered TURN", "Render"],
      code: "",
      demo: "",
      mark: "W / CHAT",
      screenshots: [
        { src: "WickedChat/Screenshot%202026-11-24%20011638.png", alt: "Wicked Chat contacts and chat home screen", label: "Chat home" },
        { src: "WickedChat/Screenshot%202026-11-24%20011740.png", alt: "Wicked Chat loading screen", label: "App loading" },
        { src: "WickedChat/Screenshot%202026-11-24%20011921.png", alt: "Wicked Chat incoming voice call screen", label: "Voice call" },
        { src: "WickedChat/Screenshot%202026-11-24%20012027.png", alt: "Wicked Chat incoming video call screen", label: "Video call" }
      ]
    },
    {
      title: "Wicked Browser",
      category: "Desktop",
      type: "PRIVATE DESKTOP BROWSER",
      description: "A Chromium-based desktop browser built with Electron and Node.js, with a clean custom start page and built-in ad and tracker blocking.",
      features: ["Does not save browsing history", "Does not save browser cache", "Blocks ads", "Blocks trackers"],
      tech: ["Chromium", "Electron", "Node.js", "HTML", "CSS", "JavaScript"],
      code: "",
      demo: "",
      mark: "W / BROWSER",
      screenshots: [
        { src: "Wicked%20Browser/Screenshot%202026-11-24%20012931.png", alt: "Wicked Browser new tab screen with search bar and quick links", label: "New tab" }
      ]
    },
    {
      title: "Interpolation Solver",
      category: "Web",
      type: "ACADEMIC NUMERICAL ANALYSIS TOOL",
      description: "A web-based academic project for solving interpolation problems. Choose Lagrange or Newton's divided-difference method, enter known points, and estimate x or y from the data.",
      features: ["Lagrange polynomial", "Newton divided differences", "Estimate x or y", "View polynomial and result table", "Copy answer", "Download report"],
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Render"],
      code: "",
      demo: "",
      mark: "f(x)",
      screenshots: [
        { src: "Interpolation%20Solver/Screenshot%202026-11-24%20014044.png", alt: "Interpolation Solver method and target setup screen", label: "Set up" },
        { src: "Interpolation%20Solver/Screenshot%202026-11-24%20014131.png", alt: "Interpolation Solver known data points input screen", label: "Input points" },
        { src: "Interpolation%20Solver/Screenshot%202026-11-24%20014216.png", alt: "Interpolation Solver Lagrange result and polynomial", label: "Result" },
        { src: "Interpolation%20Solver/Screenshot%202026-11-24%20014317.png", alt: "Interpolation Solver polynomial and divided-difference table", label: "Difference table" }
      ]
    },
    {
      title: "Wicked Language",
      category: "Web",
      type: "BANGLA PROGRAMMING LANGUAGE · WEB IDE",
      description: "An experimental Bangla programming language with a browser-based IDE. Write code in the editor, run it, and interact with the terminal.",
      features: ["Bangla programming language", "Browser-based code editor", "Run and stop controls", "Interactive terminal"],
      tech: ["Flex", "Bison", "Python", "Flask"],
      code: "",
      demo: "",
      mark: "W { }",
      screenshots: [
        { src: "Wicked%20Language/Screenshot%202026-11-24%20014919.png", alt: "Wicked Language web IDE with code editor, run controls, and interactive terminal", label: "Wicked IDE" }
      ]
    },
    {
      title: "Wicked Cash (WCash)",
      category: "Web",
      type: "MFS WALLET DEMO · RUNNING PROJECT",
      description: "An MFS-style wallet dashboard in Bangladeshi Taka, with demo flows for sending money, cashing out, adding money, payments, bill pay, QR scan-and-pay, and mobile recharge. It also includes a transaction statement with search, filters, and CSV export.",
      note: "Frontend demo only. No real money is transferred.",
      features: ["Send money, cash out & add money", "Payments, bills & QR scan", "Mobile recharge", "Wallet balance & transaction statement", "Search, filters & CSV export", "Profile and security settings"],
      tech: [],
      code: "",
      demo: "",
      mark: "WCASH",
      screenshots: [
        { src: "Wicked%20Cash/Screenshot%202026-11-24%20015435.png", alt: "WCash home dashboard with wallet balance and quick services", label: "Wallet home" },
        { src: "Wicked%20Cash/Screenshot%202026-11-24%20015532.png", alt: "WCash profile and account settings", label: "Profile" },
        { src: "Wicked%20Cash/Screenshot%202026-11-24%20015601.png", alt: "WCash send money form", label: "Send money" },
        { src: "Wicked%20Cash/Screenshot%202026-11-24%20015632.png", alt: "WCash cash out form", label: "Cash out" },
        { src: "Wicked%20Cash/Screenshot%202026-11-24%20015714.png", alt: "WCash mobile recharge form", label: "Recharge" },
        { src: "Wicked%20Cash/Screenshot%202026-11-24%20015741.png", alt: "WCash transaction statement with category filters and CSV export", label: "Statement" },
        { src: "Wicked%20Cash/Screenshot%202026-11-24%20015810.png", alt: "WCash scan and pay screen with QR scanner and merchant code", label: "Scan & pay" }
      ]
    },
  ],
  futureCompanies: [
    { name: "Wicked Agro", field: "Agriculture & Agribusiness", logo: "Wicked%20Private%20Limited/Wicked%20Agro.png", description: "A future agribusiness venture focused on modern farming, quality agricultural products, and practical support for local growers." },
    { name: "Wicked Air", field: "Air Travel", logo: "Wicked%20Private%20Limited/Wicked%20Air.webp", description: "A planned air-travel brand envisioned to make flight discovery and journey planning feel clear, dependable, and customer-friendly." },
    { name: "Wicked Computer", field: "Computers & IT Services", logo: "Wicked%20Private%20Limited/Wicked%20Computer.png", description: "A future destination for computers, accessories, setup guidance, and helpful technology services for students and businesses." },
    { name: "Wicked Electronics", field: "Consumer Electronics", logo: "Wicked%20Private%20Limited/Wicked%20Electronics.png", description: "A planned electronics venture bringing useful devices, smart technology, and dependable after-sales support together." },
    { name: "Wicked Express", field: "Travel & Transport", logo: "Wicked%20Private%20Limited/Wicked%20Express.webp", description: "A future transport and travel service built around safer journeys, convenient booking, and a better passenger experience." },
    { name: "Wicked Healthcare", field: "Healthcare Services", logo: "Wicked%20Private%20Limited/Wicked%20Healthcare.png", description: "A planned healthcare brand aiming to connect people with accessible care, trustworthy health information, and patient-focused services." },
    { name: "Wicked Institute of Science & Technology", field: "Science & Technology Education", logo: "Wicked%20Private%20Limited/Wicked%20Institute%20Of%20Science%20%26%20technology.png", description: "A future learning and research institution envisioned to encourage hands-on science, technology skills, and creative problem-solving." },
    { name: "Wicked Medical College", field: "Medical Education", logo: "Wicked%20Private%20Limited/Wicked%20Medical%20College.png", description: "A long-term vision for a medical education institution focused on rigorous learning, clinical skills, and service-minded healthcare professionals." },
    { name: "Wicked Software", field: "Software & Digital Products", logo: "Wicked%20Private%20Limited/Wicked%20Software.png", description: "A future software company creating useful web, desktop, and mobile products, alongside custom digital solutions for organizations." },
    { name: "Wicked Sweet", field: "Sweets & Confectionery", logo: "Wicked%20Private%20Limited/Wicked%20Sweet.png", description: "A planned sweets and confectionery brand bringing together enjoyable treats, thoughtful presentation, and consistent quality." }
  ]
};

// Typing animation
let roleIndex = 0, charIndex = 0, deleting = false;
const typed = document.getElementById("typedText");
function typeRole() {
  const word = portfolio.roles[roleIndex];
  typed.textContent = word.substring(0, charIndex);
  if (!deleting && charIndex < word.length) { charIndex++; setTimeout(typeRole, 85); }
  else if (!deleting) { deleting = true; setTimeout(typeRole, 1200); }
  else if (charIndex > 0) { charIndex--; setTimeout(typeRole, 38); }
  else { deleting = false; roleIndex = (roleIndex + 1) % portfolio.roles.length; setTimeout(typeRole, 300); }
}
typeRole();

// Social links
const socialHTML = portfolio.socials.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join("");
document.getElementById("socialLinks").innerHTML = socialHTML;
document.getElementById("contactSocials").innerHTML = socialHTML;
document.getElementById("topSocialLinks").innerHTML = portfolio.socials.filter(s => ["GitHub", "Facebook"].includes(s.label)).map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join("");
document.getElementById("topEmailLink").href = `mailto:${portfolio.email}`;
document.getElementById("emailButton").href = `mailto:${portfolio.email}`;

// Skills
document.getElementById("skillsGrid").innerHTML = portfolio.skills.map(s => `
  <article class="skill-card"><div class="skill-icon">${s.logo ? `<img src="${s.logo}" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false">` : ""}<span ${s.logo ? "hidden" : ""}>${s.icon}</span></div><h3>${s.name}</h3><p>${s.level}</p></article>
`).join("");

// Project filters and cards
const categories = ["All", ...new Set(portfolio.projects.map(p => p.category))];
const filters = document.getElementById("projectFilters");
filters.innerHTML = categories.map((c,i) => `<button class="filter-btn ${i===0?"active":""}" data-filter="${c}">${c}</button>`).join("");
document.getElementById("projectsGrid").innerHTML = portfolio.projects.map(p => `
  <article class="project-card ${p.screenshots ? "project-card-featured" : ""}" data-category="${p.category}">
    ${p.screenshots ? `<div class="project-gallery">
      <a class="gallery-main" href="${p.screenshots[0].src}" target="_blank" rel="noopener" aria-label="Open ${p.screenshots[0].label} screenshot">
        <img src="${p.screenshots[0].src}" alt="${p.screenshots[0].alt}" loading="lazy">
        <span class="gallery-count">01 / ${String(p.screenshots.length).padStart(2,"0")}</span>
      </a>
      ${p.screenshots.length > 1 ? `<div class="gallery-thumbs" aria-label="${p.title} screenshots">
        ${p.screenshots.map((shot,i)=>`<button class="gallery-thumb ${i===0?"active":""}" type="button" data-src="${shot.src}" data-alt="${shot.alt}" data-label="${shot.label}" data-index="${String(i+1).padStart(2,"0")}" aria-label="Show ${shot.label} screenshot"><img src="${shot.src}" alt="" loading="lazy"><span>${shot.label}</span></button>`).join("")}
      </div>` : ""}
    </div>` : `<div class="project-cover">${p.mark}</div>`}
    <div class="project-content"><span class="project-meta">${p.type}</span><h3>${p.title}</h3><p>${p.description}</p>
      ${p.note ? `<p class="project-note"><span aria-hidden="true">ⓘ</span>${p.note}</p>` : ""}
      ${p.features ? `<div class="project-features">${p.features.map(f=>`<span><i aria-hidden="true">✓</i>${f}</span>`).join("")}</div>` : ""}
      ${p.tech && p.tech.length ? `<div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join("")}</div>` : ""}
      ${(p.code && p.code !== "#") || (p.demo && p.demo !== "#") ? `<div class="project-links">${p.code && p.code !== "#" ? `<a href="${p.code}" target="_blank" rel="noopener">Source code</a>` : ""}${p.demo && p.demo !== "#" ? `<a href="${p.demo}" target="_blank" rel="noopener">Live demo</a>` : ""}</div>` : ""}
    </div>
  </article>`).join("");
const projectsGrid = document.getElementById("projectsGrid");
projectsGrid.addEventListener("click", e => {
  const thumb = e.target.closest(".gallery-thumb");
  if (!thumb) return;
  const gallery = thumb.closest(".project-gallery");
  const mainLink = gallery.querySelector(".gallery-main");
  const mainImage = mainLink.querySelector("img");
  mainImage.src = thumb.dataset.src;
  mainImage.alt = thumb.dataset.alt;
  mainLink.href = thumb.dataset.src;
  mainLink.setAttribute("aria-label", `Open ${thumb.dataset.label} screenshot`);
  gallery.querySelector(".gallery-count").textContent = `${thumb.dataset.index} / ${String(gallery.querySelectorAll(".gallery-thumb").length).padStart(2,"0")}`;
  gallery.querySelectorAll(".gallery-thumb").forEach(button => button.classList.toggle("active", button === thumb));
});
filters.addEventListener("click", e => {
  const btn = e.target.closest("button[data-filter]");
  if (!btn) return;
  filters.querySelectorAll("button").forEach(b => b.classList.toggle("active", b === btn));
  document.querySelectorAll(".project-card").forEach(card => {
    card.classList.toggle("hidden", btn.dataset.filter !== "All" && card.dataset.category !== btn.dataset.filter);
  });
});

// Future company vision cards
document.getElementById("futurePlanGrid").innerHTML = portfolio.futureCompanies.map((company, index) => `
  <article class="future-company-card reveal">
    <div class="future-company-logo"><img src="${company.logo}" alt="${company.name} logo" loading="lazy"></div>
    <div class="future-company-copy"><span class="future-company-index">VENTURE ${String(index + 1).padStart(2, "0")}</span><h3>${company.name}</h3><p class="future-company-field">${company.field}</p><p class="future-company-description">${company.description}</p><span class="future-status"><i></i> Future plan</span></div>
  </article>
`).join("");

// Theme switch (saved only in this browser)
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
if (localStorage.getItem("portfolio-theme") === "light") document.body.classList.add("light");
function updateThemeIcon(){ themeIcon.textContent = document.body.classList.contains("light") ? "☾" : "☼"; }
updateThemeIcon();
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("light") ? "light" : "dark");
  updateThemeIcon();
});

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// Reveal-on-scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Active nav + scroll progress
const progress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  let current = "home";
  document.querySelectorAll("main section[id]").forEach(section => { if (window.scrollY >= section.offsetTop - 160) current = section.id; });
  document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
});
document.getElementById("year").textContent = new Date().getFullYear();
