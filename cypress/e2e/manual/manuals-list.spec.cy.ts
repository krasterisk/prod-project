import { manualSearch } from '../../support/commands/manual'

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
        cy.getByTestId('ManualListItem').should('have.length.greaterThan', 3)
    })

    it('статья на стабах, моках (фикстурах)', () => {
        cy.intercept('GET', '**/manuals?*', { fixture: 'manuals.json' })
        cy.getByTestId('ManualList').should('exist')
        cy.getByTestId('ManualListItem').should('have.length.greaterThan', 3)
    })

    it('делаем поиск по статьям', () => {
        manualSearch('TEST')
    })

    it.skip('пример пропуска теста', () => {
        manualSearch('TEST')
    })
})
