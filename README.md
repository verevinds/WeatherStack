# WeatherStack
## Загрузка проекта
____
Для загрузки проекта в терминале прописываем:
```git
    git clone https://github.com/verevinds/WeatherStack.git
```
## Установка проекта
____
Открываем терминал заходим в скопированный проект.
Пишем команду npm install:
```cmd
    npm install
```

## Запуск проекта
____
Для запуска проекта можно воспользоваться скриптом "start"
```cmd
    npm run start
```
или прописать в ручную команду для запуска:
```cmd
    npx cross-env NODE_ENV=development webpack-dev-server --mode development --open
```

## Сборка проекта в продакшен

____
Для запуска проекта можно воспользоваться скриптом "start"
```cmd
    npm run build
```
или прописать в ручную команду для запуска:
```cmd
    cross-env NODE_ENV=production webpack --mode production
```
