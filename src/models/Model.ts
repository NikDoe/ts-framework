import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { UserProps } from './User';

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

export class Model<T> {
	constructor(
		private attributes: ModelAttributes<T>,
		private sync: Sync<T>,
		private events: Events,
	) {}
}
