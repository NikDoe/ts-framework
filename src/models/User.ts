import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
	[key: string]: string | number;
}

const rootUrl = 'http//localhost:3000/users';

export class User {
	public events: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
}
