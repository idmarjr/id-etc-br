# Idmar Ramos Junior personal website

Code for my personal website [https://id.etc.br](https://id.etc.br).  
Feel free to fork and use this code.  
If possible, let me know where you're using it. I will love to help if needed.

## What you need

- [NodeJS](https://nodejs.org);

## Setup

1. Using your command line tool, navigate to project folder;
1. Run `npm install` to install project dependencies;
1. Run `gulp` to start development server;
1. Have fun;

---

## Development

- Source images lives inside of `./img/;`
- Source styles lives inside of `./sass/`;
- Source javascript lives inside of `./js/`;

They are all are compiled inside of `assets/` via gulp.  
This means you should link all assets from `./assets/` folder;

## Deploy

1. Run `gulp build`;
1. Use content generated inside of `./dist/` to deploy;