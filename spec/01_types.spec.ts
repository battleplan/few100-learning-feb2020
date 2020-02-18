describe('declaring cariables', () => {
    describe('using let', () => {
        it('uninitialized let', () => {
            let x: any;

            x = 12;
            expect(x).toBe(12);

            x = 'Pizza';
            expect(x).toBe('Pizza');
        });
        it('using a typed let', () => {
            let x: number;

            x = 12;
            expect(x).toBe(12);

            // x = "Pizza";
            // expect (x).toBe('Pizza);
        });
        it('using an intialized let', () => {
            let x = 12;

            expect(x).toBe(12);
            // x = 'Tacos'; // nope! it is a number!

            x = 42;

            const PI = 3.14;
        });
    });
    describe('using const', () => {
        it('protects you from reassigning a variable', () => {
            const minimimAge = 21;

            //  minimumAge = 13;

            const friends = ['Sean', 'Amy', 'Jessika'];

            friends[0] = 'Byron';

            expect(friends).toEqual(['Byron', 'Amy', 'Jessika']);

            const message = { from: 'Stacey', note: 'Get Milk' };

            // message = {};

            message.note = 'Get Soy Milk';

            const name = 'Bob Dylan';

            console.log('Pizza');


        });
    });
    describe('advanced types', () => {
        it('has union types', () => {
            let x: number | string;

            x = 12;

            x = 'puppy';

            expect(x).toBe('puppy');
        });
        it('type aliases', () => {
            type ThingWithLettersAndStuff = string;

            let name: ThingWithLettersAndStuff;

            name = 'Putintane';

            type NumberOrString = number | string;
            type CreditCardNumber = string;
            interface Person {
                name: string;
                age: number;
                cc: CreditCardNumber;
            }



        });
    });

    describe('some of the built-in types', () => {
        it('has numbers', () => {
            const n1 = 3;
            const n2 = 3.14;
            const n3 = 0xFF; // Hexadecimal (base 16)
            const n4 = 0o22; // base 8
            const n5 = 0b1010; // base 2 (binary)
            const mypay = 1_333_222;

            let x: number;

            x = n1;
            x = n2;
            x = n3; // etc. etc.

        });

        it('has strings', () => {
            const s1 = 'This is a string';
            // tslint:disable-next-line: quotemark
            const s2 = 'Double Quote';

            const s3 = 'She said "Ok"';

            // tslint:disable-next-line: quotemark
            const s4 = 'the name is flanner O\'Connor';

        });

        it('template string', () => {
            // These are back-tick delimited.
            const s1 = `Jeff`;
            const story = `Chapter 1.

            It was a dark and stormy night.

            The end.`;

            const age = 50;

            const s3 = 'The name is ' + s1 + ' and the age is ' + age + '.';
            const s4 = `The name is ${s1} and the age is ${age}.`;

            expect(s3).toEqual(s4);

            const someHTML = `<main>
            <h1>Hello, World!</h1>
            <p>The story is here</p>
            </main>`;

        });
    });
    it('what is so bad about the var keyword??', () => {
        // var name = 'jeff';
        const age = 27;

        if (age >= 18) {
            // tslint:disable-next-line: no-var-keyword
            var message = 'Old English';
        }
        expect(message).toBe('Old English');

    });

    describe('array', () => {
        it('has a literal syntax', () => {
            const friends = ['Amy', 'David', 'Jessika'];

            expect(friends[0]).toBe('Amy');

            friends[1] = 'Dave';
            expect(friends[1]).toBe('Dave');

            // friends[2] = 99; // NO! This is an array of strings!

            const what = friends[999];
            expect(what).toBeUndefined();

            friends[999] = 'Gaia';

            expect(friends[999]).toBe('Gaia');
        });
        it('more on declaring them', () => {
            let favoriteNumbers: number[]; // an array of number.

            let favoriteNumbers2: Array<number>;

            let stuff: (number | string)[];
            let stuff2: Array<number | string>;
        });
    });
    describe('solving problems with tuples', () => {
        it('first the problem, wi9thout tuple', () => {

            function formatName(first: string, last: string): { fullName: string, numberOfLetters: number } {
                const result = `${last}, ${first}`;
                return {
                    fullName: result,
                    numberOfLetters: result.length
                };
            }

            const formattingResponse = formatName('Han', 'Solo');

            expect(formattingResponse.fullName).toBe('Solo, Han');
            expect(formattingResponse.numberOfLetters).toBe(9);

            const { fullName: hisName } = formatName('Kylo', 'Ren'); // object destructuring
            expect(hisName).toBe('Ren, Kylo');

            const movie = {
                title: 'Jaws',
                director: 'Spielberg',
                yearReleased: 1977
            };

        });
        it('doing it with a tuple', () => {

            function formatName(first: string, last: string): [string, number] {
                const result = `${last}, ${first}`;
                return [result, result.length];
            }

            const formattingResponse = formatName('Han', 'Solo');

            expect(formattingResponse[0]).toBe('Solo, Han');
            expect(formattingResponse[1]).toBe(9);

            const [name, letters] = formatName('Kylo', 'Ren');
            expect(name).toBe('Ren, Kylo');
            expect(letters).toBe(9);
        });
        it('array destructing', () => {
            const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            const [first, second, , fourth] = someNumbers;

            expect(first).toBe(1);
            expect(second).toBe(2);
            expect(fourth).toBe(4);

            const [head, ...rest] = someNumbers;

            expect(first).toBe(1);
            expect(rest).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
        });
        it('object destructuring', () => {
            const person = {
                firstName: 'Ben',
                lastName: 'Solo',
                job: 'Jedi Trainee'
            };

            const { firstName, lastName: ln, ...rest } = person;
            expect(firstName).toBe('Ben');
            expect(ln).toBe('Solo');
            expect(rest).toEqual({ job: 'Jedi Trainee' });

            // expect([1, 2, 3]).toEqual([1, 2, 3]);
        });

        it('array spread operator', () => {
            const numbers = [1, 2, 3];
            const newNumbers = [0, ...numbers, 4];
            expect(newNumbers).toEqual([0, 1, 2, 3, 4]);
        });
        it('object spread operator', () => {
            const movie = { title: 'Star Wars', director: 'Lucas', yearReleased: 1978 };
            const movie2 = { ...movie, yearReleased: 1977 };

            expect(movie2).toEqual({ title: 'Star Wars', director: 'Lucas', yearReleased: 1977 });
        });
    });

    describe('object literals', () => {
        it('has them', () => {
            interface Person {
                name: string;
                department: string;
                salary: number;
                manager?: string;
            }

            const bob: Person = {
                name: 'Bob Smith',
                department: 'QA',
                salary: 100_000,
                manager: 'Mary'
            };

            const mary: Person = {
                name: 'Mary Jones',
                department: 'CEO',
                salary: 80_000
            };

            function printEmployeeInfo(p: Person) {
                let prelude = `person ${p.name} works in ${p.department} and makes ${p.salary}`;
                if (p.manager) {
                    prelude += ` and they are managed by ${p.manager}`;
                } else {
                    prelude += ` and they have no manager`;
                }
                console.log(prelude);
            }
        });
        it('has truthy and falsy values', () => {
            expect('tacos').toBeTruthy();
            expect('').toBeFalsy();
            expect(0).toBeFalsy();
            expect(-1).toBeTruthy();
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();

        });

        it('has duck typing', () => {
            interface MessageHavingThing { message: string; }
            function logMessage(thingy: MessageHavingThing) {
                console.log('Got: ' + thingy.message);
            }

            logMessage({ message: 'Call Your Mom' });

            // logMessage();

            const book = {
                title: 'Clean your garage',
                message: 'A clean garage is a sign of healthy mind'
            };

            logMessage(book);
        });
    });
});

