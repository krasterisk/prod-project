import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/redesigned/Button'
import { Input } from '@/shared/ui/redesigned/Input'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text } from '@/shared/ui/redesigned/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { VStack } from '@/shared/ui/redesigned/Stack'

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation('login')
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const login = await dispatch(loginByUsername({ username, password }))
    if (onSuccess && login.payload !== 'error') {
      onSuccess()
    }
  }, [dispatch, onSuccess, password, username])

  const handleKeypress = useCallback((e: string) => {
    if (e === 'Enter') {
      onLoginClick()
    }
  }, [onLoginClick])

  return (
    <DynamicModuleLoader
        removeAfterUnmount
        reducers={initialReducers}
    >
        <VStack
            className={classNames(cls.LoginForm, {}, [className])} gap={'16'}
            onKeyDown={(e) => { handleKeypress(e.key) }}
        >
            <Text title={t('Авторизация')}></Text>
            {error && <Text text={t('Неправильные имя пользователя или пароль')} variant={'error'}/>}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Имя пользователя') ?? ''}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Пароль') ?? ''}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                variant={'outline'}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Вход')}
            </Button>
        </VStack>
    </DynamicModuleLoader>
  )
})

export default LoginForm
