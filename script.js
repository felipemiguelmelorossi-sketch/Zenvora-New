/* =========================================================
   ZENVORA — SCRIPT PRINCIPAL
   ========================================================= */

const STORAGE = {
    user: "zenvora_user",
    preferences: "zenvora_preferences",
    saved: "zenvora_saved_items",
    onboarding: "zenvora_onboarding",
    loggedIn: "zenvora_logged_in"
};


/* =========================================================
   UTILITÁRIOS
   ========================================================= */

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return [...document.querySelectorAll(selector)];
}

function getStorage(key, fallback = null) {
    try {
        const value = localStorage.getItem(key);

        if (value === null) {
            return fallback;
        }

        return JSON.parse(value);
    } catch {
        return fallback;
    }
}

function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function removeStorage(key) {
    localStorage.removeItem(key);
}


/* =========================================================
   SENHA
   ========================================================= */

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


/* =========================================================
   BANCO LOCAL DE CONTEÚDO
   ========================================================= */

const DISCOVERY_ITEMS = [

    {
        id: 1,
        title: "Ferramentas de IA que realmente ajudam",
        description: "Descubra ferramentas para estudar, criar, trabalhar e automatizar tarefas.",
        category: "Tecnologia",
        type: "IA",
        icon: "✦",
        tag: "Em alta"
    },

    {
        id: 2,
        title: "As melhores ideias para começar um projeto",
        description: "Inspirações para transformar uma ideia simples em algo grande.",
        category: "Negócios",
        type: "Projetos",
        icon: "◈",
        tag: "Popular"
    },

    {
        id: 3,
        title: "Games que você talvez ainda não conheça",
        description: "Novos jogos e experiências para descobrir.",
        category: "Games",
        type: "Games",
        icon: "◉",
        tag: "Descoberta"
    },

    {
        id: 4,
        title: "Músicas para mudar o clima do seu dia",
        description: "Encontre novos sons de acordo com seu momento.",
        category: "Música",
        type: "Música",
        icon: "♫",
        tag: "Para você"
    },

    {
        id: 5,
        title: "Tendências que estão aparecendo na moda",
        description: "Descubra estilos, peças e combinações diferentes.",
        category: "Moda",
        type: "Moda",
        icon: "◇",
        tag: "Tendência"
    },

    {
        id: 6,
        title: "Como transformar criatividade em projeto",
        description: "Ideias para quem gosta de criar coisas novas.",
        category: "Criatividade",
        type: "Criatividade",
        icon: "✎",
        tag: "Inspiração"
    },

    {
        id: 7,
        title: "Tecnologias que podem mudar o futuro",
        description: "Conheça conceitos e ferramentas que estão crescendo.",
        category: "Tecnologia",
        type: "Tecnologia",
        icon: "⌁",
        tag: "Futuro"
    },

    {
        id: 8,
        title: "Jogos para jogar com seus amigos",
        description: "Experiências multiplayer para descobrir.",
        category: "Games",
        type: "Games",
        icon: "🎮",
        tag: "Multiplayer"
    },

    {
        id: 9,
        title: "Ideias para ganhar dinheiro pela internet",
        description: "Modelos de projetos digitais para estudar e explorar.",
        category: "Finanças",
        type: "Dinheiro",
        icon: "₿",
        tag: "Oportunidade"
    },

    {
        id: 10,
        title: "Filmes que merecem entrar na sua lista",
        description: "Descubra filmes e histórias diferentes.",
        category: "Filmes",
        type: "Filmes",
        icon: "▶",
        tag: "Assistir"
    },

    {
        id: 11,
        title: "Aprenda algo novo todos os dias",
        description: "Conteúdos rápidos para aumentar seus conhecimentos.",
        category: "Educação",
        type: "Educação",
        icon: "▣",
        tag: "Aprendizado"
    },

    {
        id: 12,
        title: "Comece a programar do zero",
        description: "Recursos para quem quer entrar no mundo da programação.",
        category: "Programação",
        type: "Programação",
        icon: "</>",
        tag: "Comece agora"
    },

    {
        id: 13,
        title: "Esportes e histórias incríveis",
        description: "Descubra atletas, modalidades e momentos marcantes.",
        category: "Esportes",
        type: "Esportes",
        icon: "⚡",
        tag: "Esportes"
    },

    {
        id: 14,
        title: "Conteúdos para passar o tempo",
        description: "Vídeos, ideias e experiências para descobrir.",
        category: "Entretenimento",
        type: "Entretenimento",
        icon: "★",
        tag: "Popular"
    },

    {
        id: 15,
        title: "Como criar sua própria marca",
        description: "Descubra ideias para identidade, conteúdo e posicionamento.",
        category: "Negócios",
        type: "Marca",
        icon: "◆",
        tag: "Negócios"
    },

    {
        id: 16,
        title: "Descubra novos artistas",
        description: "Encontre artistas e estilos que combinam com você.",
        category: "Música",
        type: "Artistas",
        icon: "♪",
        tag: "Novo"
    }
];


