import { IContext } from '@/types/auth.types'
import { TypeUserState } from '@/types/user.types'
import { createContext, FC, PropsWithChildren, useState } from 'react'

export const AuthContext = createContext<IContext>({
  user: null,
  setUser: () => null
})

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
