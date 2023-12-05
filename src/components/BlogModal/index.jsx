import React from "react";
import { Dialog } from "primereact/dialog";
export const BlogModal = ({
  visible,
  handleClose,
  title,
  content,
  date,
  contentList,
}) => {
  return (
    <Dialog
      blockScroll={true}
      maskStyle={{ backdropFilter: "blur(4px)" }}
      draggable={false}
      position="center"
      className="bg-white no-scrollbar rounded-xl shadow-md shadow-blue-300 bg-opacity-95 border border-blue-400 px-6 py-4 max-w-[300px] md:max-w-lg max-h-[550px] w-full"
      visible={visible}
      onHide={handleClose}
    >
      <div className="px-2">
        <p className="font-semibold text-xl text-[#034d94]">{title}</p>
        <p className="mt-3 text-gray-500 text-base">{content}</p>
        <div className="mt-3">{contentList}</div>
      </div>
    </Dialog>
  );
};
