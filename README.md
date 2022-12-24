# IG Media Downloader

An API built on [NestJS](https://github.com/nestjs/nest) to request Instagram media downloading. It relies on Prisma to communicate with a SQLite database to store URLs and manage your downloads.

> The app is in early development and at the moment does nothing but
> storing URLs on a database with an ID and creation date.

## Requirements

- Node.js _(recommended LTS / v18.12.1 or above)_
- Yarn _(using npm may cause some weird issues)_
- Docker _[optional, check [Docker section](https://github.com/Lfmpaes/ig-media-dl#docker) below]_

## Installation

Run the following commands to set up the application.

```bash
# Install dependencies
$ yarn

# Generate database
$ yarn prisma db pull && yarn prisma generate

# Build app
$ yarn build
```

## Running the app

```bash
# Run in development mode
$ yarn start

# Run in development mode watching changes
$ yarn start:dev

# Run in production mode after build
$ yarn start:prod
```

Your API will be available on port 3000. Requests must be directed to `http://<your-domain>:3000/links`.

## Docker

There's a Dockerfile included for users to build custom images and deploy their own container.

You must check the Node.js flavour used on your container. By default this app uses the `arm64v8/node:lts` image as its builder and running image. That's Node.js running on a Debian image for ARM processors. If your machine uses a x86 or x64 processor, replace both labels for `node:lts`. You can also use `node:lts-alpine3.16` for a lighter image.

After setting up the environment file and Dockerfile, you can build the container image and deploy your container.

```bash
# Run build command in the same path as the Dockerfile (root of project).
$ docker build -t ig-media-dl .

# You can check if your image was successfully created listing all images
$ docker image ls

# Deploy the container using "docker run -d".
# If you'd like to use other port, change the parameter of the flag p:
# -p <your-port>:3000
# You can also change the container name:
# --name <your-container-name> ig-media-dl
# Or simply copy and paste the default command.
$ docker run -d -p 3000:3000 --name igdl ig-media-dl
```

## Releases and Changelog

### Alpha Stage

**v0.0.2** - Switched from PostgreSQL to SQLite

> TL;DR: Removed the need for running a Postgres database, using SQLite instead.

- ...
- ...

**v0.0.1** - Initial working project

> This release is just the bare minimum of an API. It simply gets a link and store it to a PostgreSQL database, with no validation implemented. More will be implemented through future releases.

- Starting point of NestJS + Prisma + PostgreSQL project
- Ready to store Instagram URLs to a PostgreSQL database
- Complete CRUD through REST API _(documentation TBA)_

## Version History

| Version | Release date |
| ------- | ------------ |
| v0.0.2  | xx/xx/xxxx   |
| v0.0.1  | 21/12/2022   |
