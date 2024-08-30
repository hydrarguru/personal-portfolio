import { Project } from "@/types/types";

export const projects: Project[] = [
    {
        projectTitle: "CoinCompass",
        projectDescription: "CoinCompass is a web application with the goal of helping you save money by tracking your expenses.",
        projectTags: ["Vue", "TypeScript", "Firebase"],
        githubLink: "https://github.com/ITHS-Team8/CoinCompass",
        websiteLink: "https://coincompass.netlify.app/"
    },
    {
        projectTitle: "Reader",
        projectDescription: "Reader is a web app that allows users to join communities & share their interests with others.",
        projectTags: ["React", "TypeScript", "rsuite"],
        githubLink: "https://github.com/hydrarguru/reader",
        websiteLink: "https://reader-app.netlify.app/"
    },
    {
        projectTitle: "Reader API",
        projectDescription: "Reader API is the backend that powers the Reader web app.",
        projectTags: ["TypeScript", "Bun", "Express.js", "MySQL"],
        githubLink: "https://github.com/hydrarguru/reader-backend",
        websiteLink: ""
    },
    {
        projectTitle: "OGLe (Online Game Library)",
        projectDescription: "An online video game library that consumes the RAWG API to display information about games.",
        projectTags: ["Vue", "TypeScript"],
        githubLink: "https://github.com/hydrarguru/ogle",
        websiteLink: "https://hg-oogle.netlify.app/"
    },
    {
        projectTitle: "J.A.T. (Job Application Tracker)",
        projectDescription: "Web extension that helps you keep track of your job applications.",
        projectTags: ["TypeScript", "Chart.js", "IndexedDB API"],
        githubLink: "https://github.com/hydrarguru/job-application-tracker",
        websiteLink: ""
    }
]