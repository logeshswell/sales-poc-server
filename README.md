<h1 align="center">
  Swell + Coloro Demo
</h1>

A Backend server for Swell + Coloro Demo, which fetch the cart across multiple storefronts for the same user session. It touches upon the following features:
- Multi-Vendor Cart Management
- Marketplace with Access control

## Prerequisites

#### Dependencies

- npm - `v8.9.0`
- node - `v16.14.2`
- express - `v4.18.1`
- typescript - `v4.6.4`
- swell-node - `v4.0.9`
- store-url - https://coloro-demo.swell.store/admin
- storefront-url - https://gitlab.com/schema/sales-poc/-/tree/coloro-poc

## Setup instructions

#### Run Project

- Navigate to root directory, add the following lines in `.env` file.

```
SWELL_STORE_ID=your_store_id
SWELL_SECRET_KEY=your_secret_key
```

- Navigate to one of the below paths and add the following lines to your hosts file.

* Linux/Mac - `/etc/hosts`
* Windows - `C:\Windows\System32\drivers\etc\hosts`

```
127.0.0.1	swell-poc.swell.test
```

- Run `nvm use && npm install` to install npm packages.
- Run `npm run dev` to start the server.
- The backend application will be running in http://swell-poc.swell.test:80
