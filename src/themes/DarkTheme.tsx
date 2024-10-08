import { Colors } from '@/constants/Colors'
import { ThemeCustom } from '@/types/theme.types'

const DarkTheme: ThemeCustom = {
  dark: false,
  colors: {
    primary: Colors.primaryDark,
    background: Colors.black2,
    card: Colors.black,
    text: Colors.white,
    border: Colors.grey,
    notification: Colors.red
  }
}

export default DarkTheme
