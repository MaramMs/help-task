import Search from "@/app/components/sharedComponet/search";
import AccordionCustom from "@/app/components/videos/accordioncustom";
import { Col, Row } from "react-bootstrap";

const VideoDetails = async ({ params }) => {  
  const { id } = params;
  // const res = await fetch(`https://api.example.com/videos/${id}`);
  // const video = await res.json();
  const videos =[
    {
      id:'1',
      imgUrl: '/images/video.png',
      des:`Vue (pronounced /vjuː/, like view) is a progressive framework for
              building user interfaces. Unlike other monolithic frameworks, Vue
              is designed from the ground up to be incrementally adoptable. The
              core library is focused on the view layer only, and is easy to
              pick up and integrate with other libraries or existing projects.
              On the other hand, Vue is also perfectly capable of powering
              sophisticated Single-Page Applications when used in combination
              with modern tooling and supporting libraries.`
    },
    {
      id:'2',
      imgUrl: null,
      des:`Vue (pronounced /vjuː/, like view) is a progressive framework for
              building user interfaces. Unlike other monolithic frameworks, Vue
              is designed from the ground up to be incrementally adoptable. The
              core library is focused on the view layer only, and is easy to
              pick up and integrate with other libraries or existing projects.
              On the other hand, Vue is also perfectly capable of powering
              sophisticated Single-Page Applications when used in combination
              with modern tooling and supporting libraries.`
    }
  ]
  const video = videos.find((v) => v.id === String(id).trim());

  return (
    <section>
      <Row className="flex-wrap">
        <Col sm={8} className="order-2 order-md-1 flex flex-col gap-[24px]">
          
            {
              video.imgUrl ? <img src={video.imgUrl} /> : (
                <div className="flex flex-col justify-center items-center md:h-[448px]">
                  <img src="/images/coming-soon.png"/>
                  <span className="text-[#1A1A1A] text-[24px]">
                  coming soon
                  </span>
                </div>
              )
            }
          
          <div className="flex flex-col gap-[16px]">
            <h4 className="text-[#000] text-[16px]">Video Summary</h4>
            <p className="text-[#1B1B1B99] text-[16px]">
         {video.des}
            </p>
          </div>
          <hr />

          <div className="flex flex-col gap-[16px]">
            <h4 className="text-[#000] text-[16px]">Video Chapters</h4>
            <ul className="flex flex-col gap-[8px]">
              <li className="text-[#1B1B1B99] text-[16px] flex gap-[8px] items-center">
                <span className="d-block w-[8px] h-[8px] rounded-full bg-[#1B1B1B99]"></span>
                Intro (0:00)
              </li>
              <li className="text-[#1B1B1B99] text-[16px] flex gap-[8px] items-center">
                <span className="d-block w-[8px] h-[8px] rounded-full bg-[#1B1B1B99]"></span>
                Choosing and editing site template (0:25)
              </li>
              <li className="text-[#1B1B1B99] text-[16px] flex gap-[8px] items-center">
                <span className="d-block w-[8px] h-[8px] rounded-full bg-[#1B1B1B99]"></span>
                Adding more pages (1:05)
              </li>
              <li className="text-[#1B1B1B99] text-[16px] flex gap-[8px] items-center">
                <span className="d-block w-[8px] h-[8px] rounded-full bg-[#1B1B1B99]"></span>
                Global site settings (1:43)
              </li>
            </ul>
          </div>
          <hr />
          <div className="flex flex-col gap-[16px]">
            <h4 className="text-[#000] text-[16px]">Was this video helpful?</h4>
            <div className="flex gap-[16px]">
              <button className="!border border-[#405189] text-[#405189] text-[12px] rounded-[8px] py-[8px] px-[16px]">
                yes
              </button>
              <button className="!border border-[#405189] text-[#405189] text-[12px] rounded-[8px] py-[8px] px-[16px]">
                No
              </button>
            </div>
          </div>
        </Col>
        <Col sm={4} className="order-1 order-md-2">
          <Search />
          <div className="mt-[24px]">
            <AccordionCustom />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default VideoDetails;
