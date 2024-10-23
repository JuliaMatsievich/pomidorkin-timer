import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { useThemeColor } from '@/hooks/useThemeColor'
import { FC } from 'react'
import { ActivityIndicator } from 'react-native'

export const Loader: FC = () => {
  const theme = useThemeColor()
  return (
    <>
      <ActivityIndicator size={60} color={ColorsAppTheme[theme].primary} />
    </>
  )
}
