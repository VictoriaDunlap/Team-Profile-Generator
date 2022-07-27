const Manager = require ('../manager')

test('Creates an Manager class', ()=>{
    const obj = new Manager("charli", 1, "email@email.com")
    expect(typeof(obj)).toBe('object')
    expect(obj.getName()).toBe("charli")
    expect(obj.getId()).toBe(1)
    expect(obj.getEmail()).toBe("email@email.com")
    expect(obj.getRole()).toBe("Employee")
    expect(obj.getOfficeNumber()).toBe(1)
})