"use client";

import Link from "next/link";

import {

  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
  categorieMegaMenuItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,

} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const pathname = usePathname();

  const [isActiveParent, setIsActiveParent] = useState(false)
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false)
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false)

  const router = useRouter()

   useEffect(() => {




   
 }, [])

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

    
        <Sidebar width="400" backgroundColor="#fff">

          <Menu>
   


            <MenuItem
             onClick={()=>router.push("/home_10")}
             className={
              pathname === "/home_10"
                ? "menu-active-link"
                : ""
            }
              
            >
              Home
            </MenuItem>
            {/* End  Desitinations Menu */}

            <MenuItem
             onClick={()=>router.push("/flight-list-v1")}
             className={
              pathname === "/flight-list-v1"
                ? "menu-active-link"
                : ""
            }
              
            >
              Flight List
            </MenuItem>

            <SubMenu label="Pages" className={ pageItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {pageItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End  All Pages Menu */}

            <SubMenu label="Dashboard" className={ pathname.split('/')[1] == 'dashboard'  || pathname.split('/')[1] == 'vendor-dashboard' ? "menu-active-link":''}>
              {dashboardItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End  All Dashboard Menu */}

          </Menu>
        </Sidebar>



    </>
  );
};


export default MobileMenu;
