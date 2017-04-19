Please notice that I have implemented most of the application from scratch, in particular the form management and the routing is the weakest part of the code as I haven't had the time to investigate good libraries and best practices for them. 

Another point to notice is the organization of the code and the naming of classes and folders. I would like you to see this stage of the code as a draft, meaning this is a starting point in matters of organizing and naming the code and that it needs to evolve in order to improve. 

Other than that I hope you find my code clean. 

Enjoy! :)

### Search view web app

I have used Dan Abramov react-hot-boilerplate. It is a very minimalistic boilerplate that sets up babel, express, react, slint and hot reloading (I have disable the last feature as it has some issues when developing with Webstorm Idea IDE as it's my case). 

I have chosen this boilerplate to start almost from scratch and add later on the different features as needed.

### Features

- Redux: https://github.com/reactjs/redux
- styled-components: https://github.com/styled-components/styled-components
- remote-redux-devtools: https://github.com/zalmoxisus/remote-redux-devtools
- remotedev-server: https://github.com/zalmoxisus/remotedev-server

TODO 
- Implement test with Jest and Enzyme
- Internationalization

### Usage

For running the application:

```
git clone https://github.com/SalvaCarsi/SearchView/
cd SearchView/
npm install
npm start
open http://localhost:3000
```

For inspecting the redux state of the application: 

```
install Redux DevTools from here (for Chrome): 
    https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
npm run remotedev
go the instance of chrome where the app is runing and then: 
    right click => redux dev tools => Open remote dev tools
```

There is a way to do that without so much installation for react Web, but haven't had the chance to investigate it.
See: https://github.com/zalmoxisus/redux-devtools-extension
