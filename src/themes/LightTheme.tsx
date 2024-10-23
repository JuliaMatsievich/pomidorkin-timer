import { ColorsInApp } from '@/constants/ColorsApp.const'
import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { ThemeCustom } from '@/types/theme.types'

const LightTheme: ThemeCustom = {
  dark: false,
  colors: {
    primary: ColorsAppTheme.light.primary,
    background: ColorsAppTheme.light.background,
    card: ColorsInApp.white,
    text: ColorsAppTheme.light.text,
    border: ColorsInApp.grey,
    notification: ColorsAppTheme.light.error
  }
}

export default LightTheme
