import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";


export const getWorkspaceService = async () => {
    const header = await headerToken();
    try {
        const res = await fetch(`${baseUrl}/api/todo/v1/workspaces`, {
            headers: {header}
        });
    
        const data = await res.json();
        console.log('res data in service', data);
        return data;
    }catch(e){
        console.log('e', e);
    }
   
}