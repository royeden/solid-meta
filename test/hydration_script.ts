// @ts-nocheck

export function removeScript() {
  window.$HY = undefined;
}
export function hydrationScript() {
  var e, t;
  (e =
    window._$HY ||
    (window._$HY = {
      events: [],
      completed: new WeakSet(),
      r: {}
    })),
    (t = e =>
      e &&
      e.hasAttribute &&
      (e.hasAttribute("data-hk")
        ? e
        : t(e.host && e.host instanceof Node ? e.host : e.parentNode))),
    ["click", "input"].forEach(o =>
      document.addEventListener(o, o => {
        let s = (o.composedPath && o.composedPath()[0]) || o.target,
          a = t(s);
        a && !e.completed.has(a) && e.events.push([a, o]);
      })
    ),
    (e.init = (t, o) => {
      e.r[t] = [new Promise((e, t) => (o = e)), o];
    }),
    (e.set = (t, o, s) => {
      (s = e.r[t]) && s[1](o), (e.r[t] = [o]);
    }),
    (e.unset = t => {
      delete e.r[t];
    }),
    (e.load = (t, o) => {
      if ((o = e.r[t])) return o[0];
    });
}
