import { ColorsInApp } from '@/constants/ColorsApp.const'
import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { ThemeCustom } from '@/types/theme.types'

const DarkTheme: ThemeCustom = {
  dark: true,
  colors: {
    primary: ColorsAppTheme.dark.primary,
    background: ColorsAppTheme.dark.background,
    card: ColorsInApp.black,
    text: ColorsAppTheme.dark.text,
    border: ColorsInApp.grey,
    notification: ColorsAppTheme.dark.error
  }
}

export default DarkTheme
