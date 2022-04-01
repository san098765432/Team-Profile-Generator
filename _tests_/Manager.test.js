const Manager = require("../lib/Manager");
const manager = new Manager('Sanyiah', '7861', 'sanyiahzulfiqar1996@googlemail.com', '101');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Sanyiah');
    expect(manager.id).toBe('7861');
    expect(manager.email).toBe('sanyiahzulfiqar1996@googlemail.com');
    expect(manager.officeNumber).toBe('101');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Sanyiah');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('7861');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('sanyiahzulfiqar1996@googlemail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('101');
})

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});


