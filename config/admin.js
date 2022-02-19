module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "fb976434cf30ca34f2cd82fceda5f912"),
  },
});

// path: ./config/admin.js

// module.exports = ({ env }) => ({
//   url: "/", // Note: The administration will be accessible from the root of the domain (ex: http://yourfrontend.com/)
//   serveAdminPanel: false, // http://yourbackend.com will not serve any static admin files
// });
