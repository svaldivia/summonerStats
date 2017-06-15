# summoner-stats

## Summary
This app uses the MEAN stack and the League of Legends API to create a recent match stats for a given summoner.

##Purpose
- To apply angular patterns inspired by [John Papa's Angular Styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).
- Learn more about GruntJs, Bower and Yeoman generators
- Explore NodeJs with express

###To Do
- Add CSS to make mobile view nicer
- Implement unit tests for NodeJs service and angular services


## Getting Started

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.3.0-beta.0.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Get League of Legends Dev Key [Important]

1. Register for a dev kay at https://developer.riotgames.com/.
2. Add the key in `config/local.env.sample.json` and remove `sample` from filename
3. Run `grunt serve`, this will create `settings.js` in `server/config/environment` that is available for the node server to use.

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.


## Build & development

Run `grunt build` for building and `grunt serve` for preview.

<!-- ## Testing

Running `npm test` will run the unit tests with karma. -->
