const add=(a,b)=>a+b;
const generateGreeting =(name)=>`Hello ${name}`;

// test('add two numbers',()=>{
//     const result = add(2,7);
//     expect(result).toBe(9);
// });

test('string concated',()=>{
    const result = generateGreeting('Akshay');
    expect(result).toBe('Hello Akshay');
});

