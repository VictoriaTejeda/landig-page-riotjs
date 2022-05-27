import * as riot from 'riot'
import './style.css'
import  reload from '@riotjs/hot-reload'
import registerGlobalComponents from './register-global-components'
import App from './app.riot'
import { setBase } from '@riotjs/route'
import { initDomListeners } from '@riotjs/route'

 setBase('/')
// refresh all the DOM nodes called 'my-component' without losing their state
reload(App)

initDomListeners(document.querySelector('.main-root'))


const myApp= riot.component(App)

// register
registerGlobalComponents()

const app=myApp(document.getElementById('root'))
// mount all the global components found in this page
//mount('[data-riot-component]')
