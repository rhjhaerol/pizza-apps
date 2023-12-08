"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserTab from "@/components/layout/UserTab";

const ProfilePage = () => {
    const session = useSession();
    console.log({ session });
    const { status } = session;

    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [profileFetch, setProfileFetch] = useState(false);

    useEffect(() => {
        if (status === "authenticated") {
            setUserName(session.data.user.name);
            fetch("/api/profile").then((response) =>
                response.json().then((data) => {
                    setPhone(data.phone);
                    setAddress(data.address);
                    setPostalcode(data.postalcode);
                    setCity(data.city);
                    setCountry(data.country);
                    setIsAdmin(data.admin);
                    setProfileFetch(true);
                })
            );
        }
    }, [session, status]);

    const handleProfileInUpdate = async (ev) => {
        ev.preventDefault();

        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch("/api/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: userName,
                    phone,
                    address,
                    postalcode,
                    city,
                    country,
                }),
            });
            if (response.ok) resolve();
            else reject();
        });

        toast.promise(savingPromise, {
            loading: "Saving...",
            success: "Profile saved!",
            error: "Error",
        });
    };

    const handleInputFile = async (ev) => {
        const files = ev.target.files;
        if (files?.length === 1) {
            const data = new FormData();
            data.set("file", files[0]);
            await fetch("/api/upload", {
                method: "POST",
                body: data,
            });
        }
    };

    if (status === "loading" || !profileFetch) {
        return (
            <div className="flex justify-center items-center  min-h-screen">
                <div className="loading flex justify-center items-center"></div>
            </div>
        );
    }

    if (status === "unauthenticated") {
        return redirect("/login");
    }

    const userImage = session.data.user?.image;

    return (
        <section className="mt-8">
            <UserTab isAdmin={isAdmin} />
            <div className="max-w-xl mx-auto">
                <div className="flex gap-4">
                    <div>
                        <div className="p-2 rounded-lg relative">
                            <Image
                                className="rounded-lg w-64 h-full mb-1"
                                src={userImage}
                                width={250}
                                height={250}
                                alt="avatar"
                            />
                            <label>
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={handleInputFile}
                                />
                                <p className="flex justify-center mx-auto border border-gray-400 rounded-lg font-medium p-2 -m-4 cursor-pointer w-3/4">
                                    Edit
                                </p>
                            </label>
                        </div>
                    </div>
                    <form className="grow" onSubmit={handleProfileInUpdate}>
                        <label>
                            User Name
                            <input
                                type="text"
                                placeholder="First and last name"
                                value={userName}
                                onChange={(ev) => setUserName(ev.target.value)}
                            />
                        </label>
                        <label>
                            Email
                            <input
                                type="email"
                                value={session.data.user.email}
                                disabled={true}
                            />
                        </label>
                        <label>
                            Phone
                            <input
                                type="tel"
                                placeholder="Phone"
                                value={phone}
                                onChange={(ev) => setPhone(ev.target.value)}
                            />
                        </label>
                        <label>
                            Street address
                            <input
                                type="text"
                                placeholder="Street address"
                                value={address}
                                onChange={(ev) => setAddress(ev.target.value)}
                            />
                        </label>
                        <div className="flex gap-4 pt-1">
                            <label>
                                Postal code
                                <input
                                    type="number"
                                    placeholder="Postal code"
                                    value={postalcode}
                                    onChange={(ev) =>
                                        setPostalcode(ev.target.value)
                                    }
                                />
                            </label>
                            <label>
                                City
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={(ev) => setCity(ev.target.value)}
                                />
                            </label>
                        </div>
                        <label>
                            Country
                            <input
                                type="text"
                                placeholder="Country"
                                value={country}
                                onChange={(ev) => setCountry(ev.target.value)}
                            />
                        </label>

                        <button type="submit" className="mt-4">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
