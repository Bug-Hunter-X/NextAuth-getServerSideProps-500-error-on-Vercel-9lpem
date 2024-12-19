```javascript
// pages/about.js
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session ? <p>Logged in as {session.user.email}</p> : <p>Not logged in</p>}
    </div>
  );
}
```
Note:  Make sure your `api/auth/[...nextauth]` file is correctly configured for NextAuth.js 5+ and  that you've updated the import statement to `getSession` from `next-auth/react`.