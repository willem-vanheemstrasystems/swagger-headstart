# swg_nodejs02
swg_nodejs02

#Swagger - NodeJS 02

Based on 'Swagger Integration with Node/Express' at https://www.youtube.com/watch?v=i9yOksgUQ9Y

##Installation:

```npm install -g swagger```

```swagger project create```

```javascript
Project name? swagger-integration
Framework?
	connect
  > express
    hapi
    restify
    sails
```

A new project will be created in the directory 'swagger-integration'

##Starting:

From within the 'swagger-integration' directory type:

```swagger project start```

project started here: http://localhost:10010/
project will restart on changes
to restart at any time, enter `rs`

Try this:

```curl http://127.0.0.1:10010/hello?name=Scott```

NOTE: To use the ***curl*** command on Windows, use cmder (see http://cmder.net/)

The reply on the command line will be:

```"Hello, Scott!"```

Alternatively, open a web browser window and surf to:

```http://127.0.0.1:10010/hello?name=Scott```

The reply in the web browser window will be:

```"Hello, Scott!"```
