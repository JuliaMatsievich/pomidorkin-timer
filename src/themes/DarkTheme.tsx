import { ColorsApp } from '@/constants/ColorsApp'
import { ThemeCustom } from '@/types/theme.types'

const DarkTheme: ThemeCustom = {
  dark: false,
  colors: {
    primary: ColorsApp.primaryDark,
    background: ColorsApp.black2,
    card: ColorsApp.black,
    text: ColorsApp.white,
    border: ColorsApp.grey,
    notification: ColorsApp.red
  }
}

export default DarkTheme
