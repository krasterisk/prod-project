let currentManualId = ''
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createManual().then(manual => {
            currentManualId = manual.id
            cy.visit(`manuals/${manual.id}`)
        })
    })

    afterEach(() => {
        cy.removeManual(currentManualId)
    })

    it('и видит содержимое статьи', () => {
        cy.getByTestId('ManualDetails.Info').should('exist')
    })

    it('и видит список рекомендаций', () => {
        cy.getByTestId('ManualRecommendationsList').should('exist')
    })

    it('и оставляет комментарий', () => {
        cy.getByTestId('ManualDetails.Info').should('exist')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('text')
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })

    it('и ставит оценку на реальном бэке', () => {
        cy.getByTestId('ManualDetails.Info').should('exist')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)
    })

    it('и ставит оценку на стабах(фикстурах)', () => {
        cy.intercept('GET', '**/manuals/*', { fixture: 'manual-details.json' })
        cy.getByTestId('ManualDetails.Info').should('exist')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)
    })
})
