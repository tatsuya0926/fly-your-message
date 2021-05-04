## link

- [Vercel](https://vercel.com/making-oasis/amo-project)
- [Link ](https://amo-project.vercel.app/)

## How to use

## local で必要なものあいうえお

- npm (v6.14.4)か yarn(v1.22.10)
- node(v14.1.0)

## 使っている UIUX ライブラリ

- [tailwindCSS](https://tailwindcomponents.com/)
- [material UI](https://material-ui.com/)

### Step 1. Set up a MySQL database

Set up a MySQL server either locally or any cloud provider.

### Step 2. Set up environment variables

```bash
touch `.env.local`
```

Set each variable on `.env.local`:

- `MYSQL_HOST` - Your MySQL host URL.
- `MYSQL_DATABASE` - The name of the MySQL database you want to use.
- `MYSQL_USERNAME` - The name of the MySQL user with access to database.
- `MYSQL_PASSWORD` - The passowrd of the MySQL user.
- `MYSQL_PORT` - xxxx

### Step 3. Run migration script

You'll need to run a migration to create the necessary table for the example.

```bash
npm run migrate
# or
yarn migrate
```

### Step 4. Run Next.js in development mode

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3001](http://localhost:3001)!

## Deploy on Vercel

```
git push origin HEAD
```

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.
