import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
	[key: string]: string | number;
}

const rootUrl = 'http//localhost:3000/users';

export class User {
	public events: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
	public attributes: Attributes<UserProps>;

	constructor(attr: UserProps) {
		this.attributes = new Attributes<UserProps>(attr);
	}
}
