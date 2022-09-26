import { post } from "cypress/types/jquery"

it('has a logo', function () {
  cy.visit('https://www.ballarddesigns.com/')
  cy.contains('Ballard Designs ')
    cy.get('link').should('contains' , 'Ballard Designs LOGO"')

  })
  it('sign in link',function(){
cy.intercept("post",'https://www.ballarddesigns.com/UserLogonView?storeId=10052&catalogId=10551&langId=-1').as('Login');
cy.get('.loginMyAccount')
  .parent()
  .click()
  })
  it('welcome text',function(){
    cy.contains('Welcome back!').type(text)
  })
  it('type username and passward',()=>{
    cy.get('[id="logonId"]').type(text)
    cy.get('[id="logonPassword"]').type(passward)
    cy.intercept("post",'https://www.ballarddesigns.com/UserLogonView?storeId=10052&catalogId=10551&langId=-1').as('Login');
    cy.get('[id="logonButton"]]').click.wait('@Login',{timeout:10000}).its('response').should(res)=>{
      expect(res?.logonButton).to.has.property('userId').to.deep.eq(text)
    }


  })