GDL Unity
======================

This is a private web system to manage legal documents.


Setup Enviroment
----------------------

1. Follow the @database/README.md to setup the database.

GDL - Legal Document Management

This project consists of re-developing the existing GDL system. In addition to adding functionalities, improvements and updating business rules, the backend architecture – this repo – and UI – is being redone.

Technology:
- Node + Express
- Typescript
- MySQL*

*No Sequelize

Available commands for the server.
-----------------------

- Run the server in development mode: `npm run start:dev`.
- Run `all unit-tests with hot-reloading: npm test`.
- Run a single unit-test: `npm test -- --testFile="name of test file" (i.e. --testFile=Users)`.
- Run all unit-tests without hot-reloading: `npm run test:no-reloading`
- Check for linting errors: `npm run lint`.
- Build the project for production: `npm run build`.
- Run the production build: `npm start`.
- Run production build with a different env file `npm start -- --env="name of env file"` (default is production).

