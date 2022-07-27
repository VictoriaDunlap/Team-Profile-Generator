const Engineer = require ('../engineer')

test('Creates an Engineer class', ()=>{
    const obj = new Engineer("charli", 1, "email@email.com")
    expect(typeof(obj)).toBe('object')
    expect(obj.getName()).toBe("charli")
    expect(obj.getId()).toBe(1)
    expect(obj.getEmail()).toBe("email@email.com")
    expect(obj.getRole()).toBe("Employee")
    expect(obj.getGithub()).toBe("victoriadunlap")
})