import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { ThemeApp } from '@/types/theme.types'
import { StyleSheet } from 'react-native'

export const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    progressBarLine: {
      width: 22,
      height: 1,
      backgroundColor: ColorsAppTheme[theme].colorProgress
    },
    progressBarLineSmall: {
      width: 18,
      height: 1,
      backgroundColor: ColorsAppTheme[theme].colorProgress
    }
  })
