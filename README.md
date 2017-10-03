# appjsreport

-> PDF System Generation [handlebars](http://handlebarsjs.com/) with phantom pdf

## Technologies:
* Front-end: HTML, JS, CSS, angularjs
* Back-end: Nodejs, Express, Phantom-pdf
* DB: MongoDB

## Run this project

> npm install

> sudo service mongod start

> node server

>> Open http://localhost:8000

## Rest just sending data
-> Do a post with for **"/generate-pdf"**, sending as data:
```javascript
{
    projectName: projectname,
    data: data
}
```
-> Ex:
{
    projectName: myproject,
    data: {
		name: "Jonh Doe",
		age: 24,
		city: "Belem"
	}
}

## Desenvolvedores:
* Cleyton Gama
* Pedro Ramos
