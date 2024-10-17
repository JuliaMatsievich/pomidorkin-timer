import { ThemedText } from '@/components/customUI/ThemedText'
import { ThemedTextInput } from '@/components/customUI/ThemedTextInput'
import { ThemedView } from '@/components/customUI/ThemedView'
import { IAuthFormData } from '@/types/auth.types'
import { FC } from 'react'
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions
} from 'react-hook-form'
import { StyleSheet } from 'react-native'

interface IFormItemProps {
  control: Control<IAuthFormData>
  inputPlaceholder: string
  inputTitle: string
  name: string
  rules:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined
  secureTextEntry?: boolean
}

export const FormItem: FC<IFormItemProps> = ({
  control,
  name,
  rules,
  inputTitle,
  inputPlaceholder,
  secureTextEntry
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onBlur, onChange },
          fieldState: { error }
        }) => (
          <>
            <ThemedView style={styles.form__item}>
              <ThemedText style={styles.item__name}>{inputTitle}</ThemedText>
              <ThemedTextInput
                placeholder={inputPlaceholder}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={error}
                autoCapitalize={'none'}
                secureTextEntry={secureTextEntry}
              />
              {error && <ThemedText type="error">{error.message}</ThemedText>}
            </ThemedView>
          </>
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  form__item: {
    width: '80%',
    marginTop: 25
  },
  item__name: {
    marginBottom: 5
  }
})
