import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { useColorScheme } from 'react-native'

export const useThemeColor = (
  colorName: keyof typeof ColorsAppTheme.light &
    keyof typeof ColorsAppTheme.dark
) => {
  const theme = useColorScheme() ?? 'dark'
  return ColorsAppTheme[theme][colorName]
}
