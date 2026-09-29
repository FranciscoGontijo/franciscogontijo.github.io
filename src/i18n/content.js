// Todo o texto do site, em português e em inglês.
// Os componentes leem daqui pelo useLanguage(), então trocar o idioma troca o site inteiro.

const content = {
    pt: {
        htmlLang: "pt-BR",
        pageTitle: "Francisco Gontijo · Desenvolvedor Full Stack",
        nav: {
            home: "Início",
            about: "Sobre",
            contact: "Contato",
            language: "Idioma"
        },
        cv: {
            file: "/cv/Francisco-Gontijo-Curriculo.pdf",
            download: "Baixar currículo",
            portuguese: "Currículo em português",
            english: "Currículo em inglês"
        },
        hero: {
            eyebrow: "Desenvolvedor Full Stack",
            title: "Olá, meu nome é Francisco Gontijo",
            text: "Construo produtos web e mobile de ponta a ponta, do banco de dados ao deploy. Co-fundador da Merge e estudante de Engenharia de Software.",
            status: "Aberto a estágio e vagas júnior · Florianópolis ou remoto",
            photoAlt: "Foto de Francisco Gontijo"
        },
        projects: {
            title: "Projetos",
            viewSite: "Ver site",
            github: "Código no GitHub",
            previous: "Anterior",
            next: "Próximo",
            merge: {
                meta: "Co-fundador & Desenvolvedor Full Stack · set/2025 – atual",
                intro: "Ecossistema esportivo com três produtos e uma única conta de usuário: gestão de torneios e ingressos para clubes, plataforma para assessorias esportivas e app para atletas. Em produção, com clientes reais.",
                highlightsTitle: "Problemas que resolvi e decisões que tomei",
                highlights: [
                    {
                        title: "Um banco, um schema por produto.",
                        text: "Estruturei o PostgreSQL no Supabase com os schemas core, merge_web e consultancies, nada exposto pela API pública, ambientes de dev e produção separados e migrações versionadas. Conduzi a virada das duas plataformas web para produção."
                    },
                    {
                        title: "Ingresso sem venda a mais.",
                        text: "Uma trava por evento no PostgreSQL (FOR NO KEY UPDATE NOWAIT, com novas tentativas) impede vender acima da capacidade quando muita gente compra ao mesmo tempo. Descartei o isolamento Serializable, que derrubava compras até em eventos diferentes, e a trava com espera, que prenderia uma conexão do banco para cada comprador."
                    },
                    {
                        title: "Um clube não enxerga o outro.",
                        text: "Fechei 4 falhas de acesso indevido (IDOR), 3 delas entre clubes, e passei a aplicar as permissões por papel no servidor, com testes automatizados."
                    },
                    {
                        title: "Tempo real.",
                        text: "Atualizações com Pusher em canais privados que negam acesso por padrão: o organizador vê as inscrições mudarem na hora, e o app recebe as notificações."
                    },
                    {
                        title: "Deploy seguro.",
                        text: "Backup automático e bloqueio de SQL destrutivo antes de cada migração em produção."
                    }
                ],
                note: "O código é privado. Conto os detalhes numa conversa.",
                diagram: {
                    description: "Arquitetura da Merge: o app do atleta usa as APIs das duas plataformas web, que gravam no mesmo PostgreSQL, com um schema por produto. Clerk, Pusher e Asaas são serviços externos.",
                    app: "App do atleta",
                    appStack: "React Native · Expo",
                    clubs: "Gestão",
                    clubsInfo: "torneios e ingressos",
                    coaching: "Assessoria",
                    coachingInfo: "treinos e atletas",
                    database: "PostgreSQL · Supabase",
                    core: "identidade",
                    mergeWeb: "gestão",
                    consultancies: "assessoria",
                    services: "Serviços externos",
                    clerk: "login único",
                    pusher: "tempo real",
                    asaas: "Pix e cartão"
                }
            },
            quadraon: {
                meta: "Co-fundador & Desenvolvedor Full Stack · set/2024 – nov/2025",
                paragraphs: [
                    "Plataforma de reserva e gestão de quadras esportivas, conectando jogadores a donos de quadras. A ideia foi minha, e fui responsável pela arquitetura e pelo desenvolvimento de ponta a ponta: reservas por horário e Day-Use, geração automática de horários semanais, tratamento de fuso horário e reserva sem login.",
                    "O produto ficou pronto e no ar, mas não conquistamos clientes: faltou estrutura de marketing e vendas. Foi o aprendizado que levei para a Merge."
                ]
            },
            studyTitle: "Projetos de estudo",
            studyIntro: "Projetos que fiz em 2023, enquanto aprendia.",
            study: {
                austral: "Loja de roupas com catálogo, carrinho e gerenciamento de estado.",
                pomodoro: "Timer Pomodoro com configurações e estatísticas por usuário, API em Express e login pelo AWS Cognito.",
                rentalCar: "Site de aluguel de carros em React, como SPA responsiva."
            }
        },
        about: {
            title: "Sobre mim",
            subtitle: "Da engenharia civil ao software",
            greeting: "Oi, eu sou o Francisco.",
            text: "Sou desenvolvedor full stack e estudante de Engenharia de Software na Descomplica, com conclusão prevista em 2028. Antes de programar, fui engenheiro civil: trabalhei com projeto e gestão de obras e liderei uma equipe nos Estados Unidos. Comecei a estudar programação em 2022 e hoje sou co-fundador da Merge, onde trabalho de ponta a ponta, do banco de dados ao deploy. Moro em Florianópolis e busco estágio ou vaga júnior.",
            experienceTitle: "Experiência",
            experience: [
                { period: "set/2025 – atual", role: "Co-fundador & Desenvolvedor Full Stack", place: "Merge" },
                { period: "set/2024 – nov/2025", role: "Co-fundador & Desenvolvedor Full Stack", place: "QuadraON" },
                { period: "2018 – 2026", role: "Engenharia Civil", place: "COESA Construtora Oeste, TIG Flooring (EUA) e COPASA" }
            ],
            educationTitle: "Formação",
            education: [
                { period: "2024 – 2028 (previsão)", role: "Bacharelado em Engenharia de Software", place: "Descomplica Faculdade Digital" },
                { period: "2018 – 2021", role: "Bacharelado em Engenharia Civil", place: "Centro Universitário UNA" }
            ],
            certificationsTitle: "Certificações",
            certifications: "DB Developer e Object-Oriented Developer (Descomplica), Front-End Engineer (Codecademy) e NLW Unite (Rocketseat)",
            skillsTitle: "Habilidades",
            skills: [
                { group: "Linguagens", items: ["TypeScript", "JavaScript", "SQL"] },
                { group: "Front-end", items: ["React", "Next.js", "React Native (Expo)", "Tailwind CSS", "React Hook Form", "Zod"] },
                { group: "Back-end e dados", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase", "MongoDB", "APIs REST", "Pusher"] },
                { group: "Infra e ferramentas", items: ["Vercel", "GitHub Actions", "Docker", "AWS S3", "Clerk", "Asaas", "Vitest", "Git", "Claude Code"] }
            ],
            languagesTitle: "Idiomas",
            languages: "Português (nativo) · Inglês (profissional) · Espanhol (intermediário)",
            sayHello: "Diga olá!"
        },
        contact: {
            title: "Contato",
            location: "Florianópolis, SC, Brasil",
            formTitle: "Vamos conversar",
            name: "Nome",
            email: "E-mail",
            message: "Mensagem",
            send: "ENVIAR MENSAGEM",
            sending: "ENVIANDO…",
            error: "Não consegui enviar agora. Escreva direto para franciscoacmg@gmail.com.",
            successTitle: "Mensagem enviada",
            successText: "Obrigado pelo contato! Respondo o quanto antes.",
            back: "Voltar"
        },
        footer: "Desenvolvido por Francisco Gontijo"
    },

    en: {
        htmlLang: "en",
        pageTitle: "Francisco Gontijo · Full-Stack Developer",
        nav: {
            home: "Home",
            about: "About",
            contact: "Contact",
            language: "Language"
        },
        cv: {
            file: "/cv/Francisco-Gontijo-Resume-EN.pdf",
            download: "Download resume",
            portuguese: "Resume in Portuguese",
            english: "Resume in English"
        },
        hero: {
            eyebrow: "Full-Stack Developer",
            title: "Hello, my name is Francisco Gontijo",
            text: "I build web and mobile products end to end, from the database to deployment. Co-founder of Merge and Software Engineering student.",
            status: "Open to internship and junior roles · Florianópolis or remote",
            photoAlt: "Photo of Francisco Gontijo"
        },
        projects: {
            title: "Projects",
            viewSite: "View site",
            github: "Code on GitHub",
            previous: "Previous",
            next: "Next",
            merge: {
                meta: "Co-founder & Full-Stack Developer · Sep 2025 – present",
                intro: "A sports platform with three products and a single user account: tournament and ticketing management for clubs, a platform for coaching businesses, and an app for athletes. Live in production, with real customers.",
                highlightsTitle: "Problems I solved and decisions I made",
                highlights: [
                    {
                        title: "One database, one schema per product.",
                        text: "Designed the PostgreSQL database on Supabase with the core, merge_web and consultancies schemas, nothing exposed through the public API, separate dev and production environments and versioned migrations. Led the production cutover of both web platforms."
                    },
                    {
                        title: "No overselling.",
                        text: "A per-event PostgreSQL lock (FOR NO KEY UPDATE NOWAIT, with retries) keeps ticket sales within capacity when many people buy at once. I ruled out Serializable isolation, which aborted purchases even across different events, and a waiting lock, which would hold one database connection per buyer."
                    },
                    {
                        title: "Clubs can't see each other.",
                        text: "Fixed 4 broken access control (IDOR) flaws, 3 of them across clubs, and moved role-based permissions to server-side enforcement, with automated tests."
                    },
                    {
                        title: "Real time.",
                        text: "Pusher updates on private channels that deny by default: organizers see registrations change live, and the app receives notifications."
                    },
                    {
                        title: "Safe deploys.",
                        text: "Automatic backup and a destructive-SQL guard before every production migration."
                    }
                ],
                note: "The code is private. Happy to walk you through it in a conversation.",
                diagram: {
                    description: "Merge architecture: the athlete app uses the APIs of both web platforms, which write to the same PostgreSQL database, with one schema per product. Clerk, Pusher and Asaas are external services.",
                    app: "Athlete app",
                    appStack: "React Native · Expo",
                    clubs: "Club platform",
                    clubsInfo: "tournaments & tickets",
                    coaching: "Coaching platform",
                    coachingInfo: "training & athletes",
                    database: "PostgreSQL · Supabase",
                    core: "identity",
                    mergeWeb: "clubs",
                    consultancies: "coaching",
                    services: "External services",
                    clerk: "single sign-on",
                    pusher: "real time",
                    asaas: "Pix & cards"
                }
            },
            quadraon: {
                meta: "Co-founder & Full-Stack Developer · Sep 2024 – Nov 2025",
                paragraphs: [
                    "A sports court booking and management platform connecting players and court owners. It was my idea, and I owned the architecture and end-to-end development: hourly and day-use bookings, automatic weekly slot generation, time zone handling and guest checkout.",
                    "The product shipped and went live, but we never landed customers: we lacked marketing and sales. That lesson came with me to Merge."
                ]
            },
            studyTitle: "Study projects",
            studyIntro: "Projects I built in 2023, while learning.",
            study: {
                austral: "Apparel store with a catalog, shopping cart and state management.",
                pomodoro: "Pomodoro timer with per-user settings and statistics, an Express API and AWS Cognito sign-in.",
                rentalCar: "Responsive single-page rental car website built with React."
            }
        },
        about: {
            title: "About me",
            subtitle: "From civil engineering to software",
            greeting: "Hi, I'm Francisco.",
            text: "I'm a full-stack developer and a Software Engineering student at Descomplica, graduating in 2028. Before software, I was a civil engineer: I worked on project design and construction management, and led a crew in the United States. I started studying programming in 2022, and today I'm a co-founder of Merge, where I work end to end, from the database to deployment. I live in Florianópolis and I'm looking for internship or junior roles.",
            experienceTitle: "Experience",
            experience: [
                { period: "Sep 2025 – present", role: "Co-founder & Full-Stack Developer", place: "Merge" },
                { period: "Sep 2024 – Nov 2025", role: "Co-founder & Full-Stack Developer", place: "QuadraON" },
                { period: "2018 – 2026", role: "Civil Engineering", place: "COESA Construtora Oeste, TIG Flooring (USA) and COPASA" }
            ],
            educationTitle: "Education",
            education: [
                { period: "2024 – 2028 (expected)", role: "Bachelor's in Software Engineering", place: "Descomplica Faculdade Digital" },
                { period: "2018 – 2021", role: "Bachelor's in Civil Engineering", place: "Centro Universitário UNA" }
            ],
            certificationsTitle: "Certifications",
            certifications: "DB Developer and Object-Oriented Developer (Descomplica), Front-End Engineer (Codecademy) and NLW Unite (Rocketseat)",
            skillsTitle: "Skills",
            skills: [
                { group: "Programming", items: ["TypeScript", "JavaScript", "SQL"] },
                { group: "Front end", items: ["React", "Next.js", "React Native (Expo)", "Tailwind CSS", "React Hook Form", "Zod"] },
                { group: "Back end & data", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase", "MongoDB", "REST APIs", "Pusher"] },
                { group: "Infra & tools", items: ["Vercel", "GitHub Actions", "Docker", "AWS S3", "Clerk", "Asaas", "Vitest", "Git", "Claude Code"] }
            ],
            languagesTitle: "Languages",
            languages: "Portuguese (native) · English (professional working proficiency) · Spanish (intermediate)",
            sayHello: "Say hello!"
        },
        contact: {
            title: "Contact",
            location: "Florianópolis, SC, Brazil",
            formTitle: "Get in touch",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "SEND MESSAGE",
            sending: "SENDING…",
            error: "Couldn't send it right now. Email me at franciscoacmg@gmail.com.",
            successTitle: "Message sent",
            successText: "Thanks for reaching out! I'll get back to you soon.",
            back: "Back"
        },
        footer: "Designed & built by Francisco Gontijo"
    }
};

export default content;
