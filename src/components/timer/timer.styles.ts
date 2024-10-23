import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { ThemeApp } from '@/types/theme.types'
import { StyleSheet } from 'react-native'

export const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    timerTitle: {
      paddingBottom: 30,
      fontSize: 26
    },
    timerText: {
      fontSize: 18,
      color: ColorsAppTheme[theme].text
    }
  })
