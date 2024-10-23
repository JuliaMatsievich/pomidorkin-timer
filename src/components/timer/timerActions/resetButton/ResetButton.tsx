import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { useThemeColor } from '@/hooks/useThemeColor'
import { EnumStatus, EnumStatusImg, ITimerProps } from '@/types/timer.types'
import { Entypo } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable } from 'react-native'
import { styles } from './resetButton.styles'

interface IResetButtonProps extends Pick<ITimerProps, 'setTimerOptions'> {}

export const ResetButton: FC<IResetButtonProps> = ({ setTimerOptions }) => {
  const theme = useThemeColor()
  return (
    <>
      <Pressable
        style={styles(theme).timerBtnReset}
        onPress={() => {
          setTimerOptions({
            isPlaying: false,
            status: EnumStatus.WORK,
            statusImg: EnumStatusImg.WORK,
            currentSession: 1,
            currentBreak: 0,
            key: 0
          })
        }}>
        <Entypo name={'ccw'} size={40} color={ColorsAppTheme[theme].icons2} />
      </Pressable>
    </>
  )
}
