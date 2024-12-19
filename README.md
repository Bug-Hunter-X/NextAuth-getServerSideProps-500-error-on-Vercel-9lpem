# NextAuth getServerSideProps 500 error on Vercel

This repository demonstrates a bug encountered when using NextAuth.js with `getServerSideProps` in a Next.js 15 application deployed to Vercel.  The About page, which uses `getServerSideProps` to retrieve session data, consistently returns a 500 error, while the Home page functions correctly.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about` - this works locally.
5. Deploy to Vercel (or equivalent). 
6. Navigate to `/about` on the deployed site - this will result in a 500 error.

## Potential Causes and Solutions
The core issue lies with the usage of `unstable_getServerSession`. Although it works locally, it may not function correctly in a production environment.  The solution below demonstrates how to migrate the code to use `getSession` instead, which is a more stable method.  This requires adjusting the NextAuth configuration and how the session data is accessed.

## Contributing
Feel free to open an issue if you have any questions or suggestions.