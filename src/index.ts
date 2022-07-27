import { User } from './models/User';

const user = new User({ name: 'NikDoe', age: 29 });

user.set({ age: 999 });

console.log(user.get('name'));
console.log(user.get('age'));
