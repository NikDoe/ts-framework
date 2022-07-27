interface userProps {
	name: string;
	age: number;
}

export class User {
	constructor(private data: userProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}
}