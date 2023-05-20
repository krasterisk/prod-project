import * as commandCommands from './commands/common'
import * as profileCommands from './commands/profile'
import * as manualCommands from './commands/manual'
import * as ratingCommands from './commands/rating'

Cypress.Commands.addAll(commandCommands)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(manualCommands)
Cypress.Commands.addAll(ratingCommands)

export {}
