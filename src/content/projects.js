import { html, css, js, react, mongoDb, tailwindCss } from "../content/badges";
export const projects = [
    {
        name: "Cloud Hosting PaaS",
        description: "Netlify-like and Heroku-like platform as a service(PaaS) app dedicated for hosting of static websites and asp.net core web servers.",
        websiteLink: "https://CloudHostingAPI.b4rify.app/",
        techStack: []
    },
    {
        name: "Poker Dice",
        imagePath: "/assets/projectSnaps/project1a.jpg",
        description: "Using of interpreter design pattern for implementing Poker Dice game with AI assistant.",
        githubLink: "https://github.com/barimale/poker-dice",
        techStack: []
    },
    {
        name: "Jigsaw Solver",
        imagePath: "/assets/projectSnaps/jigsaw.png",
        description: "Tree-search-based and genetic-based algorithms having some science-article-based and custom improvements, with agnostic execution wrapper, provided together with geometric and binary verifiers.",
        githubLink: "https://github.com/barimale/jigsaw-puzzle-solver",
        techStack: []
    },
    {
        name: "Portfolio",
        imagePath: "/assets/projectSnaps/project3a.jpg",
        description: "My web portfolio whose design is inspired based on popular Windows-95 operating system's look. It is forked from: https://github.com/renish47/portfolio",
        githubLink: "https://github.com/barimale/barimale-portfolio",
        websiteLink: "https://mateusz-wolnica.netlify.app/",
        techStack: [react, tailwindCss]
    }
]