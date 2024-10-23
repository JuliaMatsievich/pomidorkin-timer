import { useThemeColor } from '@/hooks/useThemeColor'
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
  return (
    <>
      <TextInput
        style={styles(!!error).input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholderTextColor={useThemeColor('placeholderTextColor')}
        selectionColor={useThemeColor('primary')}
        secureTextEntry={secureTextEntry}
      />
    </>
  )
}

const styles = (error?: boolean) =>
  StyleSheet.create({
    input: {
      borderRadius: 4,
      width: '100%',
      height: 40,
      padding: 10,
      backgroundColor: useThemeColor('backgroundInput'),
      color: useThemeColor('text'),
      borderColor: error ? useThemeColor('error') : 'transparent',
      borderWidth: 1,
      borderStyle: 'solid'
    }
  })
