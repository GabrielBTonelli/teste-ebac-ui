/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";

describe('Funcionalidade: Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });
    it('Deve completar cadastro com sucesso - Usando variáveis', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var password = faker.internet.password()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

    });
});
