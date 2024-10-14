import { ColorsApp } from '@/constants/ColorsApp'

export const ColorsAppTheme = {
  light: {
    text: ColorsApp.black,
    background: ColorsApp.white,
    tint: ColorsApp.primaryLight,
    icon: ColorsApp.white,
    tabIconDefault: ColorsApp.black,
    tabIconSelected: ColorsApp.primaryLight
  },
  dark: {
    text: ColorsApp.white,
    background: ColorsApp.black,
    tint: ColorsApp.primaryDark,
    icon: ColorsApp.white,
    tabIconDefault: ColorsApp.white,
    tabIconSelected: ColorsApp.primaryDark
  }
}
