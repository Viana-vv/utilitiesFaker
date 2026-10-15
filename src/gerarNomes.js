import {fakerPT_BR, faker } from '@faker-js/faker';
import { Faker, pt_BR } from '@faker-js/faker';
const fakerLocal = new Faker({ locale: pt_BR });

for(let s = 0; s < 5; s++ ){
    const randomName = fakerPT_BR.person.fullName();
    const randomNameMiddle = fakerPT_BR.person.middleName();
    const randomNameFisrt = fakerPT_BR.person.firstName();
}
for(let i = 0; i < 6 ;i++){
    const randomEMAIL = fakerPT_BR.internet.email();
    console.log(randomEMAIL)}

const randomAnimal = fakerPT_BR.animal.cat()
console.log(randomAnimal)

const localsupo = faker.location.city()
const localsupo2 = faker.location.country()
const  localsupo3 = faker.location.countryCode()
const localtest = faker.location.latitude()


