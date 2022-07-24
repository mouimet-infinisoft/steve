```
#### ##    ## ######## #### ##    ## ####  ######   #######  ######## ########
 ##  ###   ## ##        ##  ###   ##  ##  ##    ## ##     ## ##          ##
 ##  ####  ## ##        ##  ####  ##  ##  ##       ##     ## ##          ##
 ##  ## ## ## ######    ##  ## ## ##  ##   ######  ##     ## ######      ##
 ##  ##  #### ##        ##  ##  ####  ##        ## ##     ## ##          ##
 ##  ##   ### ##        ##  ##   ###  ##  ##    ## ##     ## ##          ##
#### ##    ## ##       #### ##    ## ####  ######   #######  ##          ##
```

> "I have not failed. I've just found 10,000 ways that won't work.", <br/> > <i>Thomas A. Edison & Martin Ouimet</i>

# Setup Dev Environement

`sh $ npm run setup:developer `

# Environment Variables

Webpack
DEBUG_PATH Outputs webpack configured paths on start.

# Configuration

## config/index.js

| Key          | Type    | Description                                                                 |
| ------------ | ------- | --------------------------------------------------------------------------- |
| feature.name | string  | The feature name. Also source of events and important for moudle ederation. |
| verbose      | boolean | Enable debug logging                                                        |

## Example

```js
{
  feature: {
    name: "myfeature"
  },
  verbose: true
}
```

# Mono Repo

## Start

For now there is only one main solution for the project. It can be started as following from the monorepo root. It will start federation, container and micro apps.

```sh
$ npm run start
```

<br />
<br />

# Module Federation

## Micro Apps

Can run `alone` or `containerized` or `both` at the same time.

## Run

Important to make sure federated module are reachable before starting. Federation server can be run with following command.

> Make sure to be at the root folder.

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

> ## Federated Module Live Reload
>
> Live reload is configured on federated module however, for already loaded module, a refresh is still required.

<br />
<br />

# Debugging

Minimal Vs Code debugging configuration.

1. Start all

```sh
$ npm run start
```

2. Insert `debugger` statement where you want to break.

3. Press F5 to start debugger

# Problem

Inserting breakpoint directly from UI is always breaking and needs reconfiguration. Therefore, inserting statement is a workaround.

<br />
<br />

# Quality Control

Bundle Analysing tools, 2 reports are generated.

1. Bundle Stats
2. Bundle Dependencies

| Commands                | descriptions                          |
| ----------------------- | ------------------------------------- |
| analyze:bundle:baseline | Run analysis as a comparison baseline |
| analyze:bundle          | Run analysis                          |

## Preview Channels

There are 3 preview channels available. When you PR on one of these branch, it will automaticaly do following steps. Only federated apps are configured. (App under `apps/federated` folder)

1. Pull code from github repo
2. Provison runner machine
3. Install Dependencies
4. Build
5. Deploy on preview

| Branch  | URL                                 |
| ------- | ----------------------------------- |
| parking | https://fearful-language.surge.sh/`YOUR_APP`/artefacts/prod   |
| edison  | https://abhorrent-teaching.surge.sh/`YOUR_APP`/artefacts/prod |
| steve   | https://apathetic-able.surge.sh/`YOUR_APP`/artefacts/prod     |


> ## Example
> https://apathetic-able.surge.sh/contacts/artefacts/prod   

<br />
<br />

# Build

# Scaffodling

Create micro apps.

## Templates

Using `unknown for now` our generator with these templates.

1. Federated Micro App

## Aliases

Using generators to create new components, you can access these aliases when importing.

| Imports      | descriptions      |
| ------------ | ----------------- |
| @/components | Shared components |
| @/helpers    | Shared helpers    |

```js
import CrudChipList from "@/components/breadcrumb";
```

# Components

Stateless component are in `shared/components` folder.

## Storybook

```sh
$ npm run storybook
```

> Open on http://localhost:6006
