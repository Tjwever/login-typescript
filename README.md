# login-typescript
## Login Authentication system with Express and TypeScript

Login system using the ME<strike>R</strike>N stack.  Node Express, with MongoDB for the database.  Also using TypeScript instead of JavaScript for this to get more familiar with Types.

To get started, make sure to install your packages

```
npm install
```

In the root of your directory, create .env file and place the following variables inside:

```
MONGO_URL = <mongoDB credentials here>
SECRET = <secret hash key here>
```

Run the server with:

```
npm start
```

---

Using Postman or any other http service, you can register a user with the endpoint:

```
localhost:8080/auth/register
```

It expects 3 fields in the body:

```json
{
    "email": "example@mail.com",
    "password": "password",
    "username": "example"
}
```

Login with:

```
localhost:8080/auth/login
```

2 fields in the body expected:

```json
{
    "email": "example@mail.com",
    "password": "password"
}
```
<br/>

This should give you a cookie with a token inside.  You won't be able to use the other endpoints without first logging in first

---

Other endpoints include:

### Get all users:
```
localhost:8080/users
```

### Delete User:
```
localhost:8080/users/:id
```

### Update User:
```
localhost:8080/users/:id
```
