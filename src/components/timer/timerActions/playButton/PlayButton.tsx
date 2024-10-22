import { ColorsApp } from '@/constants/ColorsApp'
import { sessionCount } from '@/constants/timer.const'
import { ITimerOptions, ITimerProps } from '@/types/timer.types'
import { Foundation } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Pressable, useColorScheme } from 'react-native'
import { styles } from './playButton.styles'

interface IPlayButtonProps
  extends Omit<ITimerProps, 'timerOptions'>,
    Pick<ITimerOptions, 'isPlaying' | 'currentSession'> {}

export const PlayButton: FC<IPlayButtonProps> = ({
  isPlaying,
  currentSession,
  setTimerOptions
}) => {
  const colorScheme = useColorScheme()
  const isAllSessionsCompleted = currentSession - 1 >= sessionCount
  return (
    <>
      <Pressable
        style={
          isAllSessionsCompleted
            ? [
                styles(colorScheme, isPlaying).timerBtnPlay,
                styles(colorScheme, isPlaying).timerBtnPlayDesable
              ]
            : styles(colorScheme, isPlaying).timerBtnPlay
        }
        onPress={() => {
          if (isAllSessionsCompleted) return
          setTimerOptions((prev) => ({ ...prev, isPlaying: !prev.isPlaying }))
        }}>
        <Foundation
          name={isPlaying ? 'pause' : 'play'}
          size={44}
          color={ColorsApp.white}
        />
      </Pressable>
    </>
  )
}
