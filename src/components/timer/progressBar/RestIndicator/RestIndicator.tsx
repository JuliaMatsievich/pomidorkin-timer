import { ThemedView } from '@/components/customUI/ThemedView'
import { ColorsApp } from '@/constants/ColorsApp'
import { sessionCount } from '@/constants/timer.const'
import { IProgressPointProps } from '@/types/progressBar.types'
import { FontAwesome } from '@expo/vector-icons'
import { FC } from 'react'
import { styles } from './restIndicator.styles'

interface IRestIndicatorProps
  extends Pick<IProgressPointProps, 'index' | 'currentBreak'> {}

export const RestIndicator: FC<IRestIndicatorProps> = ({
  index,
  currentBreak
}) => {
  return (
    <>
      <ThemedView style={styles.progressBarCircleRest}>
        {(index + 1) % 2 === 0 && index !== sessionCount - 1 && (
          <FontAwesome
            name="coffee"
            size={10}
            color={
              index < currentBreak
                ? ColorsApp.primaryDark
                : ColorsApp.colorProgress
            }
          />
        )}
      </ThemedView>
    </>
  )
}
