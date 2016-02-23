Cli-weather !
===================


Show the weather prediction !

----------


Introduction
-------------

This program is used to predict the forecast for the next 3 days.
The program gets automatically our location by Ip Address. **online!**

> **Note:**

> - User has to be connected to get forecast
> - User has to launch the file **index.js**


### Just tell me what to do
1. Fork the project https://github.com/92bondstreet/rdd-cdd-tdd via github
2. Clone the project git clone https://github.com/YOUR_USERNAME/rdd-cdd-tdd
3. Install NodeJS
4. Follow the steps.
5. Don't forget to commit and push



### Steps to do


#### Step 1 - Install packages

All packages for the project are defined into the file **package.json**.
To install these packages, we have to go into **weather** repository and execute the command :

> npm install


#### Step 2 - Write index.js document

This document is the main page of the project. It shows the forecast information.

> npm install


#### Step 3 - Write config.js document

Get or write the location configuration

> function write(args, units, ip)
> {
> fs.writeFile(path, JSON.stringify(args, null, 2), function (err) {
> ...
> });
> }


> function read(args, units, ip) {
> if (args.c && !(args.s || args.save)) { handleArgs(args, units, ip);}
> else {
> ....
>        }
>}
