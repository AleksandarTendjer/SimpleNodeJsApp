The goal of this assignment is to implement a simple Node.js WEB-based application that provides the various translations of ‘Hello World’ string. The application should support the following functionalities (ordered from basic to complex):

1. Simple Node.js web application using Express.
2. Has /hello-rest REST endpoint which returns a simple JSON with message ‘Hello World’ string.
3. Has /hello endpoint which returns a HTML page with ‘Hello World’ string displayed as ‘h1’ title.
4. Has in-memory loki.js database started with initial set of 10 different strings per language (‘Hello World’ in 10 different languages) and /hello, /hello-rest endpoints return the string determined by language parameter passed inside the query (if no language param in query – default to English)
5. Has /secure/hello endpoint that requires user to log in with username and password.
6. Has a secured ‘Admin’ page that allows the user to add new Language-Message pairs into the database
7. Uses a standalone DB (MongoDB) instead of in-memory (loki.js) DB
8. Has ability to retrieve ‘Hello World’ translations from an external API (eg. Systran Translation API)
9. Has ability to switch between DB and external API retrieval with an environment variable toggle.
10. Dockerize the application.

## Implementation

The implemntation description is written in sections below. Some of the functionalities such as development in loki.js were replaced by the mongo database and they are only available at certain refs(commit refs).

### Endpoints

Index.js router- these are the formarly used endpoints before the logic was replaced by databases
Done with translate controller:

    - GET /hello : rest returns the translation of the ‘Hello World’ in each language.
    - GET /hello : returns the translation of the ‘Hello World’ in each language.
    - GET / redirects us to the login page,url /secure/hello

Done with auth controller, have a router prefix that is /secure:

    - GET /secure/hello : renders the login page
    - POST /secure/hello : does login operation.
    - POST /secure/register : does the registration of the admin users. Encrypts the passwords with bycrpt.
    - GET /secure/register: renders the register page.

Done with admin controller, have a router prefix /admin:
-POST / insert the pair {lang, word}
-GET / render admin dashboard.
Done with translate controller , the UI is on admin dashboard, the router prefix is /translate:
-GET /getTranslation/ gets translation from systrian API for word in one language to another language when the process.ENV.NODE_ENV is TEST, otherwise gets the translation of "Hello world" string from databse for the language given.
-GET /getLanguages/ : get supported language codes in Systrian API.

### Dockerization

The whole app is dockerized with 2 containers:

- one running node.js app. Uses host port 8080.
- and the other mongodb. Uses host port 27017.
  To run the app in docker process.env.DOCKER_MONGO_URI needs to be set as the MONGO_URI in server.js, otherwise process.env.MONGO_URI.

To run the app, in the command line type `docker-compose build` in the root folder and after the succesfull build `docker-compose up`.

### Notes

Note: systrian api endpoints usually timeout and we don't get a response.
