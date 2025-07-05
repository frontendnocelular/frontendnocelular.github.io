class FuturisticPortfolio {
    constructor() {
        this.init();
    }

    init() {
        this.createParticles();
        this.setupSplashScreen();
        this.setupScrollAnimations();
        this.setupMouseEffects();
        this.setupResponsiveHandlers();
        this.initializePageSpecificFeatures();
    }

    createParticles() {
        const bgAnimation = document.querySelector('.bg-animation');
        if (!bgAnimation) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
            bgAnimation.appendChild(particle);
        }
    }

    setupSplashScreen() {
        const splashScreen = document.querySelector('.splash-screen');
        const mainContent = document.querySelector('.main-content');
        
        if (!splashScreen || !mainContent) return;

        setTimeout(() => {
            splashScreen.style.opacity = '0';
            splashScreen.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                splashScreen.style.display = 'none';
                mainContent.classList.add('show');
            }, 1000);
        }, 4000);
    }

    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });
    }

    setupMouseEffects() {
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.card, .tool-card');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            cards.forEach((card, index) => {
                const intensity = (index % 3 + 1) * 0.5;
                const xMove = (x - 0.5) * intensity;
                const yMove = (y - 0.5) * intensity;
                
                card.style.transform = `translate3d(${xMove}px, ${yMove}px, 0)`;
            });
        });
    }

    setupResponsiveHandlers() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }

    handleResize() {
        const isMobile = window.innerWidth <= 768;
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach(particle => {
            particle.style.animationDuration = isMobile ? '30s' : '20s';
        });
    }

    initializePageSpecificFeatures() {
        const currentPage = this.getCurrentPage();
        
        switch(currentPage) {
            case 'projetos':
                this.initProjectsPage();
                break;
            case 'ferramentas':
                this.initToolsPage();
                break;
            case 'sobre':
                this.initAboutPage();
                break;
            case 'contato':
                this.initContactPage();
                break;
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('projetos')) return 'projetos';
        if (path.includes('ferramentas')) return 'ferramentas';
        if (path.includes('sobre')) return 'sobre';
        if (path.includes('contato')) return 'contato';
        return 'inicio';
    }

    initProjectsPage() {
        const projects = [
            {
                title: "OFENTO APK",
                description: "Aplicativo mobile desenvolvido com tecnologia avançada para otimização de performance.",
                url: "https://www.mediafire.com/file/uubhpa1nws6n3wf/OFENTO.apk/file",
                icon: "📱"
            },
            {
                title: "LANDING PAGE",
                description: "Landing Page de uma plataforma de filmes e series.",
                url: "https://nuyzze.github.io/oprincipal.html",
                icon: "🖥️"
            },
            {
                title: "XFENTO",
                description: "Interface web interativa com design responsivo e funcionalidades inovadoras.",
                url: "https://nuyzze.github.io/xfento.html",
                icon: "🚀"
            },
            {
                title: "BIO SITE NUYZZE",
                description: "Página biografica profissional com design moderno e animações fluidas.",
                url: "https://servboca.github.io/biositenuyzze.html",
                icon: "👤"
            },
            {
                title: "TRABALHADORES",
                description: "Plataforma dedicada à gestão e organização de recursos humanos.",
                url: "https://servboca.github.io/trabalhadores.html",
                icon: "👥"
            },
            {
                title: "CRISTO",
                description: "Website temático com conteúdo religioso e interface contemplativa.",
                url: "https://nuyzze.github.io/cristo.html",
                icon: "✝️"
            },
            {
                title: "PRINCIPAL",
                description: "Portal principal com navegação centralizada e design corporativo.",
                url: "https://servboca.github.io/principal.html",
                icon: "🏠"
            },
            {
                title: "PORTFÓLIO PRIME",
                description: "Showcase premium de projetos com galeria interativa avançada.",
                url: "https://nuyzze.github.io/portifolioprime.html",
                icon: "💎"
            },
            {
                title: "NUYZZE LIST",
                description: "Sistema de listas inteligente com funcionalidades de organização.",
                url: "https://nuyzze.github.io/Nuyzzelist.html",
                icon: "📝"
            },
            {
                title: "NUYZZE MAIN",
                description: "Site principal da marca com identidade visual consolidada.",
                url: "https://nuyzze.github.io/nuyzze.html",
                icon: "⭐"
            },
            {
                title: "TELINHA LOVE",
                description: "Aplicação romântica com interface delicada e funcionalidades especiais.",
                url: "https://nuyzze.github.io/telinhalove.html",
                icon: "💖"
            },
            {
                title: "PRATI",
                description: "Site romântico e engraçado.",
                url: "https://nuyzze.github.io/prati.html",
                icon: "❣️"
            }
        ];

        const projectsGrid = document.querySelector('.grid-container');
        if (!projectsGrid) return;

        projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'card scroll-animate';
            card.style.animationDelay = (index * 0.1) + 's';
            
            card.innerHTML = `
                <div class="card-content">
                    <div class="card-icon">${project.icon}</div>
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-description">${project.description}</p>
                    <button class="btn" onclick="window.open('${project.url}', '_blank')">
                        ACESSAR PROJETO
                    </button>
                </div>
            `;
            
            projectsGrid.appendChild(card);
        });
    }

    initToolsPage() {
        const tools = [
            { name: 'Glow Effect', icon: '✨', effect: 'glow' },
            { name: 'Parallax', icon: '📐', effect: 'parallax' },
            { name: 'Neon Border', icon: '🔲', effect: 'neonBorder' },
            { name: 'Pulse Animation', icon: '💓', effect: 'pulse' },
            { name: 'Glitch Text', icon: '🔥', effect: 'glitch' },
            { name: 'Floating', icon: '🎈', effect: 'floating' },
            { name: 'Morph', icon: '🔄', effect: 'morph' },
            { name: 'Particle', icon: '⚡', effect: 'particle' },
            { name: 'Hologram', icon: '🌀', effect: 'hologram' },
            { name: 'Matrix', icon: '🔢', effect: 'matrix' }
        ];

        const toolsGrid = document.querySelector('.tools-grid');
        if (!toolsGrid) return;

        tools.forEach((tool, index) => {
            const card = document.createElement('div');
            card.className = 'tool-card scroll-animate';
            card.style.animationDelay = (index * 0.1) + 's';
            
            card.innerHTML = `
                <div class="tool-icon">${tool.icon}</div>
                <h3 class="tool-name">${tool.name}</h3>
            `;
            
            card.addEventListener('click', () => {
                this.showToolDemo(tool);
            });
            
            toolsGrid.appendChild(card);
        });
    }

    showToolDemo(tool) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <h3 class="card-title">${tool.name}</h3>
                <div class="demo-container" id="demo-${tool.effect}">
                    <div class="demo-element ${tool.effect}">
                        Demonstração do efeito ${tool.name}
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBtn.click();
            }
        });
    }

    initAboutPage() {
        const skills = [
            { name: 'Java', icon: '☕' },
            { name: 'HTML5', icon: '🌐' },
            { name: 'CSS3', icon: '🎨' },
            { name: 'JavaScript', icon: '⚡' },
            { name: 'Python', icon: '🐍' },
            { name: 'React.js', icon: '⚛️' }
        ];

        const skillsTrack = document.querySelector('.skills-track');
        if (!skillsTrack) return;

        skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-name">${skill.name}</div>
            `;
            skillsTrack.appendChild(skillItem);
        });

        skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-name">${skill.name}</div>
            `;
            skillsTrack.appendChild(skillItem);
        });

        this.setupCarouselControls();
    }

    setupCarouselControls() {
        const carousel = document.querySelector('.skills-carousel');
        if (!carousel) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('active');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.classList.remove('active');
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.classList.remove('active');
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('touchmove', (e) => {
            const x = e.touches[0].clientX;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    }

    initContactPage() {
        const contactButtons = document.querySelectorAll('.contact-btn');
        
        contactButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.left = e.offsetX + 'px';
                ripple.style.top = e.offsetY + 'px';
                btn.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                setTimeout(() => {
                    if (btn.href) {
                        window.open(btn.href, '_blank');
                    }
                }, 200);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FuturisticPortfolio();
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});