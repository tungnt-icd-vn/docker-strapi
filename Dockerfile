# path: ./Dockerfile

FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app/
COPY ./strapi-application/package*.json  ./
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
WORKDIR /app
COPY ./ .
RUN npm run build






EXPOSE 1337
CMD ["npm", "run", "develop"]