"use client";

import UserTab from "@/components/layout/UserTab";
import { UserProfile } from "@/components/UserProfile";

const page = () => {
    const { data: profileData, loading: profileLoading } = UserProfile();

    if (profileLoading) {
        return "Loading info user...";
    }

    if (!profileData) {
        return "Not an admin";
    }

    return (
        <section className="max-w-lg mx-auto mt-8">
            <UserTab isAdmin={true} />
            <form className="mt-8">
                <label>New Category Name</label>
                <input type="text" />
            </form>
        </section>
    );
};

export default page;
