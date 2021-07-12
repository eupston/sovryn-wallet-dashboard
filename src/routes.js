/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import NFTs from "views/NFTs.js";
import Transfers from "views/Transfers.js";

var routes = [
  {
    path: "/dashboard",
    name: "Account",
    icon: "tim-icons icon-coins",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/nft",
    name: "NFTs",
    icon: "tim-icons icon-app",
    component: NFTs,
    layout: "/admin",
  },
  {
    path: "/transfers",
    name: "Transfers",
    icon: "tim-icons icon-upload",
    component: Transfers,
    layout: "/admin",
  }
];
export default routes;
