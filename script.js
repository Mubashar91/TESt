// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    menuIcon.style.display = mobileNav.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = mobileNav.classList.contains('active') ? 'block' : 'none';
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const theme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Language switcher
const languageBtn = document.querySelector('.language-btn');
const languageMenu = document.querySelector('.language-menu');
const languageOptions = document.querySelectorAll('.language-option');
const mobileLangButtons = document.querySelectorAll('.mobile-lang-btn');

// Language content
const translations = {
    en: {
        nav: {
            home: 'Home',
            contact: 'Contact',
            bookConsultation: 'Book Consultation'
        },
        hero: {
            title: 'Smart Automation Powered by AI - Transform Your Business Operations',
            description: 'AIWorldWideWorkforce delivers intelligent automation solutions to streamline your workflows, boost productivity, and reduce repetitive tasks.',
            button1: 'Get Started Today',
            button2: 'Learn More'
        },
        benefits: {
            title: 'Unlock Hidden Productivity in Your Daily Operations',
            subtitle: 'Let us help you automate routine tasks so you can focus on growth and customer success.',
            benefits: [
                { title: 'Cut manual work by 50%', description: 'Give your team more time for strategic priorities' },
                { title: 'Reduce costs by 30%', description: 'Optimize your resources efficiently' },
                { title: 'Double output', description: 'Achieve more with the same team' }
            ]
        },
        packages: {
            title: 'Our Packages for Smart Process Automation',
            subtitle: 'Flexible automation solutions tailored to your business size and needs'
        },
        cta: {
            title: 'Ready to reclaim your time and focus on growth?',
            description: 'Let us show you the biggest opportunities to save time and costs. Automate routine work and enjoy more focus and freedom.',
            button: 'Book Your Free Consultation'
        }
    },
    de: {
        nav: {
            home: 'Startseite',
            contact: 'Kontakt',
            bookConsultation: 'Beratung Buchen'
        },
        hero: {
            title: 'Digitalisieren, Optimieren und Automatisieren Sie Ihre Geschäftsprozesse',
            description: 'Manuelle Prozesse kosten Sie täglich Zeit und Geld. Wir automatisieren Ihre Abläufe, damit Sie schneller, intelligenter und profitabler arbeiten.',
            button1: 'Jetzt Starten & Effizienz Steigern',
            button2: 'Mehr Erfahren'
        },
        benefits: {
            title: 'Ihr größter versteckter Kostentreiber? Ihre täglichen Abläufe.',
            subtitle: 'Wir automatisieren Ihre Prozesse und geben Ihnen mehr Zeit für Wachstum, Kunden und Umsatz.',
            benefits: [
                { title: '50% Zeitersparnis', description: 'Automatisieren Sie sich wiederholende Aufgaben und gewinnen Sie wertvolle Mitarbeiterzeit zurück' },
                { title: '30% Kostenreduktion', description: 'Beseitigen Sie ineffiziente Abläufe und senken Sie Betriebskosten' },
                { title: '2x Schnelleres Wachstum', description: 'Konzentrieren Sie sich auf strategische Initiativen statt auf manuelle Prozesse' }
            ]
        },
        packages: {
            title: 'Unsere Pakete Für Intelligente Prozessautomatisierung',
            subtitle: 'Flexible Automatisierungslösungen, die auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind'
        },
        cta: {
            title: 'Bereit, Ihre Prozesse Zu Automatisieren?',
            description: 'Lassen Sie uns zeigen, wo Sie Zeit und Kosten sparen können. Automatisieren Sie Routineaufgaben und konzentrieren Sie sich auf das, was für Ihr Unternehmen am wichtigsten ist.',
            button: 'Kostenlose Beratung Buchen'
        }
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

// Update language function
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    const t = translations[lang];
    
    // Update navigation
    document.querySelectorAll('.nav-link')[0].textContent = t.nav.home;
    document.querySelectorAll('.nav-link')[1].textContent = t.nav.contact;
    document.querySelector('.consultation-btn').textContent = t.nav.bookConsultation;
    document.querySelector('.mobile-consultation-btn').textContent = t.nav.bookConsultation;
    
    // Update hero section
    document.querySelector('.hero-title-gradient').textContent = t.hero.title;
    document.querySelector('.hero-description').textContent = t.hero.description;
    document.querySelector('.btn-primary').innerHTML = `
        ${t.hero.button1}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12,5 19,12 12,19"/>
        </svg>
    `;
    document.querySelector('.btn-secondary').innerHTML = `
        ${t.hero.button2}
        <span class="emoji">🎯</span>
    `;
    
    // Update benefits section
    document.querySelector('.benefits .section-title').textContent = t.benefits.title;
    document.querySelector('.benefits .section-subtitle').textContent = t.benefits.subtitle;
    
    const benefitCards = document.querySelectorAll('.benefit-card');
    t.benefits.benefits.forEach((benefit, index) => {
        if (benefitCards[index]) {
            benefitCards[index].querySelector('.benefit-title').textContent = benefit.title;
            benefitCards[index].querySelector('.benefit-description').textContent = benefit.description;
        }
    });
    
    // Update packages section
    document.querySelector('.packages .section-title').textContent = t.packages.title;
    document.querySelector('.packages .section-subtitle').textContent = t.packages.subtitle;
    
    // Update CTA section
    document.querySelector('.cta-title').textContent = t.cta.title;
    document.querySelector('.cta-description').textContent = t.cta.description;
    document.querySelector('.cta-btn').textContent = t.cta.button;
    
    // Update language button
    document.querySelector('.language-btn').innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        ${lang.toUpperCase()}
    `;
}

// Language switcher events
languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.textContent.includes('English') ? 'en' : 'de';
        updateLanguage(lang);
        
        // Update active states
        languageOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
    });
});

mobileLangButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.textContent === 'EN' ? 'en' : 'de';
        updateLanguage(lang);
        
        // Update active states
        mobileLangButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Initialize language
updateLanguage(currentLanguage);

// Set active language states
document.querySelectorAll('.language-option').forEach(option => {
    if ((currentLanguage === 'en' && option.textContent.includes('English')) ||
        (currentLanguage === 'de' && option.textContent.includes('Deutsch'))) {
        option.classList.add('active');
    }
});

document.querySelectorAll('.mobile-lang-btn').forEach(button => {
    if ((currentLanguage === 'en' && button.textContent === 'EN') ||
        (currentLanguage === 'de' && button.textContent === 'DE')) {
        button.classList.add('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = body.classList.contains('dark') 
            ? 'rgba(10, 10, 10, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = body.classList.contains('dark') 
            ? 'rgba(10, 10, 10, 0.9)' 
            : 'rgba(255, 255, 255, 0.9)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.benefit-card, .package-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Package cards hover effect
const packageCards = document.querySelectorAll('.package-card');
packageCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'scale(1.05) translateY(-5px)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'scale(1) translateY(0)';
        }
    });
});

// Form submission (if you add forms later)
function handleFormSubmit(form) {
    // Prevent default form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For now, just show a success message
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitButton.textContent = 'Sent!';
            submitButton.classList.add('success');
            
            // Reset after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.classList.remove('success');
                form.reset();
            }, 3000);
        }, 1500);
    });
}

// Initialize any forms on the page
document.querySelectorAll('form').forEach(handleFormSubmit);

// Console message for developers
console.log('🚀 AIWorldWideWorkforce website loaded successfully!');
console.log('📧 Contact: admin@aiworldwideworkforce.com');
console.log('🌐 Visit: https://aiworldwideworkforce.com');
