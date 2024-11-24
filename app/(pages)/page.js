import MainCards from "../components/Home/mainCards";
import Search from "../components/Home/search";
import ServicesCards from "../components/Home/servicesCards";
import "../styles/home.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center   mt-[40px]">
      <div>
        <h1 className="mainTitle">We are happy to Help you</h1>
        <Search />
      </div>
      <div className="mt-[40px]">
        <MainCards />
      </div>

      <div className="container w-[100%] mb-[100px]">
        <h5 className="service-title mb-[55px] mt-[60px]">
          We are happy to Help you
        </h5>
        <ServicesCards />
      </div>
    </main>
  );
}
