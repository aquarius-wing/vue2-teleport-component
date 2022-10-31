function isElement(val) {
  return val instanceof Element
}

function isString(val) {
  return typeof val === 'string'
}

export default {
  name: 'Teleport',
  props: {
    to: [String, Element]
  },
  computed: {
    toEl({ to }) {
      return isElement(to) ? to : isString(to) && to !== '' ? document.querySelector(to) : null
    }
  },
  watch: {
    toEl: 'teleport'
  },
  mounted() {
    this.teleport()
  },
  destroyed() {
    this.$el.remove()
  },
  methods: {
    teleport() {
      if (this.$el && this.$el.parentElement !== this.toEl) this.toEl?.appendChild(this.$el)
    }
  },
  render() {
    return this.$scopedSlots.default?.()
  }
}
