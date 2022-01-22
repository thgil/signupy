import NextAuth from "next-auth"
import { Client as FaunaClient } from "faunadb"
import { FaunaAdapter } from "@next-auth/fauna-adapter"
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email"
import nodemailer from 'nodemailer'

const client = new FaunaClient({
  secret: process.env.FAUNA_SECRET,
  scheme: "https",
  domain: "db.eu.fauna.com"
})

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true
});

const sendVerificationRequest = ({ identifier, url }) => {

  // const emailTemplate = Handlebars.compile(emailFile);

  transporter.sendMail({
    from: `${process.env.EMAIL_FROM}`,
    to: identifier,
    subject: 'Your sign-in link for Signupy',
    html: `Click here to sign in: ${url}`
  });
};

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  secret: process.env.SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
    }),
    EmailProvider({
      maxAge: 60 * 30,
      sendVerificationRequest
    })
  ],
  adapter: FaunaAdapter(client),
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // }
})