/* =========================================================
   LOGIN
   ========================================================= */

function setupLogin() {

    const form = $("#loginForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const emailInput = $("#loginEmail");
        const passwordInput = $("#loginPassword");
        const message = $("#formMessage");

        const email = emailInput
            ? emailInput.value.trim().toLowerCase()
            : "";

        const password = passwordInput
            ? passwordInput.value
            : "";

        const user = getStorage(STORAGE.user, null);

        if (!user) {

            showMessage(
                message,
                "Nenhuma conta encontrada. Crie uma conta primeiro.",
                "error"
            );

            return;
        }

        const savedEmail = String(user.email || "")
            .trim()
            .toLowerCase();

        const savedPassword = String(
            user.password || ""
        );

        const typedPassword = encodePassword(password);

        if (
            email === savedEmail &&
            typedPassword === savedPassword
        ) {

            setStorage(
                STORAGE.loggedIn,
                true
            );

            showMessage(
                message,
                "Login realizado! Entrando...",
                "success"
            );

            setTimeout(function() {

                window.location.href = "app.html";

            }, 500);

        } else {

            showMessage(
                message,
                "E-mail ou senha incorretos.",
                "error"
            );
        }

    });
}


/* =========================================================
   CADASTRO
   ========================================================= */

function setupRegister() {

    const form = $("#registerForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const nameInput = $("#registerName");
        const emailInput = $("#registerEmail");
        const passwordInput = $("#registerPassword");
        const confirmInput = $("#registerConfirm");
        const termsInput = $("#terms");
        const message = $("#formMessage");

        const name = nameInput
            ? nameInput.value.trim()
            : "";

        const email = emailInput
            ? emailInput.value.trim().toLowerCase()
            : "";

        const password = passwordInput
            ? passwordInput.value
            : "";

        const confirm = confirmInput
            ? confirmInput.value
            : "";

        const termsAccepted = termsInput
            ? termsInput.checked
            : true;


        if (name.length < 2) {

            showMessage(
                message,
                "Digite seu nome.",
                "error"
            );

            return;
        }


        if (!email || !email.includes("@")) {

            showMessage(
                message,
                "Digite um e-mail válido.",
                "error"
            );

            return;
        }


        if (password.length < 6) {

            showMessage(
                message,
                "A senha precisa ter pelo menos 6 caracteres.",
                "error"
            );

            return;
        }


        if (password !== confirm) {

            showMessage(
                message,
                "As senhas não são iguais.",
                "error"
            );

            return;
        }


        if (!termsAccepted) {

            showMessage(
                message,
                "Aceite os termos para continuar.",
                "error"
            );

            return;
        }


        const existingUser = getStorage(
            STORAGE.user,
            null
        );


        if (
            existingUser &&
            String(existingUser.email || "")
                .trim()
                .toLowerCase() === email
        ) {

            showMessage(
                message,
                "Já existe uma conta com esse e-mail.",
                "error"
            );

            return;
        }


        const newUser = {

            name: name,

            email: email,

            password: encodePassword(password),

            createdAt: new Date().toISOString()

        };


        setStorage(
            STORAGE.user,
            newUser
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


        setStorage(
            STORAGE.loggedIn,
            true
        );


        showMessage(
            message,
            "Conta criada! Vamos escolher seus interesses...",
            "success"
        );


        setTimeout(function() {

            window.location.href = "interesses.html";

        }, 600);

    });
}


/* =========================================================
   MENSAGENS
   ========================================================= */

function showMessage(element, text, type) {

    if (!element) {
        return;
    }

    element.textContent = text;

    element.className =
        "form-message " + type;

}


/* =========================================================
   MOSTRAR / ESCONDER SENHA
   ========================================================= */

function setupPasswordToggles() {

    $$("[data-toggle]").forEach(function(button) {

        button.addEventListener("click", function() {

            const selector =
                button.getAttribute("data-toggle");

            const input =
                $(selector);

            if (!input) {
                return;
            }

            if (input.type === "password") {

                input.type = "text";

                button.textContent = "Ocultar";

            } else {

                input.type = "password";

                button.textContent = "Mostrar";

            }

        });

    });

}


