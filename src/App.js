import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'
import Progressbar from './components/Progressbar'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Homepage} exact />
                    <Route path='/progress' component={Progressbar}/>
                    {/* <Route path='' /> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
