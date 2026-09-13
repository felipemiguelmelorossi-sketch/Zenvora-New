* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg: #050508;
    --bg-soft: #0a0a10;
    --card: rgba(18, 18, 28, 0.72);
    --card-solid: #11111a;
    --border: rgba(255, 255, 255, 0.09);
    --border-hover: rgba(255, 255, 255, 0.18);

    --white: #ffffff;
    --text: #f5f5fa;
    --muted: #9696a8;

    --purple: #8b5cf6;
    --purple-light: #a78bfa;
    --blue: #22d3ee;
    --pink: #ec4899;

    --gradient: linear-gradient(
        135deg,
        #8b5cf6 0%,
        #6366f1 45%,
        #22d3ee 100%
    );

    --radius: 22px;
    --radius-small: 14px;

    --shadow: 0 25px 80px rgba(0, 0, 0, 0.45);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

    background: var(--bg);
    color: var(--text);

    min-height: 100vh;

    line-height: 1.5;

    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input {
    font: inherit;
}

button {
    border: none;
}

::selection {
    background: rgba(139, 92, 246, 0.35);
    color: #fff;
}


/* =========================================================
   BACKGROUND
========================================================= */

.background-effects {
    position: fixed;
    inset: 0;

    pointer-events: none;

    overflow: hidden;

    z-index: -1;
}

.grid-background {
    position: absolute;
    inset: 0;

    opacity: 0.25;

    background-image:
        linear-gradient(
            rgba(255,255,255,0.035) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,0.035) 1px,
            transparent 1px
        );

    background-size: 55px 55px;

    mask-image: linear-gradient(
        to bottom,
        black,
        transparent 85%
    );
}

.glow {
    position: absolute;

    border-radius: 999px;

    filter: blur(110px);

    opacity: 0.22;
}

.glow-purple {
    width: 600px;
    height: 600px;

    background: #7c3aed;

    top: -250px;
    left: -150px;
}

.glow-blue {
    width: 500px;
    height: 500px;

    background: #0891b2;

    right: -150px;
    top: 300px;

    opacity: 0.13;
}


/* =========================================================
   BUTTONS
========================================================= */

