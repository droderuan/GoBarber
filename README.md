# GoBarber
A application to make appointments with user - provider relations. It was made following the RocketSeat GoStack course.

## Getting Started
Here is were you can get the instructions to have this app up and running on your machine for development, testing or studies purposes.

### Prerequisites
The package manager for node:
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

Setup for the databases:
- [Docker](https://docs.docker.com/install/)

Images:
- [MongoDB](https://hub.docker.com/_/mongo) 
- [Postgres](https://hub.docker.com/_/postgres):11
- [Redis](https://hub.docker.com/_/redis/):alpine

For the visualization of the datas and consume the API:
- [Postbird](https://electronjs.org/apps/postbird) for the postgres database
- [MongoDB Compass](https://www.mongodb.com/products/compass) for the mongodb database
- [Mailtrap](https://mailtrap.io/) used for test the email queue
- [Insomnia](https://insomnia.rest/download/) used for consume the routes of backend

### Installing
- Open the backend folder and use ```yarn add``` to download all packages. After that, setup the .env file using the .env.example file.
- To do the migrations, type ```yarn sequelize db:migrate```

## License
This project is licensed under the MIT License - see [LICENSE](LICENSE.md) file for more details.

## Acknowledgments
My inspirations is every problem that can be solved with some creativity, focus and programming (of course) and I really wanna do the difference one day.

![giphy](https://user-images.githubusercontent.com/43659888/72206994-f932e600-3472-11ea-8c2b-7b4c24e9b47c.gif)

That's it! Now the API should be running, any issue feel freee to send a message and I'll help.
