import * as riot from 'riot'
import './style.css'
import '@riotjs/hot-reload'
import { mount } from 'riot'
import registerGlobalComponents from './register-global-components'
import App from './app.riot'


const myApp= riot.component(App)

// register
registerGlobalComponents()

const app=myApp(document.getElementById('root'))
// mount all the global components found in this page
//mount('[data-riot-component]')
