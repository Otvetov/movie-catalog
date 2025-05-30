# Каталог Фильмов

Современное одностраничное приложение (SPA) для поиска, добавления и хранения коллекции фильмов с использованием React, TypeScript, Zustand, Material UI и OMDb API.

## Возможности

- 🔍 Поиск фильмов онлайн через OMDb API
- ➕ Добавление фильмов вручную или импорт из поиска
- 📋 Ведение личной коллекции фильмов (локально)
- 📝 Просмотр подробной информации о фильме
- 🗑️ Удаление фильмов из коллекции
- 🎬 Отображение времени фильма, описания, постера
- 🌙 Современный адаптивный дизайн на Material UI


## Быстрый старт

### 1. Клонируйте репозиторий

```bash
git clone https://github.com/otvetov/movie-catalog.git
cd movie-catalog
```

### 2. Установите зависимости

```bash
npm install
# или
yarn install
```

### 3. Получите OMDb API ключ

- Зарегистрируйтесь на [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) (бесплатно)
- Получите ключ и сохраните его

### 4. Настройте переменные окружения

Создайте файл `.env` в корне проекта и добавьте:

```env
REACT_APP_OMDB_API_KEY=your_api_key
```

### 5. Запустите приложение

```bash
npm start
# или
yarn start
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)

---

## Структура проекта

```
src/
  api/           // Работа с OMDb API
  components/    // UI-компоненты
  pages/         // Страницы приложения
  store/         // Хранилище Zustand
  types/         // Типы TypeScript
  App.tsx        // Главный компонент
  index.tsx      // Точка входа
```

---

## Технологии

- **React** + **TypeScript**
- **Zustand** — локальное хранилище данных
- **Material UI** — UI-компоненты и стили
- **React Router** — роутинг
- **OMDb API** — поиск и получение информации о фильмах

---

## Лицензия

MIT

---

## Автор

- [Roman Slushniy](https://github.com/otvetov)
