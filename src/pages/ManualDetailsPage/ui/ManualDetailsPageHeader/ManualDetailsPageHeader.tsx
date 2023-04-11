import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getManualDetailsData } from 'entities/Manual'
import { getCanEditManual } from '../../model/selectors/manual'
import { HStack } from 'shared/ui/Stack'

interface ManualDetailsPageHeaderProps {
    className?: string

}

export const ManualDetailsPageHeader = memo((props: ManualDetailsPageHeaderProps) => {
    const {
        className
    } = props
    const { t } = useTranslation('manuals')
    const navigate = useNavigate()
    //    const userData = useSelector(getUserAuthData)
    const manual = useSelector(getManualDetailsData)
    const canEdit = useSelector(getCanEditManual)

    console.log(canEdit)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.manuals)
    }, [navigate])

    const onEditPage = useCallback(() => {
        if (manual?.id) {
            navigate(`${RoutePath.manuals}/${manual?.id}/edit`)
        }
    }, [manual, navigate])

    return (
        <HStack justify='between' max className={classNames('', {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (<Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEditPage}
            >
                {t('Редактировать')}
            </Button>
            )}
        </HStack>
    )
})
