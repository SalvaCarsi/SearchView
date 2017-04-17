### Geometric app

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
git clone https://github.com/SalvaCarsi/Geometric/
cd Geometric/
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

There are three git branches, as requested in the task: ```master, React and Bootstrap``` 
