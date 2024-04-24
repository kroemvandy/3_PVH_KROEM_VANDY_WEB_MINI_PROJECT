import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export const authOption = {
  providers: [
    //login email and password
    CredentialsProvider({
      async authorize(userInfo) {
        //define login service
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password
        };

        //call login service
        const login = await loginService(newUserInfo);
        if (login.status == 400) {
          return;
        } else {
          return login;
        }
      },
    })
  ],
  //use to set token into cookie
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  // calling secret key
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt", // Adjust this based on your session strategy
  },
  pages: {
    signIn: "/login",
  },
};

const handler = nextAuth(authOption);
export { handler as GET, handler as POST }