import PomodoroProjectMainSrc from "../assets/images/Pomodoro Project.png";
import RentalCarProjectMainSrc from "../assets/images/Rental Car.png";
import AustralProjectStoreSrc from "../assets/images/Austral Store Page.png";
import QuadraONPlayerMainSrc from "../assets/images/QuadraON Player Main.png";
import QuadraONPlayerBookingsSrc from "../assets/images/QuadraON Player Bookings.png";
import QuadraONOwnerBookingsSrc from "../assets/images/QuadraON Owner Bookings.png";

// Dados que não mudam com o idioma: links, imagens e tecnologias.
// Os textos de cada projeto ficam em src/i18n/content.js.

export const mergeStack = [
    "Next.js", "React", "React Native", "TypeScript", "PostgreSQL", "Prisma",
    "Supabase", "Clerk", "Pusher", "Asaas", "Vercel", "GitHub Actions", "Vitest"
];

export const quadraON = {
    site: "https://quadraon.com.br/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod", "Prisma", "MongoDB", "Clerk", "AWS S3"],
    images: [
        { imageUrl: QuadraONPlayerMainSrc, alt: { pt: "QuadraON: página inicial do jogador", en: "QuadraON: player home page" } },
        { imageUrl: QuadraONPlayerBookingsSrc, alt: { pt: "QuadraON: reservas do jogador", en: "QuadraON: player bookings" } },
        { imageUrl: QuadraONOwnerBookingsSrc, alt: { pt: "QuadraON: reservas do dono da quadra", en: "QuadraON: court owner bookings" } }
    ]
};

export const studyProjects = [
    {
        id: "austral",
        name: "Austral",
        site: "https://austral-project.vercel.app/",
        github: "https://github.com/FranciscoGontijo/Austral-Project",
        image: AustralProjectStoreSrc,
        stack: ["Next.js", "React", "Redux", "TypeScript"]
    },
    {
        id: "pomodoro",
        name: "Pomodoro",
        site: "https://pomodoroapp-nu.vercel.app/",
        github: "https://github.com/FranciscoGontijo/pomodoro-project",
        image: PomodoroProjectMainSrc,
        stack: ["React", "Redux", "Express", "Mongoose", "AWS Cognito"]
    },
    {
        id: "rentalCar",
        name: "Rental Car",
        site: "https://rentalcarproject.netlify.app/",
        github: "https://github.com/FranciscoGontijo/Rental-car-website",
        image: RentalCarProjectMainSrc,
        stack: ["React", "React Router"]
    }
];
