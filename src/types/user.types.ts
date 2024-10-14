export interface IUser {
  _id: string
  username: string
  email: string
  password: string
}

export type TypeUserState = IUser | null
