ARG CUSTOM_NODE_VERSION

FROM node:$CUSTOM_NODE_VERSION

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install; $NODE_ENV
COPY . ./

#ENTRYPOINT /bin/bash
CMD ["/bin/bash", "-c", "/usr/local/bin/npm run $NODE_ENV"]