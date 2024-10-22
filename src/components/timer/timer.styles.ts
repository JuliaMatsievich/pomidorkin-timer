import { ColorsApp } from '@/constants/ColorsApp'
import { ColorSchemeName, StyleSheet } from 'react-native'

export const styles = (colorScheme: ColorSchemeName, isPlaying: boolean) =>
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
      color: colorScheme === 'dark' ? ColorsApp.white : ColorsApp.black
    },
    timerStatusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10
    },
    timerSubTitle: {
      alignSelf: 'center'
    },
    timerImage: {
      width: 24,
      height: 24
    }
  })
