module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb976434cf30ca34f2cd82fceda5f912'),
  },
});
