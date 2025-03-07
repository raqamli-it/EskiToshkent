# Bosqich 1: Build bosqichi
FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm install vite --save-dev

EXPOSE 5173

#RUN npx vite --host 0.0.0.0 --port 5173
#CMD [ "npx", "vite","--host", "0.0.0.0", "--port", "5173" ]
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173" ]