/* =========================================================
   INTERESSES
   ========================================================= */

function setupInterests() {

    const grid = $("#interestGrid");

    if (!grid) {
        return;
    }

    const selected =
        getStorage(
            STORAGE.preferences,
            []
        );


    $$("[data-interest]").forEach(function(card) {

        const interest =
            card.getAttribute("data-interest");

        if (selected.includes(interest)) {

            card.classList.add("selected");

        }


        card.addEventListener("click", function() {

            const current =
                getStorage(
                    STORAGE.preferences,
                    []
                );

            const index =
                current.indexOf(interest);


            if (index >= 0) {

                current.splice(index, 1);

                card.classList.remove("selected");

            } else {

                current.push(interest);

                card.classList.add("selected");

            }


            setStorage(
                STORAGE.preferences,
                current
            );


            updateInterestCounter();

        });

    });


    updateInterestCounter();


    const finish =
        $("#finishInterests");


    if (finish) {

        finish.addEventListener(
            "click",
            function() {

                const preferences =
                    getStorage(
                        STORAGE.preferences,
                        []
                    );


                if (preferences.length < 3) {

                    return;

                }


                setStorage(
                    STORAGE.onboarding,
                    false
                );


                setStorage(
                    STORAGE.loggedIn,
                    true
                );


                window.location.href =
                    "app.html";

            }
        );

    }

}


function updateInterestCounter() {

    const counter =
        $("#interestCount");

    const button =
        $("#finishInterests");

    const preferences =
        getStorage(
            STORAGE.preferences,
            []
        );


    if (counter) {

        counter.textContent =
            preferences.length;

    }


    if (button) {

        button.disabled =
            preferences.length < 3;

    }

}


/* =========================================================
   PROTEÇÃO DO APP
   ========================================================= */

function protectApp() {

    const isAppPage =
        !!$("#appShell");

    if (!isAppPage) {
        return;
    }


    const user =
        getStorage(
            STORAGE.user,
            null
        );


    const loggedIn =
        getStorage(
            STORAGE.loggedIn,
            false
        );


    if (!user || !loggedIn) {

        window.location.href =
            "login.html";

        return;

    }

}


/* =========================================================
   LOGOUT
   ========================================================= */

function setupLogout() {

    const button =
        $("#logoutBtn");

    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        function() {

            /*
             * IMPORTANTE:
             * Não apagamos a conta.
             * Apenas encerramos a sessão.
             */

            setStorage(
                STORAGE.loggedIn,
                false
            );


            window.location.href =
                "login.html";

        }
    );

}


/* =========================================================
   USUÁRIO
   ========================================================= */

function getCurrentUser() {

    return getStorage(
        STORAGE.user,
        null
    );

}


function setupUserInfo() {

    const user =
        getCurrentUser();

    if (!user) {
        return;
    }


    const nameElements = [
        "#userName",
        "#topUserName",
        "#profileName"
    ];


    nameElements.forEach(function(selector) {

        const element =
            $(selector);

        if (element) {

            element.textContent =
                user.name || "Usuário";

        }

    });


    const email =
        $("#profileEmail");

    if (email) {

        email.textContent =
            user.email || "";

    }


    const avatarElements =
        $$("[data-user-avatar]");


    avatarElements.forEach(function(element) {

        const firstLetter =
            (user.name || "U")
                .charAt(0)
                .toUpperCase();

        element.textContent =
            firstLetter;

    });

}


/* =========================================================
   INTERESSES NO PERFIL
   ========================================================= */

function setupProfileInterests() {

    const container =
        $("#profileInterests");

    if (!container) {
        return;
    }


    const interests =
        getStorage(
            STORAGE.preferences,
            []
        );


    if (!interests.length) {

        container.innerHTML =
            "<span>Nenhum interesse selecionado.</span>";

        return;

    }


    container.innerHTML =
        interests
            .map(function(interest) {

                return `
                    <span class="interest-pill">
                        ${escapeHtml(interest)}
                    </span>
                `;

            })
            .join("");

}


/* =========================================================
   RECOMENDAÇÕES
   ========================================================= */

function getRecommendedItems() {

    const preferences =
        getStorage(
            STORAGE.preferences,
            []
        );


    if (!preferences.length) {

        return DISCOVERY_ITEMS.slice();

    }


    return DISCOVERY_ITEMS
        .map(function(item) {

            let score = 0;


            if (
                preferences.includes(
                    item.category
                )
            ) {

                score += 5;

            }


            if (
                preferences.includes(
                    item.type
                )
            ) {

                score += 3;

            }


            return {
                item: item,
                score: score
            };

        })
        .sort(function(a, b) {

            return b.score - a.score;

        })
        .map(function(result) {

            return result.item;

        });

}


