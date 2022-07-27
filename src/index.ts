import { User } from './models/User';

const user = new User({ name: 'NikDoe', age: 29 });

user.on('click', () => {
	console.log('click event was triggered');
});

user.trigger('click');
