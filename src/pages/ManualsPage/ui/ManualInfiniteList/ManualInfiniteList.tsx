import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getManuals } from '../../model/slice/manualPageSlice'
import {
    getManualsPageError,
    getManualsPageIsLoading,
    getManualsPageView
} from '../../model/selectors/manualsPageSelectors'
import { ManualList } from 'entities/Manual'
import ErrorPage from 'pages/ErrorPage/ui/ErrorPage'

interface ManualInfiniteListProps {
    className?: string

}

export const ManualInfiniteList = memo((props: ManualInfiniteListProps) => {
    const {
        className
    } = props

    const manuals = useSelector(getManuals.selectAll)
    const isLoading = useSelector(getManualsPageIsLoading)
    const error = useSelector(getManualsPageError)
    const view = useSelector(getManualsPageView)

    if (error) {
        return <ErrorPage />
    }

    return (
        <ManualList
            isLoading={isLoading}
            view={view}
            manuals={manuals}
            className={className}
        />
    )
})
