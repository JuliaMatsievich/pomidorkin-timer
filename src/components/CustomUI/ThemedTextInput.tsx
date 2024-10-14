import { ColorsApp } from '@/constants/ColorsApp'
import { useColorScheme } from '@/hooks/useColorScheme.web'
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

const styles = (colorScheme: string, error?: boolean) =>
  StyleSheet.create({
    input: {
      borderRadius: 4,
      width: '100%',
      height: 40,
      padding: 10,
      backgroundColor: ColorsApp.grey,
      color: colorScheme === 'dark' ? ColorsApp.white : ColorsApp.black,
      borderColor: error ? ColorsApp.red : 'transparent',
      borderWidth: 1,
      borderStyle: 'solid'
    }
  })
