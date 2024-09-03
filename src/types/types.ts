export type Project = {
    projectTitle: string;
    projectDescription: string;
    projectTags: string[];
    projectDate?: string;
    githubLink: string;
    websiteLink: string;
}

export type TagStyleOption = {
    tag: string;
    style: string;
};