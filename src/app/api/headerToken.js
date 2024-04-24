import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const headerToken = async () => {
    //get token from cookies 
    const session = await getServerSession(authOption);
    return{
        authorization: `Bearer ${session?.user?.token}` ,
        'Content-Type': 'application/json'
    };
};