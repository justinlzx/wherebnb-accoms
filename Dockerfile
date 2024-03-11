FROM node:lts-alpine
WORKDIR /Users/justinlee/Documents/GitHub/wherebnb/wherebnb-accoms
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
COPY . .
EXPOSE 3000
RUN chown -R node ./
CMD ["npm", "start"]
