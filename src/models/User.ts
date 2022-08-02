import { AxiosError, AxiosResponse } from 'axios';

export interface UserProps {
	[key: string]: string | number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
	get get() {
		return this.attributes.get;
	}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	set(update: UserProps): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	fetch(): void {
		const id = this.attributes.get('id');

		if (typeof id !== 'number') {
			throw new Error('cannot fetch without id');
		}

		this.sync.fetch(id).then((response: AxiosResponse): void => {
			this.set(response.data);
		});
	}

	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => {
				this.events.trigger('save');
			})
			.catch((error: AxiosError): void => {
				this.events.trigger('error');
			});
	}
}
