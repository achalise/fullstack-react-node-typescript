### Setting up environment

Install `nodemon` to automatically restart node when file is modified.

* `npm init` to initialise a blank project
* `npm install -D typescript` to install typescript
* create `tsconfig.json`
		```
		{
		    "compilerOptions": {
		        "module": "commonjs",
		        "esModuleInterop": true,
		        "target": "es6",
		        "noImplicitAny": true,
		        "moduleResolution": "node",
		        "sourceMap": true,
		        "outDir": "dist",
		        "baseUrl": ".",
		        "paths": {
		            "*": [
		                "node_modules/*",
		                "src/types/*"
		            ]
		        }
		    },
		    "include": [
		        "src/**/*"
		    ]
		}
		```
* `npm install -S express` to install `express`

