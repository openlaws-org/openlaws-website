
import { defineConfig } from 'vitepress'
export default defineConfig({
 title:'OpenLaws',
 description:'Legal Knowledge Factory',
 lang:'en-US',
 cleanUrls:true,
 themeConfig:{
 nav:[{text:'About',link:'/about'},{text:'Vision',link:'/vision'},{text:'Repositories',link:'/repositories'}],
 socialLinks:[{icon:'github',link:'https://github.com/openlaws-org'}]
 }
})
