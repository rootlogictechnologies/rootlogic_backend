module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        endpoint: env("DO_SPACE_ENDPOINT"),
        accessKeyId: env("DO_SPACE_ACCESS_KEY"),
        secretAccessKey: env("DO_SPACE_SECRET_KEY"),
        params: {
          Bucket: env("DO_SPACE_BUCKET"),
          Key: "",
        },
      },
    },
  },
});
