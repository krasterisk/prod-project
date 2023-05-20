import {manualSearch} from "../../support/commands/manual";

describe('Переход к списку статей', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('manuals')
    })
  })

  afterEach(() => {
    cy.manualSearchClear()
  })

  it('и статьи успешно подгружаются', () => {
    cy.getByTestId('ManualList').should('exist')
    cy.getByTestId('ManualListItem').should('have.length.greaterThan',3)
  })

  it('делаем поиск по статьям', () => {
    manualSearch("TEST")
  })

})
