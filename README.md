# WeatherStack
View the weather forecast by location

## Loading the project
____
To download the project in the terminal, we prescribe:
```git
    git clone https://github.com/verevinds/WeatherStack.git
```
## Setting up a project
____
Open the terminal go into the copied project.
Writing the npm install command:
```cmd
    cd WeatherStack
    npm install
```

## Start the project
____
You can use the "start" script to start the project
```cmd
    npm run start
```

or write to a manual command to run:
```cmd
    npx cross-env NODE_ENV=development webpack-dev-server --mode development --open
```

## Build a project in production

____
You can use the "start" script to start the project
```cmd
    npm run build
```

or write to a manual command to run:
```cmd
    cross-env NODE_ENV=production webpack --mode production
```
