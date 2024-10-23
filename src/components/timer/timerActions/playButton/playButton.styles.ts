import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { ThemeApp } from '@/types/theme.types'
import { StyleSheet } from 'react-native'

export const styles = (theme: ThemeApp, isPlaying: boolean) =>
  StyleSheet.create({
    timerBtnPlay: {
      width: 60,
      height: 60,
      overflow: 'visible',
      backgroundColor: ColorsAppTheme[theme].primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      paddingLeft: isPlaying ? 0 : 5,
      alignSelf: 'center',
      shadowColor: ColorsAppTheme[theme].shadowColor,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.7,
      shadowRadius: 7,
      elevation: 8
    },
    timerBtnPlayDesable: {
      backgroundColor: ColorsAppTheme[theme].primary
    }
  })
