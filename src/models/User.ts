import axios, { AxiosResponse } from 'axios';

interface UserProps {
	[key: string]: string | number;
}

export class User {
	constructor(private data: UserProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	fetch(): void {
		axios
			.get(`http://localhost:3000/users/${this.get('id')}`)
			.then((response: AxiosResponse) => {
				this.set(response.data);
			});
	}

	save(): void {
		const id = this.get('id');

		if (id)
			axios.put(
				`http://localhost:3000/users/${this.get('id')}`,
				this.data,
			);
		else axios.post('http://localhost:3000/users', this.data);
	}
}
