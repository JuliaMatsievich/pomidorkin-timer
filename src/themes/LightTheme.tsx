import { ColorsApp } from '@/constants/ColorsApp'
import { ThemeCustom } from '@/types/theme.types'

const LightTheme: ThemeCustom = {
  dark: false,
  colors: {
    primary: ColorsApp.primaryLight,
    background: ColorsApp.white,
    card: ColorsApp.white,
    text: ColorsApp.black,
    border: ColorsApp.grey,
    notification: ColorsApp.red
  }
}

export default LightTheme
