# Smart Cellar Frontend

This code is an essential component of the bachelor's project on the topic "Smart Cellar: Development of a Full-Stack App for Reducing Food Waste and Promoting a Sustainable and Cost-Effective Lifestyle."


## Requirements

To ensure the proper functioning of the project, make sure the following requirements are met:

* [Node.js 18](https://nodejs.org/en/download): Ensure that you have Node.js version 18 or higher installed. This is necessary to provide the runtime environment for running the application.

Make sure these requirements are met before starting the project to ensure smooth execution of the application.

## Installation
Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the project's dependencies.

```bash
npm install
```

## Usage
Depending on where the backend server is located, the project can be started locally in different ways.
if the server is located `http://localhost:4000` by default, it is started with the following command:
```bash
npm run start
```
If you don't have a running server, you can use the deployed server (it is available on the render.com server until 29.12.23),
you can start the project by the command:
```bash
npm run start:render
```
If the backend server is at a different address, the following command is used:
```bash
npm run start apiUrl='http://yourBackendAdress.com'
```

To log in, use the following credentials:
```bash
Email   :  user1@example.com
Password:  password1
```

## Usage with Docker

```bash
docker build -t smart-cellar-frontend .
docker run -d -p 3000:3000 --name frontend-smart-cellar-container smart-cellar-frontend
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](LICENSE)