/* =========================================================
   CARDS
   ========================================================= */

function renderCards(container, items) {

    if (!container) {
        return;
    }


    if (!items.length) {

        container.innerHTML = `
            <div class="empty-state">
                <strong>Nada encontrado.</strong>
                <span>Tente outra categoria ou pesquisa.</span>
            </div>
        `;

        return;

    }


    const saved =
        getStorage(
            STORAGE.saved,
            []
        );


    container.innerHTML =
        items.map(function(item) {

            const isSaved =
                saved.includes(item.id);


            return `
                <article
                    class="discovery-card"
                    data-card-id="${item.id}"
                >

                    <div class="card-visual">

                        <span class="card-icon">
                            ${item.icon}
                        </span>

                        <span class="card-tag">
                            ${escapeHtml(item.tag)}
                        </span>

                    </div>

                    <div class="card-content">

                        <div class="card-category">
                            ${escapeHtml(item.category)}
                        </div>

                        <h3>
                            ${escapeHtml(item.title)}
                        </h3>

                        <p>
                            ${escapeHtml(item.description)}
                        </p>

                        <div class="card-actions">

                            <button
                                class="save-btn ${isSaved ? "saved" : ""}"
                                data-save-id="${item.id}"
                                type="button"
                            >
                                ${isSaved ? "✓ Salvo" : "＋ Salvar"}
                            </button>

                            <button
                                class="discover-btn"
                                data-discover-id="${item.id}"
                                type="button"
                            >
                                Descobrir →
                            </button>

                        </div>

                    </div>

                </article>
            `;

        })
        .join("");


    setupCardButtons();

}


function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   SALVAR / REMOVER
   ========================================================= */

function setupCardButtons() {

    $$("[data-save-id]").forEach(function(button) {

        button.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                const id =
                    Number(
                        button.getAttribute(
                            "data-save-id"
                        )
                    );


                toggleSaved(id);

            }
        );

    });


    $$("[data-discover-id]").forEach(function(button) {

        button.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                const id =
                    Number(
                        button.getAttribute(
                            "data-discover-id"
                        )
                    );


                const item =
                    DISCOVERY_ITEMS.find(
                        function(content) {

                            return content.id === id;

                        }
                    );


                if (item) {

                    alert(
                        item.title +
                        "\n\n" +
                        item.description
                    );

                }

            }
        );

    });

}


function toggleSaved(id) {

    let saved =
        getStorage(
            STORAGE.saved,
            []
        );


    if (saved.includes(id)) {

        saved =
            saved.filter(
                function(savedId) {

                    return savedId !== id;

                }
            );

    } else {

        saved.push(id);

    }


    setStorage(
        STORAGE.saved,
        saved
    );


    refreshAllCards();

}


/* =========================================================
   CARDS SALVOS
   ========================================================= */

function renderSaved() {

    const container =
        $("#savedGrid");

    if (!container) {
        return;
    }


    const empty =
        $("#savedEmpty");


    const saved =
        getStorage(
            STORAGE.saved,
            []
        );


    const items =
        DISCOVERY_ITEMS.filter(
            function(item) {

                return saved.includes(
                    item.id
                );

            }
        );


    if (!items.length) {

        container.innerHTML = "";

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


    renderCards(
        container,
        items
    );

}


/* =========================================================
   ATUALIZAR CARDS
   ========================================================= */

function refreshAllCards() {

    const homeGrid =
        $("#discoveryGrid");

    const discoverGrid =
        $("#discoverGrid");


    if (homeGrid) {

        renderCards(
            homeGrid,
            getRecommendedItems()
        );

    }


    if (discoverGrid) {

        renderCards(
            discoverGrid,
            DISCOVERY_ITEMS
        );

    }


    renderSaved();

}


/* =========================================================
   CATEGORIAS
   ========================================================= */

function setupCategories() {

    $$("[data-category]").forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const category =
                        button.getAttribute(
                            "data-category"
                        );


                    $$("[data-category]").forEach(
                        function(item) {

                            if (
                                item
                                    .closest(
                                        "#categoryRow, #categoryRow2"
                                    )
                            ) {

                                item.classList.remove(
                                    "active"
                                );

                            }

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    filterCategory(
                        category
                    );

                }
            );

        }
    );

}


/* =========================================================
   FILTRO POR CATEGORIA
   ========================================================= */

