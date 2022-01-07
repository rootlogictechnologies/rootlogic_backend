let DO_BUCKET_NAME = "rootlogicassets";
let DO_BUCKET_REGION = "sfo3";
console.log(DO_BUCKET_NAME, DO_BUCKET_REGION);
module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            `${DO_BUCKET_NAME}.${DO_BUCKET_REGION}.digitaloceanspaces.com`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            `${DO_BUCKET_NAME}.${DO_BUCKET_REGION}.digitaloceanspaces.com`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
