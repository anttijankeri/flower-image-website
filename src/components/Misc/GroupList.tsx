import { FC } from "react";
import { GroupListProps } from "../../types";
import GroupItem from "./GroupItem";

const GroupList: FC<GroupListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <GroupItem item={item} />;
      })}
    </div>
  );
};

export default GroupList;
