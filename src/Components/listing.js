/* eslint-disable */
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Listing() {
  return (
    <>
          <div className="grid md:grid-cols-sidebar w-auto border-solid ml-[15px]">
        
            <div className="border-none bg-[#FEF0DC] max-w-8xl">

              <a className="flex items-center py-2 px-8 mx-4 bg-[#A95F44] text-black border-solid border-2 border-black rounded-md " href="#">
                <span className="mx-4 font-bold">Listings</span>
              </a>
              <div className="flex justify-between">
                <div className="card w-96 bg-base-100">
                  <div className="card-body bg-[#FEF0DC] rounded-xl text-black">
                    <div className="flex justify-between">
                      <h2 className="card-title justify-between flex">Products
                      </h2>
                      <h2 className="card-title justify-between">Collections
                      </h2>
                    </div>
                    <div className="flex justify-between mt-8">
                      <div className="flex">
                        <p className="border-solid border-2 border-black rounded-md px-5 py-1  mx-2" role="button">Filter 0</p>
                        <p className="border-solid border-2 border-black px-2 py-1 rounded-md" role="button">+</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card w-3/5 bg-base-100 mx-4">
                  <div className="card-body bg-[#FEF0DC] text-black">
                    <div className="flex justify-between">
                      <span role="button" className="svg-icon svg-icon-primary svg-icon-2x flex border-solid border-2 border-black rounded-md px-1.5 py-1"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 7.000000) rotate(-180.000000) translate(-12.000000, -7.000000) " x="11" y="1" width="2" height="12" rx="1" />
                          <path d="M17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 L18,6 C20.209139,6 22,7.790861 22,10 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,9.99305689 C2,7.7839179 3.790861,5.99305689 6,5.99305689 L7.00000482,5.99305689 C7.55228957,5.99305689 8.00000482,6.44077214 8.00000482,6.99305689 C8.00000482,7.54534164 7.55228957,7.99305689 7.00000482,7.99305689 L6,7.99305689 C4.8954305,7.99305689 4,8.88848739 4,9.99305689 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,10 C20,8.8954305 19.1045695,8 18,8 L17,8 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                          <path d="M14.2928932,10.2928932 C14.6834175,9.90236893 15.3165825,9.90236893 15.7071068,10.2928932 C16.0976311,10.6834175 16.0976311,11.3165825 15.7071068,11.7071068 L12.7071068,14.7071068 C12.3165825,15.0976311 11.6834175,15.0976311 11.2928932,14.7071068 L8.29289322,11.7071068 C7.90236893,11.3165825 7.90236893,10.6834175 8.29289322,10.2928932 C8.68341751,9.90236893 9.31658249,9.90236893 9.70710678,10.2928932 L12,12.5857864 L14.2928932,10.2928932 Z" fill="#000000" fill-rule="nonzero" />
                        </g>
                      </svg><a className="card-title px-0.5">Import Poducts</a></span>


                      <span role="button" className="svg-icon svg-icon-primary svg-icon-2x flex border-solid border-2 border-black rounded-md px-1.5 py-1"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <path d="M17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 L18,6 C20.209139,6 22,7.790861 22,10 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,9.99305689 C2,7.7839179 3.790861,5.99305689 6,5.99305689 L7.00000482,5.99305689 C7.55228957,5.99305689 8.00000482,6.44077214 8.00000482,6.99305689 C8.00000482,7.54534164 7.55228957,7.99305689 7.00000482,7.99305689 L6,7.99305689 C4.8954305,7.99305689 4,8.88848739 4,9.99305689 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,10 C20,8.8954305 19.1045695,8 18,8 L17,8 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                          <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 8.000000) scale(1, -1) rotate(-180.000000) translate(-12.000000, -8.000000) " x="11" y="2" width="2" height="12" rx="1" />
                          <path d="M12,2.58578644 L14.2928932,0.292893219 C14.6834175,-0.0976310729 15.3165825,-0.0976310729 15.7071068,0.292893219 C16.0976311,0.683417511 16.0976311,1.31658249 15.7071068,1.70710678 L12.7071068,4.70710678 C12.3165825,5.09763107 11.6834175,5.09763107 11.2928932,4.70710678 L8.29289322,1.70710678 C7.90236893,1.31658249 7.90236893,0.683417511 8.29289322,0.292893219 C8.68341751,-0.0976310729 9.31658249,-0.0976310729 9.70710678,0.292893219 L12,2.58578644 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 2.500000) scale(1, -1) translate(-12.000000, -2.500000) " />
                        </g>
                      </svg><a  className="card-title px-0.5">Export Products</a></span>


                      <span role="button" className="svg-icon svg-icon-primary svg-icon-2x flex border-solid border-2 border-black rounded-md px-1.5 py-1"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect fill="#000000" x="4" y="11" width="16" height="2" rx="1" />
                          <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1" />
                        </g>
                      </svg><a className="card-title">New Products</a></span>
                    </div>
                    <div className="flex justify-between mt-8 grid grid-cols-3 gap-4 place-items-end">
                      <div></div>
                      <div></div>
                      <div className="percentage flex border-solid border-2 border-black rounded-md px-1 py-1" role="button">

                        <h2 className="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24" />
                            <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                            <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero" />
                          </g>
                        </svg></h2>
                        <p>Search</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto mt-8  mx-5 mb-3">
                <table className="table text-black">

                  {/* head */}
                  <thead>
                    <tr>
                      <th className="text-black text-lg">
                        Image/SKU
                      </th>
                      <th className="text-black text-lg">Collection</th>
                      <th className="text-black text-lg">Ocassion</th>
                      <th className="text-black text-lg">Category/Tags</th>
                      <th className="text-black text-lg">Amount</th>
                      <th className="text-black text-lg">Inventory</th>
                      <th className="text-black text-lg">Total Sales</th>
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
                          <div>
                            <div className="font-bold">SKZTU23</div>
                          </div>
                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">Saree&gt;Kathiawadi
                            </div>

                          </div>
                        </div>
                      </td>
                      <td>
                        Sangeet
                        <br />

                      </td>
                      <td>Cocktail/Wedding/P..</td>
                      <td>$110.40</td>
                      <td>1650 in 4 variations</td>
                      <th>
                        <button className="">420</button>
                      </th>
                      <td>...</td>
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
                          <div>
                            <div className="font-bold">SKZTU23</div>
                          </div>
                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">

                          <div>
                            <div className="font-bold">Saree&gt;Kathiawadi</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        Sangeet
                        <br />

                      </td>
                      <td>Cocktail/Wedding/P..</td>
                      <td>$110.40</td>
                      <td>1650 in 4 variations</td>
                      <th>
                        <button className="">420</button>
                      </th>
                      <td>...</td>
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
                          <div>
                            <div className="font-bold">SKZTU23</div>
                          </div>
                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">Saree&gt;Kathiawadi</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        Sangeet
                        <br />

                      </td>
                      <td>Cocktail/Wedding/P..</td>
                      <td>$110.40</td>
                      <td>1650 in 4 variations</td>
                      <th>
                        <button className="">420</button>
                      </th>
                      <td>...</td>
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
                          <div>
                            <div className="font-bold">SKZTU23</div>
                          </div>
                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">Saree&gt;Kathiawadi</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        Sangeet
                        <br />

                      </td>
                      <td>Cocktail/Wedding/P..</td>
                      <td>$110.40</td>
                      <td>1650 in 4 variations</td>
                      <th>
                        <button className="">420</button>
                      </th>
                      <td>...</td>
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
                          <div>
                            <div className="font-bold">SKZTU23</div>
                          </div>
                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">

                          <div>
                            <div className="font-bold">Saree&gt;Kathiawadi</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        Sangeet
                        <br />

                      </td>
                      <td>Cocktail/Wedding/P..</td>
                      <td>$110.40</td>
                      <td>1650 in 4 variations</td>
                      <th>
                        <button className="">420</button>
                      </th>
                      <td>...</td>
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
                          <div>
                            <div className="font-bold">SKZTU23</div>
                          </div>
                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">

                          <div>
                            <div className="font-bold">Saree&gt;Kathiawadi</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        Sangeet
                        <br />

                      </td>
                      <td>Cocktail/Wedding/P..</td>
                      <td>$110.40</td>
                      <td>1650 in 4 variations</td>
                      <th>
                        <button className="">420</button>
                      </th>
                      <td>...</td>
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
                          <div>
                            <div className="font-bold">SKZTU23</div>
                          </div>
                        </div>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">

                          <div>
                            <div className="font-bold">Saree&gt;Kathiawadi</div>

                          </div>
                        </div>
                      </td>
                      <td>
                        Sangeet
                        <br />

                      </td>
                      <td>Cocktail/Wedding/P..</td>
                      <td>$110.40</td>
                      <td>1650 in 4 variations</td>
                      <th>
                        <button className="">420</button>
                      </th>
                      <td>...</td>
                    </tr>
                  </tbody>

                </table>
              </div>
              <div className="join rid grid-cols-2 mx-7 w-3/5 flex justify-between mb-4">
                <div className="flex w-[342px] justify-between">
                <Stack spacing={2}>
                    {/* <Pagination count={10} shape="rounded" /> */}
                    <Pagination count={10} variant="outlined" shape="rounded"/>
                  </Stack>
                </div>
              </div>
            </div>

          </div>
    </>
  )
}