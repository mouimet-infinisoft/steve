

# Environment Variables

Webpack
DEBUG_PATH      Outputs webpack configured path

# Configuration

## config/index.js
Feature name            Important and has impact on module federation


# Mono Repo

## Start 
For now there is only one main solution for the project. It can be started as following from the monorepo root. It will start federation, container and micro apps.

```sh
$ npm run start
```

# Micro Apps
Can run `alone` or `containerized` or `both` at the same time.

# Run
Important to make sure federated module are reachable before starting. Federation server can be run with following command.

>  Make sure to be at the root folder.  

```sh
$ npm run start:federation
```

## Stand Alone
Running alone with following command.

```sh  
$ npm run start  
```

## Container
Every micro app can run with or without a container.

```sh  
$ npm run start  
```

## Start All

```sh  
$ npm run start  
```
>  ## Federated Module Live Reload
>  Live reload is configured on federated module however, for already loaded module, a refresh is still required.  


## Build All