import { SingleNotification } from "./SingleNotification";
import { CardHeader, CardContent } from "../ui/card";

export const NotificationList = () => {
  return (
    <div className=" rounded-md">
      <CardHeader className="py-2">
        <div className="flex justify-between">
          <h1 className="font-semibold">Notifications</h1>
          <span className="text-sm underline">Read All</span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <SingleNotification active />
        <SingleNotification active />
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
      </CardContent>
    </div>
  );
};
