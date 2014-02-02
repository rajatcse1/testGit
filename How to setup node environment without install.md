* Download node.exe from http://nodejs.org/download/
* create folder D:/node and paste downloaded node.exe inside
* Download NPM from here http://nodejs.org/dist/npm/ and extract in D:/node
	folder structure will be: 
	D:\node
		|-- node.exe
		|-- npm.cmd
		|-- node_modules
				|-- npm
					|-- *
* open cmd and run these commands
	setx PATH "D:\node" && setx NODE_PATH "D:\node\node_modules"
* restart cmd 
* Check the installation by "node -v" to get node version and "npm -v" for npm version