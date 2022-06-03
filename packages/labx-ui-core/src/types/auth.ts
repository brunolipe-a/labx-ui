export interface User {
  id: string
  name: string
  email: string
}

export interface PermissionsActions {
  action: string[]
  subject: string[]
}

export interface AuthUser extends User {
  permissions: PermissionsActions[]
}
