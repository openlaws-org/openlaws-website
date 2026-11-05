import DefaultTheme from 'vitepress/theme'
import OpenLawsTeaser from './components/OpenLawsTeaser.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('OpenLawsTeaser', OpenLawsTeaser)
  }
}
