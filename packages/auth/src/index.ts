import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from '@casl/ability'

import { User } from './models/user'
import { permissions } from './permissions'
import { ProjectSubject } from './subjects/project'
import { UserSubject } from './subjects/user'

export type AppAbilities = ProjectSubject | UserSubject | ['manage', 'all']

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

const builder = new AbilityBuilder(createAppAbility)

export function defineAbilityFor(user: User) {
  if (typeof permissions[user.role] !== 'function') {
    throw new Error(`Permissions for role ${user.role} not found.`)
  }

  permissions[user.role](user, builder)

  const ability = builder.build()

  return ability
}
