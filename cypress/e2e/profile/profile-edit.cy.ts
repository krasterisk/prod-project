describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then(() => {
      cy.visit('profile/1')
    })
  })

  afterEach(() => {
    cy.resetProfile('1')
  })

  it('Профиль успешно загружается', () => {
    const newName = 'NewFirstName'
    const newLast = 'NewLastName'

    cy.updateProfile(newName, newLast)
    cy.getByTestId('ProfileCard.Firstname').should('have.value', newName)
    cy.getByTestId('ProfileCard.Lastname').should('have.value', newLast)
  })
})
