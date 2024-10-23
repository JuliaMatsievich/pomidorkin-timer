import { useThemeColor } from '@/hooks/useThemeColor'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
    color: useThemeColor('text')
  }
})
