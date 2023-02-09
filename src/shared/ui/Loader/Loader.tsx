import { classNames } from 'shared/lib/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string

}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-spinner', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}
