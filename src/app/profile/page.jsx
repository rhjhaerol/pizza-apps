"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const session = useSession();
  console.log(session);
  const { status } = session;

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data.user?.image;

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <div>
            <div className="p-2 rounded-lg relative">
              <Image
                className="rounded-lg w-full h-full mb-1"
                src={userImage}
                width={250}
                height={250}
                alt="avatar"
              />
              <button className="button">Edit</button>
            </div>
          </div>
          <div className="grow">
            <input type="text" placeholder="First and last name" />
            <input type="email" value={session.data.user.email} disabled={true} />
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfilePage;
