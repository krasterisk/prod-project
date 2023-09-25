import React, { Suspense, useEffect } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, getUserMounted, userActions } from '@/entities/User'
import { AppRouter } from './providers/router'
import { getFeatureFlag, setFeatureFlags, ToggleFeatures } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { PageLoader } from '@/widgets/PageLoader'
import { getTokenAllData } from '@/app/providers/getTokenData/getTokenData'
import { useAppToolbar } from './lib/useAppToolbar'

const App = (): any => {
  const dispatch = useDispatch()
  const mounted = useSelector(getUserMounted)
  const userData = useSelector(getUserAuthData)
  const authData = getTokenAllData(userData?.token)
  const redesigned = authData?.designed
  const toolbar = useAppToolbar()

  useEffect(() => {
    dispatch(userActions.initAuthData())
    console.log('REDESIGNED:', getFeatureFlag('isAppRedesigned'))
  }, [dispatch])

  setFeatureFlags({ isAppRedesigned: redesigned })

  if (!mounted) {
    return <PageLoader/>
  }

  return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            off={
                <div id='app' className={classNames('app', {}, [])}>
                    <Suspense>
                        <Navbar/>
                        <div className="content-page">
                            <Sidebar/>
                            <AppRouter/>
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div id='app' className={classNames('app_redesigned', {}, [])}>
                    <Suspense>
                        <MainLayout
                            header={<Navbar/>}
                            content={<AppRouter/>}
                            sidebar={<Sidebar/>}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
        />
  )
}

export default App
