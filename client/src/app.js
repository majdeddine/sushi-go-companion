import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { I18nextProvider } from 'react-i18next'
import { Theme } from 'resources/styles/theme'
import * as stores from 'stores'
import { i18n } from 'language'
import { Layout, Loading } from 'components'
import GlobalStyles from 'resources/styles/global'

const Login = lazy(() => import('pages/login/login'))

const muiTheme = createMuiTheme(Theme)

const App = () => (
  <Provider {...stores}>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={Theme}>
        <I18nextProvider i18n={i18n}>
          <>
            <GlobalStyles />
            <ToastContainer />
            <Router>
              <Layout>
                <Suspense fallback={<Loading />}>
                  <Switch>
                    {/* <Route exact path="/profile" component={ProfilePage} /> */}
                    <Route exact path="/login" component={Login} />
                    {/* <Route exact path="/register" component={RegisterPage} /> */}
                    <Route exact path="/" render={() => <Redirect to="/login" />} />
                    {/* <Route render={props => <ErrorPage {...props} />} /> */}
                  </Switch>
                </Suspense>
              </Layout>
            </Router>
          </>
        </I18nextProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </Provider>
)

export default App
