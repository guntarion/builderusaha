// src/lib/auth.config.ts
import type { AuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import { Session } from 'next-auth';

interface AuthorizedProps {
  auth: { user: any } | null;
  request: { nextUrl: URL };
}

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    signIn({ user, account, profile, email, credentials }) {
      const isLoggedIn = !!user;
      const isProtected = account?.provider === 'google';

      if (isProtected && !isLoggedIn) {
        return '/auth/signin';
      }

      return true;
    },
    jwt({ token, profile }: { token: JWT; profile?: any }) {
      if (profile) {
        token.id = profile.sub;
      }
      return token;
    },
    session({ session, token }: { session: Session; token: JWT }) {
      if (session?.user && token?.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
