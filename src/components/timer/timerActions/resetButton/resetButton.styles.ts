import { ThemeApp } from '@/types/theme.types'
import { StyleSheet } from 'react-native'

export const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    timerBtnReset: {
      alignSelf: 'flex-end',
      marginRight: 30,
      opacity: theme === 'dark' ? 1 : 0.5
    }
  })
