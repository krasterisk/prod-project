import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import AppRouter from './AppRouter'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router'
import { screen } from '@testing-library/react'

describe('app/router/AppRouter', function () {
  test('Page must be render', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteAbout()
    })
    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })
  test('Page not found', async () => {
    componentRender(<AppRouter/>, {
      route: '/notrealpage'
    })
    const page = await screen.findByTestId('ErrorPage')
    expect(page).toBeInTheDocument()
  })
  test('Redirect not auth user to MainPage', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteProfile('1'),
      initialState: {}
    })
    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })
  test('Profile page for auth user', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          authData: {
            id: '1',
            username: 'test',
            password: 'test',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluMiIsImVtYWlsIjoiYWRtaW4yQGtyYXN0ZXJpc2sucnUiLCJpZCI6MSwiYXZhdGFyIjoiaHR0cHM6Ly9rcmFzdGVyaXNrLnJ1L2xvZ29zL2FkbS5qcGciLCJ2cGJ4X3VzZXJfaWQiOjEsInJvbGVzIjpbeyJpZCI6MSwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoi0KDQvtC70YwgQURNSU4iLCJjcmVhdGVkQXQiOiIyMDIzLTA0LTI5VDA2OjQzOjM1LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA0LTI5VDA2OjQzOjM1LjAwMFoiLCJVc2VyUm9sZXMiOnsiaWQiOjEsInJvbGVJZCI6MSwidXNlcklkIjoxfX1dLCJpYXQiOjE2ODQwNDE3MTEsImV4cCI6MTY4NDEyODExMX0.OaqoXbxvESceks0bDCsoYT-EN2hq0fFtk9sWxav_2Qg'
          },
          _mounted: true
        }
      }
    })
    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('User role not found', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: {
            id: '10',
            username: 'test',
            password: 'test',
            token: ''
          },
          _mounted: true
        }
      }
    })
    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })
  test('User admin found', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: {
            id: '1',
            username: 'test',
            password: 'test',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluMiIsImVtYWlsIjoiYWRtaW4yQGtyYXN0ZXJpc2sucnUiLCJpZCI6MSwiYXZhdGFyIjoiaHR0cHM6Ly9rcmFzdGVyaXNrLnJ1L2xvZ29zL2FkbS5qcGciLCJ2cGJ4X3VzZXJfaWQiOjEsInJvbGVzIjpbeyJpZCI6MSwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoi0KDQvtC70YwgQURNSU4iLCJjcmVhdGVkQXQiOiIyMDIzLTA0LTI5VDA2OjQzOjM1LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA0LTI5VDA2OjQzOjM1LjAwMFoiLCJVc2VyUm9sZXMiOnsiaWQiOjEsInJvbGVJZCI6MSwidXNlcklkIjoxfX1dLCJpYXQiOjE2ODQwNDE3MTEsImV4cCI6MTY4NDEyODExMX0.OaqoXbxvESceks0bDCsoYT-EN2hq0fFtk9sWxav_2Qg'
          },
          _mounted: true
        }
      }
    })
    const page = await screen.findByTestId('AdminPage')
    expect(page).toBeInTheDocument()
  })
})
