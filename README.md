# Timeline Photos

A beautiful memory timeline app for preserving and sharing life's moments.

## Features

- **Collections**: Create themed collections (Travel, Fitness, Events, etc.)
- **Timeline View**: See your memories in a beautiful chronological timeline
- **Privacy Controls**: Mark collections as public or private
- **Responsive Design**: Works beautifully on desktop and mobile
- **Dark Mode**: Toggle between light and dark themes

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **UI Components**: Aceternity UI (Timeline), Shadcn/UI
- **Database**: MySQL with Prisma ORM
- **Image Storage**: Cloudinary (planned)
- **Authentication**: NextAuth (planned)

## Getting Started

First, create a `.env` file in the root directory with your MySQL database credentials:

```env
DATABASE_URL="mysql://username:password@localhost:3306/timelinephotos"
```

Then, install dependencies and run the development server:

```bash
npm install
npx prisma db push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Deployment

This app can be deployed on Vercel or any other platform that supports Next.js.

## License

MIT