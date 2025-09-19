# Moiveo

Moiveo is a web application for browsing, searching, and viewing movies. It is built with **React** and fetches movie data using the **TMDb API**. The app is fully responsive and deployed on **Vercel**.

Live Demo: [https://moiveo-xi.vercel.app/](https://moiveo-xi.vercel.app/)

---

## Features

- Browse popular and trending movies
- Search movies by title
- View movie details including synopsis, rating, and images
- Responsive design for desktop and mobile
- Easy navigation with React Router

---

## Tech Stack

- **Frontend:** React
- **Styling:** CSS / Tailwind CSS
- **API:** TMDb API
- **Deployment:** Vercel

---

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd moiveo
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root and add your TMDb API key
```
REACT_APP_TMDB_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm start
# or
yarn start
```

---

## Deployment

- The app is deployed on **Vercel**.
- Make sure to set the `REACT_APP_TMDB_API_KEY` environment variable in Vercel dashboard.
- Build command: `npm run build`

---

## Folder Structure

```
/src
  /components   — React components
  /pages        — Route pages
  /assets       — Images and icons
  /api          — API calls
  /styles       — CSS or Tailwind styles
.env.example    — Example environment file
README.md       — This file
```

---

## Usage

- Open the homepage to see trending movies
- Use the search bar to find movies by name
- Click a movie to view detailed information

---

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to your branch: `git push origin feature/YourFeature`
5. Create a pull request

---

## License

This project is licensed under the **MIT License**.
