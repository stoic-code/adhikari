"use client";
import ContributionDialog from "@/components/contributions/ContributionDialog";
import EventCard from "@/components/contributions/EventCard";
import { Button } from "@/components/ui/button";
import { useGetEvents } from "@/hooks/query/events.query";
import { Calendar, Clock, MapPin, PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const filteredData = [
  {
    id: 1,
    imgurl: "/dashboard/temple7.jpg",
    name: "भवन निर्माण",
    organizedBy: "गोदार थापा सेवा समाज दमक",
    description:
      "संगठनले निर्माण गर्ने घरलाई सम्बन्धित समुदायको लाभका लागि एक महत्वपूर्ण पहल हो। यो घर निर्माणको प्रक्रियामा स्थानीय समुदायको सहयोग र सहभागिता हो, जसले समुदायको आत्मसाथीकरण र समृद्धिको नीतिका बाट यथार्थ फाइदा उठाउँछ। यो घर संगठनको गतिविधिहरूको ठेकेदार रूपमा कार्यरत गर्ने बजारीकरणको परिणाम हो,",
  },
  {
    id: 2,
    imgurl: "/dashboard/temple7.jpg",
    name: "भवन निर्माण",
    organizedBy: "गोदार थापा सेवा समाज दमक",

    description:
      "संगठनले निर्माण गर्ने घरलाई सम्बन्धित समुदायको लाभका लागि एक महत्वपूर्ण पहल हो। यो घर निर्माणको प्रक्रियामा स्थानीय समुदायको सहयोग र सहभागिता हो, जसले समुदायको आत्मसाथीकरण र समृद्धिको नीतिका बाट यथार्थ फाइदा उठाउँछ। यो घर संगठनको गतिविधिहरूको ठेकेदार रूपमा कार्यरत गर्ने बजारीकरणको परिणाम हो,",
  },
  {
    id: 3,
    imgurl: "/dashboard/temple7.jpg",
    organizedBy: "गोदार थापा सेवा समाज दमक",

    name: "भवन निर्माण",
    description:
      "संगठनले निर्माण गर्ने घरलाई सम्बन्धित समुदायको लाभका लागि एक महत्वपूर्ण पहल हो। यो घर निर्माणको प्रक्रियामा स्थानीय समुदायको सहयोग र सहभागिता हो, जसले समुदायको आत्मसाथीकरण र समृद्धिको नीतिका बाट यथार्थ फाइदा उठाउँछ। यो घर संगठनको गतिविधिहरूको ठेकेदार रूपमा कार्यरत गर्ने बजारीकरणको परिणाम हो,",
  },
  {
    id: 4,
    imgurl: "/dashboard/temple7.jpg",
    organizedBy: "गोदार थापा सेवा समाज दमक",

    name: "भवन निर्माण",
    description:
      "संगठनले निर्माण गर्ने घरलाई सम्बन्धित समुदायको लाभका लागि एक महत्वपूर्ण पहल हो। यो घर निर्माणको प्रक्रियामा स्थानीय समुदायको सहयोग र सहभागिता हो, जसले समुदायको आत्मसाथीकरण र समृद्धिको नीतिका बाट यथार्थ फाइदा उठाउँछ। यो घर संगठनको गतिविधिहरूको ठेकेदार रूपमा कार्यरत गर्ने बजारीकरणको परिणाम हो,",
  },
  {
    id: 5,
    imgurl: "/dashboard/temple7.jpg",
    organizedBy: "गोदार थापा सेवा समाज दमक",

    name: "भवन निर्माण",
    description:
      "संगठनले निर्माण गर्ने घरलाई सम्बन्धित समुदायको लाभका लागि एक महत्वपूर्ण पहल हो। यो घर निर्माणको प्रक्रियामा स्थानीय समुदायको सहयोग र सहभागिता हो, जसले समुदायको आत्मसाथीकरण र समृद्धिको नीतिका बाट यथार्थ फाइदा उठाउँछ। यो घर संगठनको गतिविधिहरूको ठेकेदार रूपमा कार्यरत गर्ने बजारीकरणको परिणाम हो,",
  },
];

const mockdata = {
  id: 4,
  imgurl: "/dashboard/temple7.jpg",
  organizedBy: "गोदार थापा सेवा समाज दमक",

  name: "भवन निर्माण",
  description:
    "संगठनले निर्माण गर्ने घरलाई सम्बन्धित समुदायको लाभका लागि एक महत्वपूर्ण पहल हो। यो घर निर्माणको प्रक्रियामा स्थानीय समुदायको सहयोग र सहभागिता हो, जसले समुदायको आत्मसाथीकरण र समृद्धिको नीतिका बाट यथार्थ फाइदा उठाउँछ। यो घर संगठनको गतिविधिहरूको ठेकेदार रूपमा कार्यरत गर्ने बजारीकरणको परिणाम हो,",
};
export default function page() {
  const { data: active_events, isLoading } = useGetEvents();
  console.log("events", active_events);
  return (
    <div className=" 2xl:container sm:px-4 py-8">
      <div className=" flex lg:flex-row flex-col gap-4">
        {/* SINGLE EVENTS DETAIL */}
        <div className="  flex-1 space-y-4 bg-[#ECF5FB] p-4 md:p-8">
          {/* TITLE AND ORGANIZER */}
          <div className=" space-y-2">
            <h2 className=" text-xl sm:text-4xl font-semibold">
              {mockdata.name}
            </h2>
            <div className=" flex items-center gap-1 font-medium  text-xs sm:text-base">
              <span>Organized By:</span>
              <p className="">{mockdata.organizedBy}</p>
            </div>
            {/* DATE LOCATION TIME */}
            <div className=" flex items-center gap-4 sm:gap-10 whitespace-nowrap">
              <span className=" flex  items-center gap-3 text-xs sm:text-sm">
                <Calendar size={16} /> 2080-12-20
              </span>
              <span className=" flex  items-center gap-3 text-xs sm:text-sm">
                <Clock size={16} /> 10:15
              </span>
              <span className=" flex  items-center gap-3 text-xs sm:text-sm">
                <MapPin size={16} />
                दमक, झापा
              </span>
            </div>
          </div>

          <div>
            <Image
              src={mockdata.imgurl}
              alt="temple"
              height={400}
              width={400}
              className=" w-full h-[50vh] object-cover rounded-lg"
            />
          </div>
          {/* DESCRIPTION */}
          <p>
            संगठनले निर्माण गर्ने घरलाई सम्बन्धित समुदायको लाभका लागि एक
            महत्वपूर्ण पहल हो। यो घर निर्माणको प्रक्रियामा स्थानीय समुदायको
            सहयोग र सहभागिता हो, जसले समुदायको आत्मसाथीकरण र समृद्धिको नीतिका
            बाट यथार्थ फाइदा उठाउँछ। यो घर संगठनको गतिविधिहरूको ठेकेदार रूपमा
            कार्यरत गर्ने बजारीकरणको परिणाम हो, जुन स्थानीय शिल्पकलाको संरक्षण र
            विकासमा मद्दत गर्दछ। यो घरको निर्माण एक संवेदनशील र दक्ष टोलीद्वारा
            गरिएको हुने हो। निर्माणको प्रक्रियामा, स्थानीय शिल्पकलाको समेत
            संरक्षण र प्रोत्साहन गरिएको छ र यसले स्थानीय अर्थतन्त्र र समृद्धिलाई
            प्रोत्साहन गर्दछ। यो घरको निर्माणले स्थानीय जनसंख्या र अर्थतन्त्रमा
            निर्दिष्ट उच्चायस्क उन्नति गर्दछ, जुनले समुदायको सामूहिक स्थिति र
            समृद्धि सुनिश्चित गर्दछ।संगठनले निर्माण गर्ने घरलाई सम्बन्धित
            समुदायको लाभका लागि एक महत्वपूर्ण पहल हो। यो घर निर्माणको
            प्रक्रियामा स्थानीय समुदायको सहयोग र सहभागिता हो, जसले समुदायको
            आत्मसाथीकरण र समृद्धिको नीतिका बाट यथार्थ फाइदा उठाउँछ। यो घर
            संगठनको गतिविधिहरूको ठेकेदार रूपमा कार्यरत गर्ने बजारीकरणको परिणाम
            हो, जुन स्थानीय शिल्पकलाको संरक्षण र विकासमा मद्दत गर्दछ। यो घरको
            निर्माण एक संवेदनशील र दक्ष टोलीद्वारा गरिएको हुने हो। निर्माणको
            प्रक्रियामा, स्थानीय शिल्पकलाको समेत संरक्षण र प्रोत्साहन गरिएको छ र
            यसले स्थानीय अर्थतन्त्र र समृद्धिलाई प्रोत्साहन गर्दछ। यो घरको
            निर्माणले स्थानीय जनसंख्या र अर्थतन्त्रमा निर्दिष्ट उच्चायस्क उन्नति
            गर्दछ, जुनले समुदायको सामूहिक स्थिति र समृद्धि सुनिश्चित गर्दछ।
            प्रोत्साहन गर्दछ। यो घरको निर्माणले स्थानीय जनसंख्या र अर्थतन्त्रमा
            निर्दिष्ट उच्चायस्क उन्नति गर्दछ, जुनले समुदायको सामूहिक स्थिति र
            समृद्धि सुनिश्चित गर्दछ।संगठनले निर्माण गर्ने घरलाई सम्बन्धित
            समुदायको लाभका लागि एक महत्वपूर्ण पहल हो। यो घर निर्माणको
            प्रक्रियामा स्थानीय समुदायको सहयोग र सहभागिता हो, जसले समुदायको
            आत्मसाथीकरण र समृद्धिको नीतिका बाट यथार्थ फाइदा उठाउँछ। यो घर
            संगठनको गतिविधिहरूको ठेकेदार रूपमा कार्यरत गर्ने बजारीकरणको परिणाम
            हो, जुन स्थानीय शिल्पकलाको संरक्षण र विकासमा मद्दत गर्दछ। यो घरको
            निर्माण एक संवेदनशील र दक्ष टोलीद्वारा गरिएको हुने हो। निर्माणको
            प्रक्रियामा, स्थानीय शिल्पकलाको समेत संरक्षण र प्रोत्साहन गरिएको छ र
            यसले स्थानीय अर्थतन्त्र र समृद्धिलाई प्रोत्साहन गर्दछ। यो घरको
            निर्माणले स्थानीय जनसंख्या र अर्थतन्त्रमा निर्दिष्ट उच्चायस्क उन्नति
            गर्दछ, जुनले समुदायको सामूहिक स्थिति र समृद्धि सुनिश्चित गर्दछ।
          </p>
          <div className=" grid place-items-end">
            {/* <Button>Contribute</Button> */}
            <ContributionDialog
              accNo="0000000000"
              accName="Godar Thapa Donation Account"
              bankName="Nabil Bank"
              imgurl="/contributions/qr.png"
            >
              <Button className="flex gap-2">
                <PlusCircleIcon /> Contribute
              </Button>
            </ContributionDialog>
          </div>
        </div>

        {/* EVETNS */}
        <div className=" space-y-4 pt-8 p-2">
          <h2 className=" text-2xl font-semibold">More Events</h2>
          <div className="flex max-w-[98vw] flex-row  pb-4 lg:flex-col gap-4 lg:max-h-[100vh] overflow-auto">
            {active_events &&
              active_events?.map((event: any, idx: number) => (
                <div key={idx} className=" flex-shrink-0 w-[280px]">
                  <EventCard
                    id={event._id}
                    imgurl={event.image.secure_url}
                    name={event.title}
                    desc={event.description}
                    organizedBy={event.organizer}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
