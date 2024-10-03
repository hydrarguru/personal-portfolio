export type Project = {
    projectTitle: string;
    projectDescription: string;
    projectTags: string[];
    projectDate?: string;
    githubLink?: string;
    websiteLink?: string;
    youtubeLink?: string;
}

export type Education = {
    educationTitle: string;
    educationDescription: string;
    curriculum: string[];
    associatedProjects: string[];
    startDate: string;
    endDate: string;
}

export type TagStyleOption = {
    tag: string;
    style: string;
};