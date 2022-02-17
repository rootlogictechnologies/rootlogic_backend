// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
// });

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "http://api.rootlogic.tech",
});

// path: ./config/admin.js

// module.exports = ({ env }) => ({
//   url: "/", // Note: The administration will be accessible from the root of the domain (ex: http://yourfrontend.com/)
//   serveAdminPanel: false, // http://yourbackend.com will not serve any static admin files
// });
