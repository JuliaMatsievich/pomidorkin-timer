import { ColorsApp } from '@/constants/ColorsApp'
import { FC } from 'react'
import { FieldError } from 'react-hook-form'
import {
  ColorSchemeName,
  StyleSheet,
  TextInput,
  TextInputProps,
  useColorScheme
} from 'react-native'

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
  const colorScheme = useColorScheme()
  return (
    <>
      <TextInput
        style={styles(colorScheme, !!error).input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholderTextColor={ColorsApp.lightGrey}
        selectionColor={
          colorScheme === 'dark'
            ? ColorsApp.primaryDark
            : ColorsApp.primaryLight
        }
        secureTextEntry={secureTextEntry}
      />
    </>
  )
}

const styles = (colorScheme: ColorSchemeName, error?: boolean) =>
  StyleSheet.create({
    input: {
      borderRadius: 4,
      width: '100%',
      height: 40,
      padding: 10,
      backgroundColor:
        colorScheme === 'dark' ? ColorsApp.grey : ColorsApp.grey2,
      color: colorScheme === 'dark' ? ColorsApp.white : ColorsApp.black,
      borderColor: error ? ColorsApp.red : 'transparent',
      borderWidth: 1,
      borderStyle: 'solid'
    }
  })
