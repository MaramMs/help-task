import MainCards from "../components/Home/mainCards";
import ServicesCards from "../components/Home/servicesCards";
import Search from "../components/sharedComponet/search";
import "../styles/home.css";
export default function Home() {
  return (
    <section >

      <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[21.75px]">
        <h1 className="text-[22px] lg:text-[36px]">We are happy to Help you</h1>
        <Search />
      </div>
      <div className="mt-[40px]">
        <MainCards />
      </div>

      <div className=" w-[100%] mb-[100px]">
        <h5 className="service-title mb-[55px] mt-[60px]">
          We are happy to Help you
        </h5>
        <ServicesCards />
      </div>
    </section>
  );
}
