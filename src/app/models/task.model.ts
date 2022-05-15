export class Task {
    constructor(public title: string, 
        public description: string,
        public priority: string,
        public user?: string) {
    }
}