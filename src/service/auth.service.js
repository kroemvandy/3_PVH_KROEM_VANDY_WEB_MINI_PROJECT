import { baseUrl } from "@/utils/constants";

export const loginService = async (userInfo) => {
    const res = await fetch(`${baseUrl}/api/todo/v1/auth/login`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
        }

    });

    const data = await res.json();
    return data;
}


export const signUpService = async (userInfo) => {
    console.log("user info ", userInfo);
    // const res = await fetch(`${baseUrl}/api/todo/v1/auth/sign-up`, {
    //     method: 'POST',
    //     body: JSON.stringify(userInfo),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    // const data = await res.json();
    // console.log('user register', data);
    // return data;

    const res = await fetch(`${baseUrl}/api/todo/v1/auth/sign-up`, {
        method: 'POST',
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    const data = await res.json();
    return data;
}