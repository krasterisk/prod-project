import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { addCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AddCommentFormActions, AddCommentFormReducer } from '../../model/slice/AddCommentFormSlice'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from 'shared/ui/Stack'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: AddCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment
    } = props

    const { t } = useTranslation('manuals')
    const text = useSelector(addCommentFormText)
    //    const error = useSelector(addCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(AddCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack gap='8' justify='between' max className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    onClick={onSendHandler}
                    theme={ButtonTheme.OUTLINE}>{t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
