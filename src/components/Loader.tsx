import { ColorsApp } from '@/constants/ColorsApp'
import { FC } from 'react'
import { ActivityIndicator } from 'react-native'

export const Loader: FC = () => {
  return (
    <>
      <ActivityIndicator size={60} color={ColorsApp.primaryDark} />
    </>
  )
}
