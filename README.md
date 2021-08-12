![Sky logo](./docs/assets/logo.png)

# Sky Inversion of Control Assessment

[simpleContainer.ts](./src/containers/simpleContainer.ts)
and [simpleContainer.test.ts](./src/containers/simpleContainer.test.ts) is a simple IoC Container and associated tests.

[main.yml](./.github\workflows\main.yml) is the workflow that is run when code is pushed to the main/master branch. This workflow pushes the library to the node package manager npmjs.com

[Inversify](http://inversify.io) is used as the IoC framework - It is the most popular framework for IoC in JavaScript.

[inversifyContainer.ts](./src/containers/inversifyContainer.ts)
and [inversifyContainer.test.ts](./src/containers/inversifyContainer.test.ts) is the configuration of the inversify Container and associated tests.

[index.ts](./src/index.ts) is the public facing (dummy) API to be used by client applications

