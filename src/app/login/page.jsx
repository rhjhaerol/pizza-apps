"use client";
import Image from "next/image";
import {signIn} from "next-auth/react";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProcess, setLoginInProcess] = useState(false);

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    setLoginInProcess(true);
   
    await signIn('credentials', {email, password, callbackUrl: '/'});

    setLoginInProcess(false)
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          name={email}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={loginInProcess}
        />
        <input
          type="password"
          placeholder="password"
          name={password}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          disabled={loginInProcess}
        />
        <button type="submit" disabled={loginInProcess}>Login</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
