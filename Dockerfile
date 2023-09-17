# Using the official Node.js image as the base
FROM node:18.17.1

# Setting the working directory inside the container
WORKDIR /frontend

# Cloning the project from GitLab
RUN git clone https://gitlab.elektrotechnik.hs-augsburg.de/namu1848/smart_cellar.git .

# Installing project dependencies
RUN npm install

# Starting the application in development mode
CMD ["sh", "-c", "npm run start"]

