import { FC } from "react";
import { GroupItemProps } from "../../types";

const GroupItem: FC<GroupItemProps> = ({ item }) => {
  return <div>{item}</div>;
};

export default GroupItem;
