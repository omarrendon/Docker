FROM --platform=$BUILDPLATFORM node:19.2-alpine

RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" > /log

WORKDIR /app

COPY . .

RUN npm install

RUN npm run test

RUN rm -rf test && rm -rf node_modules 

RUN npm install --prod

CMD [ "node", "app.js" ]