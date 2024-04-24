import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import {getWorkspaceService} from "@/service/workspace.service";
import welcome from '../../../public/assets/images/welcome.jpg'
import Image from "next/image";

const TodoListPage= async () => {
    const todoListData = await getWorkspaceService();

    return (  
        <main>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                    <SidebarComponent/>
                </div>
                <div className="col-span-9">
                    <NavbarComponent/>

                    <div className="flex justify-center mt-32">
                    <Image src={welcome} width={350} height={350} alt={"welcome"}></Image>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default TodoListPage;