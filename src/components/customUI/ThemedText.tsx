import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ThemeApp } from '@/types/theme.types'
import { StyleSheet, Text, type TextProps } from 'react-native'

interface ThemedTextProps extends TextProps {
  type?:
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'error'
    | 'time'
}

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const theme = useThemeColor()
  const color = ColorsAppTheme[theme].text

  return (
    <Text
      style={[
        { color },
        type === 'default' && styles(theme).default,
        type === 'title' && styles(theme).title,
        type === 'defaultSemiBold' && styles(theme).defaultSemiBold,
        type === 'subtitle' && styles(theme).subtitle,
        type === 'link' && styles(theme).link,
        type === 'error' && styles(theme).error,
        type === 'time' && styles(theme).time,
        style
      ]}
      {...rest}
    />
  )
}

const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    default: {
      fontSize: 16,
      lineHeight: 24
    },
    defaultSemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600'
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 32,
      marginBottom: 25
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    link: {
      lineHeight: 30,
      fontSize: 16,
      color: '#0a7ea4'
    },
    error: {
      lineHeight: 30,
      fontSize: 12,
      color: ColorsAppTheme[theme].error,
      alignSelf: 'flex-start'
    },
    time: {
      fontSize: 45
    }
  })
