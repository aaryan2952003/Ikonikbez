// import { Providers } from "../GlobalRedux/provider";
// import { Inter } from "next/font/google";
// import Navbar from "../components/Navbar/page";
// import SideBar from "../components/SideBar/page";
// const inter = Inter({ subsets: ["latin"] });
/* eslint-disable */
import React from 'react';
export default function Dashboard() {
  return (
    <>
          <div className="grid md:grid-cols-sidebar w-auto border-solid ml-[15px]">
            <div className="border-none bg-[#FEF0DC]">

              <a className="flex items-center py-2 px-8 mx-4 bg-[#A95F44] text-black border-solid border-2 border-black rounded-md " href="#">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" />
                </svg>

                <span className="mx-4 font-medium">Dashboard</span>
              </a>
              <div className="flex place-content-evenly mt-10">
                <div className="card w-96 bg-base-100 shadow-xl ">
                  <div className="card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black">
                    <h2 className="card-title justify-between">Total Orders <a role="button" className="svg-icon svg-icon-primary svg-icon-2x place-items-end"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" fill="none"   >
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="#000000" cx="12" cy="5" r="2" />
                        <circle fill="#000000" cx="12" cy="12" r="2" />
                        <circle fill="#000000" cx="12" cy="19" r="2" />
                      </g>
                    </svg></a></h2>
                    <div className="flex justify-between mt-2">
                      <div className="flex">
                        <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none"    fill="none"   >
                            <rect x="0" y="0" width="24" height="24" />
                            <path d="M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                            <path d="M6.84712709,9 L17.1528729,9 C17.6417121,9 18.0589022,9.35341304 18.1392668,9.83560101 L19.611867,18.671202 C19.7934571,19.7607427 19.0574178,20.7911977 17.9678771,20.9727878 C17.8592143,20.9908983 17.7492409,21 17.6390792,21 L6.36092084,21 C5.25635134,21 4.36092084,20.1045695 4.36092084,19 C4.36092084,18.8898383 4.37002252,18.7798649 4.388133,18.671202 L5.86073316,9.83560101 C5.94109783,9.35341304 6.35828794,9 6.84712709,9 Z" fill="#000000" />
                          </g>
                        </svg></span>
                        <p>$126.500</p>
                      </div>
                      <div className="percentage flex">

                        <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none"    fill="none"   >
                            <polygon points="0 0 24 0 24 24 0 24" />
                            <rect fill="#000000" opacity="0.3" x="11" y="5" width="2" height="14" rx="1" />
                            <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fillRule="nonzero" />
                          </g>
                        </svg></span>
                        <p>34.7%</p>
                      </div>

                    </div>

                    <div className="card-actions justify-end mt-2">
                      <button className="">Compare To jan 2022</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ">
                  <div className="card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black">
                    <h2 className="card-title justify-between">Total Orders <a role="button" className="svg-icon svg-icon-primary svg-icon-2x place-items-end"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none"    fill="none"   >
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="#000000" cx="12" cy="5" r="2" />
                        <circle fill="#000000" cx="12" cy="12" r="2" />
                        <circle fill="#000000" cx="12" cy="19" r="2" />
                      </g>
                    </svg></a></h2>
                    <div className="flex justify-between mt-2">
                      <div className="flex">
                        <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none"    fill="none"   >
                            <rect x="0" y="0" width="24" height="24" />
                            <path d="M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                            <path d="M6.84712709,9 L17.1528729,9 C17.6417121,9 18.0589022,9.35341304 18.1392668,9.83560101 L19.611867,18.671202 C19.7934571,19.7607427 19.0574178,20.7911977 17.9678771,20.9727878 C17.8592143,20.9908983 17.7492409,21 17.6390792,21 L6.36092084,21 C5.25635134,21 4.36092084,20.1045695 4.36092084,19 C4.36092084,18.8898383 4.37002252,18.7798649 4.388133,18.671202 L5.86073316,9.83560101 C5.94109783,9.35341304 6.35828794,9 6.84712709,9 Z" fill="#000000" />
                          </g>
                        </svg></span>
                        <p>$126.500</p>
                      </div>
                      <div className="percentage flex">

                        <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none"    fill="none"   >
                            <polygon points="0 0 24 0 24 24 0 24" />
                            <rect fill="#000000" opacity="0.3" x="11" y="5" width="2" height="14" rx="1" />
                            <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fillRule="nonzero" />
                          </g>
                        </svg></span>
                        <p>34.7%</p>
                      </div>

                    </div>

                    <div className="card-actions justify-end mt-2">
                      <button className="">Compare To jan 2022</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ">
                  <div className="card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black">
                    <h2 className="card-title justify-between">Total Orders <a role="button" className="svg-icon svg-icon-primary svg-icon-2x place-items-end"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none"    fill="none"   >
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="#000000" cx="12" cy="5" r="2" />
                        <circle fill="#000000" cx="12" cy="12" r="2" />
                        <circle fill="#000000" cx="12" cy="19" r="2" />
                      </g>
                    </svg></a></h2>
                    <div className="flex justify-between mt-2">
                      <div className="flex">
                        <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none"    fill="none"   >
                            <rect x="0" y="0" width="24" height="24" />
                            <path d="M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                            <path d="M6.84712709,9 L17.1528729,9 C17.6417121,9 18.0589022,9.35341304 18.1392668,9.83560101 L19.611867,18.671202 C19.7934571,19.7607427 19.0574178,20.7911977 17.9678771,20.9727878 C17.8592143,20.9908983 17.7492409,21 17.6390792,21 L6.36092084,21 C5.25635134,21 4.36092084,20.1045695 4.36092084,19 C4.36092084,18.8898383 4.37002252,18.7798649 4.388133,18.671202 L5.86073316,9.83560101 C5.94109783,9.35341304 6.35828794,9 6.84712709,9 Z" fill="#000000" />
                          </g>
                        </svg></span>
                        <p>$126.500</p>
                      </div>
                      <div className="percentage flex">

                        <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none"    fill="none"   >
                            <polygon points="0 0 24 0 24 24 0 24" />
                            <rect fill="#000000" opacity="0.3" x="11" y="5" width="2" height="14" rx="1" />
                            <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fillRule="nonzero" />
                          </g>
                        </svg></span>
                        <p>34.7%</p>
                      </div>

                    </div>

                    <div className="card-actions justify-end mt-2">
                      <button className="">Compare To jan 2022</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex place-content-evenly mt-10">
                <div className="card w-96 bg-base-100 shadow-xl ">
                  <div className="card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black">
                    <h2 className="card-title justify-between">Total Orders <a role="button" className="svg-icon svg-icon-primary svg-icon-2x place-items-end"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none"    fill="none"   >
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="#000000" cx="12" cy="5" r="2" />
                        <circle fill="#000000" cx="12" cy="12" r="2" />
                        <circle fill="#000000" cx="12" cy="19" r="2" />
                      </g>
                    </svg></a></h2>
                    <div className="flex justify-between mt-2">
                      <div className="flex">
                        <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none"    fill="none"   >
                            <rect x="0" y="0" width="24" height="24" />
                            <path d="M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                            <path d="M6.84712709,9 L17.1528729,9 C17.6417121,9 18.0589022,9.35341304 18.1392668,9.83560101 L19.611867,18.671202 C19.7934571,19.7607427 19.0574178,20.7911977 17.9678771,20.9727878 C17.8592143,20.9908983 17.7492409,21 17.6390792,21 L6.36092084,21 C5.25635134,21 4.36092084,20.1045695 4.36092084,19 C4.36092084,18.8898383 4.37002252,18.7798649 4.388133,18.671202 L5.86073316,9.83560101 C5.94109783,9.35341304 6.35828794,9 6.84712709,9 Z" fill="#000000" />
                          </g>
                        </svg></span>
                        <p>$126.500</p>
                      </div>
                      <div className="percentage flex">

                        <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none"    fill="none"   >
                            <polygon points="0 0 24 0 24 24 0 24" />
                            <rect fill="#000000" opacity="0.3" x="11" y="5" width="2" height="14" rx="1" />
                            <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fillRule="nonzero" />
                          </g>
                        </svg></span>
                        <p>34.7%</p>
                      </div>

                    </div>

                    <div className="card-actions justify-end mt-2">
                      <button className="">Compare To jan 2022</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ">
                  <div className="card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black">
                    <h2 className="card-title justify-between">Total Orders <a role="button" className="svg-icon svg-icon-primary svg-icon-2x place-items-end"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none"    fill="none"   >
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="#000000" cx="12" cy="5" r="2" />
                        <circle fill="#000000" cx="12" cy="12" r="2" />
                        <circle fill="#000000" cx="12" cy="19" r="2" />
                      </g>
                    </svg></a></h2>
                    <div className="flex justify-between mt-2">
                      <div className="flex">
                        <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none"    fill="none"   >
                            <rect x="0" y="0" width="24" height="24" />
                            <path d="M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                            <path d="M6.84712709,9 L17.1528729,9 C17.6417121,9 18.0589022,9.35341304 18.1392668,9.83560101 L19.611867,18.671202 C19.7934571,19.7607427 19.0574178,20.7911977 17.9678771,20.9727878 C17.8592143,20.9908983 17.7492409,21 17.6390792,21 L6.36092084,21 C5.25635134,21 4.36092084,20.1045695 4.36092084,19 C4.36092084,18.8898383 4.37002252,18.7798649 4.388133,18.671202 L5.86073316,9.83560101 C5.94109783,9.35341304 6.35828794,9 6.84712709,9 Z" fill="#000000" />
                          </g>
                        </svg></span>
                        <p>$126.500</p>
                      </div>
                      <div className="percentage flex">

                        <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none"    fill="none"   >
                            <polygon points="0 0 24 0 24 24 0 24" />
                            <rect fill="#000000" opacity="0.3" x="11" y="5" width="2" height="14" rx="1" />
                            <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fillRule="nonzero" />
                          </g>
                        </svg></span>
                        <p>34.7%</p>
                      </div>

                    </div>

                    <div className="card-actions justify-end mt-2">
                      <button className="">Compare To jan 2022</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black">
                    <h2 className="card-title justify-between underline underline-offset-8">Best Seller<a role="button" className="svg-icon svg-icon-primary svg-icon-2x place-items-end"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none"    fill="none"   >
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="#000000" cx="12" cy="5" r="2" />
                        <circle fill="#000000" cx="12" cy="12" r="2" />
                        <circle fill="#000000" cx="12" cy="19" r="2" />
                      </g>
                    </svg></a></h2>
                    <div className="mt-2">
                    <div className="element1 flex justify-between py-2">
                      <div className="w-10">
                        <img className="rounded-md" src="https://images.meesho.com/images/products/89643931/dd1rx_512.webp" />
                      </div>
                      <div className="details">

                        <p>Beige Festive Emb..
                        </p>
                        <p>$126.500</p>
                      </div>
                      <div className="details">

                        <p>$126.50
                        </p>
                        <p>999 sales</p>
                      </div>
                    </div>
                    <div className="element2 flex justify-between py-2">
                      <div className="w-10">
                        <img className="rounded-md" src="https://images.meesho.com/images/products/89643931/dd1rx_512.webp" />
                      </div>
                      <div className="details">

                        <p>Beige Festive Emb..
                        </p>
                        <p>$126.500</p>
                      </div>
                      <div className="details">

                        <p>$126.50
                        </p>
                        <p>999 sales</p>
                      </div>
                    </div>
                    <div className="element3 flex justify-between py-2">
                      <div className="w-10">
                        <img className="rounded-md" src="https://images.meesho.com/images/products/89643931/dd1rx_512.webp" />
                      </div>
                      <div className="details">

                        <p>Beige Festive Emb..
                        </p>
                        <p>$126.500</p>
                      </div>
                      <div className="details">

                        <p>$126.50
                        </p>
                        <p>999 sales</p>
                      </div>
                    </div>
                    </div>
                    <button className="btn btn-neutral w-20">Report</button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto mt-10 border-solid border-2 border-black rounded-lg mx-5 mb-3">
              <div className="flex justify-between">
                  <div className="row text-black ml-4 mt-4 font-bold text-lg">Products</div>
                  <div className="dots mt-4 mr-5"><a role="button" className="svg-icon svg-icon-primary svg-icon-2x place-items-end"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none"    fill="none"   >
                      <rect x="0" y="0" width="24" height="24" />
                      <circle fill="#000000" cx="12" cy="5" r="2" />
                      <circle fill="#000000" cx="12" cy="12" r="2" />
                      <circle fill="#000000" cx="12" cy="19" r="2" />
                    </g>
                  </svg></a></div>
                </div>
                <table className="table text-black">

                  {/* head */}
                  <thead>
                    <tr>
                      <th className="text-black text-lg">
                        Image
                      </th>
                      <th className="text-black text-lg">SKU</th>
                      <th className="text-black text-lg">Order Id</th>
                      <th className="text-black text-lg">Date</th>
                      <th className="text-black text-lg">Amount</th>
                      <th className="text-black text-lg">Status</th>
                      <th className="text-black text-lg">Color</th>
                      <th className="text-black text-lg">Customisation</th>
                      <th className="text-black text-lg">Payment</th>
                      <th className="text-black text-lg">Promo Code</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <div className="flex items-center space-x-3 ">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>

                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">ZROX89
                            </div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>July 23rd 2023</td>
                      <td>$200.00</td>
                      <td>Delivered</td>
                      <th>
                        <button className="">Magenta</button>
                      </th>
                      <td>Stitched</td><td>Paypal</td><td>UNIQ200</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>

                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">

                          <div>
                            <div className="font-bold">ZROX89</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>July 23rd 2023</td>
                      <td>$200.00</td>
                      <td>Delivered</td>
                      <th>
                        <button className="">Magenta</button>
                      </th>
                      <td>Stitched</td><td>Paypal</td><td>UNIQ200</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>

                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">ZROX89</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>July 23rd 2023</td>
                      <td>$200.00</td>
                      <td>Delivered</td>
                      <th>
                        <button className="">Magenta</button>
                      </th>
                      <td>Stitched</td><td>Paypal</td><td>UNIQ200</td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <th>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>

                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">ZROX89</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>July 23rd 2023</td>
                      <td>$200.00</td>
                      <td>Delivered</td>
                      <th>
                        <button className="">Magenta</button>
                      </th>
                      <td>Stitched</td><td>Paypal</td><td>UNIQ200</td>
                    </tr>
                    {/* row 5*/}
                    <tr>
                      <th>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>

                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">

                          <div>
                            <div className="font-bold">ZROX89</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>July 23rd 2023</td>
                      <td>$200.00</td>
                      <td>Delivered</td>
                      <th>
                        <button className="">Magenta</button>
                      </th>
                      <td>Stitched</td><td>Paypal</td><td>UNIQ200</td>
                    </tr>
                    {/* row 6*/}
                    <tr>
                      <th>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>

                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">

                          <div>
                            <div className="font-bold">ZROX89</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>July 23rd 2023</td>
                      <td>$200.00</td>
                      <td>Delivered</td>
                      <th>
                        <button className="">Magenta</button>
                      </th>
                      <td>Stitched</td><td>Paypal</td><td>UNIQ200</td>
                    </tr>
                    {/* row 7*/}
                    <tr>
                      <th>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>

                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">

                          <div>
                            <div className="font-bold">ZROX89</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>July 23rd 2023</td>
                      <td>$200.00</td>
                      <td>Delivered</td>
                      <th>
                        <button className="">Magenta</button>
                      </th>
                      <td>Stitched</td><td>Paypal</td><td>UNIQ200</td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>

          </div>

          {/* <div>this is pade inside dasboard</div> */}
    </>
  )
}