const Engineer = require("../lib/Engineer");
const engineer = new Engineer('Sanyiah', '7861', 'sanyiahzulfiqar1996@googlemail.com', 'san098765432');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('Sanyiah');
    expect(engineer.id).toBe('7861');
    expect(engineer.email).toBe('sanyiahzulfiqar1996@googlemail.com');
    expect(engineer.github).toBe('san098765432');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Sanyiah');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('7861');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('sanyiahzulfiqar1996@googlemail.com');
});

test('test if we can get the github from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('san098765432');
})

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});