function filterCategory(category) {

    const homeGrid =
        $("#discoveryGrid");

    const discoverGrid =
        $("#discoverGrid");


    let items;


    if (
        !category ||
        category === "Todos" ||
        category === "todos" ||
        category === "all"
    ) {

        items =
            DISCOVERY_ITEMS;

    } else {

        items =
            DISCOVERY_ITEMS.filter(
                function(item) {

                    return (
                        item.category
                            .toLowerCase() ===
                        category.toLowerCase()
                    );

                }
            );

    }


    if (homeGrid) {

        renderCards(
            homeGrid,
            items
        );

    }


    if (discoverGrid) {

        renderCards(
            discoverGrid,
            items
        );

    }

}


/* =========================================================
   PESQUISA
   ========================================================= */

function setupSearch() {

    const input =
        $("#searchInput");

    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        function() {

            const query =
                input.value
                    .trim()
                    .toLowerCase();


            if (!query) {

                refreshAllCards();

                return;

            }


            const results =
                DISCOVERY_ITEMS.filter(
                    function(item) {

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

                            ||

                            item.type
                                .toLowerCase()
                                .includes(query)

                        );

                    }
                );


            const homeGrid =
                $("#discoveryGrid");

            const discoverGrid =
                $("#discoverGrid");


            if (homeGrid) {

                renderCards(
                    homeGrid,
                    results
                );

            }


            if (discoverGrid) {

                renderCards(
                    discoverGrid,
                    results
                );

            }

        }
    );

}


/* =========================================================
   NAVEGAÇÃO DO APP
   ========================================================= */

function setupNavigation() {

    const buttons =
        $$("[data-section]");


    const sections =
        $$("[data-app-section]");


    if (!buttons.length) {
        return;
    }


    buttons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const target =
                    button.getAttribute(
                        "data-section"
                    );


                buttons.forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                sections.forEach(
                    function(section) {

                        const name =
                            section.getAttribute(
                                "data-app-section"
                            );


                        if (name === target) {

                            section.classList.add(
                                "active"
                            );

                            section.style.display =
                                "block";

                        } else {

                            section.classList.remove(
                                "active"
                            );

                            section.style.display =
                                "none";

                        }

                    }
                );


                if (target === "saved") {

                    renderSaved();

                }

            }
        );

    });


    const initial =
        sections.find(
            function(section) {

                return section.classList.contains(
                    "active"
                );

            }
        );


    if (!initial && sections.length) {

        sections.forEach(
            function(section, index) {

                section.style.display =
                    index === 0
                        ? "block"
                        : "none";

            }
        );

    }

}


/* =========================================================
   DESTAQUE
   ========================================================= */

function setupFeatured() {

    const featured =
        $("#featuredCard");

    if (!featured) {
        return;
    }


    const recommendations =
        getRecommendedItems();


    if (!recommendations.length) {
        return;
    }


    const item =
        recommendations[0];


    featured.innerHTML = `

        <div class="featured-icon">
            ${item.icon}
        </div>

        <div>

            <span class="featured-tag">
                ${escapeHtml(item.tag)}
            </span>

            <h2>
                ${escapeHtml(item.title)}
            </h2>

            <p>
                ${escapeHtml(item.description)}
            </p>

            <button
                type="button"
                class="btn btn-primary"
                data-featured-id="${item.id}"
            >
                Descobrir →
            </button>

        </div>

    `;


    const button =
        featured.querySelector(
            "[data-featured-id]"
        );


    if (button) {

        button.addEventListener(
            "click",
            function() {

                alert(
                    item.title +
                    "\n\n" +
                    item.description
                );

            }
        );

    }

}


/* =========================================================
   LANDING PAGE
   ========================================================= */

function setupLanding() {

    const buttons =
        $$("[data-scroll]");


    buttons.forEach(function(button) {

        button.addEventListener(
            "click",
            function(event) {

                const selector =
                    button.getAttribute(
                        "data-scroll"
                    );

                const target =
                    $(selector);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
         * Primeiro verificamos se é uma página
         * protegida.
         */

        protectApp();


        /*
         * Autenticação
         */

        setupLogin();

        setupRegister();

        setupPasswordToggles();


        /*
         * Onboarding
         */

        setupInterests();


        /*
         * App
         */

        setupLogout();

        setupUserInfo();

        setupProfileInterests();

        setupNavigation();

        setupCategories();

        setupSearch();

        setupFeatured();

        refreshAllCards();


        /*
         * Landing
         */

        setupLanding();

    }
);
