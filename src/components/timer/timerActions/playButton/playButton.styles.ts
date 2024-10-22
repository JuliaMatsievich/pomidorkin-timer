import { ColorsApp } from '@/constants/ColorsApp'
import { ColorSchemeName, StyleSheet } from 'react-native'

export const styles = (colorScheme: ColorSchemeName, isPlaying: boolean) =>
  StyleSheet.create({
    timerBtnPlay: {
      width: 60,
      height: 60,
      overflow: 'visible',
      backgroundColor:
        colorScheme === 'dark' ? ColorsApp.primaryDark : ColorsApp.primaryLight,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      paddingLeft: isPlaying ? 0 : 5,
      alignSelf: 'center',
      shadowColor:
        colorScheme === 'dark' ? ColorsApp.primaryDark : ColorsApp.primaryLight,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.7,
      shadowRadius: 10,
      elevation: 15
    },
    timerBtnPlayDesable: {
      backgroundColor: ColorsApp.colorProgress
    }
  })
