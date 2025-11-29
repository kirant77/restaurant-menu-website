# Deploying to Netlify

Your project is now configured for easy deployment on Netlify.

## Steps to Deploy

1.  **Log in to Netlify**: Go to [netlify.com](https://www.netlify.com/) and log in (or sign up).
2.  **Add New Site**: Click on "Add new site" > "Import an existing project".
3.  **Connect to GitHub**: Choose GitHub as your Git provider.
4.  **Select Repository**: Search for and select your repository: `restaurant-menu-website`.
5.  **Configure Build**:
    *   Netlify should automatically detect the settings from `netlify.toml`.
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
6.  **Deploy**: Click "Deploy site".

## Updates

Whenever you push changes to the `main` branch on GitHub, Netlify will automatically rebuild and redeploy your site.
