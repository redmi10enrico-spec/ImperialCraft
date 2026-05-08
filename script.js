
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
});

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function copyServerIP() {
    const serverIP = document.getElementById('server-ip').textContent;
    const notification = document.getElementById('copy-notification');
    
    navigator.clipboard.writeText(serverIP).then(function() {
        notification.classList.add('show');
        
        playClickSound();
        
        setTimeout(function() {
            notification.classList.remove('show');
        }, 3000);
    }).catch(function(err) {
        fallbackCopyToClipboard(serverIP);
    });
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        const notification = document.getElementById('copy-notification');
        notification.classList.add('show');
        setTimeout(function() {
            notification.classList.remove('show');
        }, 3000);
    } catch(err) {
        console.error('Errore nella copia:', err);
    }
    
    document.body.removeChild(textArea);
}

function playClickSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch(e) {
    }
}

function toggleFAQ(header) {
    const faqItem = header.parentElement;
    const faqContent = faqItem.querySelector('.faq-content');
    const toggleIcon = header.querySelector('.faq-toggle');
    
    const allFAQs = document.querySelectorAll('.faq-item');
    allFAQs.forEach(faq => {
        if (faq !== faqItem) {
            const otherContent = faq.querySelector('.faq-content');
            const otherToggle = faq.querySelector('.faq-toggle');
            otherContent.classList.remove('active');
            otherToggle.classList.remove('active');
        }
    });
    
    faqContent.classList.toggle('active');
    toggleIcon.classList.toggle('active');
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -30% 0px'
    };

    const animationMap = {
        '.section-title': 'animate-fade-down',
        '.feature-card': 'animate-slide-right',
        '.feature-card:nth-child(odd)': 'animate-slide-left',
        '.staff-card': 'animate-bounce',
        '.staff-card:nth-child(even)': 'animate-scale',
        '.faq-item': 'animate-fade-up',
        '.modulistica-card': 'animate-glow',
        '.modulistica-card:nth-child(1)': 'animate-slide-left',
        '.modulistica-card:nth-child(2)': 'animate-scale',
        '.modulistica-card:nth-child(3)': 'animate-slide-right',
        '.vote-button': 'animate-bounce',
        '.vote-content': 'animate-fade-up',
        '.parchment-card': 'animate-rotate',
        '.social-channels-card': 'animate-slide-up',
        '.lore-text': 'animate-slide-left',
        '.lore-image': 'animate-slide-right',
        '.imperial-emblem': 'animate-rotate'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('animated')) {
                    return;
                }
                
                let animationClass = 'animate-fade-up';
                
                if (entry.target.classList.contains('feature-card')) {
                    animationClass = entry.target.parentElement.children[0] === entry.target 
                        ? 'animate-slide-left' 
                        : 'animate-slide-right';
                } else if (entry.target.classList.contains('staff-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    animationClass = index % 2 === 0 ? 'animate-bounce' : 'animate-scale';
                } else if (entry.target.classList.contains('faq-item')) {
                    animationClass = 'animate-fade-up';
                } else if (entry.target.classList.contains('modulistica-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    animationClass = index === 0 ? 'animate-slide-left' : index === 1 ? 'animate-scale' : 'animate-slide-right';
                } else if (entry.target.classList.contains('section-title')) {
                    animationClass = 'animate-fade-down';
                } else if (entry.target.classList.contains('parchment-card')) {
                    animationClass = 'animate-rotate';
                } else if (entry.target.classList.contains('lore-text')) {
                    animationClass = 'animate-slide-left';
                } else if (entry.target.classList.contains('lore-image')) {
                    animationClass = 'animate-slide-right';
                } else if (entry.target.classList.contains('vote-content')) {
                    animationClass = 'animate-fade-up';
                } else if (entry.target.classList.contains('imperial-emblem')) {
                    animationClass = 'animate-rotate';
                }

                const delayIndex = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                const delayClass = `delay-${Math.min(delayIndex + 1, 5)}`;
                
                entry.target.classList.add(animationClass, delayClass, 'animated');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.feature-card, .staff-card, .gallery-item, .faq-item, .section-title, .modulistica-card, .vote-content, .parchment-card, .lore-text, .lore-image'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 32px rgba(212, 175, 55, 0.2)';
    } else {
        navbar.style.boxShadow = '0 8px 32px rgba(212, 175, 55, 0.2)';
    }
});

function initializeParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', function() {
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax');
            element.style.transform = `translateY(${window.scrollY * speed}px)`;
        });
    });
}

function addHoverGlowEffect() {
    const glowElements = document.querySelectorAll(
        '.feature-card, .staff-card, .cta-button'
    );
    
    glowElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
        });
    });
}

function initializeEasterEgg() {
    const logo = document.querySelector('.logo');
    let clickCount = 0;
    
    logo.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 3) {
            document.body.style.filter = 'hue-rotate(15deg)';
            showEasterEggMessage();
            clickCount = 0;
            
            setTimeout(function() {
                document.body.style.filter = 'hue-rotate(0deg)';
            }, 5000);
        }
    });
}

function showEasterEggMessage() {
    const message = document.createElement('div');
    message.textContent = '🌟 "La grandezza è una scelta, non un destino!" 🌟';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #d4af37, #f0e68c);
        color: #0a0a0a;
        padding: 30px 50px;
        border-radius: 10px;
        font-size: 1.3rem;
        font-weight: bold;
        z-index: 2000;
        animation: popIn 0.5s ease;
        font-family: Georgia, serif;
        text-align: center;
        max-width: 90%;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(function() {
        message.style.animation = 'popOut 0.5s ease';
        setTimeout(function() {
            document.body.removeChild(message);
        }, 500);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes popOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

initializeEasterEgg();

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

document.addEventListener('click', function(e) {
    if (e.target.textContent.includes('Copia')) {
        trackEvent('Engagement', 'Copy IP', 'Server IP Copied');
    }
    if (e.target.textContent.includes('Accedi')) {
        trackEvent('Engagement', 'CTA Click', 'Enter Kingdom Button');
    }
});

function smoothScroll(target, duration = 1000) {
    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    let start = null;

    window.requestAnimationFrame(function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const scrollPosition = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        
        window.scrollTo(0, scrollPosition);
        
        if (timeElapsed < duration) {
            window.requestAnimationFrame(animation);
        }
    });
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const perf = window.performance.timing;
        const pageLoadTime = perf.loadEventEnd - perf.navigationStart;
        console.log('Page Load Time: ' + pageLoadTime + 'ms');
    }
});

function initializeThemeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    });
}


console.log('🏰 ImperialCraft - Benvenuto nel Regno! 🏰');
console.log('La grandezza è qui, la magnificenza è tua!');
