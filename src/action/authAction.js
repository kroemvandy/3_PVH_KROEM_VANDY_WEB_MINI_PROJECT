'use server'
import { signUpService } from "@/service/auth.service";
import { redirect } from "next/navigation";

export const registerAction = async (userInfo) => {
    const newUserRegister = {
        firstname: userInfo.get("firstname"),
        lastname: userInfo.get("lastname"),
        gender: userInfo.get("gender"),
        email: userInfo.get("email"),
        password: userInfo.get("password"),
    };

    const userRegister = await signUpService(newUserRegister);

    redirect('/login')
}