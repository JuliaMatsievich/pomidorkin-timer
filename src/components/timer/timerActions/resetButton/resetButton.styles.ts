import { ColorSchemeName, StyleSheet } from 'react-native'

export const styles = (colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    timerBtnReset: {
      alignSelf: 'flex-end',
      marginRight: 30,
      opacity: colorScheme === 'dark' ? 1 : 0.5
    }
  })
