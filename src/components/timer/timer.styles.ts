import { ColorsApp } from '@/constants/ColorsApp'
import { ColorSchemeName, StyleSheet } from 'react-native'

export const styles = (colorScheme: ColorSchemeName, isPlaying: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    timerButton: {
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
      marginTop: 60,
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
    },
    progressBarContainer: {
      flexDirection: 'row',
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    progressBarItem: {
      flexDirection: 'row',
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    progressBarCircle: {
      width: 12,
      height: 12,
      backgroundColor: ColorsApp.colorProgress,
      borderRadius: 15
    },
    passed: {
      backgroundColor:
        colorScheme === 'dark' ? ColorsApp.primaryDark : ColorsApp.primaryLight,
      borderRadius: 15,
      opacity: 0.8
    },
    active: {
      width: 20,
      height: 20,
      backgroundColor: 'transparent',
      borderRadius: 15,
      borderStyle: 'solid',
      borderWidth: 4,
      borderColor:
        colorScheme === 'dark' ? ColorsApp.primaryDark : ColorsApp.primaryLight,
      opacity: 0.8
    },
    progressBarLine: {
      width: 20,
      height: 1,
      backgroundColor: ColorsApp.colorProgress
    }
  })
