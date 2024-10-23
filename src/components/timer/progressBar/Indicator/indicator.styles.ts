import { useThemeColor } from '@/hooks/useThemeColor'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  progressBarCircle: {
    width: 16,
    height: 16,
    backgroundColor: useThemeColor('colorProgress'),
    borderRadius: 15
  },
  progressBarCircleSmall: {
    width: 12,
    height: 12,
    backgroundColor: useThemeColor('colorProgress'),
    borderRadius: 15
  },
  progressBarCircleRest: {
    position: 'absolute',
    top: -20
  }
})
