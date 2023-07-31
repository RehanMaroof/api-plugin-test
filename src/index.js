import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");
import mutations from "./mutations/index.js";
// import queries from "./queries/index.js";
import resolvers from "./resolvers/index.js";
import schemas from "./schemas/index.js";


/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {Object} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
  label: "testPlugin",
    name: "testPlugin",
    version: pkg.version,
    graphQL: {
      resolvers,
      schemas: [schemas]
    },
    mutations,
    // queries

  });
}
