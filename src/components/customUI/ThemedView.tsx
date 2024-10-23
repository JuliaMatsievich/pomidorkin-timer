import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'

import { useThemeColor } from '@/hooks/useThemeColor'
import { View, type ViewProps } from 'react-native'

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const theme = useThemeColor()
  const backgroundColor = ColorsAppTheme[theme].background

  return <View style={[{ backgroundColor }, style]} {...otherProps} />
}
