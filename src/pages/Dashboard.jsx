import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SalesChart from "../components/SalesChart";
import UserCard from "../components/UserCard";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import CheckSection from "../components/ChecksSection";


export default function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <SalesChart />
      <UserCard />
      <Card />
      <StatsCard />
      <CheckSection />
    </div>
  );
}
