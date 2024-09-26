describe('Formulário de Cadastro', () => {

    it('Deve mostrar erro se os campos estiverem vazios', () => {
      cy.visit('http://127.0.0.1:5500/cadastro.html'); 
      cy.get('#cadastrar').click();
      cy.get('#mensagemErro').should('be.visible').and('contain', 'Todos os campos são obrigatórios!');
    });
  
    it('Deve mostrar erro se as senhas não coincidirem', () => {
      cy.visit('http://127.0.0.1:5500/cadastro.html');
      cy.get('#nome').type('Teste');
      cy.get('#email').type('teste@teste.com');
      cy.get('#senha').type('123456');
      cy.get('#confirmaSenha').type('654321');
      cy.get('#cadastrar').click();
      cy.get('#mensagemErro').should('be.visible').and('contain', 'As senhas não correspondem!');
    });
  
    it('Deve realizar o cadastro com sucesso', () => {
      cy.visit('http://127.0.0.1:5500/cadastro.html');
      cy.get('#nome').type('Teste');
      cy.get('#email').type('teste@teste.com');
      cy.get('#senha').type('123456');
      cy.get('#confirmaSenha').type('123456');
      cy.get('#cadastrar').click();
      cy.get('#mensagemSucesso').should('be.visible').and('contain', 'Cadastro realizado com sucesso!');
    });
  
  });
  