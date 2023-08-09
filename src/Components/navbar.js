// "use client"
// import Link from "next/link";
/* eslint-disable */
export default function Navbar() {
  return (
    <>
      <div className="flex">
        <div className="navbar bg-[#FEF0DC] ">
          <div className="navbar">
            <a className="btn normal-case text-xl text-slate-950 bg-[#D9D9D9] border-none hover:bg-[#D9D9D9] w-44">Logo</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-10">
              <div className="navbar-end w-fit px-5">
                <button className="btn btn-ghost btn-circle text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle text-black">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                  </div>
                </button>
              </div>
              <li>
                <details>
                  <summary className="text-slate-950 border-solid border-2 border-black hover:text-slate-950 ">
                    Admin
                  </summary>
                  <ul className="p-2 bg-[#FEF0DC] text-black border-solid border-2 border-black z-10">
                    <li><a className="hover:text-black hover:bg-[#FEF0DC]">Change Password </a>
                    </li>
                    <li><a className="hover:text-black hover:bg-[#FEF0DC]">Logout</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}
