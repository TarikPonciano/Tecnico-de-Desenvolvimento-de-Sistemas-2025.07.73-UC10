const saudacao = require("./saudacao")

test("Saudação com nome masculino", ()=>{
    const nome = "Johnny"
    expect(saudacao(nome)).toBe("Olá, Johnny!")
})

test("Saudação com nome feminino", ()=>{
    const nome = "Jennifer"
    expect(saudacao(nome)).toBe("Olá, Jennifer!")
})

test("Saudação com nome vazio", () =>{
    const nome = ""
    expect(saudacao(nome)).toBe("Envie um nome válido!")
})