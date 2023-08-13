// import React from "react";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
/* eslint-disable */

export default function Blog() {
  return (
    <>
      <div className="grid md:grid-cols-sidebar border-solid ml-[15px] w-[1162px]">
        <div className="border-none bg-[#FEF0DC]">
          <a
            className="flex items-center py-2 px-8 mx-4 bg-[#A95F44] text-black border-solid border-2 border-black rounded-md "
            href="#"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
              />
            </svg>

            <span className="mx-4 font-medium">Blogs</span>
          </a>
          <div className="flex place-content-evenly mt-10">
            <div className="text-black font-bold text-lg">Title: *</div>
            <div className="text-white">
              <textarea
                placeholder="Title"
                className="textarea w-full bg-[#FEF0DC] text-black border-2 border-black"
                rows={"1"}
                cols={"129"}
              ></textarea>
            </div>
          </div>
          <div className="flex place-content-evenly mt-10">
            <div className="text-black font-bold text-lg">Description: *</div>
            <div className="text-white">
              <textarea
                placeholder="Description"
                className="textarea w-full bg-[#FEF0DC] text-black border-2 border-black"
                rows={"5"}
                cols={"133"}
              ></textarea>
            </div>
          </div>
          <div className="flex place-content-evenly mt-10">
            <div className="image_detail flex">
              <div className="text-black font-bold text-lg">Image: *</div>
              <div className="text-white ml-[12px]">
                {/* <textarea
                  placeholder=""
                  className="textarea w-full bg-[#FEF0DC] text-black border-2 border-black"
                  rows={"7"}
                  cols={"20"}
                ></textarea> */}
                <div className="icon border-solid border-2 border-black mb-5 rounded-md">
                  <div className="svg_icon flex justify-center p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      fill="currentColor"
                      class="bi bi-camera"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
                        fill="#000000"
                      ></path>{" "}
                    </svg>
                  </div>
                  <div className="icon-text text-black mt-2 mb-12 pb-2 px-5">
                    <div className="text1 flex justify-center">Add a Photo</div>
                    <div className="text2 flex justify-center">Max. File size 100MB</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="btn bg-[#A95F44] hover:bg-[#A95F44] text-white justify-between">
                    Upload
                  </button>
                </div>
              </div>
            </div>
            <div className="writer_detail flex">
              <div className="text-black font-bold text-lg">Writer: *</div>
              <div className="text-white ml-[12px]">
                <textarea
                  className="textarea w-full bg-[#FEF0DC] text-black border-2 border-black"
                  rows={"1"}
                  cols={"60"}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="last_btn flex mt-[60px] mb-[4px] justify-center">
            <button className="btn bg-[#A95F44] hover:bg-[#A95F44] text-white justify-between">
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
