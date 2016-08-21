# swg_nodejs02
swg_nodejs02

#Swagger - NodeJS 02

Based on 'Swagger Integration with Node/Express' at https://www.youtube.com/watch?v=i9yOksgUQ9Y

##Verifying

From within the 'swagger-integration' directory type:

```swagger project verify```

If all is valid in ```/api/swagger/swagger.yaml``` the prompt will say:
Results: 0 errors, 0 warnings

#MongoDB

Make sure you have MongoDB running before starting the application. (On Windows run mongod.exe)

##Starting:

From within the 'swagger-integration' directory type:

```swagger project start```

project started here: http://localhost:8081/
project will restart on changes
to restart at any time, enter `rs`

#POST movie

With the POSTMAN plugin in Chrome browser, POST the following JSON to the server on http://localhost:8081/movies

```javascript
{
  "movie": {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "genre": "Drama",
    "rank": 9
  }
}
```

A new entry in MongoDB database should now hold above movie information.

#GET movies

With the POSTMAN plugin in Chrome browser, GET the following from the server:

```javascript
http://localhost:8081/movies
```

A list of movies from MongoDB database should be returned, e.g.

```javascript
{
  "movies": [
    {
      "_id": "57b9c2dc892ee9e842e67bbf",
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": "Drama",
      "rank": 9,
      "__v": 0
    },
    {
      "_id": "57b9c595892ee9e842e67bc0",
      "title": "Ghostbusters",
      "year": 1994,
      "genre": "Comedy",
      "rank": 5,
      "__v": 0
    }
  ]
}
``` 

#GET movies by genre

With the POSTMAN plugin in Chrome browser, GET the following from the server, filtered by genre:

```javascript
http://localhost:8081/movies?genre=Drama
```

A list of movies with genre 'Drama' from MongoDB database should be returned, e.g.

```javascript
{
  "movies": [
    {
      "_id": "57b9c2dc892ee9e842e67bbf",
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": "Drama",
      "rank": 9,
      "__v": 0
    }
  ]
}
``` 

#GET movie by id

With the POSTMAN plugin in Chrome browser, GET the following from the server, filtered by id:

```javascript
http://localhost:8081/movies/57b9c2dc892ee9e842e67bbf
```

A unique movie with id '57b9c2dc892ee9e842e67bbf' from MongoDB database should be returned, e.g.

```javascript
{
  "movies": [
    {
      "_id": "57b9c2dc892ee9e842e67bbf",
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": "Drama",
      "rank": 9,
      "__v": 0
    }
  ]
}
``` 

note:
... I am at 34:57 of 47:54 of the youtube video
