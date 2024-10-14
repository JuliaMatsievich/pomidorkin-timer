// import { ThemedText } from '@/components/CustomUI/ThemedText'
import { ButtonCustom } from '@/components/CustomUI/ButtonCustom'
import { FormItem } from '@/components/CustomUI/FormItem'
import { ThemedText } from '@/components/CustomUI/ThemedText'
import { ThemedView } from '@/components/CustomUI/ThemedView'
import { Loader } from '@/components/Loader'
import { validEmail } from '@/constants/Patterns'
import { useAuth } from '@/hooks/useAuth'
import { IAuthFormData } from '@/types/auth.types'
import { router } from 'expo-router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
  View
} from 'react-native'

export const Auth = () => {
  const { setUser } = useAuth()
  const colorScheme = useColorScheme()

  const [isReg, setIsReg] = useState(false)

  const { control, reset, handleSubmit } = useForm<IAuthFormData>({
    mode: 'onChange'
  })

  const isLoading = false

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    console.log('data', data)
    setUser({
      _id: '',
      ...data
    })
    reset()
    router.replace('/')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ThemedView style={styles.container}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ThemedText type="title">
              {isReg ? 'Авторизация' : 'Регистрация'}
            </ThemedText>
            <FormItem
              control={control}
              name="username"
              rules={{ required: 'Поле должно быть заполнено' }}
              inputPlaceholder="Введите имя"
              inputTitle="Имя"
            />
            <FormItem
              control={control}
              name="email"
              rules={{
                required: 'Поле должно быть заполнено',
                pattern: {
                  value: validEmail,
                  message: 'Почта введена неверно'
                }
              }}
              inputPlaceholder="Введите почту"
              inputTitle="Почта"
            />
            <FormItem
              control={control}
              name="password"
              rules={{
                required: 'Поле должно быть заполнено',
                minLength: {
                  value: 6,
                  message: 'Длина пароля не меньше 6 символов'
                }
              }}
              inputPlaceholder="Введите пароль"
              inputTitle="Пароль"
              secureTextEntry={true}
            />
            <View style={styles.buttons__container}>
              <ButtonCustom
                title={isReg ? 'Войти' : 'Зарегистрироваться'}
                onPress={handleSubmit(onSubmit)}
                type="primaryBtn"
              />
              <ButtonCustom
                title={!isReg ? 'Войти' : 'Зарегистрироваться'}
                onPress={() => setIsReg(!isReg)}
                type="secondBtn"
              />
            </View>
          </>
        )}
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  buttons__container: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item__name: {
    marginBottom: 5
  }
})
