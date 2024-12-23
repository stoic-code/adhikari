import Link from "next/link";
import { Minimize, Maximize } from "lucide-react";
import { usePathname } from "next/navigation";
import { Network } from "lucide-react";

const Tools = ({
  isFullscreen,
  toggleFullscreen,
  textTreeRoute,
}: {
  isFullscreen: boolean;
  textTreeRoute?: string;
  toggleFullscreen: () => void;
}) => {
  const pathname = usePathname();
  const isChartpath = pathname === "/family" || "/banshwali";

  return (
    <>
      <Link
        href={
          isChartpath && textTreeRoute
            ? textTreeRoute
            : isChartpath && !textTreeRoute
              ? "/family/text"
              : "/family"
        }
        title="Text Version Family Tree"
        className="my-auto text-sm"
      >
        {!isChartpath ? <Network size={20} /> : "TXT"}
      </Link>
      <button onClick={toggleFullscreen}>
        {isFullscreen ? (
          <Minimize
            size={20}
            className="transition-all duration-200 hover:scale-125"
          />
        ) : (
          <Maximize
            size={20}
            className="transition-all duration-200 hover:scale-125"
          />
        )}
      </button>
    </>
  );
};

export default Tools;
