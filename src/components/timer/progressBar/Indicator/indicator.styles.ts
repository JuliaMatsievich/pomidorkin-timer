import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { ThemeApp } from '@/types/theme.types'
import { StyleSheet } from 'react-native'

export const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    progressBarCircle: {
      width: 16,
      height: 16,
      backgroundColor: ColorsAppTheme[theme].colorProgress,
      borderRadius: 15
    },
    progressBarCircleSmall: {
      width: 12,
      height: 12,
      backgroundColor: ColorsAppTheme[theme].colorProgress,
      borderRadius: 15
    },
    progressBarCircleRest: {
      position: 'absolute',
      top: -20
    }
  })
