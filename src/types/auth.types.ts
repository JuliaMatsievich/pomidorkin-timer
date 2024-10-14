import { IUser, TypeUserState } from '@/types/user.types'
import { Dispatch, SetStateAction } from 'react'

export interface IContext {
  user: TypeUserState
  setUser: Dispatch<SetStateAction<TypeUserState>>
}

export interface IAuthFormData
  extends Pick<IUser, 'username' | 'email' | 'password'> {}
