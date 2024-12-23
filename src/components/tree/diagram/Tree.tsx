// import { IS_SAFARI } from "./safari";

"use client";
import Tree from "react-d3-tree";
import Node from "./Node";
import "./family.css";

import EmptyNode from "./EmptyNode";
import { useRef } from "react";
import { Locate } from "lucide-react";
import { useCenteredTree } from "@/lib/tree";
import { usePathname, useSearchParams } from "next/navigation";
import { useSession } from "@/providers/SessionProvider";

export default function FamilyChart({ data }: { data: any }) {
  const {
    session: { user },
  } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const readOnly = searchParams.get("readOnly") || pathname === "/banshwali";
  const isFullTreePage = pathname === "/banshwali";

  // Centered Tree
  const userPlusButton = useRef<SVGGElement>(null);

  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
  }: any) => {
    const isUser = nodeDatum.id === user?.mynode;

    return (
      <g>
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
          <Node user={user} isUser={isUser} person={nodeDatum} />
        </foreignObject>
        <g ref={isUser ? userPlusButton : null} onClick={toggleNode}>
          {nodeDatum.children && nodeDatum.children.length > 0 && (
            <circle strokeWidth={1} cx={0} cy={10} r={10} fill="#fff" />
          )}
          {nodeDatum.children && nodeDatum.children.length > 0 && (
            <>
              {nodeDatum.__rd3t.collapsed ? (
                <text
                  y={11}
                  strokeWidth={1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                >
                  +
                </text>
              ) : (
                <text
                  y={11}
                  strokeWidth={1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                >
                  -
                </text>
              )}
            </>
          )}
        </g>
      </g>
    );
  };

  const nodeSize = { x: 170, y: 100 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -50,
    y: -28,
  };

  const stepPathFunc = (linkDatum: any, orientation: any) => {
    const { source, target } = linkDatum;
    const deltaY = target.y - source.y;
    return orientation === "horizontal"
      ? `M${source.y},${source.x} H${source.y + deltaY / 2} V${target.x} H${
          target.y
        }`
      : `M${source.x},${source.y} V${source.y + deltaY / 2} H${target.x} V${
          target.y
        }`;
  };

  const customPathClass = (linkDatum: any) => {
    const { source, target } = linkDatum;
    const isOwner =
      source.data.ownerId === user?.id && target.data.ownerId === user?.id;

    // DASHED LINK WHEN MERGING
    if (target.data.mergethis) {
      return "dashed-link normal-link";
    }

    if (isOwner) {
      if (target.data.gender === "FEMALE") return "own_cluster is_girl";
      return "own_cluster";
    }

    return "link__to-leaf";
  };

  // CENTER USER WHEN USER IS AWAY
  const handleCenterUser = () => {
    if (userPlusButton.current) {
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      userPlusButton.current.dispatchEvent(clickEvent);
    }
  };

  const { dimention, containerRef, translate } = useCenteredTree();

  return (
    <div>
      <div
        id="treeWrapper"
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
        className="fixed"
      >
        {(!readOnly || isFullTreePage) && (
          <div
            onClick={handleCenterUser}
            className="absolute cursor-pointer right-20 top-4"
          >
            <Locate size={20} />
          </div>
        )}

        {data && data.id ? (
          <Tree
            dimensions={dimention}
            collapsible={true}
            separation={{ siblings: 1, nonSiblings: 1 }}
            data={data}
            scaleExtent={{ max: 10, min: 0.3 }}
            pathFunc={stepPathFunc}
            pathClassFunc={customPathClass}
            nodeSize={nodeSize}
            translate={translate}
            orientation="vertical"
            enableLegacyTransitions
            renderCustomNodeElement={(rd3tProps: any) =>
              renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
            }
          />
        ) : (
          <div className="flex h-screen items-center justify-center">
            {readOnly ? null : <EmptyNode />}
          </div>
        )}
      </div>
    </div>
  );
}
