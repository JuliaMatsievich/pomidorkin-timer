import { ThemeApp } from '@/types/theme.types'
import { StyleSheet } from 'react-native'

export const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    timerBtnArrow: {
      opacity: theme === 'dark' ? 1 : 0.5
    }
  })
