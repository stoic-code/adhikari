import { cn } from "@/lib/utils";

export const SpouseCircle = ({
  spouse,
  isMale,
}: {
  spouse: any;
  isMale: boolean;
}) => {
  const isAlive = spouse.status === "ALIVE";
  return (
    <div
      title={`${spouse.firstName} ${spouse.lastName}`}
      style={{
        backgroundColor: "white",
        backgroundImage: `url(${spouse.imgurl ? spouse.imgurl : isMale ? "/female.webp" : "/male.webp"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        // transform: `translateX(${translate}px)`,
        border: `2px solid ${isAlive ? "green" : "gray"}`,
        // zIndex: zIndex,
      }}
    >
      {spouse.status === "DEAD" && (
        <img src="/garland.webp" className="mt-4 w-[50px]" />
      )}
    </div>
  );
};

export const MoreWifeCircle = ({ moreWife }: { moreWife: number }) => {
  return <div className="mt-3 text-black">+{moreWife}</div>;
};

export const CircleImage = ({ person }: { person: any }) => {
  const isMale = person.gender === "MALE";
  const isDead = person.status === "DEAD";
  const isMerging = person.mergethis;

  const shouldAddMargin =
    (person.wives && person.wives.length > 0) || person.husband;
  return (
    <>
      <img
        style={{
          border: `2px solid ${
            !isMale && !person.death
              ? "pink"
              : isMale && !isDead
                ? "green"
                : "gray"
          }`,
          borderStyle: person.status === "contact_less" ? "dotted" : "solid",
          borderSpacing: "10px",
          marginLeft: shouldAddMargin ? "" : "25px",
        }}
        className="h-[50px] w-[50px] rounded-full object-cover"
        src={
          person.imgurl ? person.imgurl : isMale ? "/male.webp" : "/female.webp"
        }
        alt=""
      />
      {isDead && (
        <img
          src="/garland.webp"
          className={cn("-mt-8  w-[50px]", !shouldAddMargin && "ml-6")}
        />
      )}
    </>
  );
};
