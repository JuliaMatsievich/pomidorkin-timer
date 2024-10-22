import { ThemedView } from '@/components/customUI/ThemedView'
import { ColorsApp } from '@/constants/ColorsApp'
import { sessionCount } from '@/constants/timer.const'
import { FontAwesome } from '@expo/vector-icons'
import { FC } from 'react'
import { styles } from './restIndicator.styles'

interface IRestIndicatorProps {
  index: number
  currentBreak: number
}

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
