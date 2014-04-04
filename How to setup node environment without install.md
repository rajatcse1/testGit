## Configure NODE and NPM environment
1. Download `node.exe` from `http://nodejs.org/download/`.
2. create folder `D:/node` and paste downloaded `node.exe` inside.
3. Download NPM from here `http://nodejs.org/dist/npm/` and extract in `D:/node`. Folder structure will be:
>	- D:\node 
>		- node.exe  
>		- npm.cmd  
>		- node_modules  
>			- npm  
>			- *  

4. open cmd and run these commands `setx PATH "D:\node" && setx NODE_PATH "D:\node\node_modules"`.
5. restart cmd.
6. Check the installation by `node -v` to get node version and `npm -v` for npm version.

## Configure `package.json`
1. Go to project folder 
2. Run `npm init` and follow steps. After providing data it looks like:

```json
 {  
    "name": "project name",  
   	"version": "0.0.0",  
   	"description": "",  
   	"main": "index.js",  
   	"scripts": {  
     		"test": "grunt runUnitTest"  
   	},  
   	"repository": {  
     		"type": "git",  
     		"url": "https://github.com/###/####.git"  
   	},  
   	"author": "author name",  
   	"license": "BSD-2-Clause",  
   	"bugs": {  
     		"url": "https://github.com/###/####/issues"  
   	}  
 } 
 ```

## Set engine details to `package.json`
```
"engines": {  
	"node": "0.10.18",  
	"npm": "1.3.8"  
},  
```
## Configure basic client app template
Create project structure as bellow:
```
application
 +----deploy  
 +----development  
 |    +---css  
 |   |   \---vendor  
 |   +---img  
 |   |   +---bg  
 |   |   +---gallery  
 |   |   +---icon  
 |   |   +---sprite  
 |   |   \---web  
 |   \---js  
 |       +---app  
 |       |   +---common  
 |       |   +---entities  
 |       |   +---modules  
 |       |   +---services  
 |       |   \---widgets  
 |       \---vendor  
 +---source  
 |   +---images  
 |   \---less  
 \---test  
```
## Configure node server start client app
1. Install node express module
	2. Go to project folder
 	2. Run `npm install express --save` to install express and save the dependency in `package.json`. Like:
```
         "dependencies": {  
             "express": "~3.5.1"  
         }  
```
2. Write server app `server.js`
```js
var express, http, path, reload, cars, app,
    clientDir, server;

// import modules.
express = require('express');
http = require('http');
path = require('path');

app = express();

// keep a reference to the dev directory path.
clientDir = path.join(__dirname, 'application/development');

// express configuration.
app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(express.static(clientDir));
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

/* Routing Start */

// Home page.
app.get('/', function(req, res) {
    res.sendfile(path.join(clientDir, 'index.html'));
});

/* Routing End */

// initialize node server.
server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log("Web server listening on port " + app.get('port'));
});
```
3. Run Server App
Run `node server.js` and go to `http://localhost:3000` to open `index.html`
  

## Install Grunt CLI(Command Line Interface)
Run `npm install grunt-cli -g` to install grunt CLI globally to access from anywhere.

## Install Grunt 
1. Go to project folder.
2. Run `npm install grunt --save-dev` to install grunt in project folder and save the development dependency in `package.json`. Like:
```
 "devDependencies": {  
     "grunt": "~0.4.4"  
   }  
```

## Configure `.gitignore`
To ignore `node_modules` folder add following in `.gitignore`
```
# Folders to ignore  
node_modules
```

## Configure grunt environment
1. watch
2. less to css
3. file copy 
4. folder clear
5. JavaScript hint
6. HTML hint
7. unit test
8. require

## Configure bower environment
1. Install node bower module
2. Configure bower.json and set dependencies
3. Run bower install to download dependent libraries

