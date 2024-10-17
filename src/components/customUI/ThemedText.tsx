import { ColorsApp } from '@/constants/ColorsApp'
import { useThemeColor } from '@/hooks/useThemeColor'
import { StyleSheet, Text, type TextProps } from 'react-native'

interface ThemedTextProps extends TextProps {
  lightColor?: string
  darkColor?: string
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
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return (
    <Text
      style={[
        { color },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'defaultSemiBold' && styles.defaultSemiBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        type === 'error' && styles.error,
        type === 'time' && styles.time,
        style
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
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
    color: ColorsApp.red,
    alignSelf: 'flex-start'
  },
  time: {
    fontSize: 45
  }
})
