"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserTab = (isAdmin) => {
    const path = usePathname();

    return (
        <div className="tabs flex gap-2 justify-center mb-8">
            <Link
                className={path == "/profile" ? "active" : ""}
                href={"/profile"}
            >
                Profile
            </Link>
            {isAdmin && (
                <>
                    <Link
                        className={path == "/categories" ? "active" : ""}
                        href={"/categories"}
                    >
                        Categories
                    </Link>
                    <Link
                        className={path == "/menu-items" ? "active" : ""}
                        href={"/manu-items"}
                    >
                        Menu Items
                    </Link>
                    <Link
                        className={path == "/users" ? "active" : ""}
                        href={"/users"}
                    >
                        User
                    </Link>
                </>
            )}
        </div>
    );
};

export default UserTab;
