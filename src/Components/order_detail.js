/* eslint-disable */
import React from 'react';
export default function Order_detail() {
  return (
    <>
          <div className="grid md:grid-cols-sidebar w-auto border-solid flex">
            <div className="border-none bg-[#FEF0DC] max-w-8xl">

              <a className="flex items-center py-2 px-8 mx-4 bg-[#A95F44] text-black border-solid border-2 border-black rounded-md " href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /> </svg>

                <span className="mx-4 font-medium">Back To Order</span>
              </a>

              <div className="cards border-solid border-2 border-black rounded-lg m-4">
                <div className="order-no flex justify-between mt-10 mx-4 max-w-xs">
                  <div className="order_no text-black font-bold px-4 py-2 text-lg">Orders ID:#6743</div>
                  <div className="status"> <div className="tooltip">
                    <button className="btn btn-warning">Pending</button>
                  </div>
                  </div>
                </div>
                <div className="order-no flex justify-between mt-10 mx-4">
                  <div className="flex text-black w-[230px] flex justify-between ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-fill flex" viewBox="0 0 16 16">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <p>Feb 16,2022 - Feb 20,2022</p>
                  </div>
                  <div className="third flex max-w-xs w-80 justify-between">

                    <div className="dropdown">
                      <label tabIndex={0} className="btn m-1 bg-[#FEF0DC] text-black hover:text-black hover:bg-[#FEF0DC] border-2 border-black rounded-lg">Change Status &darr;</label>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className="bg-[#FEF0DC] hover:text-black hover:bg-[#FEF0DC] text-black">Item 1</a></li>
                        <li><a className="bg-[#FEF0DC] hover:text-black hover:bg-[#FEF0DC] text-black">Item 2</a></li>
                      </ul>
                    </div>
                    <div className="border-2 border-black w-10 h-10 mt-2 py-2 rounded-lg" role="button">
                      <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" className="w-9" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <path d="M16,17 L16,21 C16,21.5522847 15.5522847,22 15,22 L9,22 C8.44771525,22 8,21.5522847 8,21 L8,17 L5,17 C3.8954305,17 3,16.1045695 3,15 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,15 C21,16.1045695 20.1045695,17 19,17 L16,17 Z M17.5,11 C18.3284271,11 19,10.3284271 19,9.5 C19,8.67157288 18.3284271,8 17.5,8 C16.6715729,8 16,8.67157288 16,9.5 C16,10.3284271 16.6715729,11 17.5,11 Z M10,14 L10,20 L14,20 L14,14 L10,14 Z" fill="#000000" />
                          <rect fill="#000000" opacity="0.3" x="8" y="2" width="8" height="2" rx="1" />
                        </g>
                      </svg></span>
                    </div>

                    <div className="tooltip">
                      <button className="btn btn-warning bg-red-800 text-white hover:bg-red-800">Save</button>
                    </div>

                  </div>
                </div>
                <div className="flex place-content-evenly mt-10 ">

                  {/* 1st card */}
                  <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black">

                      <div className="card2 flex max-w-22 justify-between">
                        <span className="svg-icon svg-icon-primary svg-icon-2x h-11 w-11 flex justify-center bg-red-800 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" className="mt-2 text-white" width="30px" height="30px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd" className="text-white">
                            <rect x="0" y="0" width="24" height="24" />
                            <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                            <path d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z" fill="#000000" opacity="0.3" />
                          </g>
                        </svg></span>
                        <h2 className="card-title justify-between font-light flex-col">
                          <b className="font-bold">Total Orders</b>
                          <div className="detaiils">
                            Full Name: Jane Cooper <br />
                            Email:janecopper@gmail.com <br />
                            Phone:+900 231 1212
                          </div>
                          {/* <p>Full Name: Jane Cooper</p>
                        <p>Email:janecopper@gmail.com</p>
                        <p>Phone:+900 231 1212</p> */}
                        </h2>
                      </div>
                      <button className="btn btn-neutral text-white">View Profile</button>
                    </div>

                  </div>

                  {/* 2 card */}
                  <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black">

                      <div className="card2 flex max-w-22 justify-between">
                        <span className="svg-icon svg-icon-primary svg-icon-2x h-11 w-11 flex justify-center bg-red-800 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" className="mt-2" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                            <rect x="0" y="0" width="24" height="24" />
                            <path d="M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                            <path d="M6.84712709,9 L17.1528729,9 C17.6417121,9 18.0589022,9.35341304 18.1392668,9.83560101 L19.611867,18.671202 C19.7934571,19.7607427 19.0574178,20.7911977 17.9678771,20.9727878 C17.8592143,20.9908983 17.7492409,21 17.6390792,21 L6.36092084,21 C5.25635134,21 4.36092084,20.1045695 4.36092084,19 C4.36092084,18.8898383 4.37002252,18.7798649 4.388133,18.671202 L5.86073316,9.83560101 C5.94109783,9.35341304 6.35828794,9 6.84712709,9 Z" fill="#000000" />
                          </g>
                        </svg></span>
                        <h2 className="card-title justify-between font-light flex-col">
                          <b className="font-bold">Total Orders</b>
                          <div className="detaiils">
                            Full Name: Jane Cooper <br />
                            Email:janecopper@gmail.com <br />
                            Phone:+900 231 1212
                          </div>
                          {/* <p>Full Name: Jane Cooper</p>
                        <p>Email:janecopper@gmail.com</p>
                        <p>Phone:+900 231 1212</p> */}
                        </h2>
                      </div>
                      <button className="btn btn-neutral text-white">Download Info</button>
                    </div>

                  </div>

                  {/* 3rd card */}
                  <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black">

                      <div className="card2 flex max-w-22 justify-between">
                        <span className="svg-icon svg-icon-primary svg-icon-2x h-11 w-11 flex justify-center bg-red-800 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" className="mt-2" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                            <rect x="0" y="0" width="24" height="24" />
                            <path d="M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z M14,9 L14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 L10,9 L8,9 L8,8 C8,5.790861 9.790861,4 12,4 C14.209139,4 16,5.790861 16,8 L16,9 L14,9 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                            <path d="M6.84712709,9 L17.1528729,9 C17.6417121,9 18.0589022,9.35341304 18.1392668,9.83560101 L19.611867,18.671202 C19.7934571,19.7607427 19.0574178,20.7911977 17.9678771,20.9727878 C17.8592143,20.9908983 17.7492409,21 17.6390792,21 L6.36092084,21 C5.25635134,21 4.36092084,20.1045695 4.36092084,19 C4.36092084,18.8898383 4.37002252,18.7798649 4.388133,18.671202 L5.86073316,9.83560101 C5.94109783,9.35341304 6.35828794,9 6.84712709,9 Z" fill="#000000" />
                          </g>
                        </svg></span>
                        <h2 className="card-title justify-between font-light flex-col">
                          <b className="font-bold">Total Orders</b>
                          <div className="detaiils">
                            Full Name: Jane Cooper <br />
                            Email:janecopper@gmail.com <br />
                            Phone:+900 231 1212
                          </div>
                          {/* <p>Full Name: Jane Cooper</p>
                        <p>Email:janecopper@gmail.com</p>
                        <p>Phone:+900 231 1212</p> */}
                        </h2>
                      </div>
                      <button className="btn btn-neutral text-white">View Profile</button>
                    </div>

                  </div>
                </div>

                {/* 2nd row */}
                <div className="flex place-content-evenly mt-10 pb-5">
                  {/* 2nd row 1st card */}
                  <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black">
                      <h2 className="card-title justify-between">Payment Info</h2>
                      <div className="justify-between mt-2">
                        <div className="master-card flex ">
                          <img src="https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" alt="" width={"32px"} />
                          <p className="text-zine-600">Master Card **** **** 6557</p>
                        </div>
                        <p className="text-zine-600">Business Name:Jane Copper</p>
                        <p className="text-zine-600">Phone:+900 231 1212</p>
                      </div>
                    </div>
                  </div>

                  {/* 2nd row 2nd card */}
                  <div className="card w-[773px] shadow-xl bg-[#FEF0DC]">
                    <div className="bg-[#FEF0DC]"><div className="badge badge-outline text-black py-4 font-bold px-4 border-2 border-black rounded-lg">Note</div></div>
                    <textarea className="card-body bg-[#FEF0DC] border-solid border-2 border-black rounded-xl text-black mt-2 focus:pointer-events-none">
                      <span className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <path d="M4.88230018,17.2353996 L13.2844582,0.431083506 C13.4820496,0.0359007077 13.9625881,-0.12427877 14.3577709,0.0733126292 C14.5125928,0.15072359 14.6381308,0.276261584 14.7155418,0.431083506 L23.1176998,17.2353996 C23.3152912,17.6305824 23.1551117,18.1111209 22.7599289,18.3087123 C22.5664522,18.4054506 22.3420471,18.4197165 22.1378777,18.3482572 L14,15.5 L5.86212227,18.3482572 C5.44509941,18.4942152 4.98871325,18.2744737 4.84275525,17.8574509 C4.77129597,17.6532815 4.78556182,17.4288764 4.88230018,17.2353996 Z" fill="#000000" fillRule="nonzero" transform="translate(14.000087, 9.191034) rotate(-315.000000) translate(-14.000087, -9.191034) " />
                        </g>
                      </svg></span>
                      {/* <h2 className="card-title justify-between"> <span className="svg-icon svg-icon-primary svg-icon-2x place-items-end"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="#000000" cx="12" cy="5" r="2" />
                          <circle fill="#000000" cx="12" cy="12" r="2" />
                          <circle fill="#000000" cx="12" cy="19" r="2" />
                        </g>
                      </svg></span></h2> */}
                      {/* <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea> */}
                    </textarea>
                  </div>

                </div>
              </div>

              <div className="overflow-x-auto mt-10 border-solid border-2 border-black rounded-lg mx-5 mb-3">
                <div className="flex justify-between" >
                  <div className="row text-black ml-4 mt-4 font-bold text-lg">Products</div>
                  <div role="button" className="dots mt-4 mr-5"><span className="svg-icon svg-icon-primary svg-icon-2x place-items-end"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24" />
                      <circle fill="#000000" cx="12" cy="5" r="2" />
                      <circle fill="#000000" cx="12" cy="12" r="2" />
                      <circle fill="#000000" cx="12" cy="19" r="2" />
                    </g>
                  </svg></span></div>
                </div>
                <table className="table text-black">

                  {/* head */}
                  <thead>
                    <tr>
                      <th className="text-black font-sm">Image/SKU</th>
                      <th className="text-black">Order Id</th>
                      <th className="text-black">Quantity</th>
                      <th className="text-black">Color</th>
                      <th className="text-black">Custmisation</th>
                      <th className="text-black">Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">ZRXU23
                            </div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>2</td>
                      <td>Magneta</td>
                      <td>Stiched</td>
                      <th>
                        <button className="">$800.40</button>
                      </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">ZRXU23
                            </div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>2</td>
                      <td>Magneta</td>
                      <td>Stiched</td>
                      <th>
                        <button className="">$800.40</button>
                      </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">ZRXU23
                            </div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>2</td>
                      <td>Magneta</td>
                      <td>Stiched</td>
                      <th>
                        <button className="">$800.40</button>
                      </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png" alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">ZRXU23
                            </div>

                          </div>
                        </div>
                      </td>
                      <td>
                        #25421
                        <br />

                      </td>
                      <td>2</td>
                      <td>Magneta</td>
                      <td>Stiched</td>
                      <th>
                        <button className="">$800.40</button>
                      </th>
                    </tr>
                  </tbody>

                </table>
                <div className="flex flex-row-reverse">
                  <div className="total w-66 mr-[147px] grid grid-cols-2 gap-4 text-black ">
                    <div className="col-start-1 col-end-3"><div>Sub-Total</div>
                    <div className="pt-2">Tax(20%)</div>
                    <div className="pt-2">Discount/Promo Code</div>
                    <div className="font-bold pt-2">Total</div>
                    </div>
                    <div className="col-end-7 col-span-2"><div>$3,201.6</div>
                    <div className="pt-2">$640.32</div>
                    <div className="pt-2">$0</div>
                    <div className="font-bold pt-2">$3841.92</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
    </>
  )
}