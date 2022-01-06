Project Title: MODA FASHION STORE

Demo link: https://eager-swartz-44c197.netlify.app/

Table of Content:
About The App
Screenshots
Technologies
Setup
Approach
Status
Credits
License

About The App
MODA FASHION STORE is an app which is a fixed price fashion store with has a variety of products for everyone.

Screenshots
https://ibb.co/gyQcpL5

Technologies
I used html, css, javascript, react.js, styled-components, node.js, express.js.

Setup
Backend: git clone https://github.com/pesto-students/moda-be-n11-alpha.git
run npm install
run npm start

FrontEnd:git clone https://github.com/pesto-students/moda-fe-n11-alpha.git
run npm install
run npm start
...
Approach
Node.js best practices
1. Use HTTP methods and API routes

2. While creating RESTful APIs for basic CRUD operations, you should use the predefined routes PUT, POST, PATCH, DELETE, GET. Also, the name of the routes should use nouns and must be according to the use case. For eg. A route to delete a student from a college app the route must be DELETE /student/:id

3. Use Stateless Authentications: Your REST APIs and your authentication component should be both stateless. Stateless authentication could be achieved with the help of JWT (JSON Web Token)

4. Properly use status codes: While error handling is an important part of any function, HTTP services must also follow the same. To indicate the status of a request, proper status codes should be used.

Some other miscellaneous or general coding best practices are:
1. Following a good style-guide

2. Keeping the code functional and simple.

3. Create index files for each folder or module and use them to keep track of the contents. This also boosts the application’s performance.

4. Embrace the feature of reusability in modern development languages. Be as less repetitive as possible.

5. Avoid using timeout functions for request resolve and redirection. Instead, use observables and behavior subjects.

6. Divide the project into modules and identify the scope of services

7. Application should be divided into folders, modules, components and services based on the scope of services, data sharing and size of the application.


Status
MODA FASHION STORE project is still in progress. Version 1 will be out soon.

License
MIT license @ UditSaurabh



ADDITIONAL INFORMATION

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
