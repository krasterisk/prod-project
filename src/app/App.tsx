import React, { Suspense, useEffect } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserMounted, getUserRedesign, userActions } from '@/entities/User'
import { AppRouter } from './providers/router'
import { getFeatureFlag, setFeatureFlags, ToggleFeatures } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { PageLoader } from '@/widgets/PageLoader'

const App = (): any => {
  const dispatch = useDispatch()
  const mounted = useSelector(getUserMounted)
  const redesigned = useSelector(getUserRedesign)

  useEffect(() => {
    dispatch(userActions.initAuthData())
    console.log(getFeatureFlag('isAppRedesigned'))
  }, [dispatch])

  setFeatureFlags({ isAppRedesigned: redesigned })

  if (!mounted) {
    return <PageLoader/>
  }

  return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            off={
                <div className={classNames('app', {}, [])}>
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
                <div className={classNames('app_redesigned', {}, [])}>
                    <Suspense>
                        <MainLayout
                            header={<Navbar/>}
                            content={<AppRouter/>}
                            sidebar={<Sidebar/>}
                            toolbar={<div>123123123</div>}
                        />
                    </Suspense>
                </div>
            }
        />
  )
}

export default App