.btn {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 10px;

    min-height: 46px;

    padding: 0 20px;

    border-radius: 13px;

    font-size: 14px;
    font-weight: 700;

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease;

    cursor: pointer;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn-primary {
    color: #fff;

    background: var(--gradient);

    box-shadow:
        0 12px 35px rgba(99, 102, 241, 0.25);
}

.btn-primary:hover {
    box-shadow:
        0 16px 45px rgba(99, 102, 241, 0.38);
}

.btn-ghost {
    color: #dddde7;

    background: rgba(255,255,255,0.045);

    border: 1px solid var(--border);

    backdrop-filter: blur(14px);
}

.btn-ghost:hover {
    border-color: var(--border-hover);

    background: rgba(255,255,255,0.075);
}

.btn-large {
    min-height: 55px;

    padding: 0 25px;

    border-radius: 15px;

    font-size: 15px;
}

.btn-full {
    width: 100%;
}


/* =========================================================
   NAVBAR
========================================================= */

.navbar {
    width: 100%;

    max-width: 1320px;

    margin: 0 auto;

    padding: 26px 30px;

    display: flex;

    align-items: center;
    justify-content: space-between;

    position: relative;

    z-index: 20;
}

.logo,
.auth-logo {
    font-size: 19px;

    font-weight: 900;

    letter-spacing: 0.18em;

    color: #fff;
}

.logo {
    transition: opacity 0.2s ease;
}

.logo:hover {
    opacity: 0.75;
}

.nav-buttons {
    display: flex;

    align-items: center;

    gap: 10px;
}


/* =========================================================
   HERO
========================================================= */

.hero {
    width: 100%;

    max-width: 1320px;

    margin: 0 auto;

    padding:
        80px 30px
        120px;

    display: grid;

    grid-template-columns:
        minmax(0, 0.9fr)
        minmax(500px, 1.1fr);

    align-items: center;

    gap: 70px;

    min-height: 720px;
}

.hero-content {
    position: relative;

    z-index: 2;
}

.eyebrow {
    display: inline-flex;

    align-items: center;

    color: #a9a9ba;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 0.18em;

    margin-bottom: 20px;
}

.eyebrow::before {
    content: "";

    width: 25px;
    height: 1px;

    margin-right: 10px;

    background: var(--purple-light);
}

.hero h1 {
    max-width: 720px;

    font-size:
        clamp(52px, 7vw, 88px);

    line-height: 0.98;

    letter-spacing: -0.055em;

    font-weight: 850;

    margin-bottom: 28px;
}

.hero h1 span {
    background:
        linear-gradient(
            100deg,
            #a78bfa,
            #818cf8,
            #22d3ee
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.hero-content > p {
    max-width: 600px;

    color: var(--muted);

    font-size: 18px;

    line-height: 1.75;

    margin-bottom: 34px;
}

.hero-actions {
    display: flex;

    flex-wrap: wrap;

    gap: 12px;
}

.hero-proof {
    display: flex;

    flex-wrap: wrap;

    gap: 14px 22px;

    margin-top: 30px;

    color: #777789;

    font-size: 12px;
}

.hero-proof span {
    white-space: nowrap;
}


/* =========================================================
   APP PREVIEW
========================================================= */

.preview-shell {
    position: relative;

    width: 100%;

    min-height: 430px;

    border: 1px solid rgba(255,255,255,0.1);

    border-radius: 26px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.075),
            rgba(255,255,255,0.025)
        );

    box-shadow:
        var(--shadow),
        0 0 100px rgba(99,102,241,0.08);

    overflow: hidden;

    backdrop-filter: blur(20px);

    transform:
        perspective(1200px)
        rotateY(-4deg)
        rotateX(2deg);
}

.preview-shell::before {
    content: "";

    position: absolute;

    width: 250px;
    height: 250px;

    right: -100px;
    top: -100px;

    background: #8b5cf6;

    filter: blur(100px);

    opacity: 0.16;
}

.preview-top {
    height: 47px;

    display: flex;

    align-items: center;

    justify-content: center;

    position: relative;

    border-bottom: 1px solid var(--border);

    color: #777789;

    font-size: 10px;

    letter-spacing: 0.2em;
}

.window-dots {
    position: absolute;

    left: 18px;

    display: flex;

    gap: 6px;
}

.window-dots span {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #484854;
}

.preview-body {
    display: flex;

    min-height: 385px;
}

.preview-sidebar {
    width: 145px;

    flex-shrink: 0;

    padding: 24px 12px;

    border-right: 1px solid var(--border);

    background: rgba(0,0,0,0.12);
}

.preview-logo {
    font-size: 11px;

    font-weight: 900;

    letter-spacing: 0.14em;

    padding: 0 9px 25px;
}

.preview-menu {
    display: flex;

    align-items: center;

    gap: 9px;

    color: #727281;

    font-size: 10px;

    padding: 10px;

    border-radius: 9px;

    margin-bottom: 5px;
}

.preview-menu span {
    font-size: 13px;
}

.preview-menu.active {
    color: white;

    background:
        rgba(139,92,246,0.15);

    border: 1px solid rgba(139,92,246,0.16);
}

.preview-content {
    flex: 1;

    padding: 28px;
}

.preview-heading small {
    font-size: 8px;

    letter-spacing: 0.16em;

    color: #747484;
}

.preview-heading h3 {
    font-size: 21px;

    margin-top: 4px;

    letter-spacing: -0.03em;
}

.preview-cards {
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 12px;

    margin-top: 23px;
}

.preview-card {
    min-width: 0;

    padding-bottom: 13px;

    border: 1px solid var(--border);

    background: rgba(255,255,255,0.025);

    border-radius: 14px;

    overflow: hidden;
}

.preview-image {
    height: 110px;

    display: flex;

    align-items: center;

    justify-content: center;

    position: relative;

    overflow: hidden;
}

.preview-image::before {
    content: "";

    width: 70px;
    height: 70px;

    border-radius: 50%;

    background: rgba(255,255,255,0.15);

    filter: blur(12px);
}

.preview-image span {
    position: absolute;

    font-size: 26px;

    font-weight: 900;

    color: rgba(255,255,255,0.85);
}

.preview-purple {
    background:
        radial-gradient(
            circle at 50% 40%,
            #8b5cf6,
            #26164d 70%
        );
}

.preview-blue {
    background:
        radial-gradient(
            circle at 50% 40%,
            #22d3ee,
            #103a4a 70%
        );
}

.preview-pink {
    background:
        radial-gradient(
            circle at 50% 40%,
            #ec4899,
            #45132f 70%
        );
}

.preview-card > small {
    display: block;

    margin:
        12px 12px
        5px;

    color: #777789;

    font-size: 7px;

    letter-spacing: 0.12em;

    font-weight: 800;
}

.preview-card h4 {
    padding: 0 12px;

    font-size: 11px;

    line-height: 1.35;
}

.match {
    display: inline-block;

    margin: 9px 12px 0;

    color: #6dddf4;

    font-size: 8px;

    font-weight: 700;
}


/* =========================================================
   LANDING SECTION
========================================================= */

.landing-section {
    max-width: 1200px;

    margin: 0 auto;

    padding:
        100px 30px
        120px;
}

.section-title {
    max-width: 650px;

    margin-bottom: 55px;
}

.section-title > span {
    color: #8f8fa1;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 0.18em;
}

.section-title h2 {
    font-size:
        clamp(35px, 5vw, 58px);

    line-height: 1.05;

    letter-spacing: -0.045em;

    margin-top: 13px;
}

.section-title p {
    color: var(--muted);

    margin-top: 18px;

    max-width: 530px;
}

.steps {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 15px;
}

.step-card {
    position: relative;

    min-height: 270px;

    padding: 28px;

    border: 1px solid var(--border);

    border-radius: var(--radius);

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.045),
            rgba(255,255,255,0.015)
        );

    transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        background 0.25s ease;
}

