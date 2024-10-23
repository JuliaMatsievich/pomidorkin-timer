import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { sessionCount } from '@/constants/timer.const'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ITimerOptions, ITimerProps } from '@/types/timer.types'
import { Foundation } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Pressable } from 'react-native'
import { styles } from './playButton.styles'

interface IPlayButtonProps
  extends Omit<ITimerProps, 'timerOptions'>,
    Pick<ITimerOptions, 'isPlaying' | 'currentSession'> {}

export const PlayButton: FC<IPlayButtonProps> = ({
  isPlaying,
  currentSession,
  setTimerOptions
}) => {
  const theme = useThemeColor()
  const isAllSessionsCompleted = currentSession - 1 >= sessionCount
  return (
    <>
      <Pressable
        style={
          isAllSessionsCompleted
            ? [
                styles(theme, isPlaying).timerBtnPlay,
                styles(theme, isPlaying).timerBtnPlayDesable
              ]
            : styles(theme, isPlaying).timerBtnPlay
        }
        onPress={() => {
          if (isAllSessionsCompleted) return
          setTimerOptions((prev) => ({ ...prev, isPlaying: !prev.isPlaying }))
        }}>
        <Foundation
          name={isPlaying ? 'pause' : 'play'}
          size={44}
          color={ColorsAppTheme[theme].icon}
        />
      </Pressable>
    </>
  )
}
