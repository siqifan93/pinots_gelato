import { a as u } from "./chunk-RKI5JC34.mjs";
import { v as n } from "./chunk-WU5AKVCO.mjs";
import { a as p } from "./chunk-MYL546Y2.mjs";
import { a as d } from "./chunk-EQBCTBZ3.mjs";
import { f as s, g as i, h as c } from "./chunk-AAB6RPWQ.mjs";
function m() {
  return ["/web/users/me"];
}
function f(t, r) {
  let e = r ? { accessToken: r } : void 0;
  return [`/web/projects/${t}`, e];
}
function h() {
  return ["/web/users/default-project-location"];
}
function l() {
  return ["/web/v2/dashboard/metadata"];
}
async function b() {
  return n.get(...m());
}
async function g() {
  let t = window?.bootstrap,
    r = t?.project?.id;
  if (!r) throw new Error("Unable to get project as no ProjectId was supplied");
  let e = t?.project?.accessToken,
    [o, a] = f(r, e);
  return n.get(o, { ...a, includeAiCreditLimit: "true" }, void 0, u());
}
async function U() {
  return n.get(...h());
}
function P() {
  return n.get(...l());
}
var L = { currentUser: b, project: g, defaultProjectLocation: U, dashboardTeams: P },
  w = p(L);
async function Q() {
  let t = window.framerUser;
  if (t) {
    let e = await w.project.catch(() => {}),
      { id: o, email: a } = t,
      y = e?.space.id || t.defaultSpaceId,
      j = a.substring(a.indexOf("@") + 1);
    (c({ id: o }), s("team", { id: y, domain: j }));
  }
  let r = d(window);
  if (r) {
    let { channel: e, override: o } = r;
    (o && (e += `+${o}`), i("channel", e));
  }
}
export { l as a, w as b, Q as c };
//# sourceMappingURL=https://app.framerstatic.com/chunk-J5KTPZE7.mjs.map
