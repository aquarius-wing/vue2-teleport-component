const n = {
  name: "Teleport",
  props: {
    to: [String, Element]
  },
  mounted() {
    const e = this.to, t = l(e) ? e : o(e) && e !== "" ? document.querySelector(e) : null;
    this.$el && this.$el.parentElement !== t && t !== null && t.appendChild(this.$el);
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
