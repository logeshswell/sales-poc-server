![Cover Image](assets/cover_photo.png)

<h1 align="center">
  Swell Eats Core
</h1>

<p align="center">
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-green"></a>
  <a href="https://github.com/logeshswell/swell-eats-core/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>
</p>

Swell Eats is a food-delivery marketplace built using Swell for demo purposes only. It touches upon the following
features of Swell:

- Multi-store
- Product (Physical, Bundle) + Categories
- Customers
- Cart + Orders + Abandoned Cart
- Custom Storefront
- Custom Models with associations

Swell Eats Core provides a few additional core functionalities which are not applicable in swell-js library.

## Prerequisites

#### Dependencies

- npm - `v8.9.0`
- node - `v16.14.2`
- express - `v4.18.1`
- typescript - `v4.6.4`
- swell-node - `v4.0.9`
- store-url - https://swell-eats.swell.store/admin
- storefront-url - Will be added soon.

## Setup instructions

#### Fork Project

- Fork the main repository
- Clone the forked repository locally `git clone forked_repo_url`

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

## Documentation

#### Setting up the store

Will be added soon.

#### Populate dummy data

Will be added soon.

## Community

Swell Eats is completely free and made open-source. Our team is really happy to support contributors from all around the
world. Fork our project and send us your pull request: maybe minor extensions or major improvements.

**Every contribution is awesome and welcome!**
