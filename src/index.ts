import { User } from './models/User';

const user = new User({ name: 'NikDoe', age: 29 });

user.on('click', () => {});
user.on('click', () => {});
user.on('change', () => {});

console.log(user);
