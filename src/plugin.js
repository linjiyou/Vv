import Toast from './components/toast/totast.vue'
export default{
    install(Vue,options){
       Vue.prototype.$toast=function(message,...toastOptions){
          let Constructor=Vue.extend(Toast)
          let toast=new Constructor({
              propsData:{
                ...toastOptions[0]
              }
          })
          toast.$slots.default=message
          toast.$mount()
          document.body.appendChild(toast.$el)
       }
    }
}