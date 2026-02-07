document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTS ---
    const bootScreen = document.getElementById('boot-screen');
    const mainInterface = document.getElementById('main-interface');
    const loaderBar = document.querySelector('.bar-fill');
    const loaderText = document.querySelector('.loader-text');
    const securityOverlay = document.getElementById('security-overlay');
    const failureScreen = document.getElementById('failure-screen');
    const soulKey = document.getElementById('soul-key');
    const unlockBtn = document.getElementById('unlock-btn');

    // --- STATE ---
    let loadProgress = 0;
    let loadingInterval;
    const INTERRUPT_POINT = 36; // Percent to stop at

    // --- SEQUENCE START ---
    document.body.style.overflow = 'hidden';
    startBootSequence();

    function startBootSequence() {
        // Show initial lines
        setTimeout(() => { const el = document.getElementById('line1'); if (el) el.classList.add('visible'); }, 500);
        setTimeout(() => { const el = document.getElementById('line2'); if (el) el.classList.add('visible'); }, 1500);
        setTimeout(() => { const el = document.getElementById('line3'); if (el) el.classList.add('visible'); }, 2500);

        // Start Loading Bar
        setTimeout(() => {
            const bar = document.querySelector('.loader-bar');
            if (bar) {
                bar.classList.add('active');
                runLoader();
            }
        }, 3000);
    }

    function runLoader() {
        loadingInterval = setInterval(() => {
            loadProgress++;
            if (loaderBar) loaderBar.style.width = `${loadProgress}%`;
            if (loaderText) loaderText.textContent = `${loadProgress}%`;

            // INTERRUPT
            if (loadProgress >= INTERRUPT_POINT) {
                clearInterval(loadingInterval);
                triggerInterrupt();
            }
        }, 50); // Speed of initial load
    }

    function triggerInterrupt() {
        // Glitch effect (if any CSS class exists)
        document.body.classList.add('glitch-effect');

        // Show error lines
        setTimeout(() => {
            const l1 = document.getElementById('int-line1');
            if (l1) { l1.classList.remove('hidden'); l1.classList.add('visible'); }
        }, 200);

        setTimeout(() => {
            const l2 = document.getElementById('int-line2');
            if (l2) { l2.classList.remove('hidden'); l2.classList.add('visible'); }
        }, 800);

        // Transition to Auth
        setTimeout(() => {
            if (securityOverlay) {
                securityOverlay.classList.add('active');
                if (soulKey) soulKey.focus();
            }
        }, 2000);
    }

    function resumeLoading() {
        // Hide auth
        if (securityOverlay) securityOverlay.classList.remove('active');
        const l1 = document.getElementById('int-line1');
        const l2 = document.getElementById('int-line2');
        if (l1) l1.style.display = 'none';
        if (l2) l2.style.display = 'none';

        // Check for success overlay (green emoji) and hide it just in case
        const successOverlay = document.getElementById('success-overlay');
        // Let it fade out on its own via handleAuth timeout, or hide here if needed.
        // User said "emoji appears briefly", so handleAuth timeout is fine.

        // Resume bar
        // Resume bar
        loadingInterval = setInterval(() => {
            loadProgress++;
            if (loaderBar) loaderBar.style.width = `${loadProgress}%`;
            if (loaderText) loaderText.textContent = `${loadProgress}%`;

            // Logic for text update >= 95%
            if (loadProgress >= 95) {
                const identityEl = document.getElementById('identity-confirmed');
                if (identityEl && !identityEl.classList.contains('visible')) {
                    identityEl.classList.add('visible');
                    // Use existing decryptText function if available
                    if (typeof decryptText === 'function') {
                        decryptText(identityEl);
                    } else {
                        identityEl.innerText = identityEl.dataset.text;
                    }
                }
            }

            if (loadProgress >= 100) {
                clearInterval(loadingInterval);
                // Delay completion to let user read
                setTimeout(completeBoot, 1500);
            }
        }, 30); // Faster resume speed
    }

    function completeBoot() {
        setTimeout(() => {
            if (bootScreen) bootScreen.classList.add('fade-out');
            if (mainInterface) {
                mainInterface.classList.remove('hidden');
                mainInterface.classList.add('unlocked');
            }
            document.body.style.overflow = 'auto'; // Unlock scroll

            // Start background tasks
            initSystem();
        }, 500);
    }

    function handleAuth() {
        if (!soulKey) return;
        const code = soulKey.value.trim().toUpperCase();

        if (code === "PROMETHEUS") {
            // SUCCESS
            // 1. STOP ALL SHAKE/GLITCH IMMEDIATELY
            document.body.classList.remove('glitch-effect');
            document.body.style.animation = 'none';

            // 2. GREEN EMOJI
            const successOverlay = document.getElementById('success-overlay');
            if (successOverlay) {
                successOverlay.classList.remove('hidden');
                setTimeout(() => successOverlay.classList.add('hidden'), 1500);
            }

            // Hide Auth UI
            if (securityOverlay) securityOverlay.classList.remove('active');

            // 3. RESUME
            resumeLoading();
        } else {
            // CRITICAL FAILURE
            triggerFailure();
        }
    }

    function triggerFailure() {
        // 1. STOP EVERYTHING
        clearInterval(loadingInterval);

        // 2. PLAY AUDIO (Provided MP3)
        // strict order: Audio -> Skull -> Noise -> Blackout
        const audio = new Audio('Alarm Sound/alarm.mp3.mp3');
        audio.volume = 1.0;
        audio.loop = false;

        // Play once, handle errors
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error("Audio playback failed:", error);
            });
        }

        // 3. SHOW SKULL (Static, No Glow)
        if (securityOverlay) securityOverlay.style.display = 'none';
        if (bootScreen) bootScreen.style.display = 'none';

        if (failureScreen) {
            failureScreen.classList.add('active');

            // Start Canvas Animation
            const skullCanvas = document.getElementById('skull-canvas');
            if (skullCanvas) new SkullAnimator(skullCanvas);

            // 4. TRIGGER CRT NOISE (Immediate)
            const noise = document.querySelector('.crt-noise');
            if (noise) noise.classList.add('active');

            // NO BLACKOUT - System stays visible in failure state
        }
    }

    // REMOVED SYNTHESIZED AUDIO FUNCTION

    // --- LISTENERS ---
    if (unlockBtn) unlockBtn.addEventListener('click', handleAuth);
    if (soulKey) soulKey.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAuth();
    });

    // Disable right click during lock (Immersion)
    document.addEventListener('contextmenu', event => event.preventDefault());


    // --- BACKGROUND TASKS (Clock, Animations) ---
    function initSystem() {
        // --- CLOCK UPDATE ---
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour12: false });
            const clockEl = document.getElementById('clock');
            if (clockEl) clockEl.textContent = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // --- TYPING EFFECT FOOTER ---
        const typingTexts = [
            "SEARCHING_DATABASE...",
            "RECONSTRUCTING_MEMORY_FILES...",
            "ANALYZING_BIOMETRICS: STABLE...",
            "CREATOR_SIGNAL: NOT_FOUND...",
            "AWAITING_INPUT..."
        ];
        const typeElement = document.querySelector('.cmd-line');
        const cursor = document.getElementById('typing-cursor');

        function typeLog() {
            if (!typeElement || !cursor) return;
            const text = typingTexts[Math.floor(Math.random() * typingTexts.length)];
            const span = document.createElement('span');
            span.textContent = text;
            span.style.marginLeft = "10px";
            span.style.color = "#555";

            const oldLog = typeElement.querySelector('span:not(.prompt):not(.cursor)');
            if (oldLog) oldLog.remove();

            typeElement.insertBefore(span, cursor);
        }
        setInterval(typeLog, 4000);
        typeLog();

        // --- INTERSECTION OBSERVER ---
        setupObserver();
    }

    // --- DECRYPTION TEXT EFFECT ---
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    function decryptText(element) {
        let iterations = 0;
        const originalText = element.dataset.text;
        if (!originalText) return;

        const interval = setInterval(() => {
            element.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iterations >= originalText.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);
    }

    function setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.add('active-focus');

                    const title = entry.target.querySelector('.block-title');
                    if (title && !title.classList.contains('decrypted')) {
                        decryptText(title);
                        title.classList.add('decrypted');
                    }
                } else {
                    entry.target.classList.remove('active-focus');
                }
            });
        }, { threshold: 0.3 }); // Trigger when 30% visible

        const blocks = document.querySelectorAll('.memory-block');
        blocks.forEach(block => {
            observer.observe(block);
        });
        const stream = document.querySelector('.memory-stream');
        if (stream) observer.observe(stream);
    }

    // Initialize Necklace
    const necklaceCanvas = document.getElementById('necklace-canvas');
    if (necklaceCanvas) {
        new NecklaceAnimator(necklaceCanvas);
    }
});

