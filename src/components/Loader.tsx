import { useThemeColor } from '@/hooks/useThemeColor'
import { FC } from 'react'
import { ActivityIndicator } from 'react-native'

export const Loader: FC = () => {
  return (
    <>
      <ActivityIndicator size={60} color={useThemeColor('primary')} />
    </>
  )
}
