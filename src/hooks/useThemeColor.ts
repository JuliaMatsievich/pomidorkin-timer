import { ColorsAppTheme } from '@/constants/ColorsAppTheme'
import { useColorScheme } from 'react-native'

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof ColorsAppTheme.light &
    keyof typeof ColorsAppTheme.dark
) {
  const theme = useColorScheme() ?? 'dark'
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return ColorsAppTheme[theme][colorName]
  }
}
