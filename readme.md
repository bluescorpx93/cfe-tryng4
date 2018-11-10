### Angular 4 Tryout

Followed a tutorial to try Angular.

There's a problem, the production version (ng build) shows *an unexpected token error*, but **runs perfectly in dev mode.** Ain't nobody got time for that.

#### To Test This

- Install Package Dependencies
```sh
$ cd cfe-tryng4
$ yarn install 
#or with npm
$ npm install 
```

- Serve Dev Mode
```sh
$ cd cfe-tryng4
$ ng serve
```

#### Don't Try (cuz it consoles in the browser some stupid error)
```sh
$ cd cfe-tryng4
$ yarn install
$ ng build
$ node server.js
```