### React + Electron Tutorial

---

### React: A JavaScript library for building user interfaces

### Electron: Build cross-platform desktop apps with JavaScript, HTML, and CSS

---

### Steps:

#### Setup

- Create React app `npx create-react-app react-electron`
- Install dependencies

```
cd react-electron
yarn add electron concurrently wait-on cross-env
```

- Add Electron Scripts to package.json

```
"scripts" : {
    ...,
    "electron:serve": "concurrently -k \"cross-env BROWSER=none yarn start\" \"yarn electron:start\" ",
    "electron:build":"",
    "electron:start":"wait-on tcp:3000 && electron ."
}
```

- Add Entry points in package.json

```
"main": "public/main.js",
"homepage": "./",
```

- Create public/main.js
- Setup React Electron in main.js
- - Setup Creating Browser window logic

#### Interprocess Communuication IPC

- Install Dependency `yarn add @electron/remote`
- Initialize it in main.js
- - Require and initialize `require('@electron/remote/main').initialize()`
- - Enable remote module inside webPreferences of browser window

```
{
    ...,
    webPreferences: {
        enableRemoteModule:true
    }
}
```

- Run App `yarn electron:serve`

#### Some Styling

- Install Bootstrap `yarn add bootstrap@next`
- Import Bootsrap inside index.js `import "bootstrap/dist/bootstrap.min.css"`
