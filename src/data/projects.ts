export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string;
}

export const projectsData: Project[] = [
    {
        "id": "",
        "title": "",
        "description": "",
        "image": "",
        "category": "web",
        "techStack": [],
        "status": "completed",
        "liveDemo": "",
        "sourceCode": "",
        "startDate": "",
        "endDate": "",
        "featured": false,
        "tags": [],
        "visitUrl": ""
    }
];
