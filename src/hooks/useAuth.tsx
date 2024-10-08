import { AuthContext } from '@/providers/AuthProvider'
import { IContext } from '@/types/auth.types'
import { useContext } from 'react'

export function useAuth() {
  // if (process.env.NODE_ENV !== 'production') {
  //   if (!value) {
  //     throw new Error('useSession must be wrapped in a <SessionProvider />')
  //   }
  // }
  return useContext<IContext>(AuthContext)
}
