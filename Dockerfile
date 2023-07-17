FROM node:lts

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_PRODUCTS_API="https://api.frikamart.online/"

COPY package.json ./

RUN npm install --force
RUN npm install -g serve


COPY . ./

RUN npm run build

CMD ["serve", "-s", "build"]