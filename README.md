# Grupo ERMOFE S.A de C.V. Website

This is the public website of Grupo ERMOFE S.A. de C.V.

# Installation

## Prerequisites

Install the following tools, if you don't have them already:

- **Node.js**. It allow us to use server side JavaScript, and the NPM package manager.
- **Angular CLI**. This website is built on top of angular. Install it following the instructions of [this page](https://angular.io/cli).

## Configuration

1. Request an account in the Grupo Ermofe's CMS, and generate an API Key that allows you to GET the data.
2. Clone this repo and install all dependencies.
   ```bash
   $ git clone https://github.com/NodeAxan/grupo-ermofe.git

   $ cd grupo-ermofe

   $ npm install
   ```
3. Create a copy of `/src/environments/environment.example.ts` and rename it to `/src/environments/environment.ts`. Replace those variables to your own data. Here is where you will put the previously generated API Key.

Finally, you can serve this project using `ng serve`. Navigate to `http://localhost:4200` to see it.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Support

This website is supported by [NodeAxan](https://nodeaxan.com/).

## Contact

- Author(s):
  - [Axel León](https://github.com/AxelLR992).
  - [Carolina de la Cruz](https://github.com/carolina-morales).
- Website: [https://nodeaxan.com/](https://nodeaxan.com/).