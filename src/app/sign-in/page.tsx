'use client';

import { SignIn, useUser } from "@stackframe/stack";

const user = useUser();
console.log(user);


const SignInPage = () => {

    return (
      <div className="min-h-screen flex items-center justify-center">
        <SignIn />
      </div>
    );
  }

export default SignInPage;
