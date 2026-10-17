import { a as s } from "./chunk-AOVXQZ3C.mjs";
import { v as o } from "./chunk-WU5AKVCO.mjs";
import { d as n } from "./chunk-KQKA2AEH.mjs";
import { i as a } from "./chunk-GOPQO4KR.mjs";
var c = a("useCastle");
function j() {
  let e = n(s),
    p = async (r) => {
      let t = await e("dashboard_viewed");
      t && (await i({ token: t, type: "dashboardViewed", ...r }).catch(c.error));
    };
  return {
    createToken: e,
    handleProjectOpenEvent: n(async (r) => {
      let t = await e("project_viewed");
      t && (await i({ token: t, type: "projectViewed", ...r }).catch(c.error));
    }),
    handleDashboardOpenEvent: n(p),
  };
}
async function i(e) {
  return o.post("/auth/analysis/log", e);
}
export { j as a };
//# sourceMappingURL=https://app.framerstatic.com/chunk-KCHNZNUK.mjs.map
