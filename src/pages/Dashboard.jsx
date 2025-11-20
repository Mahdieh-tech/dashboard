import Template from "../components/Template";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SalesChart from "../components/SalesChart";
import UserCard from "../components/UserCard";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import ChecksSection from "../components/ChecksSection";

export default function Dashboard() {
   return (
    <Template
      header={<Header />}
      sidebar={<Sidebar />}
      cards={<Card />}
      stats={<StatsCard />}
      chart={<SalesChart />}
      user={<UserCard role={"ادمین"} name={"مهدیه آقایی"} />}
      checks={<ChecksSection />}
    />
  );
}
