import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";


export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <SidebarComponent />
        </div>
        <div className="col-span-9">
          <div>
            <NavbarComponent />
          </div>

          <div className="mt-1 ">
            <ListBoardComponentHeader />

            <MonthlyStatisticsComponent />
          </div>
        </div>
      </div>
    </main>
  );
}
