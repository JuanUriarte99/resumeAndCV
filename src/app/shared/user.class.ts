export class User {
    id: string;
    email: string;
    name: string;
    lastname: string;
    tlf: string;
    address: {
        street: string,
        city: string,
        state: string
    };    
    tecSkills: string[];
    softSkills: string[];
    personalProject: string;
    teamProject: string;
    extraCurr: string;
}