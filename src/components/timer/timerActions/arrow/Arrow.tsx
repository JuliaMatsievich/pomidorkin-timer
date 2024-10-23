import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { sessionCount } from '@/constants/timer.const'
import { useThemeColor } from '@/hooks/useThemeColor'
import { EnumStatus, ITimerOptions, ITimerProps } from '@/types/timer.types'
import { MaterialIcons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Pressable } from 'react-native'
import { styles } from './arrow.styles'

interface IArrowProps
  extends Omit<ITimerProps, 'timerOptions'>,
    Pick<ITimerOptions, 'currentSession'> {
  direction: 'left' | 'right'
}

export const Arrow: FC<IArrowProps> = ({
  currentSession,
  setTimerOptions,
  direction
}) => {
  const theme = useThemeColor()
  const handleArrowPrev = () => {
    if (currentSession !== 1) {
      setTimerOptions((prev) => ({
        ...prev,
        currentSession: prev.currentSession - 1,
        key: prev.key - 1,
        isPlaying: false,
        currentBreak:
          currentSession % 2 ? prev.currentBreak - 2 : prev.currentBreak,
        status: currentSession % 2 ? EnumStatus.REST : EnumStatus.WORK
      }))
    }
  }

  const handleArrowNext = () => {
    if (currentSession !== sessionCount + 1) {
      setTimerOptions((prev) => ({
        ...prev,
        currentSession: prev.currentSession + 1,
        key: prev.key + 1,
        isPlaying: false,
        currentBreak:
          currentSession % 2 === 0 ? prev.currentBreak + 2 : prev.currentBreak,
        status: currentSession % 2 ? EnumStatus.REST : EnumStatus.WORK
      }))
    }
  }

  return (
    <>
      <Pressable
        style={styles(theme).timerBtnArrow}
        onPress={() => {
          if (direction === 'left') handleArrowPrev()
          if (direction === 'right') handleArrowNext()
        }}>
        <MaterialIcons
          name={`arrow-${direction}`}
          size={50}
          color={ColorsAppTheme[theme].icons2}
        />
      </Pressable>
    </>
  )
}
