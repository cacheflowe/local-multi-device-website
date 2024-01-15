# Local Multi-device Website

This is a starter template to build locally-hosted websites that can be accessed & synchronized between multiple devices on the same network.

## General setup:

* Use Vite for frontend development
  * Any page has an index html and app.js entrypoint
  * These should be full-functioning static sites if Vite isn't running
* Run the simplest `ws` server with Node.js/Express for persistent local connections between any number of devices
* Use AppStoreDistributed to act as a shared state store and event emitter and abstracting WebSocket communication

## Install from package.json

- `npm install`

## Run the app

Run the frontend and backend servers in separate terminals:

- `npm run dev`
- You should see the following:
```
VITE v5.0.11  ready in 258 ms

➜  Local:   http://localhost:5173/
```

- `npm run server`

## Initial setup

Only do this if you're starting from scratch. You should normally just install from package.json.

- `npm create vite@latest`
  - Choose vanilla & JavaScript options
- `npm install @vitejs/plugin-basic-ssl --save-dev`
- `npm i express`
- `npm i ws`

## Setup & Lock down 

- Windows general settings
- Windows firewall settings to allow WebSocket traffic
- Chrome launch script for kiosk mode
  - Windows multi-touch settings if touchscreen or tablet
- iPad settings for guided access kiosk mode
- Local wifi router settings
  - Static IP for server

Monitoring

- RustDesk for remote access
- DashboardPoster for remote monitoring

## TODO

- Support https/wss
