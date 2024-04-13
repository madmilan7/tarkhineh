import React from "react";

// Icons
import edit from "../assets/icons/edit-2.svg";
import trash from "../assets/icons/trash.svg";
//Function
import { toPersian } from "../utils/toPersian";
// Types
import { Address } from "../@types/assets/types";

interface AddressListProps {
  addresses: Address[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const AddressList: React.FC<AddressListProps> = ({
  addresses,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 px-6 py-3">
      {addresses.map((address, index) => (
        <div
          key={index}
          className="flex flex-col justify-between border border-gray_4 rounded-lg bg-gray_1 w-full lg:w-1/2 p-3 h-28"
        >
          <div className="flex items-start justify-between gap-3">
            <p className="text-gray_8 text-sm lg:text-base font-semibold">{address.address}</p>
            <div className="flex items-center gap-3">
              <img
                src={edit}
                alt="edit"
                onClick={() => onEdit(index)}
                className="cursor-pointer w-4 lg:w-6"
              />
              <img
                src={trash}
                alt="trash"
                onClick={() => onDelete(index)}
                className="cursor-pointer w-4 lg:w-6"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray_7 text-sm lg:text-base">{address.addressTitle}</p>
            <p className="text-gray_7 text-sm lg:text-base">{toPersian(+address.phoneNumber)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
