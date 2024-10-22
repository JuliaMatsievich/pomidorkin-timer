import { ColorsApp } from '@/constants/ColorsApp'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  progressBarLine: {
    width: 22,
    height: 1,
    backgroundColor: ColorsApp.colorProgress
  },
  progressBarLineSmall: {
    width: 18,
    height: 1,
    backgroundColor: ColorsApp.colorProgress
  }
})
