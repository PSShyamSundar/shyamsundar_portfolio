// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
  initSkillTagAnimations();
});

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===== MOBILE MENU =====
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

function closeMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== SKILL TAG HOVER ANIMATIONS =====
function initSkillTagAnimations() {
  const skillTags = document.querySelectorAll('.skill-tag');
  const colors = [
    'var(--yellow)',
    'var(--teal)',
    'var(--pink)',
    'var(--orange)',
    'var(--purple)',
    'var(--green)'
  ];

  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      tag.style.background = randomColor;
    });

    tag.addEventListener('mouseleave', () => {
      tag.style.background = 'var(--light-bg)';
    });
  });
}

// ===== PARALLAX MEMPHIS SHAPES =====
window.addEventListener('scroll', () => {
  const shapes = document.querySelectorAll('.memphis-shape');
  const scrollY = window.scrollY;

  shapes.forEach((shape, i) => {
    const speed = (i % 3 + 1) * 0.02;
    const direction = i % 2 === 0 ? 1 : -1;
    shape.style.transform = `translateY(${scrollY * speed * direction}px) rotate(${scrollY * 0.02 * direction}deg)`;
  });
});

// ===== TYPING EFFECT FOR HERO (subtle) =====
(function() {
  const tagline = document.querySelector('.hero-tagline');
  if (!tagline) return;
  
  const text = tagline.textContent;
  tagline.textContent = '';
  tagline.style.borderRight = '2px solid var(--teal)';
  
  let i = 0;
  const type = () => {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, 18);
    } else {
      // Remove cursor after typing
      setTimeout(() => {
        tagline.style.borderRight = 'none';
      }, 1500);
    }
  };
  
  // Start typing after other animations
  setTimeout(type, 800);
})();

// ===== PROJECT CARD TILT EFFECT =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ===== NAVBAR ACTIVE LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        link.style.background = 'var(--yellow)';
        link.style.borderRadius = '10px';
      } else {
        link.style.background = '';
      }
    }
  });
});
