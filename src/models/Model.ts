import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
	get<K extends keyof T>(key: K): T[K];

	set(value: T): void;

	getAll(): T;
}

interface Sync<T> {
	fetch(id: number): AxiosPromise;

	save(data: T): AxiosPromise;
}

interface Events {
	on(eventName: string, callback: () => void): void;

	trigger(eventName: string): void;
}

interface HasId {
	id?: number;
}

export class Model<T extends HasId> {
	constructor(
		private attributes: ModelAttributes<T>,
		private sync: Sync<T>,
		private events: Events,
	) {}

	get get() {
		return this.attributes.get;
	}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	set(update: T): void {
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
