import { useColorScheme } from 'react-native'

export const useThemeColor = () => {
  const theme = useColorScheme() ?? 'dark'
  return theme
}
