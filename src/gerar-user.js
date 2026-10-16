import { faker } from '@faker-js/faker';

const users = Array.from({ length: 1000 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  city: faker.location.city(),
  createdAt: faker.date.past()
}));

console.log(users);