import { verify } from "jsonwebtoken"
import { login } from "./login";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handler(req, res) {
    const { email, password, admin } = req.body;
    const result = await login(email, password, admin);
    if (!result.success) {
        return res.status(403).json({ success: result.success, message: result.message });
    }
    //issue JWT
    const token = sign({ user: result.user, admin: admin }, process.env.SECRET, { expiresIn: '300s' });
    const serialized = serialize("UserJWT", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 60,
    });
    res.setHeader('Set-Cookie', serialized);
    return res.status(200).json({ success: result.success, message: result.message + " and create JWT" });
}

export function verifyJWT(req) {
    const jwt = req.cookies.UserJWT;
    if (!jwt) {
        const notLoggedInError = new Error("User not logged in");
        notLoggedInError.name = "NotLoggedInError";
        throw notLoggedInError;
    }
    try {
        const decoded = verify(jwt, process.env.SECRET);
        return decoded;
    } catch (e) {
        const invalidTokenError = new Error("Token is invalid");
        invalidTokenError.name = "InvalidTokenError";
        throw invalidTokenError;
    }
}
