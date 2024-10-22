import { ColorSchemeName, StyleSheet } from 'react-native'

export const styles = (colorScheme: ColorSchemeName, isPlaying: boolean) =>
  StyleSheet.create({
    timerBtnArrow: {
      opacity: colorScheme === 'dark' ? 1 : 0.5
    }
  })
