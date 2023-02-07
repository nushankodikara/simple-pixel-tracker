# Simple pixel tracker

## What is a pixel tracker?

A pixel tracker is a small image that is loaded from a web server. It is used to track the number of times a page has been viewed. It is also used to track the number of times a user has clicked on a link.

## How this works

This program is a simple pixel tracker in the base form. Usually this program runs on port 3000 unless the port is set by environmental variables. You can use this by running commands as follows

### Development

```bash
$ npm install
$ npm run dev
```

### Production

```bash
$ npm install
$ npm run start
```

The program can track and log the ID passed by the url ( GET request ) as follows

```bash
http://localhost:3000/track/email?id=12345

http://localhost:3000/track/page?id=12345
```

