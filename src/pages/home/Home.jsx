import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Users from '../../dummyData'
import "./home.css"
import Rightbarm from "../../components/modifiedrightbar/Rightbarm";


export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbarm />
      </div>
    </>
  );
}