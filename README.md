![Altschool Logo](https://raw.githubusercontent.com/Oluwasetemi/altschool-opensource-names/d5d87d27629fdd83b4a1d601afee0248f69cb25e/AltSchool-dark.svg)

# Altschool Express and MongoDb BookStore Project - Two

After learning **Nodejs** , **Express** and **MongoDb** in the second week of the second semester in Altschool, I started building this project in order to test what have learned so far.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [About project](#about-project)
  - [Usage](#usage)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### About project

This is an API created with Express framework while using a Non relational database Mongodb. Egit ach route contains the following methods:

- **Books** route:
  - getBook ```GET```
  - getByIdBook ```GET```
  - createBook ```POST```
  - updateBook ```PUT```
  - deleteBook ```DELETE```
 

## Usage

Clone repository 

```
git clone https://<insert_your_token>@github.com/eddy1759/express-mongodb_intro
```

Change directory

```
cd express-mongodb_intro
```

Install dependencies

```
npm install
```

Start server

```
npm run start
```
### Testing endpoints

| ENDPOINT   |METHODS | DESCRIPTION             | SEND DATA                   |
| ---------- | ------ | --------------------    | --------------              |
| /books     | GET    | Gets all books          | -                           |
| /books/:id | GET    | Get a book by id        | path params                 |
| /books/    | POST   | Adds a book to database | body `json`                 |
| /books/:id | PUT    | Update User Profile     | path params,body `json`     |
| /books/:id | DELETE | Deletes a book from db  | body `json`                 |


## My process

The design process I used to create this API is very simple. First of all I had to write down the basic files and folders I will need and list the files that will be contained in each folder. While writing the code, there were six main stages in my design process which were: 

- Write test code to test routes
- Setup server with a request handler
- Database setup
- Add routes to request handler and test them
- Add functionality to each route
- test each route

### Built with

- ExpressJS ![](https://img.shields.io/badge/Code-ExpressJS-informational?style=flat&logo=Express&logoColor=white&color=4AB197)
- MongoDB ![](https://img.shields.io/badge/Code-MongoDB-informational?style=flat&logo=MongoDB&logoColor=white&color=4AB197)

### What I learned

- What `ORM` are
- How to setup a server with Express
- How to setup a MongoDB database using MongoDB 
- How to use set `env` files 
- Code documentation
- How to test code using TDD framework
- How to build a CRUD app
- How to categorise code files


### Useful resources

[Google](https://google.com) was very useful resource.

## Author

- Twitter - [@eddyozone](https://www.twitter.com/eddyozone)
- LinkedIn - [Edet Emmanuel Asuquo](https://www.linkedin.com/in/edet-e-asuquo/)
