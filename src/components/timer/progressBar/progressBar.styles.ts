import { ColorsApp } from '@/constants/ColorsApp'
import { ColorSchemeName, StyleSheet } from 'react-native'

export const styles = (colorScheme: ColorSchemeName, isPlaying: boolean) =>
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
      backgroundColor:
        colorScheme === 'dark' ? ColorsApp.primaryDark : ColorsApp.primaryLight,
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
      borderColor:
        colorScheme === 'dark' ? ColorsApp.primaryDark : ColorsApp.primaryLight,
      opacity: 0.8
    }
  })
