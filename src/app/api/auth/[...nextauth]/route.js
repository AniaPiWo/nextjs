import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs"
import connect from "@/utils/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){

        await connect()

        try {
          const user = await User.findOne({email: credentials.email})

          if(user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
            if(isPasswordCorrect){
              return user;
            } else {
              throw new Error("Wrong password!")
            }

          } else {
            throw new Error("User not found!")
          }
        } catch (error) {
          throw new Error(error)
        }

      }
    })
  ],
});

export { handler as GET, handler as POST };
