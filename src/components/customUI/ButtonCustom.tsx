import { ThemedText } from '@/components/customUI/ThemedText'
import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ThemeApp } from '@/types/theme.types'
import { FC } from 'react'
import { Pressable, PressableProps, StyleSheet } from 'react-native'

interface IButtonProps extends PressableProps {
  title?: string
  type: string
}

export const ButtonCustom: FC<IButtonProps> = ({ title, onPress, type }) => {
  const theme = useThemeColor()

  return (
    <>
      <Pressable
        onPress={onPress}
        style={[
          type === 'primaryBtn' && stylesPrimaryBtn(theme).button,
          type === 'secondBtn' && stylesSecondBtn(theme).button
        ]}>
        <ThemedText
          style={[
            type === 'primaryBtn' && stylesPrimaryBtn(theme).button__text,
            type === 'secondBtn' && stylesSecondBtn(theme).button__text
          ]}>
          {title}
        </ThemedText>
      </Pressable>
    </>
  )
}

const stylesPrimaryBtn = (theme: ThemeApp) =>
  StyleSheet.create({
    button: {
      marginTop: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      width: '80%',
      backgroundColor: ColorsAppTheme[theme].primary
    },
    button__text: {
      color: ColorsAppTheme[theme].text
    }
  })

const stylesSecondBtn = (theme: ThemeApp) =>
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
      borderColor: ColorsAppTheme[theme].borderButton,
      backgroundColor: 'transparent'
    },
    button__text: {
      color: ColorsAppTheme[theme].text
    }
  })
