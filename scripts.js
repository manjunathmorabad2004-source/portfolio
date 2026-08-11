// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === "#" || targetId === "") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      history.pushState(null, null, targetId);
    }
  });
});

// Function to generate and download resume PDF using jsPDF
async function downloadResumePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Set font and styling
  doc.setFont("helvetica");
  doc.setFontSize(22);
  doc.setTextColor(40, 40, 80);
  doc.text("Manjunath M Morabad", 20, 25);
  
  doc.setFontSize(11);
  doc.setTextColor(100, 100, 120);
  doc.text("Python Full Stack Developer", 20, 35);
  doc.setFontSize(9);
  doc.text("+91-6366746269 | manjunathmorabad2004@gmail.com | Gadag, Karnataka", 20, 43);
  doc.text("GitHub: github.com/manjunath | LinkedIn: linkedin.com/in/manjunath-morabad", 20, 50);
  
  // Line separator
  doc.setDrawColor(200, 200, 200);
  doc.line(20, 55, 190, 55);
  
  // Professional Summary
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 80);
  doc.text("PROFESSIONAL SUMMARY", 20, 65);
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 80);
  const summary = "Results-driven Python Full Stack Developer with hands-on experience building scalable web applications using Django, Flask, React JS, and REST APIs. Skilled in designing MVC-based, responsive, and data-driven applications with MySQL and SQLite backends. Experienced in delivering full-stack solutions under agile sprint conditions.";
  const splitSummary = doc.splitTextToSize(summary, 170);
  doc.text(splitSummary, 20, 73);
  
  // Technical Skills
  let yPos = 85 + (splitSummary.length * 5);
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 80);
  doc.text("TECHNICAL SKILLS", 20, yPos);
  yPos += 7;
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 80);
  const skillsText = "Frontend: HTML5/CSS3, JavaScript (ES6+), React JS, Bootstrap, Responsive Design\nBackend: Python, Django, Flask, REST APIs, MVC Architecture\nDatabases: MySQL, SQLite, MongoDB (Basics)\nTools: Git/GitHub, VS Code, Postman, Agile Basics, OOP";
  const splitSkills = doc.splitTextToSize(skillsText, 170);
  doc.text(splitSkills, 20, yPos + 2);
  yPos += (splitSkills.length * 5) + 8;
  
  // Experience
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 80);
  doc.text("WORK EXPERIENCE", 20, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setTextColor(40, 40, 80);
  doc.text("Python Full Stack Developer Intern (Training)", 20, yPos);
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 120);
  doc.text("Feb 2025 – Present | Tontadarya College of Engineering, Gadag", 20, yPos + 4);
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 80);
  doc.text("- Intensive training across 8+ technologies including Django, React, MySQL.", 25, yPos + 10);
  doc.text("- Built full-stack projects covering REST APIs, database design, and Git workflows.", 25, yPos + 16);
  doc.text("- Applied agile development practices culminating in a campus hiring drive.", 25, yPos + 22);
  
  yPos += 34;
  doc.setFontSize(10);
  doc.setTextColor(40, 40, 80);
  doc.text("Full Stack Developer (Hackathon)", 20, yPos);
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 120);
  doc.text("March 2025 | SkillSprint 2026 Hackathon", 20, yPos + 4);
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 80);
  doc.text("- Role-based Flask web app with 3 portals (Student, Staff, Admin) built in 24h.", 25, yPos + 10);
  doc.text("- Implemented session auth, SQLite, and real-time Chart.js analytics dashboard.", 25, yPos + 16);
  doc.text("- Coordinated 5-member team under deadline pressure.", 25, yPos + 22);
  
  yPos += 36;
  // Projects
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 80);
  doc.text("PROJECTS", 20, yPos);
  yPos += 7;
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 80);
  doc.text("AnnaRaksha – Smart Food Wastage Management", 20, yPos);
  doc.setFontSize(8);
  doc.text("Tech: Python, Flask, SQLite, Chart.js, HTML/CSS/JS", 22, yPos + 4);
  doc.setFontSize(9);
  doc.text("- Role-based portals, session auth, real-time wastage analytics, eco-points gamification.", 25, yPos + 10);
  yPos += 18;
  doc.text("Interactive Quiz Application", 20, yPos);
  doc.setFontSize(8);
  doc.text("Tech: HTML5, CSS3, Vanilla JavaScript", 22, yPos + 4);
  doc.setFontSize(9);
  doc.text("- Dynamic quiz with score tracking, countdown timer, and responsive UI.", 25, yPos + 10);
  
  yPos += 22;
  // Education & Certifications
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 80);
  doc.text("EDUCATION", 20, yPos);
  yPos += 6;
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 80);
  doc.text("Bachelor of Engineering – Electronics & Communication (2023–2027 Expected)", 20, yPos);
  doc.text("Tontadarya College of Engineering, Gadag | Relevant: DSA, OOP, DBMS, CN", 20, yPos + 5);
  doc.text("Class 12: 91.66% | Class 10: 91.04%", 20, yPos + 10);
  yPos += 20;
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 80);
  doc.text("CERTIFICATIONS & ACHIEVEMENTS", 20, yPos);
  yPos += 6;
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 80);
  doc.text("- Python Programming Certification – PrepInsta", 22, yPos);
  doc.text("- Full Stack Intensive Training (Django, React, MySQL, GitHub)", 22, yPos + 6);
  doc.text("- SkillSprint 2026 Hackathon: Built AnnaRaksha as team lead", 22, yPos + 12);
  doc.text("- Consistent academic excellence: 91%+ in both Class 10 & 12", 22, yPos + 18);
  
  // Save PDF
  doc.save("Manjunath_Morabad_Resume.pdf");
}

// Attach download event to both buttons
const downloadBtn1 = document.getElementById('downloadResumeBtn');
const downloadBtn2 = document.getElementById('downloadResumeBtn2');
if (downloadBtn1) downloadBtn1.addEventListener('click', (e) => { e.preventDefault(); downloadResumePDF(); });
if (downloadBtn2) downloadBtn2.addEventListener('click', (e) => { e.preventDefault(); downloadResumePDF(); });

// Contact form demo alert
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon. (Demo mode — integrate backend later)');
    contactForm.reset();
  });
}

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
function setActiveLink() {
  let scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      const currentId = section.getAttribute('id');
      document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);