# swg_nodejs02
swg_nodejs02

#Swagger - NodeJS 02

Based on 'Swagger Integration with Node/Express' at https://www.youtube.com/watch?v=i9yOksgUQ9Y

##Verifying

From within the 'swagger-integration' directory type:

```swagger project verify```

If all is valid in ```/api/swagger/swagger.yaml``` the prompt will say:
Results: 0 errors, 0 warnings

##Starting:

From within the 'swagger-integration' directory type:

```swagger project start```

project started here: http://localhost:8081/
project will restart on changes
to restart at any time, enter `rs`

Try this:

```curl http://127.0.0.1:8081/movies?name=Scott```

NOTE: To use the ***curl*** command on Windows, use cmder (see http://cmder.net/)

The reply on the command line will be:

```"Hello, Scott!"```

Alternatively, open a web browser window and surf to:

```http://127.0.0.1:10010/hello?name=Scott```

The reply in the web browser window will be:

```"Hello, Scott!"```
