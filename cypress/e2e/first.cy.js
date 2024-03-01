describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost/internship')

  })
  it('Verify Title Of The Internship Page', () => {
    cy.visit('https://localhost/internship')
     cy.title().should('eq','Assignment')
     
  })
  it('Verify heading Of The Internship Page', () => {
    cy.visit('https://localhost/internship')
    cy.get('.p-3').contains('List of Internship')
     
  })
  it('Veiw details', () => {
    cy.visit('https://localhost/internship')
    
    cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
    
   })
   it('Apply for Internship', () => {
    cy.visit('https://localhost/internship/internship.php?internship=1')
    
    cy.get('.btn').click()
    
   })
   it('Register for Internship', () => {
    cy.visit('https://localhost/internship/login.php')
    
    cy.get('.float-right > p > a').click()
    
    
   })
   it('Create new user', () => {
    
    cy.on('uncaught:exception', (err, runnable) => {
    //expect(err.message).to.include('something about the error')
    //done()
    return false
    })

    cy.visit('https://localhost/internship/register.php')
    cy.get('#fullname').type('KUNAL Saxena')
    cy.get('#email').type('kunalsaxena@gmail.com')
    cy.get('#password').type('1234')
    cy.get('#address1').type('BIET boys hostel')
    cy.get('#address2').type('Davangere')
    cy.get('#city').type('Davanagere')
    cy.get('#state').type('Karnataka')
    cy.get('#zipcode').type('577004')
    cy.get('#phone').type('7795354279')
    cy.get('#country').type('India')
    cy.get('.btn').click()
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click()
    //cy.get('div[align="center"] > #reg-head').should('eq','Registration Success')
    //cy.contains('Submit').click()
  })
  it('login as user', () => {
    
    cy.on('uncaught:exception', (err, runnable) => {
    //expect(err.message).to.include('something about the error')
    //done()
    return false
    })

    cy.visit('https://localhost/internship/login.php')
    cy.get('#email').type('kunalsaxena@gmail.com')
    cy.get('#password').type('1234')
    cy.get('.btn').click()
    //cy.get('div[align="center"] > #reg-head').should('eq','Registration Success')
    //cy.contains('Submit').click()
  })

 



})