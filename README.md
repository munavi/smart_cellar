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
## Environment Variables

Before starting the project, you must configure the environment variables. Create a .env file in the project's root directory and define the following variables:
```bash
SERVER=http://localhost:3000
apiUrl=http://localhost:4000
```
Make sure to update the `apiUrl` with the address where your backend is running.

## Usage
To run the project, please use the following command:

```bash
npm run start
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
