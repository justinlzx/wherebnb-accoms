import { entityList } from "./src/entity/entityList.js"

export const dbConfig = {
    "name": "useful-memory-414316:us-central1:wherebnb-dev-db",
    "type": "mysql",
    "host": "34.173.224.187",
    "port": 3306,
    "username": "root",
    "password": "wherebnb",
    "database": "accoms",
    "entities": entityList,
    "synchronize": true
}