/**
 * Handles the frame-by-frame animation of the skull.
 */
class SkullAnimator {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        // Correct path based on file list
        this.frameBase = 'Skull/_MConverter.eu_grok_video_2026-02-07-12-30-52-';
        this.frameCount = 145; // Based on file list (roughly)
        this.images = [];
        this.currentFrame = 0;
        this.loadedCount = 0;
        this.fps = 24;
        this.lastDrawTime = 0;
        this.isPlaying = false;

        this.preloadImages();
    }

    preloadImages() {
        for (let i = 1; i <= this.frameCount; i++) {
            const img = new Image();
            img.src = `${this.frameBase}${i}.png`;
            img.onload = () => this.checkLoad();
            img.onerror = () => this.checkLoad();
            this.images.push(img);
        }
    }

    checkLoad() {
        this.loadedCount++;
        if (this.loadedCount === this.frameCount) {
            this.startAnimation();
        }
    }

    startAnimation() {
        this.isPlaying = true;
        this.animate();
    }

    animate(timestamp) {
        if (!this.isPlaying) return;

        if (!this.lastDrawTime) this.lastDrawTime = timestamp;
        const progress = timestamp - this.lastDrawTime;

        if (progress > (1000 / this.fps)) {
            this.drawFrame();
            this.lastDrawTime = timestamp;
        }

        requestAnimationFrame((t) => this.animate(t));
    }

    drawFrame() {
        // Find image index (array is 0-indexed, files are 1-indexed usually, but pushed in order)
        // Actually images[] has 145 items.
        // If files are ...-1.png to ...-145.png, loop pushes them in order.

        if (this.currentFrame >= this.images.length) this.currentFrame = 0;

        const img = this.images[this.currentFrame];

        if (img && img.complete && img.naturalWidth > 0) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        }

        this.currentFrame++;
    }
}


