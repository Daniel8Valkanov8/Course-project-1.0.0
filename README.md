Целта на проекта ми Travel Agency. Проекта за моята защита ще бъде създаване на уеб сървърно приложение под името Travel Agency. В него хората ще могат да разглеждат различни ваканции и да си правят резервации за тях. Ще има три нива на достъп: User Moderator Admin като ще бъде имплементирана логика само за ролята Admin и User. Идеята е Потребителя и всеки не регистриран потребител да може да разглежда Ваканции, регистрираният потребител да може да създава резервации а администратора да създава локациите и ваканциите. По подразбиране ролята на всеки потребител бива USER като само чрез SQL заявки ще могат да се оторизират нови потребители с по високо ниво на достъп. Приложението е с Reactjs базирана клиентска част като се използва NPM и backend Java Spring Boot. Защитата е Spring Security 6. База данни: MySQL и/или H2. Понеже приложението ще се получи доста голямо има възможност тук да го качвам като отделни проекти със защитата и без нея.

Project Goal: Travel Agency

The project for my defense will be the creation of a web server application named "Travel Agency". In this application, users will be able to view various vacations and make reservations for them. There will be three levels of access: User, Moderator, and Admin. The logic will be implemented only for the Admin and User roles.

The idea is that both unauthenticated users and registered users can view vacations. Registered users will be able to make reservations, while administrators will be able to create locations and vacations. By default, each user role is set to USER, and only through SQL queries can new users be authorized with higher access levels.

The application features a React.js-based client-side, using NPM, and a backend developed with Java Spring Boot. Security is managed by Spring Security 6. The database used is MySQL and/or H2. Given that the application will be quite large, there is the possibility to upload it here as separate projects with and without security.

# Spring Boot Backend

## Install

```
mvn clean package
```

## Run on local

First, start a database as described bellow.

```
mvn spring-boot:run
```

The application will be available at `http://localhost:8080`

## How to run database

This will start an empty database. The schema will be created when started the application.

```
docker run -d -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=backend -e POSTGRES_PASSWORD=backend -e POSTGRES_DB=backenddb -p 5432:5432 postgres:13
```

Warning, the schema will be dropped and re-created each time the application starts.

To change this behavior, change the value of `spring.jpa.hibernante.ddl-auto` and `spring.datasource.initialization-mode` in the `application.yml` file.

## Packages

### Config

Here will be placed all the necessary configuration for the application to run correctly.

The `JwtAuthFitler` is necessary to read the JWT from the HTTP headers.

The `PasswordConfig` is to encode and decode the passwords, to avoid having the passwords in plain text.

The `SecurityConfig` contains the Spring Security 6 configuration, with the protected routes, exception handler and the http filters.

The `UserAuthenticationEntryPoint` manages the exceptions.

The `UserAuthenticationProvider` manages the authentication, creating the JWT or validating it.

The `UsernamePasswordAuthFitler` is the filter which reads the username and password information.

The `WebConfig` contains the CORS configuration.

### Controllers

Here are the two available controllers. One for the authentication and registration. And the other to access the protected ressources.

### Dtos

Here will be placed the Data Transfer Objects. Objects which will be returned to the frontend instead of the database entities.

### Entities

The objects present here are the one which reflect the database structure.

### Exceptions

Here are the custom excecptions.

### Mappers

The Mapstruct mappers are present in this package.

### Repositories

The Spring JPA repositories are present in this package.

### Services

Two services are availables in this package. One to authenticate a user, to verify the credentials. 

And the other service is to register a new user.

## Authentication

The authentication is handled with a JWT.

The application is stateless. This means that no session is managed by Spring, no data is stored in the session.

Each request to protected resources must contain a JWT in the Authorization header to be accepted.

Only two requests don't need the JWT, the login and the register. But both will generate a JWT after their action finishes correctly.
