import { User } from './models/User';

const user = new User({ name: 'NikDoe', age: 29 });

user.on('change', () => {
	console.log('user was change');
});

user.set({ name: 'Nik' });

console.log(user);
