# LMS Project

Welcome to the LMS (Learning Management System) project! This project aims to provide a robust and customizable solution for managing courses, facilitating learning, and empowering both students and teachers. With a comprehensive set of features and a modern tech stack, the LMS project offers a seamless experience for online education.

## Key Features

- **Browse & Filter Courses**: Easily explore and discover courses tailored to your interests.
- **Purchase Courses using Stripe**: Seamlessly complete transactions with secure payment processing via Stripe.
- **Mark Chapters as Completed or Uncompleted**: Track your progress within each course.
- **Progress Calculation**: Monitor your progress with detailed statistics for each course.
- **Student Dashboard**: Access a personalized dashboard to manage your courses and track your learning journey.
- **Teacher Mode**: Empower educators with tools to create, manage, and monitor courses.
- **Create New Courses**: Effortlessly create new courses with customizable settings.
- **Create New Chapters**: Structure course content by adding chapters and organizing them efficiently.
- **Drag n’ Drop Reordering**: Easily rearrange chapter positions using intuitive drag and drop functionality.
- **Multimedia Support**: Upload thumbnails, attachments, and videos seamlessly with UploadThing.
- **Video Processing**: Enhance video content with Mux for optimized playback.
- **HLS Video Player**: Enjoy high-quality video streaming with Mux's HLS video player.
- **Rich Text Editor**: Create engaging chapter descriptions with a user-friendly rich text editor.
- **Authentication**: Ensure secure access with authentication powered by Clerk.
- **ORM**: Utilize Prisma for efficient and type-safe database access.
- **Database**: Benefit from MySQL database management with Aiven.

## Tech Stack

- **Next.js 13**: React framework for building server-side rendered web applications.
- **React**: JavaScript library for building user interfaces.
- **Stripe**: Payment processing platform for online transactions.
- **Mux**: Video streaming and processing platform for high-quality multimedia content.
- **Prisma**: Modern database toolkit for TypeScript and Node.js.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs.
- **MySQL**: Relational database management system for storing and retrieving data.

## Third-party Libraries

- **clerk**: Authentication library for secure user authentication.
- **uploadthing**: Image and video upload library for seamless multimedia integration.
- **lucide-react & react-icons**: Icon libraries for visual enhancements.
- **react-hook-form**: Form handling library for efficient form management.
- **react-hot-toast**: Notification library for displaying alerts and messages.
- **react-quill**: Rich text editor component for creating formatted text content.
- **recharts**: Charting library for visualizing data with interactive charts.
- **hello-pangea/dnd**: Drag and drop library for intuitive user interactions.
- **zod**: TypeScript-first schema validation library for type-safe data handling.
- **zustand**: State management library for managing application state.
- **react-confetti**: Animation library for adding confetti effects.
- **axios**: HTTP client for making API calls.

## Environment Variables

Ensure to set up the following environment variables in your `.env` file:

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
DATABASE_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_TEACHER_ID=
```


## Getting Started

To get started with the LMS project, follow these steps:

1. Clone the repository: `git clone https://github.com/codewithmawais/lms.git`
2. Install dependencies: `npm install` or `yarn install`
3. Set up environment variables in `.env` file based on the provided template.
4. Set up prisma to sync with your db: `prisma generate` then `npx prisma db push`.
4. Run the development server: `npm run dev` or `yarn dev`
5. Open your browser and navigate to the specified URL to access the application.

## Contribution

Contributions to the LMS project are welcome! Whether you're fixing a bug, implementing a new feature, or improving documentation, your contributions help enhance the platform for everyone.

## License

This project is not licensed.
