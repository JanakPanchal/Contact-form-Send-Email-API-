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
```
 localhost:3000/send
 
```


## JSON Formate
Method : POST
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
```
### JSON Response
```
{
    "accepted": [
        "janakpanchal13@gmail.com"
    ],
    "rejected": [],
    "envelopeTime": 237,
    "messageTime": 3609,
    "messageSize": 811,
    "response": "250 OK id=1fqXNN-000lVU-1a",
    "envelope": {
        "from": "xxxx@xxxxx.com",
        "to": [
            "janakpanchal13@gmail.com"
        ]
    },
    "messageId": "<ca2c5e95-8552-5e24-6694-bf54c963c4b5@digitaljao.com>"
}
```

### Author Info
```
Name : Janak Panchal
Email : Janakpanchal13@gmail.com
Github link : https://github.com/JanakPanchal/
