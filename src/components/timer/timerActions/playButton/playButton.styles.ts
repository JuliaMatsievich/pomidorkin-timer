import { useThemeColor } from '@/hooks/useThemeColor'
import { StyleSheet } from 'react-native'

export const styles = (isPlaying: boolean) =>
  StyleSheet.create({
    timerBtnPlay: {
      width: 60,
      height: 60,
      overflow: 'visible',
      backgroundColor: useThemeColor('primary'),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      paddingLeft: isPlaying ? 0 : 5,
      alignSelf: 'center',
      shadowColor: useThemeColor('shadowColor'),
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.7,
      shadowRadius: 7,
      elevation: 8
    },
    timerBtnPlayDesable: {
      backgroundColor: useThemeColor('primary')
    }
  })
