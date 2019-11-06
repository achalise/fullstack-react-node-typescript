export interface IActivity {
    id: string;
    type: string;
    name: string;
    created: Date;
}

// export class Activity implements IActivity {
//     id: string;
//     type: string;
//     name: string;
//     created: Date;
//     constructor(input: IActivity) {
//         this.id = input.id;
//         this.type = input.type;
//         this.name = input.name;
//         this.created = input.created;
//     }
// }