import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualEditPage.module.scss'
import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { useParams } from 'react-router-dom'

interface ManualEditPageProps {
    className?: string

}

const ManualEditPage = memo((props: ManualEditPageProps) => {
    const {
        className
    } = props
    //    const { t } = useTranslation('manuals')
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.ManualEditPage, {}, [className])}>
            {isEdit ? 'MANUAL EDIT PAGE' : 'MANUAL CREATE PAGE'}
        </Page>
    )
})

export default ManualEditPage
