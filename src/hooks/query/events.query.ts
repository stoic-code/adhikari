import { r } from "@/config/request";
import { useSession } from "@/providers/SessionProvider";
import { useQuery } from "@tanstack/react-query";

export const useGetEvents = () => {
  const {
    session: { accessToken: token },
  } = useSession();
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      return await r.get({
        endpoint: "/user/event",
        token,
      });
    },
  });
};
