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
    image?: string;
}

export type Experience = {
    experienceTitle: string;
    experienceRole: string;
    experienceDescription: string[];
    startDate: string;
    endDate: string;
}

export type TagStyleOption = {
    tag: string;
    style: string;
};

export type ResumeItem = {
    link: string;
    tooltip: string;
    text: string;
    disabled?: boolean;
};