.step-card:hover {
    transform: translateY(-5px);

    border-color:
        rgba(139,92,246,0.3);

    background:
        linear-gradient(
            145deg,
            rgba(139,92,246,0.08),
            rgba(255,255,255,0.02)
        );
}

.step-number {
    color: #555563;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 0.1em;
}

.step-icon {
    width: 50px;
    height: 50px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin:
        35px 0
        20px;

    border-radius: 14px;

    color: #fff;

    font-size: 20px;

    background:
        linear-gradient(
            135deg,
            rgba(139,92,246,0.25),
            rgba(34,211,238,0.12)
        );

    border:
        1px solid
        rgba(139,92,246,0.2);
}

.step-card h3 {
    font-size: 19px;

    margin-bottom: 10px;

    letter-spacing: -0.02em;
}

.step-card p {
    color: var(--muted);

    font-size: 14px;

    line-height: 1.65;
}


/* =========================================================
   FINAL CTA
========================================================= */

.final-cta {
    max-width: 1200px;

    margin: 0 auto;

    padding:
        30px
        30px
        130px;
}

.final-cta-content {
    position: relative;

    overflow: hidden;

    text-align: center;

    padding:
        85px 30px;

    border-radius: 30px;

    border: 1px solid rgba(139,92,246,0.18);

    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(139,92,246,0.17),
            transparent 55%
        ),
        rgba(255,255,255,0.025);
}

.final-cta-content::after {
    content: "";

    position: absolute;

    width: 300px;
    height: 300px;

    left: 50%;
    bottom: -250px;

    transform: translateX(-50%);

    background: #22d3ee;

    filter: blur(130px);

    opacity: 0.1;

    pointer-events: none;
}

.final-cta-content h2 {
    position: relative;

    z-index: 1;

    max-width: 700px;

    margin: 0 auto 18px;

    font-size:
        clamp(38px, 5vw, 65px);

    line-height: 1;

    letter-spacing: -0.05em;
}

.final-cta-content h2 span {
    background: var(--gradient);

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.final-cta-content p {
    position: relative;

    z-index: 1;

    max-width: 520px;

    margin: 0 auto 30px;

    color: var(--muted);
}

.final-cta-content .btn {
    position: relative;

    z-index: 2;
}


/* =========================================================
   FOOTER
========================================================= */

.site-footer {
    max-width: 1320px;

    margin: 0 auto;

    padding:
        30px;

    border-top: 1px solid var(--border);

    display: grid;

    grid-template-columns:
        1fr auto 1fr;

    align-items: center;

    gap: 25px;

    color: #666675;
}

.footer-brand {
    display: flex;

    align-items: center;

    gap: 15px;
}

.footer-brand strong {
    color: #dcdce4;

    font-size: 13px;

    letter-spacing: 0.15em;
}

.footer-brand span {
    font-size: 12px;
}

.footer-links {
    display: flex;

    gap: 20px;

    font-size: 12px;
}

.footer-links a:hover {
    color: white;
}

.site-footer > small {
    text-align: right;

    font-size: 11px;
}


/* =========================================================
   AUTH PAGES
========================================================= */

.auth-page {
    min-height: 100vh;

    display: flex;

    align-items: center;
    justify-content: center;

    position: relative;

    padding: 35px 20px;

    background:
        radial-gradient(
            circle at 20% 20%,
            rgba(124,58,237,0.12),
            transparent 35%
        ),
        radial-gradient(
            circle at 80% 80%,
            rgba(34,211,238,0.08),
            transparent 35%
        ),
        #050508;
}

.auth-bg {
    position: fixed;

    inset: 0;

    pointer-events: none;

    opacity: 0.25;

    background-image:
        linear-gradient(
            rgba(255,255,255,0.025) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,0.025) 1px,
            transparent 1px
        );

    background-size: 50px 50px;
}

