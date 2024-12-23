import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import CommonHeading from "./CommonHeading";

const data = [
  {
    contributor_pic: "/avatar.jpg",
    contributor_name: "राम शर्मा",
    contributionOn: "२०२३-०१-१५",
    amount: "₹५,०००",
    purpose: "शिक्षा",
  },
  {
    contributor_pic: "/avatar.jpg",
    contributor_name: "सीता देवी",
    contributionOn: "२०२३-०२-२०",
    amount: "₹३,५००",
    purpose: "स्वास्थ्य",
  },
  {
    contributor_pic: "/avatar.jpg",
    contributor_name: "गोपाल खत्री",
    contributionOn: "२०२३-०३-२५",
    amount: "₹७,५००",
    purpose: "खेलकुद",
  },
  {
    contributor_pic: "/avatar.jpg",
    contributor_name: "माया गुरुङ",
    contributionOn: "२०२३-०४-१०",
    amount: "₹२,०००",
    purpose: "पर्यटन",
  },
  {
    contributor_pic: "/avatar.jpg",
    contributor_name: "सुरेश थापा",
    contributionOn: "२०२३-०५-१८",
    amount: "₹४,५००",
    purpose: "संस्कृति",
  },
  {
    contributor_pic: "/avatar.jpg",
    contributor_name: "कृष्णा आचार्य",
    contributionOn: "२०२३-०६-२२",
    amount: "₹६,०००",
    purpose: "विकास",
  },
  {
    contributor_pic: "/avatar.jpg",
    contributor_name: "राधा पाण्डे",
    contributionOn: "२०२३-०७-२९",
    amount: "₹३,०००",
    purpose: "कल्याण",
  },
  {
    contributor_pic: "/avatar.jpg",
    contributor_name: "धीरज लामिछाने",
    contributionOn: "२०२३-०८-३०",
    amount: "₹५,५००",
    purpose: "सामाजिक सेवा",
  },
];

export default function ContributorsList() {
  return (
    <div>
      {" "}
      <div className="   space-y-4">
        <CommonHeading
          title="Top Contributions"
          link_title="View All"
          link_src="/contributions"
        />

        {/* TABLE PART */}
        <div>
          <Table className="rounded-lg overflow-hidden">
            <TableHeader className="  rounded-lg bg-primary hover:bg-primary text-white">
              <TableRow className="  text-white  rounded-lg hover:bg-primary ">
                <TableHead className=" text-white">Contributor Name</TableHead>
                <TableHead className="text-white">Amount</TableHead>
                <TableHead className="text-white whitespace-nowrap">
                  Contribution On
                </TableHead>
                <TableHead className="text-center text-white">
                  Purpose
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className=" ">
              {data.map((invoice, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">
                    <div className=" flex items-center gap-2 whitespace-nowrap">
                      <img
                        alt="pic"
                        src={invoice.contributor_pic}
                        width={20}
                        height={20}
                        className="rounded-full h-8 w-8"
                      />
                      {invoice.contributor_name}
                    </div>
                  </TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.contributionOn}</TableCell>
                  <TableCell className="text-center">
                    {invoice.purpose}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* <img alt="pic" src={"/public/avatar.jpg"} width={20} height={20} /> */}
      </div>
    </div>
  );
}
