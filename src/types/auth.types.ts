import { TypeUserState } from '@/types/user.types'
import { Dispatch, SetStateAction } from 'react'

export interface IContext {
  user: TypeUserState
  setUser: Dispatch<SetStateAction<TypeUserState>>
}
