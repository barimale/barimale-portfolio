import { html, css, js, react, mongoDb, tailwindCss, dotnet, winforms, wpf, typescript } from "../content/badges";
export const projects = [
    {
        name: "Christmas Secret Gifter",
        imagePath: "/assets/projectSnaps/christmas.png",
        description: "Social events helper.",
        websiteLink: "https://christmas-secret-gifter.b4rify.com/",
        techStack: [dotnet, react, typescript, css, html]
    },
    {
        name: "Cloud Hosting SaaS",
        imagePath: "/assets/projectSnaps/cloudSaaS.png",
        description: "Netlify-like and Heroku-like SaaS app dedicated for hosting static websites and asp.net core web servers.",
        websiteLink: "https://cloud.b4rify.com/",
        techStack: [dotnet, react, typescript, html, css]
    },
    {
        name: "Poker Dice",
        imagePath: "/assets/projectSnaps/project1a.jpg",
        description: "Using of interpreter design pattern for implementing Poker Dice game with AI assistant.",
        githubLink: "https://github.com/barimale/poker-dice",
        techStack: [dotnet, winforms]
    },
    {
        name: "Jigsaw Solver",
        imagePath: "/assets/projectSnaps/jigsaw.png",
        description: "Tree-search-based and genetic-based algorithms having some science-article-based and custom improvements, with agnostic execution wrapper, provided together with geometric and binary verifiers.",
        githubLink: "https://github.com/barimale/jigsaw-puzzle-solver",
        techStack: [dotnet, wpf]
    },
    {
        name: "Portfolio",
        imagePath: "/assets/projectSnaps/project3a.jpg",
        description: "My web portfolio whose design is inspired based on popular Windows-95 operating system's look. It is forked from: https://github.com/renish47/portfolio",
        githubLink: "https://github.com/barimale/barimale-portfolio",
        websiteLink: "https://mateusz-wolnica.netlify.app/",
        techStack: [react, tailwindCss, html]
    }
]