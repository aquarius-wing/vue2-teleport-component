import Teleport from './teleport.js'

Teleport.install = function (Vue, { prefix = '' }) {
  Vue.component(prefix + Teleport.name, Teleport)
}

export default Teleport
