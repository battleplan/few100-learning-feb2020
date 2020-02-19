import { Employee, PI, isEven, Contractor } from './hr';
// you can write import * as fromHR from './hr';  and just use fromHR. to get intelicense

describe('modules and classes oh my', () => {

    it('creating an employee', () => {

        const bob = new Employee('Bob', 'Smith', 120_000);

        expect(bob.firstName).toBe('Bob');
        expect(bob.lastName).toBe('Smith');
        expect(bob.fullName).toBe('Bob Smith');
        expect(bob.salary).toBe(120_000);

        bob.giveRaise(1_000);
        expect(bob.salary).toBe(121_000);
    });

    it('working with a contractor', () => {
        const joe = new Contractor('Joe Schmidt');
        expect(joe.name).toBe('Joe Schmidt');
    });
});
