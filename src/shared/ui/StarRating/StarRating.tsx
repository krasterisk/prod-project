import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './StarRating.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useState } from 'react'
import { Icon } from '../Icon/Icon'
import StarIcon from '@/shared/assets/icons/star.svg'
interface StarRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        selectedStars = 0,
        size = 30,
        onSelect
    } = props
    const { t } = useTranslation()

    const [isHovered, setIsHovered] = useState(false)
    const [currentStarCount, setCurrentStarCount] = useState(0)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.StarIcon,
                        { [cls.selected]: isSelected },
                        [currentStarCount >= starNumber ? cls.hovered : cls.normal])}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    )
})
