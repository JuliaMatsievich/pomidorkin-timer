import { ColorSchemeName, StyleSheet } from 'react-native'

export const styles = (colorScheme: ColorSchemeName, isPlaying: boolean) =>
  StyleSheet.create({
    timerBtnContainer: {
      flexDirection: 'row',
      marginTop: 70,
      alignItems: 'center',
      gap: 30
    },
    timerBtnReset: {
      alignSelf: 'flex-end',
      marginRight: 30
    }
  })
