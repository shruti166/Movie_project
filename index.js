const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${req.url} : New Request recieved`;

  fs.appendFile("log.txt", log, (err, data) => {
    console.log("log updated");
  });
  console.log("New Request Recieved");
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.end("This is home page");
      break;
    case "/about":
      res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
            font-size: 18px;
            line-height: 1.6;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>About Us</h1>
        <p>Welcome to our website! We are dedicated to providing high-quality services and products to our customers.</p>
        <p>Our mission is to create solutions that make life easier and more enjoyable.</p>
    </div>

</body>
</html>`);
      break;
    case "/contact":
      res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
            background-color: #f9f9f9;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        input, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background: #007bff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us by filling out the form below.</p>
        
        <form action="#" method="post">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>

</body>
</html>
`);
  }
  res.end("Hello from Server");
});

myServer.listen(8000, () => {
  console.log("Server started");
});
