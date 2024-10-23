import { ThemedText } from '@/components/customUI/ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'
import { FC } from 'react'
import {
  Pressable,
  PressableProps,
  StyleSheet,
  useColorScheme
} from 'react-native'

interface IButtonProps extends PressableProps {
  title?: string
  type: string
}

export const ButtonCustom: FC<IButtonProps> = ({ title, onPress, type }) => {
  const colorScheme = useColorScheme()

  return (
    <>
      <Pressable
        onPress={onPress}
        style={[
          type === 'primaryBtn' && stylesPrimaryBtn.button,
          type === 'secondBtn' && stylesSecondBtn(colorScheme as string).button
        ]}>
        <ThemedText
          style={[
            type === 'primaryBtn' && stylesPrimaryBtn.button__text,
            type === 'secondBtn' &&
              stylesSecondBtn(colorScheme as string).button__text
          ]}>
          {title}
        </ThemedText>
      </Pressable>
    </>
  )
}

const stylesPrimaryBtn = StyleSheet.create({
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '80%',
    backgroundColor: useThemeColor('primary')
  },
  button__text: {
    color: useThemeColor('text')
  }
})

const stylesSecondBtn = (colorScheme: string) =>
  StyleSheet.create({
    button: {
      marginTop: 10,
      width: '80%',
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: useThemeColor('borderButton'),
      backgroundColor: 'transparent'
    },
    button__text: {
      color: useThemeColor('text')
    }
  })
