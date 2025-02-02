import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Import BsPlus icon
import GreenCheckmark from "./GreenCheckmark"; // Import GreenCheckmark component

export default function ModuleControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      <GreenCheckmark />
      <BsPlus className="fs-4 ms-3" />
      <IoEllipsisVertical className="fs-4 ms-3" />{" "}
    </div>
  );
}
