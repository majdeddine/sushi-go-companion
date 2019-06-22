import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import { Theme } from 'resources/styles/theme'
import { stores } from 'stores'
import { i18n } from 'language'
import { Layout, Loading } from 'components'
import GlobalStyles from 'resources/styles/global'

const Home = lazy(() => import('pages/home/home'))

const muiTheme = createMuiTheme(Theme)

const App = () => (
  <Provider TodoStore={stores.TodoStore}>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={Theme}>
        <I18nextProvider i18n={i18n}>
          <>
            <GlobalStyles />
            <Router>
              <Layout>
                <Suspense fallback={<Loading />}>
                  <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
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
