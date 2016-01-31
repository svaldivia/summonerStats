# summoner-stats

## Summary
This app uses the MEAN stack and the League of Legends API to create a recent match stats for a given summoner.

###To Do
- Implement better caching to prevent getting 429 responses when going over the limit of requests for 10 seconds
- Include jQuery for improved user interaction (hover over spells/items for description)
- Some CSS fixes to make it look nicer :)

## Getting Started

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.3.0-beta.0.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

### Important

Make sure you have a developer key from https://developer.riotgames.com/ and place it in the client/app/summonerService/summonerService.service.js like this:
`apiKey = "?api_key= <your_key> ";`

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
