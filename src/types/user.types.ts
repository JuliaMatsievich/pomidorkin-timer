export interface IUser {
  _id: string
  name: string
  email: string
}

export type TypeUserState = IUser | null
