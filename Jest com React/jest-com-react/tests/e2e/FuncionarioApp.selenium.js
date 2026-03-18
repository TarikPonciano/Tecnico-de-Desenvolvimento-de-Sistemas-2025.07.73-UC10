// Para instalar o selenium no projeto rodar:

// npm install --save-dev selenium-webdriver chromedriver

import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js"
import assert from 'node:assert'
import 'chromedriver'

(async function testCadastro() {
    let driver;

    try {
        const f = {
            nome: "Mario",
            cargo: "Vendedor",
            cpf: "52365158072",
            salario: "5000.00",
            telefone: "8598965423",
            cep: "12345610"
        }

        const options = new chrome.Options()

        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build()

        await driver.get('http://localhost:5173')

        await driver.wait(until.elementLocated(By.css('input[placeholder="Digite o seu nome')), 5000)

        await driver.findElement(By.css('input[placeholder="Digite o seu nome')).sendKeys(f.nome)
        await driver.findElement(By.css('input[placeholder="Digite o seu cargo')).sendKeys(f.cargo)
        await driver.findElement(By.css('input[placeholder="Digite o seu cpf')).sendKeys(f.cpf)
        await driver.findElement(By.css('input[placeholder="Digite o seu salario')).sendKeys(f.salario)
        await driver.findElement(By.css('input[placeholder="Digite o seu cep')).sendKeys(f.cep)
        await driver.findElement(By.css('input[placeholder="Digite o seu telefone')).sendKeys(f.telefone)

        await driver.findElement(By.xpath("//button[text()='Adicionar']")).click()

        await driver.wait(until.elementLocated(By.xpath("//li[contains(.,'Mario')]")), 3000)

        const bodyText = await driver.findElement(By.tagName('body')).getText()

        assert.ok(bodyText.includes(`${f.nome} - ${f.cargo} - ${f.cpf} - ${f.telefone} - ${f.salario} - ${f.cep}`))
        console.log("Teste de inserção passou!")


    }
    catch (error) {
        console.error('Teste E2E falhou:', error)
        process.exit(1)
    }
    finally {
        await driver.sleep(3000);
        await driver.quit()
    }

}
)();