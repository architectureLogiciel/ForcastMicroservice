## Running the app

To run the database
```
$ docker-compose up
```

To run server on port 3001 development on watch mode
```
$ npm run start:dev
```

If you're using the application for the first time, you've got to seed the database
```
$ npm run seed:db
```

## APIs

***

```GET localhost:3001/products```		=> [{products}] ```admin```

```GET localhost:3001/products/id``` 	=> {products} ```admin```

```GET localhost:3001/products/forcast/id``` 	=> [12 forcast numbers] ```admin```