.auth-logo {
    position: fixed;

    top: 30px;
    left: 35px;

    z-index: 5;
}

.auth-card {
    width: 100%;

    max-width: 455px;

    position: relative;

    z-index: 2;

    padding: 40px;

    border: 1px solid var(--border);

    border-radius: 26px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.065),
            rgba(255,255,255,0.025)
        );

    box-shadow: var(--shadow);

    backdrop-filter: blur(25px);
}

.auth-badge {
    display: inline-block;

    padding: 7px 10px;

    border-radius: 8px;

    color: #aaaabd;

    background: rgba(255,255,255,0.04);

    border: 1px solid var(--border);

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 0.15em;

    margin-bottom: 18px;
}

.auth-card h1,
.auth-card h2 {
    font-size: 34px;

    line-height: 1.05;

    letter-spacing: -0.04em;

    margin-bottom: 10px;
}

.auth-card h2 {
    font-size: 29px;
}

.muted {
    color: var(--muted);

    font-size: 14px;

    margin-bottom: 28px;
}

.auth-card form {
    display: flex;

    flex-direction: column;

    gap: 17px;
}

.auth-card label {
    display: flex;

    flex-direction: column;

    gap: 8px;

    color: #bdbdc9;

    font-size: 12px;

    font-weight: 700;
}

