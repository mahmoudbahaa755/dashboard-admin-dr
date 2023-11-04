interface MenuItem {
    href: string;
    label: string;
    badge?: string;
    svg?: any;
  }
  
export const menuItems: MenuItem[] = [
  {
    href: "/",
    label: "Dashboard",
    svg: (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
            stroke="#ffffff"
            strokeWidth="1.5"
          ></path>{" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
            stroke="#ffffff"
            strokeWidth="1.5"
          ></path>{" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
            stroke="#ffffff"
            strokeWidth="1.5"
          ></path>{" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
            stroke="#ffffff"
            strokeWidth="1.5"
          ></path>{" "}
        </g>
      </svg>
    ),
  }
  ,
   
    {
      href: "/form",
      label: "Forms",
      svg: (
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22 6H2a1.001 1.001 0 0 0-1 1v3a1.001 1.001 0 0 0 1 1h20a1.001 1.001 0 0 0 1-1V7a1.001 1.001 0 0 0-1-1zm0 4H2V7h20v3h.001M22 17H2a1.001 1.001 0 0 0-1 1v3a1.001 1.001 0 0 0 1 1h20a1.001 1.001 0 0 0 1-1v-3a1.001 1.001 0 0 0-1-1zm0 4H2v-3h20v3h.001M10 14v1H2v-1zM2 3h8v1H2z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
      ),
    },
    {
      href: "/tables",
      label: "Tables",
      svg:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
    </svg>
    )
    },
    // {
    //   href: "/calendar",
    //   label: "Calendar",
    //   badge: "New",
    // },
    {
      href: "/profile",
      label: "Profile",
      svg:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>)
    },
    {
      href: "/login",
      label: "Login",
      svg:(
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      )
    },
    {
      href: "/register",
      label: "Registration",
      svg:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
    )
     
    },
  ];
  
export  const labelItems: MenuItem[] = [
    {
      href: "",
      label: "Important",
      svg:(<svg  width='22px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M6.97721 1.32673C7.31443 1.56726 7.39281 2.03562 7.15227 2.37284L6.7662 2.91409C7.39202 3.38836 7.53073 4.27761 7.07175 4.92108L6.66113 5.49675C6.42059 5.83396 5.95223 5.91234 5.61501 5.67181C5.2778 5.43127 5.19942 4.96291 5.43996 4.62569L5.82603 4.08444C5.2002 3.61018 5.0615 2.72092 5.52048 2.07745L5.9311 1.50179C6.17163 1.16457 6.63999 1.08619 6.97721 1.32673ZM10.9772 1.32673C11.3144 1.56726 11.3928 2.03562 11.1523 2.37284L10.7662 2.91409C11.392 3.38836 11.5307 4.27761 11.0717 4.92108L10.6611 5.49675C10.4206 5.83396 9.95223 5.91234 9.61501 5.67181C9.2778 5.43127 9.19942 4.96291 9.43996 4.62569L9.82603 4.08444C9.2002 3.61018 9.0615 2.72092 9.52048 2.07745L9.9311 1.50179C10.1716 1.16457 10.64 1.08619 10.9772 1.32673ZM14.9772 1.32673C15.3144 1.56726 15.3928 2.03562 15.1523 2.37284L14.7662 2.91409C15.392 3.38836 15.5307 4.27761 15.0717 4.92108L14.6611 5.49675C14.4206 5.83396 13.9522 5.91234 13.615 5.67181C13.2778 5.43127 13.1994 4.96291 13.44 4.62569L13.826 4.08444C13.2002 3.61018 13.0615 2.72092 13.5205 2.07745L13.9311 1.50179C14.1716 1.16457 14.64 1.08619 14.9772 1.32673Z" fill="#522d2d"></path> <path opacity="0.5" d="M9.6134 22H10.3868C13.0476 22 14.378 22 15.243 21.1907C15.9132 20.5637 16.1172 19.6256 16.2575 18H3.74268C3.88292 19.6256 4.08697 20.5637 4.75719 21.1907C5.6222 22 6.9526 22 9.6134 22Z" fill="#522d2d"></path> <path fillRule="evenodd" clipRule="evenodd" d="M3.28441 11.2661C3.15113 9.26687 3.08449 8.26726 3.67729 7.63363C4.27009 7 5.27191 7 7.27555 7H12.7245C14.7281 7 15.7299 7 16.3227 7.63363C16.4852 7.80726 16.5981 8.00837 16.6737 8.25H17C19.6234 8.25 21.75 10.3766 21.75 13C21.75 15.6234 19.6234 17.75 17 17.75H16.2781C16.2713 17.8351 16.2645 17.9184 16.2574 18H3.7426C3.70184 17.5275 3.66647 16.997 3.62662 16.3991L3.28441 11.2661ZM16.3833 16.25H17C18.7949 16.25 20.25 14.7949 20.25 13C20.25 11.2051 18.7949 9.75 17 9.75H16.8007C16.788 10.1801 16.7547 10.6802 16.7156 11.2661L16.3833 16.25Z" fill="#522d2d"></path> </g></svg>)
    },
    {
      href: "",
      label: "Warning",
      svg:(<svg width='22px'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="17" r="1" fill="#ff6600"></circle> <path d="M12 10L12 14" stroke="#ff6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z" stroke="#ff6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>)
    },
    {
      href: "",
      label: "Information",
      svg:(<svg width='22px'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9Z" stroke="#004de6" strokeWidth="1.5"></path> <path d="M5.5 21C3.84315 21 2.5 19.6569 2.5 18C2.5 16.3431 3.84315 15 5.5 15C7.15685 15 8.5 16.3431 8.5 18C8.5 19.6569 7.15685 21 5.5 21Z" stroke="#004de6" strokeWidth="1.5"></path> <path d="M18.5 21C16.8431 21 15.5 19.6569 15.5 18C15.5 16.3431 16.8431 15 18.5 15C20.1569 15 21.5 16.3431 21.5 18C21.5 19.6569 20.1569 21 18.5 21Z" stroke="#004de6" strokeWidth="1.5"></path> <path opacity="0.5" d="M20 13C20 10.6106 18.9525 8.46589 17.2916 7M4 13C4 10.6106 5.04752 8.46589 6.70838 7M10 20.748C10.6392 20.9125 11.3094 21 12 21C12.6906 21 13.3608 20.9125 14 20.748" stroke="#004de6" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>)
    },
  ];
  