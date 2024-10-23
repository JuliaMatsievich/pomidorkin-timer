import { sessionCount } from '@/constants/timer.const'
import {
  EnumStatus,
  EnumStatusImg,
  ITimerOptions,
  ITimerProps
} from '@/types/timer.types'
import { useEffect } from 'react'

interface useEffectTimer
  extends Pick<ITimerProps, 'setTimerOptions'>,
    Pick<ITimerOptions, 'currentSession' | 'status'> {
  startConfetti: () => void
}

export const useEffectTimer = ({
  setTimerOptions,
  currentSession,
  status,
  startConfetti
}: useEffectTimer) => {
  useEffect(() => {
    console.log('currentSession', currentSession)
    console.log('status', status)
    if (currentSession >= sessionCount) {
      startConfetti()
      setTimerOptions((prev) => {
        return {
          ...prev,
          status: EnumStatus.COMPLETED,
          statusImg: EnumStatusImg.COMPLETED
        }
      })
    }
  }, [currentSession])
  //
  // useEffect(() => {
  //   if (status === EnumStatus.REST) {
  //     setTimerOptions((prev) => ({
  //       ...prev,
  //       status: EnumStatus.WORK,
  //       statusImg: EnumStatusImg.WORK,
  //       currentSession: currentSession + 1
  //     }))
  //   }
  // }, [status])
}
