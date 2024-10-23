import { ColorsApp } from '@/constants/ColorsApp'
import { ColorSchemeName, StyleSheet } from 'react-native'

export const styles = (colorScheme: ColorSchemeName) =>
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
    }
  })
