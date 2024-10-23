export type ThemeCustom = {
  dark: boolean
  colors: {
    primary: string
    background: string
    card: string
    text: string
    border: string
    notification: string
  }
}

export type ThemeApp = 'light' | 'dark'