/**
 * Handles the frame-by-frame animation of the necklace artifact.
 */
class NecklaceAnimator {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.frameBase = 'necklace/_MConverter.eu_grok_video_2026-02-07-10-52-03-';
        this.frameCount = 145; // Total frames found in directory
        this.images = [];
        this.currentFrame = 0;
        this.loadedCount = 0;
        this.fps = 24; // Desired playback speed
        this.lastDrawTime = 0;
        this.isPlaying = false;

        // Start loading immediately
        this.preloadImages();
    }

    preloadImages() {
        for (let i = 1; i <= this.frameCount; i++) {
            const img = new Image();
            img.src = `${this.frameBase}${i}.png`;
            img.onload = () => {
                this.loadedCount++;
                if (this.loadedCount === this.frameCount) {
                    this.startAnimation();
                }
            };
            img.onerror = () => {
                this.loadedCount++; // Count errors too so we don't stall
                if (this.loadedCount === this.frameCount) {
                    this.startAnimation();
                }
            };
            this.images.push(img);
        }
    }

    startAnimation() {
        const container = this.canvas.parentElement;
        if (container) container.classList.add('loaded');

        this.isPlaying = true;
        this.animate();
    }

    animate(timestamp) {
        if (!this.isPlaying) return;

        // Throttling to target FPS
        if (!this.lastDrawTime) this.lastDrawTime = timestamp;
        const progress = timestamp - this.lastDrawTime;

        if (progress > (1000 / this.fps)) {
            this.drawFrame();
            this.lastDrawTime = timestamp;
        }

        requestAnimationFrame((t) => this.animate(t));
    }

    drawFrame() {
        const img = this.images[this.currentFrame];

        // Ensure image exists before drawing
        if (img && img.complete && img.naturalWidth > 0) {
            // Clear canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // Draw image scaled to fit canvas while maintaining aspect ratio
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        }

        // Advance frame
        this.currentFrame++;
        if (this.currentFrame >= this.frameCount) {
            this.currentFrame = 0; // Loop
        }
    }
}
