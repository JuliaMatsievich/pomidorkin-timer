import { useThemeColor } from '@/hooks/useThemeColor'
import { EnumStatus, EnumStatusImg, ITimerProps } from '@/types/timer.types'
import { Entypo } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, useColorScheme } from 'react-native'
import { styles } from './resetButton.styles'

interface IResetButtonProps extends Pick<ITimerProps, 'setTimerOptions'> {}

export const ResetButton: FC<IResetButtonProps> = ({ setTimerOptions }) => {
  const colorScheme = useColorScheme()
  return (
    <>
      <Pressable
        style={styles(colorScheme).timerBtnReset}
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
        <Entypo name={'ccw'} size={40} color={useThemeColor('icons2')} />
      </Pressable>
    </>
  )
}