.auth-card input[type="email"],
.auth-card input[type="text"],
.auth-card input[type="password"] {
    width: 100%;

    height: 51px;

    padding: 0 15px;

    border-radius: 12px;

    border: 1px solid var(--border);

    outline: none;

    color: #fff;

    background: rgba(0,0,0,0.22);

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.auth-card input:focus {
    border-color:
        rgba(139,92,246,0.6);

    box-shadow:
        0 0 0 3px
        rgba(139,92,246,0.08);
}

.auth-card input::placeholder {
    color: #555563;
}

.password-wrap {
    position: relative;
}

.password-wrap input {
    padding-right: 75px !important;
}

.password-wrap button {
    position: absolute;

    right: 12px;
    top: 50%;

    transform: translateY(-50%);

    color: #8f8fa1;

    background: none;

    font-size: 11px;

    font-weight: 700;
}

.password-wrap button:hover {
    color: white;
}

.check-row {
    flex-direction: row !important;

    align-items: center;

    gap: 9px !important;

    font-size: 11px !important;

    color: #858594 !important;
}

.check-row input {
    width: 15px;
    height: 15px;

    accent-color: #8b5cf6;
}

.form-message {
    min-height: 18px;

    font-size: 12px;

    text-align: center;
}

.auth-bottom {
    margin-top: 24px;

    text-align: center;

    color: #777786;

    font-size: 12px;
}

.auth-bottom a {
    color: #a78bfa;

    font-weight: 700;
}

.demo-note {
    margin-top: 20px;

    padding-top: 18px;

    border-top: 1px solid var(--border);

    color: #555563;

    font-size: 10px;

    text-align: center;
}


/* =========================================================
   REGISTER
========================================================= */

.register-page {
    display: block;

    padding: 110px 30px;
}

.register-page .auth-logo {
    top: 30px;
}

.register-layout {
    max-width: 1050px;

    margin: 0 auto;

    display: grid;

    grid-template-columns:
        1fr 450px;

    gap: 80px;

    align-items: center;

    min-height: calc(100vh - 150px);
}

.register-copy h1 {
    max-width: 600px;

    font-size:
        clamp(45px, 6vw, 72px);

    line-height: 0.98;

    letter-spacing: -0.055em;
}

.register-copy h1 span {
    background: var(--gradient);

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.register-copy > p {
    max-width: 520px;

    color: var(--muted);

    margin-top: 25px;

    font-size: 16px;

    line-height: 1.7;
}

.benefit-list {
    margin-top: 35px;

    display: flex;

    flex-direction: column;

    gap: 14px;
}

.benefit-list div {
    display: flex;

    align-items: center;

    gap: 12px;

    color: #aaaaba;

    font-size: 13px;
}

.benefit-list b {
    color: #a78bfa;
}


/* =========================================================
   INTERESTS
========================================================= */

.interests-page {
    min-height: 100vh;

    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(124,58,237,0.14),
            transparent 45%
        ),
        #050508;
}

.simple-header {
    height: 80px;

    padding: 0 35px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border-bottom: 1px solid var(--border);

    color: #686877;

    font-size: 11px;
}

.interests-main {
    max-width: 1050px;

    margin: 0 auto;

    padding: 75px 30px 80px;
}

.interests-main > h1 {
    font-size:
        clamp(40px, 6vw, 67px);

    letter-spacing: -0.05em;

    line-height: 1;

    margin-bottom: 18px;
}

.interests-main > h1 span {
    background: var(--gradient);

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.interests-main > p {
    color: var(--muted);

    max-width: 600px;

    margin-bottom: 42px;
}

.interest-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 12px;
}

.interest-card {
    min-height: 150px;

    padding: 20px;

    text-align: left;

    border-radius: 18px;

    border: 1px solid var(--border);

    background:
        rgba(255,255,255,0.025);

    color: white;

    transition:
        transform 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease;

    cursor: pointer;
}

.interest-card:hover {
    transform: translateY(-3px);

    border-color:
        rgba(139,92,246,0.35);

    background:
        rgba(139,92,246,0.06);
}

.interest-card.selected {
    border-color:
        rgba(139,92,246,0.7);

    background:
        linear-gradient(
            145deg,
            rgba(139,92,246,0.16),
            rgba(34,211,238,0.04)
        );

    box-shadow:
        0 12px 40px
        rgba(99,102,241,0.1);
}

.interest-card b {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    margin-bottom: 23px;

    border-radius: 11px;

    color: #bca8ff;

    background:
        rgba(139,92,246,0.1);

    font-size: 16px;
}

.interest-card strong {
    display: block;

    font-size: 14px;

    margin-bottom: 3px;
}

.interest-card small {
    color: #707080;

    font-size: 10px;
}

.interest-bottom {
    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: 30px;

    padding-top: 22px;

    border-top: 1px solid var(--border);

    color: #6d6d7b;

    font-size: 12px;
}

.interest-bottom .btn:disabled {
    opacity: 0.4;

    cursor: not-allowed;

    transform: none;
}


/* =========================================================
   APP
========================================================= */

.app-page {
    min-height: 100vh;

    display: flex;

    background:
        radial-gradient(
            circle at 75% 0%,
            rgba(124,58,237,0.09),
            transparent 35%
        ),
        #050508;
}

.sidebar {
    width: 230px;

    position: fixed;

    left: 0;
    top: 0;
    bottom: 0;

    display: flex;

    flex-direction: column;

    padding: 30px 18px;

    border-right: 1px solid var(--border);

    background:
        rgba(6,6,10,0.82);

    backdrop-filter: blur(25px);

    z-index: 20;
}

.app-logo {
    display: block;

    padding:
        0 12px
        35px;

    font-weight: 900;

    font-size: 16px;

    letter-spacing: 0.18em;
}

.sidebar nav {
    display: flex;

    flex-direction: column;

    gap: 5px;
}

.side-link {
    width: 100%;

    min-height: 45px;

    padding: 0 13px;

    display: flex;

    align-items: center;

    gap: 12px;

    color: #71717f;

    background: transparent;

    border-radius: 11px;

    font-size: 13px;

    text-align: left;

    transition:
        color 0.2s ease,
        background 0.2s ease;
}

.side-link:hover {
    color: white;

    background:
        rgba(255,255,255,0.04);
}

.side-link.active {
    color: white;

    background:
        linear-gradient(
            90deg,
            rgba(139,92,246,0.16),
            rgba(139,92,246,0.05)
        );

    border:
        1px solid
        rgba(139,92,246,0.12);
}

.sidebar-bottom {
    margin-top: auto;
}

.app-content {
    width: calc(100% - 230px);

    margin-left: 230px;

    min-height: 100vh;

    padding: 0 45px 80px;
}

.app-topbar {
    height: 88px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border-bottom: 1px solid var(--border);

    margin-bottom: 55px;
}

.mobile-brand {
    display: none;

    font-weight: 900;

    letter-spacing: 0.15em;
}

.search-box {
    width: min(420px, 50%);

    height: 43px;

    display: flex;

    align-items: center;

    gap: 10px;

    padding: 0 13px;

    border: 1px solid var(--border);

    border-radius: 12px;

    background:
        rgba(255,255,255,0.025);
}

.search-box span {
    color: #656574;

    font-size: 18px;
}

.search-box input {
    width: 100%;

    outline: none;

    border: none;

    background: transparent;

    color: white;

    font-size: 12px;
}

.search-box input::placeholder {
    color: #5c5c6b;
}

.user-mini {
    display: flex;

    align-items: center;

    gap: 12px;

    color: #9a9aa9;

    font-size: 12px;
}

.avatar {
    width: 37px;
    height: 37px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 12px;

    color: white;

    font-weight: 800;

    background: var(--gradient);
}


/* =========================================================
   APP SECTIONS
========================================================= */

.app-section {
    max-width: 1250px;

    margin: 0 auto;
}

.hidden-section {
    display: none !important;
}

.welcome-row {
    margin-bottom: 32px;
}

.welcome-row h1 {
    font-size:
        clamp(36px, 5vw, 56px);

    letter-spacing: -0.05em;

    line-height: 1;

    margin-bottom: 12px;
}

.welcome-row h1 span {
    background: var(--gradient);

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.welcome-row p,
.page-heading p {
    color: var(--muted);

    font-size: 14px;
}

.featured-card {
    position: relative;

    min-height: 270px;

    padding: 38px;

    overflow: hidden;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border:
        1px solid
        rgba(139,92,246,0.18);

    border-radius: 24px;

    background:
        radial-gradient(
            circle at 80% 50%,
            rgba(139,92,246,0.18),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            rgba(139,92,246,0.09),
            rgba(255,255,255,0.025)
        );

    margin-bottom: 30px;
}

.featured-card::after {
    content: "";

    position: absolute;

    width: 220px;
    height: 220px;

    right: 90px;
    top: -90px;

    border-radius: 50%;

    background: #8b5cf6;

    filter: blur(90px);

    opacity: 0.12;
}

.featured-card > div:first-child {
    position: relative;

    z-index: 2;

    max-width: 650px;
}

.featured-label {
    display: block;

    color: #8d8d9d;

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 0.18em;

    margin-bottom: 12px;
}

.featured-card h2 {
    font-size:
        clamp(27px, 4vw, 43px);

    letter-spacing: -0.045em;

    line-height: 1.05;

    margin-bottom: 13px;
}

.featured-card p {
    color: var(--muted);

    font-size: 13px;

    max-width: 550px;

    margin-bottom: 23px;
}

.featured-orb {
    position: relative;

    z-index: 2;

    width: 145px;
    height: 145px;

    flex-shrink: 0;

    display: flex;

    align-items: center;
    justify-content: center;

    flex-direction: column;

    border-radius: 50%;

    border:
        1px solid
        rgba(167,139,250,0.3);

    background:
        radial-gradient(
            circle,
            rgba(139,92,246,0.18),
            rgba(0,0,0,0.15)
        );

    box-shadow:
        inset 0 0 50px
        rgba(139,92,246,0.12);
}

.featured-orb span {
    font-size: 31px;

    font-weight: 850;

    letter-spacing: -0.04em;
}

.featured-orb small {
    color: #777786;

    font-size: 9px;

    letter-spacing: 0.1em;
}

.category-row {
    display: flex;

    flex-wrap: wrap;

    gap: 7px;

    margin-bottom: 45px;
}

.category-button {
    padding: 9px 14px;

    color: #777786;

    background:
        rgba(255,255,255,0.025);

    border:
        1px solid var(--border);

    border-radius: 9px;

    font-size: 11px;

    transition: 0.2s ease;
}

.category-button:hover {
    color: white;

    border-color:
        rgba(255,255,255,0.16);
}

.category-button.active {
    color: white;

    background:
        rgba(139,92,246,0.12);

    border-color:
        rgba(139,92,246,0.3);
}

.section-heading {
    display: flex;

    align-items: end;

    justify-content: space-between;

    margin-bottom: 22px;
}

.section-heading h2,
.page-heading h1 {
    font-size: 27px;

    letter-spacing: -0.035em;
}

.text-button {
    color: #9292a2;

    background: none;

    font-size: 11px;
}

.text-button:hover {
    color: white;
}

.page-heading {
    margin-bottom: 35px;
}

.page-heading h1 {
    font-size:
        clamp(38px, 5vw, 55px);

    margin: 8px 0 10px;
}


/* =========================================================
   DISCOVERY CARDS
========================================================= */

.discovery-grid {
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 14px;
}

.discovery-item {
    min-width: 0;

    overflow: hidden;

    border:
        1px solid var(--border);

    border-radius: 18px;

    background:
        rgba(255,255,255,0.025);

    transition:
        transform 0.22s ease,
        border-color 0.22s ease,
        background 0.22s ease;
}

.discovery-item:hover {
    transform: translateY(-4px);

    border-color:
        rgba(139,92,246,0.3);

    background:
        rgba(255,255,255,0.04);
}

.item-visual {
    height: 150px;

    display: flex;

    align-items: center;
    justify-content: center;

    position: relative;

    overflow: hidden;

    background:
        radial-gradient(
            circle at 50% 50%,
            rgba(139,92,246,0.25),
            rgba(139,92,246,0.025) 65%
        );
}

.item-visual::before {
    content: "";

    position: absolute;

    width: 100px;
    height: 100px;

    border-radius: 50%;

    background: rgba(139,92,246,0.22);

    filter: blur(35px);
}

.visual-symbol {
    position: relative;

    z-index: 2;

    width: 65px;
    height: 65px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 19px;

    color: #d5c9ff;

    font-size: 22px;

    font-weight: 850;

    background:
        rgba(255,255,255,0.07);

    border:
        1px solid
        rgba(255,255,255,0.11);

    box-shadow:
        0 20px 50px
        rgba(0,0,0,0.25);
}

.item-info {
    padding: 18px;
}

.item-info > small {
    color: #777786;

    font-size: 8px;

    font-weight: 800;

    letter-spacing: 0.14em;
}

.item-info h3 {
    margin:
        7px 0
        6px;

    font-size: 16px;

    line-height: 1.25;

    letter-spacing: -0.02em;
}

.item-info p {
    color: #777786;

    font-size: 11px;

    line-height: 1.55;

    min-height: 34px;
}

.item-bottom {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 10px;

    margin-top: 17px;
}

.item-bottom .match {
    margin: 0;

    color: #64d9ef;

    font-size: 9px;

    white-space: nowrap;
}

.save-button {
    flex-shrink: 0;

    padding: 7px 9px;

    border-radius: 8px;

    color: #858593;

    background:
        rgba(255,255,255,0.035);

    border:
        1px solid var(--border);

    font-size: 9px;

    font-weight: 700;

    transition: 0.2s ease;
}

.save-button:hover {
    color: white;

    border-color:
        rgba(255,255,255,0.17);
}

.save-button.saved {
    color: #d4c6ff;

    background:
        rgba(139,92,246,0.13);

    border-color:
        rgba(139,92,246,0.3);
}


/* =========================================================
   EMPTY / PROFILE
========================================================= */

.empty-state {
    padding: 80px 20px;

    text-align: center;

    border:
        1px dashed
        rgba(255,255,255,0.1);

    border-radius: 20px;
}

.empty-state > div {
    font-size: 35px;

    color: #777786;

    margin-bottom: 15px;
}

.empty-state h3 {
    font-size: 20px;

    margin-bottom: 7px;
}

.empty-state p {
    color: #707080;

    font-size: 13px;

    margin-bottom: 22px;
}

.profile-card {
    display: flex;

    align-items: center;

    gap: 22px;

    padding: 27px;

    margin-bottom: 14px;

    border:
        1px solid var(--border);

    border-radius: 19px;

    background:
        rgba(255,255,255,0.025);
}

.profile-avatar {
    width: 65px;
    height: 65px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 19px;

    background: var(--gradient);

    font-size: 23px;

    font-weight: 900;
}

.profile-card h2 {
    font-size: 20px;

    margin-bottom: 3px;
}

.profile-card p {
    color: #777786;

    font-size: 12px;
}

.chips {
    display: flex;

    flex-wrap: wrap;

    gap: 8px;

    margin-top: 16px;
}

.chip {
    padding: 8px 11px;

    border-radius: 9px;

    color: #b7a9e8;

    background:
        rgba(139,92,246,0.1);

    border:
        1px solid
        rgba(139,92,246,0.18);

    font-size: 10px;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1050px) {

    .hero {
        grid-template-columns: 1fr;

        padding-top: 50px;

        gap: 60px;
    }

    .hero-content {
        text-align: center;
    }

    .hero-content > p {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-actions,
    .hero-proof {
        justify-content: center;
    }

    .preview-shell {
        max-width: 760px;

        margin: 0 auto;
    }

    .register-layout {
        grid-template-columns: 1fr;

        max-width: 600px;

        gap: 50px;
    }

    .register-copy {
        text-align: center;
    }

    .register-copy > p {
        margin-left: auto;
        margin-right: auto;
    }

    .benefit-list {
        align-items: center;
    }

    .interest-grid {
        grid-template-columns:
            repeat(3, 1fr);
    }

    .discovery-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .sidebar {
        width: 190px;
    }

    .app-content {
        width: calc(100% - 190px);

        margin-left: 190px;

        padding-left: 30px;
        padding-right: 30px;
    }

}


@media (max-width: 760px) {

    .navbar {
        padding:
            20px;
    }

    .navbar .btn-ghost {
        display: none;
    }

    .hero {
        padding:
            55px 20px
            80px;

        min-height: auto;
    }

    .hero h1 {
        font-size:
            clamp(47px, 15vw, 70px);
    }

    .hero-content > p {
        font-size: 15px;
    }

    .hero-proof {
        flex-direction: column;

        align-items: center;

        gap: 8px;
    }

    .preview-shell {
        transform: none;

        min-height: auto;
    }

    .preview-sidebar {
        display: none;
    }

    .preview-content {
        padding: 18px;
    }

    .preview-cards {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .preview-card:last-child {
        display: none;
    }

    .landing-section {
        padding:
            70px 20px
            80px;
    }

    .steps {
        grid-template-columns: 1fr;
    }

    .step-card {
        min-height: auto;
    }

    .final-cta {
        padding:
            10px 20px
            80px;
    }

    .final-cta-content {
        padding:
            65px 20px;
    }

    .site-footer {
        grid-template-columns: 1fr;

        text-align: center;
    }

    .footer-brand,
    .footer-links {
        justify-content: center;
    }

    .site-footer > small {
        text-align: center;
    }

    .auth-page {
        padding:
            90px 18px
            30px;
    }

    .auth-logo {
        left: 20px;
        top: 25px;
    }

    .auth-card {
        padding: 27px 21px;
    }

    .register-page {
        padding:
            90px 18px
            30px;
    }

    .register-copy h1 {
        font-size: 45px;
    }

    .simple-header {
        padding: 0 20px;
    }

    .interests-main {
        padding:
            50px 20px
            60px;
    }

    .interest-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .interest-card {
        min-height: 140px;

        padding: 16px;
    }

    .interest-bottom {
        align-items: stretch;

        flex-direction: column;

        gap: 15px;
    }

    .interest-bottom .btn {
        width: 100%;
    }

    .app-page {
        display: block;
    }

    .sidebar {
        width: 100%;
        height: 65px;

        top: auto;
        bottom: 0;

        left: 0;

        right: 0;

        padding: 6px 10px;

        flex-direction: row;

        border-right: none;

        border-top: 1px solid var(--border);

        z-index: 100;
    }

    .app-logo,
    .sidebar-bottom {
        display: none;
    }

    .sidebar nav {
        width: 100%;

        flex-direction: row;

        justify-content: space-around;

        gap: 3px;
    }

    .side-link {
        width: auto;

        flex: 1;

        justify-content: center;

        padding: 0;

        min-height: 50px;
    }

    .side-link span {
        display: none;
    }

    .app-content {
        width: 100%;

        margin-left: 0;

        padding:
            0 18px
            90px;
    }

    .app-topbar {
        height: 75px;

        margin-bottom: 35px;
    }

    .mobile-brand {
        display: block;
    }

    .search-box {
        width: 42px;

        overflow: hidden;

        padding: 0 12px;
    }

    .search-box input {
        display: none;
    }

    .user-mini > span {
        display: none;
    }

    .featured-card {
        padding: 25px;

        min-height: 300px;

        flex-direction: column;

        align-items: flex-start;

        gap: 25px;
    }

    .featured-orb {
        width: 85px;
        height: 85px;
    }

    .featured-orb span {
        font-size: 20px;
    }

    .category-row {
        overflow-x: auto;

        flex-wrap: nowrap;

        padding-bottom: 4px;

        scrollbar-width: none;
    }

    .category-row::-webkit-scrollbar {
        display: none;
    }

    .category-button {
        white-space: nowrap;
    }

    .discovery-grid {
        grid-template-columns: 1fr;
    }

    .section-heading {
        align-items: center;
    }

    .section-heading .text-button {
        display: none;
    }

}


@media (max-width: 420px) {

    .hero-actions {
        flex-direction: column;
    }

    .hero-actions .btn {
        width: 100%;
    }

    .preview-cards {
        grid-template-columns: 1fr;
    }

    .preview-card:nth-child(2) {
        display: none;
    }

    .interest-grid {
        grid-template-columns: 1fr;
    }

    .interest-card {
        min-height: 120px;
    }

}
