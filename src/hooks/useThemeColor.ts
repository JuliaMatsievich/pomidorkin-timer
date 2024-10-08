import { ColorsTheme } from '@/constants/ColorsTheme'
import { useColorScheme } from 'react-native'

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof ColorsTheme.light & keyof typeof ColorsTheme.dark
) {
  const theme = useColorScheme() ?? 'dark'
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return ColorsTheme[theme][colorName]
  }
}
