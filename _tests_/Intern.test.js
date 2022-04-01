const Intern = require("../lib/Intern");
const intern = new Intern('Sanyiah', '7861', 'sanyiahzulfiqar1996@googlemail.com', 'England');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Sanyiah');
    expect(intern.id).toBe('7861');
    expect(intern.email).toBe('sanyiahzulfiqar1996@googlemail.com');
    expect(intern.school).toBe('England');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Sanyiah');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('7861');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('sanyiahzulfiqar1996@googlemail.com');
});

test('test if we can get the school from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('England');
})

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});


