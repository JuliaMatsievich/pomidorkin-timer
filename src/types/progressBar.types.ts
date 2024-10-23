import { ITimerOptions } from '@/types/timer.types'

export interface IProgressBarProps
  extends Pick<ITimerOptions, 'currentSession' | 'currentBreak'> {}

export interface IProgressPointProps extends IProgressBarProps {
  index: number
  isSmallProgressBar: boolean
}
