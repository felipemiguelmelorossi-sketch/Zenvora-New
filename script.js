(() => {
    "use strict";

    const STORAGE = {
        user: "zenvora_user",
        preferences: "zenvora_preferences",
        saved: "zenvora_saved_items",
        onboarding: "zenvora_onboarding"
    };

    const DISCOVERIES = [
        {
            id: "tech-1",
            title: "Ferramentas de IA para explorar",
            description: "Descubra novas ferramentas de inteligência artificial para criar, estudar e trabalhar.",
            category: "Tecnologia",
            icon: "✦",
            score: 96
        },
        {
            id: "tech-2",
            title: "Apps que estão mudando a internet",
            description: "Conheça aplicativos e tecnologias que estão ganhando espaço.",
            category: "Tecnologia",
            icon: "⌘",
            score: 91
        },
        {
            id: "tech-3",
            title: "O futuro da tecnologia",
            description: "Ideias, tendências e novidades que podem transformar os próximos anos.",
            category: "Tecnologia",
            icon: "◈",
            score: 88
        },

        {
            id: "games-1",
            title: "Games para descobrir",
            description: "Novos jogos, experiências e mundos virtuais para você explorar.",
            category: "Games",
            icon: "◈",
            score: 94
        },
        {
            id: "games-2",
            title: "Jogos que estão em alta",
            description: "Veja experiências que estão chamando atenção entre jogadores.",
            category: "Games",
            icon: "🎮",
            score: 90
        },
        {
            id: "games-3",
            title: "O futuro dos games",
            description: "Tecnologias que podem mudar completamente a maneira de jogar.",
            category: "Games",
            icon: "⚡",
            score: 86
        },

        {
            id: "music-1",
            title: "Novos sons para conhecer",
            description: "Descubra artistas, estilos e músicas que podem combinar com você.",
            category: "Música",
            icon: "♫",
            score: 92
        },
        {
            id: "music-2",
            title: "Descobertas musicais",
            description: "Explore diferentes gêneros e encontre novos favoritos.",
            category: "Música",
            icon: "♪",
            score: 89
        },

        {
            id: "fashion-1",
            title: "Tendências de moda",
            description: "Estilos, combinações e tendências para você conhecer.",
            category: "Moda",
            icon: "◇",
            score: 87
        },
        {
            id: "fashion-2",
            title: "Estilo que combina com você",
            description: "Ideias para descobrir novas referências de estilo.",
            category: "Moda",
            icon: "✧",
            score: 84
        },

        {
            id: "business-1",
            title: "Ideias de negócios",
            description: "Descubra oportunidades e ideias para começar novos projetos.",
            category: "Negócios",
            icon: "↗",
            score: 93
        },
        {
            id: "business-2",
            title: "Oportunidades digitais",
            description: "Conheça possibilidades para criar projetos e negócios online.",
            category: "Negócios",
            icon: "$",
            score: 90
        },

        {
            id: "creative-1",
            title: "Inspiração criativa",
            description: "Ideias para design, criação de conteúdo e novos projetos.",
            category: "Criatividade",
            icon: "✦",
            score: 89
        },

        {
            id: "sport-1",
            title: "Mundo dos esportes",
            description: "Notícias, atletas, competições e histórias para descobrir.",
            category: "Esportes",
            icon: "◎",
            score: 85
        },

        {
            id: "movie-1",
            title: "Filmes e séries para conhecer",
            description: "Descubra histórias e produções que podem entrar na sua lista.",
            category: "Filmes",
            icon: "▶",
            score: 91
        },

        {
            id: "education-1",
            title: "Aprenda algo novo",
            description: "Conteúdos e ideias para transformar seu tempo em conhecimento.",
            category: "Educação",
            icon: "⌁",
            score: 88
        },

        {
            id: "programming-1",
            title: "Programação para explorar",
            description: "Projetos, linguagens e tecnologias para quem gosta de código.",
            category: "Programação",
            icon: "</>",
            score: 95
        },

        {
            id: "finance-1",
            title: "Finanças e dinheiro",
            description: "Descubra conceitos e ideias para entender melhor o mundo financeiro.",
            category: "Finanças",
            icon: "$",
            score: 83
        },

        {
            id: "entertainment-1",
            title: "Entretenimento",
            description: "Novidades, cultura e conteúdos para deixar sua descoberta mais divertida.",
            category: "Entretenimento",
            icon: "★",
            score: 86
        }
    ];


    function $(selector, parent = document) {
        return parent.querySelector(selector);
    }


    function $$(selector, parent = document) {
        return [...parent.querySelectorAll(selector)];
    }


    function getStorage(key, fallback = null) {
        try {
            const value = localStorage.getItem(key);

            if (!value) {
                return fallback;
            }

            return JSON.parse(value);

        } catch (error) {
            console.error("Erro ao ler armazenamento:", error);
            return fallback;
        }
    }


    function setStorage(key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }


    function removeStorage(key) {
        localStorage.removeItem(key);
    }


    function getUser() {
        return getStorage(
            STORAGE.user,
            null
        );
    }


    function getPreferences() {
        return getStorage(
            STORAGE.preferences,
            []
        );
    }


    function getSaved() {
        return getStorage(
            STORAGE.saved,
            []
        );
    }


    function setMessage(message, type = "error") {

        const element =
            $("#formMessage");

        if (!element) {
            return;
        }

        element.textContent = message;

        element.className =
            `form-message ${type}`;
    }


    function encodePassword(password) {

        try {
            return btoa(
                unescape(
                    encodeURIComponent(password)
                )
            );

        } catch {
            return btoa(password);
        }
    }


    /* =========================================
       LOGIN
    ========================================= */

    function setupLogin() {

        const form =
            $("#loginForm");

        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const email =
                    $("#loginEmail")
                        ?.value
                        .trim()
                        .toLowerCase();


                const password =
                    $("#loginPassword")
                        ?.value || "";


                const user =
                    getUser();


                if (!user) {

                    setMessage(
                        "Nenhuma conta encontrada. Crie uma conta primeiro."
                    );

                    return;
                }


                if (
                    user.email !== email ||
                    user.password !== encodePassword(password)
                ) {

                    setMessage(
                        "E-mail ou senha incorretos."
                    );

                    return;
                }


                /*
                 * IMPORTANTE:
                 * Não apagamos o usuário.
                 * Apenas entramos no app.
                 */

                window.location.href =
                    "app.html";

            }
        );
    }


    /* =========================================
       CADASTRO
    ========================================= */

    function setupRegister() {

        const form =
            $("#registerForm");

        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    $("#registerName")
                        ?.value
                        .trim();


                const email =
                    $("#registerEmail")
                        ?.value
                        .trim()
                        .toLowerCase();


                const password =
                    $("#registerPassword")
                        ?.value || "";


                const confirm =
                    $("#registerConfirm")
                        ?.value || "";


                if (!name || name.length < 2) {

                    setMessage(
                        "Digite seu nome."
                    );

                    return;
                }


                if (!email) {

                    setMessage(
                        "Digite seu e-mail."
                    );

                    return;
                }


                if (password.length < 6) {

                    setMessage(
                        "A senha precisa ter pelo menos 6 caracteres."
                    );

                    return;
                }


                if (password !== confirm) {

                    setMessage(
                        "As senhas não são iguais."
                    );

                    return;
                }


                const existingUser =
                    getUser();


                /*
                 * Se já existe uma conta com o mesmo
                 * e-mail, não sobrescreve silenciosamente.
                 */

                if (
                    existingUser &&
                    existingUser.email === email
                ) {

                    setMessage(
                        "Esse e-mail já possui uma conta. Entre pelo Login."
                    );

                    return;
                }


                const user = {

                    name: name,

                    email: email,

                    password:
                        encodePassword(password)

                };


                setStorage(
                    STORAGE.user,
                    user
                );


                setStorage(
                    STORAGE.preferences,
                    []
                );


                setStorage(
                    STORAGE.saved,
                    []
                );


                setStorage(
                    STORAGE.onboarding,
                    true
                );


                window.location.href =
                    "interesses.html";

            }
        );
    }


    /* =========================================
       MOSTRAR / OCULTAR SENHA
    ========================================= */

    function setupPasswordToggles() {

        $$("[data-toggle]").forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const selector =
                            button.dataset.toggle;


                        const input =
                            $(selector);


                        if (!input) {
                            return;
                        }


                        if (
                            input.type === "password"
                        ) {

                            input.type = "text";

                            button.textContent =
                                "Ocultar";

                        } else {

                            input.type =
                                "password";

                            button.textContent =
                                "Mostrar";

                        }

                    }
                );

            }
        );
    }


    /* =========================================
       INTERESSES
    ========================================= */

    function setupInterests() {

        const grid =
            $("#interestGrid");

        const finishButton =
            $("#finishInterests");

        const countElement =
            $("#interestCount");


        if (!grid || !finishButton) {
            return;
        }


        const selected =
            new Set(
                getPreferences()
            );


        function updateUI() {

            $$(".interest-card", grid)
                .forEach((card) => {

                    const interest =
                        card.dataset.interest;


                    card.classList.toggle(
                        "selected",
                        selected.has(interest)
                    );

                });


            if (countElement) {

                countElement.textContent =
                    `${selected.size} selecionados`;

            }


            finishButton.disabled =
                selected.size < 3;

        }


        $$(".interest-card", grid)
            .forEach((card) => {

                card.addEventListener(
                    "click",
                    () => {

                        const interest =
                            card.dataset.interest;


                        if (
                            selected.has(interest)
                        ) {

                            selected.delete(
                                interest
                            );

                        } else {

                            selected.add(
                                interest
                            );

                        }


                        updateUI();

                    }
                );

            });


        finishButton.addEventListener(
            "click",
            () => {

                if (selected.size < 3) {
                    return;
                }


                setStorage(
                    STORAGE.preferences,
                    [...selected]
                );


                setStorage(
                    STORAGE.onboarding,
                    false
                );


                window.location.href =
                    "app.html";

            }
        );


        updateUI();
    }


    /* =========================================
       SCORE
    ========================================= */

    function getScore(item) {

        const preferences =
            getPreferences();


        if (!preferences.length) {
            return item.score;
        }


        if (
            preferences.includes(
                item.category
            )
        ) {

            return Math.min(
                item.score + 4,
                99
            );

        }


        return Math.max(
            item.score - 5,
            70
        );
    }


    /* =========================================
       RECOMENDAÇÕES
    ========================================= */

    function getRecommendations(
        category = "Todos",
        search = ""
    ) {

        let items =
            [...DISCOVERIES];


        if (category !== "Todos") {

            items =
                items.filter(
                    item =>
                        item.category === category
                );

        }


        if (search) {

            const query =
                search.toLowerCase();


            items =
                items.filter(
                    item => {

                        return (

                            item.title
                                .toLowerCase()
                                .includes(query)

                            ||

                            item.description
                                .toLowerCase()
                                .includes(query)

                            ||

                            item.category
                                .toLowerCase()
                                .includes(query)

                        );

                    }
                );
        }


        items.sort(
            (a, b) =>
                getScore(b) -
                getScore(a)
        );


        return items;
    }


    /* =========================================
       CARD
    ========================================= */

    function createDiscoveryCard(item) {

        const saved =
            getSaved();


        const isSaved =
            saved.includes(item.id);


        const score =
            getScore(item);


        const card =
            document.createElement("article");


        card.className =
            "discovery-item";


        card.innerHTML = `

            <div class="discovery-icon">
                ${item.icon}
            </div>

            <div class="discovery-content">

                <div class="discovery-top">

                    <span class="discovery-category">
                        ${item.category}
                    </span>

                    <span class="discovery-score">
                        ${score}%
                    </span>

                </div>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

                <button
                    class="save-button ${isSaved ? "saved" : ""}"
                    data-save-id="${item.id}"
                    type="button"
                    aria-label="Salvar descoberta"
                >
                    ${isSaved ? "♥" : "♡"}
                </button>

            </div>
        `;


        return card;
    }


    /* =========================================
       RENDER
    ========================================= */

    function renderDiscovery(
        container,
        category = "Todos",
        search = ""
    ) {

        if (!container) {
            return;
        }


        const items =
            getRecommendations(
                category,
                search
            );


        container.innerHTML = "";


        if (!items.length) {

            container.innerHTML = `

                <div class="empty-state">

                    <div>⌕</div>

                    <h3>
                        Nada encontrado.
                    </h3>

                    <p>
                        Tente outra categoria ou pesquisa.
                    </p>

                </div>

            `;

            return;
        }


        items.forEach(
            item => {

                container.appendChild(
                    createDiscoveryCard(item)
                );

            }
        );
    }


    function renderHome() {

        renderDiscovery(
            $("#discoveryGrid"),
            "Todos"
        );

    }


    function renderDiscover(
        category = "Todos",
        search = ""
    ) {

        renderDiscovery(
            $("#discoverGrid"),
            category,
            search
        );

    }


    /* =========================================
       SALVOS
    ========================================= */

    function setupSaveButtons() {

        document.addEventListener(
            "click",
            (event) => {

                const button =
                    event.target.closest(
                        "[data-save-id]"
                    );


                if (!button) {
                    return;
                }


                const id =
                    button.dataset.saveId;


                let saved =
                    getSaved();


                if (
                    saved.includes(id)
                ) {

                    saved =
                        saved.filter(
                            savedId =>
                                savedId !== id
                        );

                } else {

                    saved.push(id);

                }


                setStorage(
                    STORAGE.saved,
                    saved
                );


                button.classList.toggle(
                    "saved",
                    saved.includes(id)
                );


                button.textContent =
                    saved.includes(id)
                        ? "♥"
                        : "♡";


                renderSaved();

            }
        );
    }


    function renderSaved() {

        const grid =
            $("#savedGrid");

        const empty =
            $("#savedEmpty");


        if (!grid) {
            return;
        }


        const savedIds =
            getSaved();


        const items =
            DISCOVERIES.filter(
                item =>
                    savedIds.includes(item.id)
            );


        grid.innerHTML = "";


        if (!items.length) {

            if (empty) {
                empty.style.display =
                    "block";
            }

            return;
        }


        if (empty) {
            empty.style.display =
                "none";
        }


        items.forEach(
            item => {

                grid.appendChild(
                    createDiscoveryCard(item)
                );

            }
        );
    }


    /* =========================================
       CATEGORIAS
    ========================================= */

    function setupCategories() {

        $$(".category-row")
            .forEach((row) => {

                $$(".category-button", row)
                    .forEach((button) => {

                        button.addEventListener(
                            "click",
                            () => {

                                const category =
                                    button.dataset.category;


                                $$(".category-button", row)
                                    .forEach(
                                        item =>
                                            item.classList
                                                .remove(
                                                    "active"
                                                )
                                    );


                                button.classList.add(
                                    "active"
                                );


                                if (
                                    row.id ===
                                    "categoryRow"
                                ) {

                                    renderDiscovery(
                                        $("#discoveryGrid"),
                                        category
                                    );

                                    return;
                                }


                                if (
                                    row.id ===
                                    "categoryRow2"
                                ) {

                                    const search =
                                        $("#searchInput")
                                            ? $("#searchInput")
                                                .value
                                                .trim()
                                            : "";


                                    renderDiscover(
                                        category,
                                        search
                                    );

                                }

                            }
                        );

                    });

            });
    }


    /* =========================================
       NAVEGAÇÃO
    ========================================= */

    function showSection(
        sectionName
    ) {

        $$(".app-section")
            .forEach(
                section =>
                    section.classList.add(
                        "hidden-section"
                    )
            );


        const section =
            $(`#section-${sectionName}`);


        if (section) {

            section.classList.remove(
                "hidden-section"
            );

        }


        $$(".side-link[data-section]")
            .forEach((link) => {

                link.classList.toggle(
                    "active",
                    link.dataset.section ===
                    sectionName
                );

            });


        if (
            sectionName === "saved"
        ) {

            renderSaved();

        }


        if (
            sectionName === "discover"
        ) {

            renderDiscover();

        }
    }


    function setupNavigation() {

        $$(".side-link[data-section]")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        showSection(
                            link.dataset.section
                        );

                    }
                );

            });


        $$("[data-go]")
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => {

                        showSection(
                            button.dataset.go
                        );

                    }
                );

            });


        const seeAll =
            $("#seeAllBtn");


        if (seeAll) {

            seeAll.addEventListener(
                "click",
                () => {

                    showSection(
                        "discover"
                    );

                }
            );

        }


        const featuredButton =
            $("#featuredBtn");


        if (featuredButton) {

            featuredButton.addEventListener(
                "click",
                () => {

                    showSection(
                        "discover"
                    );

                }
            );

        }
    }


    /* =========================================
       PESQUISA
    ========================================= */

    function setupSearch() {

        const input =
            $("#searchInput");


        if (!input) {
            return;
        }


        input.addEventListener(
            "input",
            () => {

                const query =
                    input.value.trim();


                if (query) {

                    showSection(
                        "discover"
                    );


                    renderDiscover(
                        "Todos",
                        query
                    );

                } else {

                    renderDiscover();

                }

            }
        );
    }


    /* =========================================
       PERFIL
    ========================================= */

    function setupProfile() {

        const user =
            getUser();


        if (!user) {
            return;
        }


        const firstName =
            user.name
                .trim()
                .split(" ")[0];


        const welcome =
            $("#welcomeName");


        if (welcome) {

            welcome.textContent =
                firstName;

        }


        const topName =
            $("#topUserName");


        if (topName) {

            topName.textContent =
                firstName;

        }


        const profileName =
            $("#profileName");


        if (profileName) {

            profileName.textContent =
                user.name;

        }


        const profileEmail =
            $("#profileEmail");


        if (profileEmail) {

            profileEmail.textContent =
                user.email;

        }


        const avatar =
            $("#avatar");


        if (avatar) {

            avatar.textContent =
                firstName
                    .charAt(0)
                    .toUpperCase();

        }


        const profileAvatar =
            $("#profileAvatar");


        if (profileAvatar) {

            profileAvatar.textContent =
                firstName
                    .charAt(0)
                    .toUpperCase();

        }


        const interests =
            $("#profileInterests");


        if (interests) {

            interests.innerHTML = "";


            getPreferences()
                .forEach((interest) => {

                    const chip =
                        document.createElement(
                            "span"
                        );


                    chip.className =
                        "chip";


                    chip.textContent =
                        interest;


                    interests.appendChild(
                        chip
                    );

                });

        }
    }


    /* =========================================
       LOGOUT
    ========================================= */

    function setupLogout() {

        const button =
            $("#logoutBtn");


        if (!button) {
            return;
        }


        button.addEventListener(
            "click",
            () => {

                /*
                 * NÃO APAGAMOS A CONTA.
                 *
                 * Apenas saímos do app.
                 *
                 * Assim o usuário pode fazer
                 * login novamente depois.
                 */

                window.location.href =
                    "login.html";

            }
        );
    }


    /* =========================================
       PROTEÇÃO DO APP
    ========================================= */

    function protectApp() {

        if (
            !document.body.classList
                .contains("app-page")
        ) {

            return true;
        }


        const user =
            getUser();


        if (!user) {

            window.location.href =
                "login.html";

            return false;
        }


        return true;
    }


    /* =========================================
       APP
    ========================================= */

    function setupApp() {

        if (!protectApp()) {
            return;
        }


        setupProfile();
        setupNavigation();
        setupCategories();
        setupSearch();
        setupSaveButtons();
        setupLogout();

        renderHome();
        renderDiscover();
        renderSaved();

    }


    /* =========================================
       INICIALIZAÇÃO
    ========================================= */

    document.addEventListener(
        "DOMContentLoaded",
        () => {

            setupLogin();
            setupRegister();
            setupPasswordToggles();
            setupInterests();
            setupApp();

        }
    );

})();
