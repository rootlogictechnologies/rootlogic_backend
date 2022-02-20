FROM strapi/base

WORKDIR /app

ENV DATABASE_USERNAME "rootmaster"
ENV DATABASE_NAME "rootstore"
ENV DATABASE_PASSWORD "megamind"
ENV DATABASE_HOST "64.227.186.138"
ENV DATABASE_PORT "5432"
ENV API_TOKEN_SALT "bf31c624c2c30242181a0e74d6eb5974"
ENV JWT_SECRET "6a0f7372-0e50-4e43-b3b5-aab350565dfc"
# ENV HOST  "http://api.rootlogic.tech"
# ENV PORT  80

ENV DO_SPACE_ACCESS_KEY "CHGF3RJV4EXHXISE7P7T"
ENV DO_SPACE_SECRET_KEY "Y864eGrmCGP5HK6YhCF/FhdVZ6lj2cSME8+SFXCoUW4"
ENV DO_SPACE_ENDPOINT "sfo3.digitaloceanspaces.com"
ENV DO_SPACE_BUCKET "rootlogicassets"
ENV DO_SPACE_REGION "sfo3"
ENV DO_SPACE_DIRECTORY ""
ENV DO_SPACE_CDN "rootlogicassets.sfo3.cdn.digitaloceanspaces.com example: rootlogicassets.sfo3.cdn.digitaloceanspaces.com"

COPY package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 1337

CMD ["npm", "start"]
                  
