import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { ThemeApp } from '@/types/theme.types'
import { StyleSheet } from 'react-native'

export const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    progressBarContainer: {
      flexDirection: 'row',
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    progressBarItem: {
      flexDirection: 'row',
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    progressBarLineItem: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      position: 'relative'
    },
    passed: {
      backgroundColor: ColorsAppTheme[theme].primary,
      borderRadius: 15,
      opacity: 0.8
    },
    active: {
      width: 22,
      height: 22,
      backgroundColor: 'transparent',
      borderRadius: 15,
      borderStyle: 'solid',
      borderWidth: 4,
      borderColor: ColorsAppTheme[theme].primary,
      opacity: 0.8
    }
  })
