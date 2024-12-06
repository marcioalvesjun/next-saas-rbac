import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDelete = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCanDelete)
console.log(userCannotDeleteOtherUsers)
