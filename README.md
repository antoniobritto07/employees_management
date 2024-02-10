# Employee Management

This project is a simulation system designed to efficiently manage employees. It allows users to perform tasks required in the assessment test, such as department switching, employee activation and deactivation, and viewing departmental modification history, among others.

There are 3 mainly components for the task. The backend, which includes endpoints for managing different entities. The connection to the database and its structure. The frontend for a user-friendly interface.

In this project, we employed a robust set of tools and technologies that are pivotal in the realm of software development. These technologies encompass TypeScript, Docker, TypeORM, Model-View-Controller base architecture, PostgreSQL, SCSS, and ReactJS. Furthermore, it were considered several notable packages to enhance functionality, including react-toastify for toast notifications, react-icons for a wide range of icons, react-router-dom for client-side routing, and date-fns to facilitate JavaScript date management.

## Table of Contents

- [Dependencies](#dependencies)
- [Installation](#installation)

## Dependencies

- [Node.js(alpine)](https://nodejs.org/en/docs)
- [Docker](https://docs.docker.com/)

## Installation

Easily set up a local environment, will be listed bellow:

```shell
# Clone the repository
git clone https://git.number8.com/antoniobritto/employee_management.git
```

After the clone, need to be set the environment variables that are defined in the .env file.

So, run *cd backend* to get into the backend folder, and then create a file called .env in the root and insert this scope of code bellow
```shell
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=postgres
TYPEORM_DATABASE=postgres
```
*It used the default user, password and database of postgres, to make it easier and simpler*

After that, still in the backend folder and let's run the commands listed bellow:
```shell

# Build the project with a single command
npm run build
```

Now, to conclude the installation, is needed just to go back to the main project folder using *cd ..* and get into the frontend folder, by the simple command *cd frontend*. Then run theses codes in sequence:
```shell

# Install frontend dependencies
npm install

# Run the application locally
npm run dev
```

And finally, it is possible to access the application by the url *http://localhost:5173/* in any browser.