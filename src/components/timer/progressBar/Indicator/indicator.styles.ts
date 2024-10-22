import { ColorsApp } from '@/constants/ColorsApp'
import { ColorSchemeName, StyleSheet } from 'react-native'

export const styles = (colorScheme: ColorSchemeName, isPlaying: boolean) =>
  StyleSheet.create({
    progressBarCircle: {
      width: 16,
      height: 16,
      backgroundColor: ColorsApp.colorProgress,
      borderRadius: 15
    },
    progressBarCircleSmall: {
      width: 12,
      height: 12,
      backgroundColor: ColorsApp.colorProgress,
      borderRadius: 15
    },
    progressBarCircleRest: {
      position: 'absolute',
      top: -20
    }
  })
