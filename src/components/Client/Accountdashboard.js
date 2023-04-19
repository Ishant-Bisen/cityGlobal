import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Accountdashboard() {

    const handellogout = () => {
        localStorage.removeItem("userid");
        localStorage.removeItem("user-email");
        localStorage.removeItem("user-auth-token");
        localStorage.removeItem("user-name");
        console.log("all remove");
    };
  const [details, setdetails] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  useEffect(() => {
    try {
      console.log(localStorage.getItem("userid"));
      console.log(localStorage.getItem("user-auth-token"));

      fetch("https://nidhibackend.onrender.com/user/getBankDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("user-auth-token"),
        },
        body: JSON.stringify({
          userId: localStorage.getItem("userid"),
        }),
      })
        .then((Response) => Response.json())
        .then((data) => {
          setdetails(data);
          
          
        });
    } catch (error) {
      console.log("Error :", error);
    }
  }, []);

  return (
    <div>
      {/* <!-- Layout wrapper --> */}
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
           {/* <!-- Menu --> */}

           <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div className="app-brand demo">
              <Link to="/user" className="app-brand-link">
                <span className="app-brand-logo demo">
                  <svg width="25" viewBox="0 0 25 42" version="1.1">
                    <defs>
                      <path
                        d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                        id="path-1"
                      ></path>
                      <path
                        d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                        id="path-3"
                      ></path>
                      <path
                        d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                        id="path-4"
                      ></path>
                      <path
                        d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                        id="path-5"
                      ></path>
                    </defs>
                    <g
                      id="g-app-brand"
                      stroke="none"
                      stokewidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Brand-Logo"
                        transform="translate(-27.000000, -15.000000)"
                      >
                        <g
                          id="Icon"
                          transform="translate(27.000000, 15.000000)"
                        >
                          <g
                            id="Mask"
                            transform="translate(0.000000, 8.000000)"
                          >
                            <mask id="mask-2" fill="white">
                              <use href="#path-1"></use>
                            </mask>
                            <use fill="#696cff" href="#path-1"></use>
                            <g id="Path-3" mask="url(#mask-2)">
                              <use fill="#696cff" href="#path-3"></use>
                              <use
                                fill-opacity="0.2"
                                fill="#FFFFFF"
                                href="#path-3"
                              ></use>
                            </g>
                            <g id="Path-4" mask="url(#mask-2)">
                              <use fill="#696cff" href="#path-4"></use>
                              <use
                                fill-opacity="0.2"
                                fill="#FFFFFF"
                                href="#path-4"
                              ></use>
                            </g>
                          </g>
                          <g
                            id="Triangle"
                            transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                          >
                            <use fill="#696cff" href="#path-5"></use>
                            <use
                              fillopacity="0.2"
                              fill="#FFFFFF"
                              href="#path-5"
                            ></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="app-brand-text demo menu-text fw-bolder ms-2">
                  CityGlobal
                </span>
              </Link>

              <a
                href="#"
                className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
              >
                <i className="bx bx-chevron-left bx-sm align-middle"></i>
              </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
              {/* <!-- Dashboard --> */}
              <li className="menu-item active">
                <Link to="/user" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </Link>
              </li>

              <li className="menu-item dropdown">
                <a
                  href="#"
                  className="menu-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="menu-icon tf-icons bx bx-dock-top"></i>
                  <div
                    data-i18n="Account Settings"
                    style={{
                      paddingRight: "1rem",
                    }}
                  >
                    Account Settings
                  </div>
                </a>

                <div className="dropdown-menu ">
                  <ul className="sub-menu p-0">
                    <li className="menu-item">
                      <Link to="/userdetail" className="menu-link">
                        <i class="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account">Account</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/editaccountdetail" className="menu-link">
                        <i class="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Notifications">Edit Account</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-item dropdown">
                <a
                  href="#"
                  className="menu-link  dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                  <div
                    data-i18n="Account Settings"
                    style={{
                      paddingRight: "1rem",
                    }}
                  >
                    Authentication
                  </div>
                </a>

                <div className="dropdown-menu ">
                  <ul className="sub-menu p-0">
                    <li className="menu-item">
                      <Link to="/userdetail" className="menu-link">
                        <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                        <div data-i18n="Account">Reset Password</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-item dropdown">
                <a
                  href="#"
                  className="menu-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="menu-icon tf-icons bx bx-dock-top"></i>
                  <div
                    data-i18n="Account Settings"
                    style={{
                      paddingRight: "1rem",
                    }}
                  >
                    Beneficiary Details
                  </div>
                </a>

                <div className="dropdown-menu ">
                  <ul className="sub-menu p-0">
                    <li className="menu-item">
                      <Link to="/adbene" className="menu-link">
                        <i class="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account">Add Beneficiary</div>
                      </Link>
                    </li>
                    <li className="menu-item ">
                      <Link to="/benelist" className="menu-link">
                        <i class="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Notifications">Beneficiary List</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-item dropdown">
                <a
                  href="#"
                  className="menu-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="menu-icon tf-icons bx bx-cube-alt"></i>
                  <div
                    data-i18n="Account Settings"
                    style={{
                      paddingRight: "1rem",
                    }}
                  >
                    Transaction
                  </div>
                </a>

                <div className="dropdown-menu ">
                  <ul className="sub-menu p-0">
                    <li className="menu-item">
                      <Link to="/user" className="menu-link">
                        <i class="menu-icon tf-icons bx bx-cube-alt"></i>
                        <div data-i18n="Notifications">Transaction History</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-item dropdown">
                <a
                  href="#"
                  className="menu-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                  <div
                    data-i18n="Account Settings"
                    style={{
                      paddingRight: "1rem",
                    }}
                  >
                    KYC
                  </div>
                </a>

                <div className="dropdown-menu ">
                  <ul className="sub-menu p-0">
                    <li className="menu-item">
                      <Link to="/KYCUpdate" className="menu-link">
                        <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                        <div data-i18n="Account">KYC Updates</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/KYC" className="menu-link">
                        <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                        <div data-i18n="Notifications">KYC Details</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* <!-- Misc --> */}
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Misc</span>
              </li>
              <li className="menu-item">
                <Link to="#" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-file"></i>
                  <div data-i18n="Documentation">Authorized Code</div>
                </Link>
              </li>
            </ul>
          </aside>
          {/* <!-- / Menu --> */}

          {/* <!-- Layout container --> */}
          <div className="layout-page">
            {/* <!-- Navbar --> */}

            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <ul class="navbar-nav flex-row align-items-center ms-auto">
                  {/* <!-- User --> */}
                  <li class="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      class="nav-link dropdown-toggle hide-arrow"
                      href="/"
                      data-toggle="dropdown"
                    >
                      <div class="avatar">
                        <img
                          src="../assets/img/avatars/99.png"
                          alt=" "
                          class="w-px-20 mt-3 h-auto"
                        />
                      </div>
                    </a>
                    <ul class="dropdown-menu first-menu dropdown-menu-end">
                      <li>
                        <Link class="dropdown-item" to="/editaccountdetail">
                          <i class="bx bx-user me-2"></i>
                          <span class="align-middle">Add Account</span>
                        </Link>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/userdetail">
                          <i class="bx bx-user me-2"></i>
                          <span class="align-middle">Account Details</span>
                        </Link>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/adbene">
                          <i class="bx bx-user me-2"></i>
                          <span class="align-middle">Add Beneficiary</span>
                        </Link>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/benelist">
                          <i class="bx bx-user me-2"></i>
                          <span class="align-middle">Beneficiary Details</span>
                        </Link>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/KYCUpdate">
                          <i class="bx bx-user me-2"></i>
                          <span class="align-middle">KYC Update</span>
                        </Link>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/user">
                          <i class="bx bx-user me-2"></i>
                          <span class="align-middle">Transaction History</span>
                        </Link>
                      </li>

                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bx bx-power-off me-2"></i>
                          <span class="align-middle">Reset Password</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--/ User --> */}
                </ul>
              </div>

              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                {/* <!-- Search --> */}
                <div className="navbar-nav align-items-center">
                  <div className="nav-item d-flex align-items-center">
                    <i className="bx bx-search fs-4 lh-0"></i>
                    <input
                      type="text"
                      className="form-control border-0 shadow-none"
                      placeholder="Search..."
                      aria-label="Search..."
                    />
                  </div>
                </div>
                {/* <!-- /Search --> */}

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  {/* <!-- Place this tag where you want the button to render. --> */}

                  {/* <!-- User --> */}
                  <li className="nav-item navbar-dropdown dropdown-user dropdown dropstart">
                    <a
                      className="nav-link dropdown-toggle hide-arrow drop"
                      href="#"
                      data-toggle="dropdown"
                    >
                      <div className="avatar avatar-online">
                        <img
                          src="./assets/img/avatars/1.png"
                          alt="avtar"
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <a className="dropdown-item" href="/\">
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <img
                                  src="./assets/img/avatars/1.png"
                                  alt="avtar"
                                  className="w-px-40 h-auto rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-semibold d-block">
                                {localStorage.getItem("user-name")}
                              </span>
                              <small className="text-muted"></small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user">
                          <i className="bx bx-user me-2"></i>
                          <span className="align-middle">My Profile</span>
                        </Link>
                      </li>

                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/signin"
                          onClick={handellogout}
                        >
                          <i className="bx bx-power-off me-2"></i>
                          <span className="align-middle">Log Out</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <!--/ User --> */}
                </ul>
              </div>
            </nav>

            {/* <!-- / Navbar --> */}
            {/* <!-- Content wrapper --> */}
            <div class="content-wrapper">
              {/* <!-- Content --> */}

              <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4">
                  <span class="text-muted fw-light">Account Settings /</span>
                  Account
                </h4>

                <div class="row">
                  <div class="col-md-12">
                    <ul class="nav nav-pills flex-column flex-md-row mb-3">
                      <li class="nav-item">
                        <Link class="nav-link active" href="/accountdetail">
                          <i class="bx bx-user me-1"></i>
                          Account
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/editaccountdetail">
                          <i class="bx bx-bell me-1"></i>
                          Edit Account Details
                        </Link>
                      </li>
                    </ul>
                    <div class="card mb-4">
                      <h5 class="card-header">Profile Details</h5>
                      {/* <!-- Account --> */}
                      <div class="card-body">
                        <div class="d-flex align-items-start align-items-sm-center gap-4">
                          <img
                            src="../assets/img/avatars/1.png"
                            alt="user-avatar"
                            class="d-block rounded"
                            height="100"
                            width="100"
                            id="uploadedAvatar"
                          />
                        </div>
                      </div>
                      <hr class="my-0" />
                      <div class="card-body">
                        <form
                          id="formAccountSettings"
                          method="POST"
                          onsubmit="return false"
                        >
                          <div class="row">
                            <div class="mb-3 col-md-6">
                              <label for="firstName" class="form-label">
                                Account Holder’s Name
                              </label>
                              <h5>{details.AccHolderName}</h5>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="email" class="form-label">
                                E-mail
                              </label>
                              <h5>{localStorage.getItem("user-email")}</h5>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label class="form-label" for="phoneNumber">
                                Mobile Number
                              </label>
                              <h5>{details.MobileNo}</h5>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="firstName" class="form-label">
                                Bank Name
                              </label>
                              <h5>{details.BankName}</h5>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label class="form-label" for="phoneNumber">
                                Account Number
                              </label>
                              <h5>{details.AccountNo}</h5>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label class="form-label" for="phoneNumber">
                                IFSC of the Branch
                              </label>
                              <h5>{details.IFSC}</h5>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label class="form-label" for="country">
                                Account Type
                              </label>
                              <h5>{details.Type}</h5>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="address" class="form-label">
                                Address
                              </label>
                              <h5>{details.Address}</h5>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="state" class="form-label">
                                State
                              </label>
                              <h5>{details.State}</h5>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="zipCode" class="form-label">
                                Zip Code
                              </label>
                              <h5>{details.ZIP}</h5>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* <!-- /Account --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- / Content --> */}

              {/* <!-- Footer --> */}
              <footer class="content-footer footer bg-footer-theme">
                <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                  <div class="mb-2 mb-md-0">
                    © {new Date().getFullYear()}; , made with ❤️ by
                    <p>CityGlobal</p>
                  </div>
                </div>
              </footer>
              {/* <!-- / Footer --> */}

              <div class="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div class="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  );
}
