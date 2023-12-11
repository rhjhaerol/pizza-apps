import { model, models, Schema } from "mongoose";

const UserInfoSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        phone: { type: String },
        address: { type: String },
        postalcode: { type: String },
        city: { type: String },
        country: { type: String },
        admin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export const UserInfo = models?.UserInfo || model("UserInfo", UserInfoSchema);
