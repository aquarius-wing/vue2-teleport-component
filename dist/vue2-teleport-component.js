function l(e) {
  return e instanceof Element;
}

function o(e) {
  return typeof e == "string";
}

const n = {
  name: "Teleport",
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
    this.$el.remove();
  },
  methods: {},
  render() {
    var e, t;
    return (t = (e = this.$scopedSlots).default) == null ? void 0 : t.call(e);
  }
};
n.install = function(e, { prefix: t = "" } = {}) {
  e.component(t + n.name, n);
};
export {
  n as default
};


