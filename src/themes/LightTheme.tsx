import { Colors } from '@/constants/Colors'
import { ThemeCustom } from '@/types/theme.types'

const LightTheme: ThemeCustom = {
  dark: false,
  colors: {
    primary: Colors.primaryLight,
    background: Colors.white,
    card: Colors.white,
    text: Colors.black,
    border: Colors.grey,
    notification: Colors.red
  }
}

export default LightTheme
