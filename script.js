const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");

/* فتح / قفل المينيو */
menuToggle.onclick = () => {
  navLinks.classList.toggle("active");
};

/* قفل المينيو عند الضغط على أي لينك */
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
// ================= TYPING EFFECT =================
const typingTexts = ["With Buildify Me", "With Stunning Design", "With Modern Tech"];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = typingTexts[typingIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  document.getElementById("typing").textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // wait before deleting
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex = (typingIndex + 1) % typingTexts.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ================= CARD TILT EFFECT =================
const cards = document.querySelectorAll(".tilt");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

// ================= WHATSAPP FORM =================
const whatsappForm = document.getElementById('whatsappForm');

whatsappForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const message = this.message.value.trim();

  const whatsappNumber = "201145320595"; // رقم واتساب الشركة
  const text = `Hello! My name is ${name}. Phone: ${phone}. Message: ${message}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
  this.reset();
});