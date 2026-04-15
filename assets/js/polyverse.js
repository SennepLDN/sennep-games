/* Scroll-triggered entrance animations */
(function () {
    var elements = document.querySelectorAll('.animate-in');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0,
        rootMargin: '0px 0px -10% 0px'
    });

    elements.forEach(function (el) {
        observer.observe(el);
    });
})();

/* Logo colour mask — desktop only, re-evaluates on resize */
(function () {
    var lightLogo = document.querySelector('.hero__logo--light');
    var miniLogo = document.querySelector('.hero__logo--mini');
    var darkLogo = document.querySelector('.hero__logo--dark');
    var sections = document.querySelectorAll('.page > :not(.hero)');
    var footer = document.querySelector('.footer');
    var currentMask = null;
    var prevMask = null;
    var isWide = false;

    function resetLogos() {
        [lightLogo, miniLogo].forEach(function (el) {
            if (!el) return;
            el.style.clipPath = 'inset(100% 0 0 0)';
            el.style.transform = '';
            el.style.transition = '';
        });
        if (darkLogo) darkLogo.style.opacity = '1';
    }

    function setup() {
        if (window.innerWidth < 834) {
            resetLogos();
            currentMask = null;
            return;
        }

        isWide = window.innerWidth >= 1440;
        var newMask = isWide ? lightLogo : miniLogo;

        if (newMask !== prevMask) {
            resetLogos();
            prevMask = newMask;
        }

        currentMask = newMask;

        var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reducedMotion && currentMask) {
            currentMask.style.clipPath = 'none';
            currentMask = null;
        }
    }

    function updateMask() {
        if (!currentMask) return;

        var logoTop = 40;
        var logoBottom = 113;
        var topClip = 100;
        var found = false;

        sections.forEach(function (section) {
            var rect = section.getBoundingClientRect();
            if (rect.top < logoBottom && rect.bottom > logoTop) {
                var sectionTop = Math.max(rect.top, logoTop);
                var clip = Math.max(0, ((sectionTop - logoTop) / (logoBottom - logoTop)) * 100);
                if (!found || clip < topClip) topClip = clip;
                found = true;
            }
        });

        if (footer) {
            var fRect = footer.getBoundingClientRect();
            if (fRect.top < logoBottom && fRect.bottom > logoTop) {
                var fClip = Math.max(0, ((Math.max(fRect.top, logoTop) - logoTop) / (logoBottom - logoTop)) * 100);
                if (!found || fClip < topClip) topClip = fClip;
                found = true;
            }
        }

        currentMask.style.clipPath = found
            ? 'inset(' + topClip + '% 0 0 0)'
            : 'inset(100% 0 0 0)';

        if (darkLogo && !isWide) {
            darkLogo.style.opacity = (found && topClip === 0) ? '0' : '1';
        }

        if (!isWide) {
            if (found && topClip === 0) {
                currentMask.style.transition = 'transform 400ms ease-out';
                currentMask.style.transform = 'translateX(-30px)';
            } else {
                currentMask.style.transition = 'transform 300ms ease-in';
                currentMask.style.transform = 'translateX(0)';
            }
        }
    }

    var resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            setup();
            updateMask();
        }, 100);
    });

    window.addEventListener('scroll', updateMask, { passive: true });
    setup();
    updateMask();
})();
