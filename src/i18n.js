import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
    eng: {
        translation: {
            presentation: "Hi! I'm a passionate software developer with experience in a variety of programming languages and technologies. My goal is to create elegant and efficient solutions that solve real-world problems. I'm constantly diving into new languages and libraries to stay up to date and improve my skills",
            btnChangeLanguage: "Es",
            resume: "Resume",
            profession: "Full Stack Developer",
            skills: "Skills & Tools",
            proyects: "Proyects",
            education: "Education",
            gameDesc: "A game made with react native and expo",
            linkGame: "Download APK from expo",
            gameMsg: "It will soon be available for Android in Google Play",
            apiDesc: "An API that provides information about Venezuela, like states, capitals...",
            apiLink: "Official page",
            careerUSM: "Systems engineering",
            careerUSB: "Geophysical engineering",
            edt: "Full Stack Course",
            careerProgress: "In progress",
            finalized: "Finalized"
        }
    },
    es: {
        translation: {
            presentation: "¡Hola! Soy un apasionado desarrollador de software con experiencia en una variedad de lenguajes de programación y tecnologías. Mi objetivo es crear soluciones elegantes y eficientes que resuelvan problemas del mundo real. Constantemente me sumerjo en nuevos lenguajes y bibliotecas para mantenerme actualizado y mejorar mis habilidades",
            btnChangeLanguage: "Eng",
            resume: "Currículum",
            profession: "Programador Full Stack",
            skills: "Herramientas",
            proyects: "Proyectos",
            education: "Educación",
            gameDesc: "Un juego estilo quizz hecho con React Native y Expo",
            linkGame: "Descarga la APK desde Expo",
            gameMsg: "Pronto estará disponible en la Play Store",
            apiDesc: "Una API que proporciona información sobre Venezuela, como estados, capitales...",
            apiLink: "Página Oficial",
            careerUSM: "Ingeniería en sistemas",
            careerUSB: "Ingeniería Geofísica",
            edt: "Programación Full Stack",
            careerProgress: "En curso",
            finalized: "Finalizado"
        }
    }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "eng",
    resources,
});
export default i18n;