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
  mounted() {
    const e1 = this.to;
    const toEL = l(e1) ? e1 : o(e1) && e1 !== "" ? document.querySelector(e1) : null;
    var e;
    if (this.$el && this.$el.parentElement !== toEL && toEL !== null) {
        toEL.appendChild(this.$el);
    }
  },
  destroyed() {
    this.$el.remove()
  },
  methods: {},
  render() {
    var e, t;
    return (t = (e = this.$scopedSlots).default) == null ? void 0 : t.call(e);
  }
}
