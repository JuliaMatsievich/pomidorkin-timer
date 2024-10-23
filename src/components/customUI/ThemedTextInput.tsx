import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ThemeApp } from '@/types/theme.types'
import { FC } from 'react'
import { FieldError } from 'react-hook-form'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

interface IThemedTextInputProps extends TextInputProps {
  error?: FieldError | undefined
}

export const ThemedTextInput: FC<IThemedTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  error,
  secureTextEntry,
  ...otherProps
}) => {
  const theme = useThemeColor()
  return (
    <>
      <TextInput
        style={styles(theme, !!error).input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholderTextColor={ColorsAppTheme[theme].placeholderTextColor}
        selectionColor={ColorsAppTheme[theme].primary}
        secureTextEntry={secureTextEntry}
      />
    </>
  )
}

const styles = (theme: ThemeApp, error?: boolean) =>
  StyleSheet.create({
    input: {
      borderRadius: 4,
      width: '100%',
      height: 40,
      padding: 10,
      backgroundColor: ColorsAppTheme[theme].backgroundInput,
      color: ColorsAppTheme[theme].text,
      borderColor: error ? ColorsAppTheme[theme].error : 'transparent',
      borderWidth: 1,
      borderStyle: 'solid'
    }
  })
