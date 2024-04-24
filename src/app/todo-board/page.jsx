import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

const TodoBoardPage = () => {
    return ( 
        <main>
             <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                    <SidebarComponent/>
                </div>
                <div className="col-span-9">
                    <NavbarComponent/>
                    <ListBoardComponentHeader/>
                </div>
            </div>
        </main>
     );
}
 
export default TodoBoardPage;