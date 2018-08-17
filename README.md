# Node Contact Form

Simple Node.js/Express app using Nodemailer to send emails

- Please add your own SMTP info for it to work

### Version

1.0.0

## Install Dependencies

```bash
npm install 
```

## Run

```bash
node app
```
## URL 
``` Localhost:3000/send
```

## JSON Formate
```
{

    "email_config" : {
    	"host" : "mail.xxxxxxxxxx.com",
    	"port" : 587,
    	"username" : "xxxxxx@xxxx.xxxx",
    	"password" : "xxxxxxxxxx"
    },
    "email_details" : {
    "name" : "hi",
	"company" : "hi",
	"email" : "xxxxxxxxxxxxxxx",
	"phoneno" : "xxxxxxxxxx"
    },
    "to" : "janakpanchal13@gmail.com",
    "from" : "xxxxx@xxxxxx.xxxx",
    "subject" : "test",
    "companyname": "ABC "
    

}
