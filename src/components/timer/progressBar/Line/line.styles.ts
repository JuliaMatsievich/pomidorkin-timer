import { useThemeColor } from '@/hooks/useThemeColor'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  progressBarLine: {
    width: 22,
    height: 1,
    backgroundColor: useThemeColor('colorProgress')
  },
  progressBarLineSmall: {
    width: 18,
    height: 1,
    backgroundColor: useThemeColor('colorProgress')
  }
})
