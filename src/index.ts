import { User } from './models/User';

const user = new User({});

user.set({ name: 'Nik' });

user.save();
