const Employee = require("../lib/Employee");
const employee = new Employee('Sanyiah', '7861', 'sanyiahzulfiqar1996@googlemail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Sanyiah');
    expect(employee.id).toBe('7861');
    expect(employee.email).toBe('sanyiahzulfiqar1996@googlemail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Sanyiah');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('7861');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('sanyiahzulfiqar1996@googlemail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});


