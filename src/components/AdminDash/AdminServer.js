import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminServer() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditing2, setIsEditing2] = useState(false);

  const [Color, setColor] = useState({ backgroundColor: "#fff" });
  const [Color2, setColor2] = useState({ backgroundColor: "#fff" });
  const [value, setValue] = useState("Enter text here");
  const [value2, setValue2] = useState("Enter text here");
  const [res, setRes] = useState("");

  const [text, setText] = useState("Enter text here");
  const [text2, setText2] = useState("Enter text here");
  const [checkbutton, setcheckbutton] = useState([]);
  const [allwithdraw, setallwithdraw] = useState([])

  const handellogout = () => {
    localStorage.removeItem("auth-token");
  };

  function handleEdit() {
    setIsEditing(true);
    setColor({ backgroundColor: "#dddbdb" });
  }

  async function handleEndEditing(email) {
    console.log(email, value);
    if (isNaN(value)) {
      alert(`${value} is not numeric`);
    } else {
      try {
        const response = await fetch(
          "https://nidhibackend.onrender.com/admin/editLockedAmt",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("auth-token"),
            },
            body: JSON.stringify({ email, amount: value }),
          }
        );

        const data = await response.json();
        setRes(data);

        setIsEditing(false);

        setColor({ backgroundColor: "rgb(176, 252, 182) "});
      } catch (error) {
        console.error(error);
      }
    }
  }

  function handleEdit2() {
    setIsEditing2(true);
    setColor2({ backgroundColor: "#dddbdb" });
  }

  async function handleEndEditing2(email) {
    console.log(email, value2);
    if (isNaN(value2)) {
      alert(`${value2} is not numeric`);
    } else {
      try {
        const response = await fetch(
          "https://nidhibackend.onrender.com/admin/editAllotedAmt",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("auth-token"),
            },
            body: JSON.stringify({ email, amount: value2 }),
          }
        );

        const data = await response.json();
        setRes(data);

        setIsEditing2(false);

        setColor2({ backgroundColor: "rgb(176, 252, 182)" });
      } catch (error) {
        console.error(error);
      }
    }
  }
  function handleChange(event) {
    setText(event.target.value);

    setValue(event.target.innerText);
  }

  function handleChange2(event) {
    setText2(event.target.value);
    setValue2(event.target.innerText);
  }

  const [getAll, setgetAll] = useState([]);
  const [bankDetail, setbankDetail] = useState([]);
  const [allEmail, setEmail] = useState([]);
  const [withdraw, setwithdraw] = useState([]);
  const [loading, setLoading] = useState(true);
  const [benelists, setbenelists] = useState([]);

  async function block(email) {
    // Receive email as parameter

    console.log("block" + email);
    try {
      const response = await fetch(
        "https://nidhibackend.onrender.com/admin/blockUser",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      alert("User has been Blocked");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function getbeneficiary(userid) {
    // Receive email as parameter

    console.log("beneemail" + userid);
    try {
      const response = await fetch(
        "https://nidhibackend.onrender.com/admin/getBeneficiaries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
          body: JSON.stringify({
            "userId": userid ,
          }),
        }
      );
      const data = await response.json();
      console.log("bene" ,data);
      const data2 = data.slice(0,1)
      setbenelists(data2);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function withdrawreq(userid) {
    // Receive email as parameter
    try {
      console.log(userid);
      const response = await fetch(
        "https://nidhibackend.onrender.com/admin/handleWithdrawRequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
          body: JSON.stringify({
            userId: userid,
          }),
        }
      );
      const data = await response.json();

      console.log(data);

      setcheckbutton(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    async function runfxn() {
      try {
        const response = await fetch(
          "https://nidhibackend.onrender.com/admin/getAll",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("auth-token"),
            },
          }
        );

        const data = await response.json();
        setgetAll(data);

        data.forEach((item) => {
          console.log(item);
          bankdetails(item.email);
          AllWithdrawRequest(item._id, item.email, item.username);
        });

        // Pass email as parameter to bankdetails
      } catch (error) {
        console.error("Error:", error);
      }
    }

    async function bankdetails(email) {
      // Receive email as parameter
      try {
        const response = await fetch(
          "https://nidhibackend.onrender.com/admin/getBankDetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("auth-token"),
            },
            body: JSON.stringify({
              email: email,
            }),
          }
        );
        const data = await response.json();

        let data2 = { ...data, email: email };

        if (!bankDetail.some((item) => item.email === data2.email)) {
          setbankDetail((prevState) => [...prevState, data2]);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    async function AllWithdrawRequest(userid, email, username) {
      // Receive email as parameter
      try {
        console.log(userid);
        const response = await fetch(
          "https://nidhibackend.onrender.com/admin/getAllRequests",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("auth-token"),
            },
          }
        );
        const data = await response.json();
        setallwithdraw(data)
        

        console.log("req", withdraw);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    // Run the effect only once when the component mounts
    runfxn();

    console.log(bankDetail);
  }, []);

  // Use a separate effect to update the email state when bankDetail changes
  useEffect(() => {
    if (!Array.isArray(getAll)) {
      return;
    }
    const mergedArray = getAll.map((obj1) => {
      const obj2 = bankDetail.find((obj2) => obj2.email === obj1.email);
      return obj2 ? { ...obj1, ...obj2 } : obj1;
    });

    setEmail(mergedArray);
    
  }, [getAll, bankDetail]);

  return (
    <div>
      {loading ? (
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <aside
              id="layout-menu"
              className="layout-menu menu-vertical menu bg-menu-theme"
            >
              <div className="app-brand demo">
                <a href="/" className="app-brand-link">
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
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
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
                                fill-opacity="0.2"
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
                </a>

                <a
                  href="/"
                  className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                >
                  <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
              </div>
              <div className="menu-inner-shadow"></div>
              <ul className="menu-inner py-1">
                {/* <!-- Dashboard --> */}
                <li className="menu-item active">
                  <Link to="/admin" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle"></i>
                    <div data-i18n="Analytics">Dashboard</div>
                  </Link>
                </li>

                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">Details</span>
                </li>
                <li className="menu-item">
                  <Link to="/userlists" className="menu-link">
                    <div data-i18n="Account Settings">User Details</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/withdrawdetails" className="menu-link">
                    <div data-i18n="Authentications">Withdraw Details</div>
                  </Link>
                </li>
              </ul>
            </aside>

            {/* <!-- Layout container --> */}
            <div className="layout-page">
              {/* <!-- Navbar --> */}

              <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
              >
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
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
                        <Link class="dropdown-item" to="/userlists">
                          <i class="bx bx-user me-2"></i>
                          <span class="align-middle">UserLists</span>
                        </Link>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/withdrawdetails">
                          <i class="bx bx-user me-2"></i>
                          <span class="align-middle">Withdraw Requests</span>
                        </Link>
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
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                      <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="/admin"
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
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        data-toggle="dropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="/admin">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                  <img
                                    src="./assets/img/avatars/1.png"
                                    alt="avatar2"
                                    className="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <span className="fw-semibold d-block">
                                  John Doe
                                </span>
                                <small className="text-muted">Admin</small>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <div className="dropdown-divider"></div>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/adminlogin"
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

              {/* <!-- Content wrapper --> */}
              <div className="content-wrapper">
                {/* <!-- Content --> */}

                <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="row">
                    <div className="col-lg-8 mb-4 order-0">
                      <div
                        className="card"
                        style={{
                          width: "min-content",
                        }}
                      >
                        <div
                          className="d-flex align-items-end row"
                          style={{
                            width: "77vw",
                          }}
                        >
                          <div className="col-sm-7">
                            <div className="card-body">
                              <h5 className="card-title text-primary">
                                Hello Admin! 🎉
                              </h5>
                              <p className="mb-4">
                                Save Time and Start Digital Wallet!
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-5 text-center text-sm-left">
                            <div className="card-body pb-0 px-0 px-md-4">
                              <img
                                src="../assets/img/illustrations/man-with-laptop-light.png"
                                height="140"
                                alt="View Badge User"
                                data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                data-app-light-img="illustrations/man-with-laptop-light.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Transaction History --> */}
                    <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                      <div
                        className="card"
                        style={{
                          width: "min-content",
                        }}
                      >
                        <div className="card-header">
                          <h5
                            style={{
                              margin: 0,
                            }}
                          >
                            User Details
                          </h5>
                          <Link to="/userlists">
                            <p
                              style={{
                                margin: 0,
                              }}
                            >
                              Show all User Details
                            </p>
                          </Link>
                        </div>
                        <div
                          className="table-responsive text-nowrap"
                          style={{
                            overflowX: "scroll",
                            width: "75vw",
                          }}
                        >
                          <table className="table">
                            <thead>
                              <tr>
                                <th>S.No</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Bank Details</th>
                                <th>Balance Status</th>
                                <th>Beneficiary Status</th>
                                
                                <th>Block User</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              {allEmail.slice(0, 6)?.map((item, index) => (
                                <tr
                                  className={`table-${
                                    index % 2 === 0 ? "default" : "secondary"
                                  }`}
                                >
                                  <td>
                                    <i className="fab fa-sketch fa-lg text-warning me-3"></i>
                                    <strong>21/01/2023</strong>
                                  </td>
                                  <td>{item.username}</td>
                                  <td>
                                    <strong>{item.email}</strong>
                                  </td>
                                  <td>
                                    {/* <!-- Button trigger modal --> */}
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-toggle="modal"
                                      data-target={
                                        `#exampleModal` + item.username
                                      }
                                    >
                                      User Details
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div
                                      className="modal fade"
                                      id={`exampleModal` + item.username}
                                      tabindex="-1"
                                      role="dialog"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div
                                        className="modal-dialog"
                                        role="document"
                                      >
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="exampleModalLabel"
                                            >
                                              Bank Details
                                            </h5>
                                            <button
                                              type="button"
                                              className="close btn btn-primary"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">
                                                &times;
                                              </span>
                                            </button>
                                          </div>
                                          <div className="card-body">
                                            <form id="formAccountSettings">
                                              <div className="row">
                                                <div className="mb-3 col-md-6">
                                                  <label
                                                    for="firstName"
                                                    className="form-label"
                                                  >
                                                    Account Holder’s Name
                                                  </label>
                                                  <h5>{item.username}</h5>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                  <label
                                                    for="email"
                                                    className="form-label"
                                                  >
                                                    E-mail
                                                  </label>
                                                  <h5>{item.email}</h5>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                  <label
                                                    className="form-label"
                                                    for="phoneNumber"
                                                  >
                                                    Mobile Number
                                                  </label>
                                                  <h5>
                                                    {" "}
                                                    {item.MobileNo ? (
                                                      <>{item.MobileNo}</>
                                                    ) : (
                                                      <></>
                                                    )}
                                                    {item.MobileNo ? (
                                                      <>{item.MobileNo}</>
                                                    ) : (
                                                      <></>
                                                    )}
                                                  </h5>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                  <label
                                                    for="firstName"
                                                    className="form-label"
                                                  >
                                                    Bank Name
                                                  </label>
                                                  <h5>
                                                    {item.BankName ? (
                                                      <>{item.BankName}</>
                                                    ) : (
                                                      <></>
                                                    )}
                                                  </h5>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                  <label
                                                    className="form-label"
                                                    for="phoneNumber"
                                                  >
                                                    Account Number
                                                  </label>
                                                  <h5>
                                                    {item.AccountNo ? (
                                                      <>{item.AccountNo}</>
                                                    ) : (
                                                      <></>
                                                    )}
                                                  </h5>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                  <label
                                                    className="form-label"
                                                    for="phoneNumber"
                                                  >
                                                    IFSC of the Branch
                                                  </label>
                                                  <h5>
                                                    {item.IFSC ? (
                                                      <>{item.IFSC}</>
                                                    ) : (
                                                      <></>
                                                    )}
                                                  </h5>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                  <label
                                                    className="form-label"
                                                    for="country"
                                                  >
                                                    Account Type
                                                  </label>
                                                  <h5>
                                                    {item.Type ? (
                                                      <>{item.Type}</>
                                                    ) : (
                                                      <></>
                                                    )}
                                                  </h5>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                  <label
                                                    for="address"
                                                    className="form-label"
                                                  >
                                                    Address
                                                  </label>
                                                  <h5>
                                                    {item.Address ? (
                                                      <>{item.Address}</>
                                                    ) : (
                                                      <></>
                                                    )}
                                                  </h5>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                  <label
                                                    for="state"
                                                    className="form-label"
                                                  >
                                                    State
                                                  </label>
                                                  <h5>
                                                    {item.State ? (
                                                      <>{item.State}</>
                                                    ) : (
                                                      <></>
                                                    )}
                                                  </h5>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                  <label
                                                    for="zipCode"
                                                    className="form-label"
                                                  >
                                                    Zip Code
                                                  </label>
                                                  <h5>
                                                    {item.ZIP ? (
                                                      <>{item.ZIP}</>
                                                    ) : (
                                                      <></>
                                                    )}
                                                  </h5>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-primary"
                                            >
                                              Save changes
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    {/* <!-- Button trigger modal --> */}
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-toggle="modal"
                                      data-target={
                                        `#exampleModal3` + item.username
                                      }
                                    >
                                      Status
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div
                                      className="modal fade"
                                      id={`exampleModal3` + item.username}
                                      tabindex="-1"
                                      role="dialog"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div
                                        className="modal-dialog"
                                        role="document"
                                      >
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="exampleModalLabel"
                                            >
                                              Balance Status
                                            </h5>
                                            <br />
                                            {res ? <p>{res}</p> : <p></p>}

                                            <button
                                              type="button"
                                              className="btn btn-primary close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">
                                                &times;
                                              </span>
                                            </button>
                                          </div>
                                          <div className="card-body">
                                            <div className="row">
                                          <div className="mb-3 col-md-6">
                                            <label
                                              for="alloted"
                                              className="form-label"
                                            >
                                              Autherozed Balance
                                            </label>
                                            <div id="container">
                                              <p
                                                class="form-control border-0 shadow-none"
                                                contentEditable={isEditing2}
                                                style={Color2}
                                                onInput={handleChange2}
                                              >
                                                {item.allotedAmt ? (
                                                  <>{item.allotedAmt}</>
                                                ) : (
                                                  <> {text2} </>
                                                )}
                                              </p>
                                              {isEditing2 ? (
                                                <button
                                                  className="btn btn-secondary mx-3"
                                                  id="end-editing"
                                                  onClick={() => {
                                                    handleEndEditing2(
                                                      item.email
                                                    );
                                                  }}
                                                >
                                                  Done
                                                </button>
                                              ) : (
                                                <button
                                                  className="btn btn-secondary mx-3"
                                                  id="edit-button"
                                                  onClick={handleEdit2}
                                                >
                                                  Edit
                                                </button>
                                              )}
                                            </div>
                                          </div>
                                          <div className="mb-3 col-md-6">
                                            <label
                                              for="locked"
                                              className="form-label"
                                            >
                                              Lien Balance
                                            </label>
                                            <div id="container">
                                              <p
                                                contentEditable={isEditing}
                                                style={Color}
                                                onInput={handleChange}
                                                class="form-control border-0 shadow-none"
                                              >
                                                {item.lockedAmt ? (
                                                  <> {item.lockedAmt} </>
                                                ) : (
                                                  <> {text}</>
                                                )}
                                              </p>
                                              {isEditing ? (
                                                <button
                                                  className="btn btn-secondary mx-3"
                                                  id="end-editing"
                                                  onClick={() => {
                                                    handleEndEditing(
                                                      item.email
                                                    );
                                                  }}
                                                >
                                                  Done
                                                </button>
                                              ) : (
                                                <button
                                                  className="btn btn-secondary mx-3"
                                                  id="edit-button"
                                                  onClick={handleEdit}
                                                >
                                                  Edit
                                                </button>
                                              )}
                                            </div>
                                          </div>
                                          <div className="mb-3 col-md-6">
                                            <label
                                              for="ATW"
                                              className="form-label"
                                            >
                                              Available to Withdraw
                                            </label>
                                            <p class="form-control border-0 shadow-none">
                                              {text}
                                            </p>
                                          </div>
                                          <div className="mb-3 col-md-6">
                                            <label
                                              for="disbursed"
                                              className="form-label"
                                            >
                                              Disbursed Amount
                                            </label>
                                            <p class="form-control border-0 shadow-none">
                                              {text}
                                            </p>
                                          </div>
                                          </div>
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-primary"
                                            >
                                              Save changes
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    {/* <!-- Button trigger modal --> */}
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-toggle="modal"
                                      data-target={
                                        `#exampleModal4` + item.username
                                      }
                                      onClick={() => getbeneficiary(item._id)}
                                    >
                                      Beneficiaries
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div
                                      className="modal fade"
                                      id={`exampleModal4` + item.username}
                                      tabindex="-1"
                                      role="dialog"
                                      aria-labelledby="exampleModalLabel3"
                                      aria-hidden="true"
                                    >
                                      <div
                                        className="modal-dialog"
                                        role="document"
                                      >
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="exampleModalLabel3"
                                            >
                                              All Beneficiaries
                                            </h5>
                                            <button
                                              type="button"
                                              className="close btn-primary btn"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">
                                                &times;
                                              </span>
                                            </button>
                                          </div>
                                          <div className="card">
                                            <h5 className="card-header">
                                              Beneficiaries-List
                                            </h5>
                                            <div className="table-responsive text-nowrap">
                                              <table className="table">
                                                <thead>
                                                  <tr>
                                                    <th>Date</th>
                                                    <th>User Name</th>
                                                    <th>Account Number</th>
                                                    <th>Bank Name</th>
                                                  </tr>
                                                </thead>
                                                <tbody className="table-border-bottom-0">
                                                  <tr className="table-info">
                                                    <td>
                                                      <i className="fab fa-sketch fa-lg text-warning me-3"></i>
                                                      <strong>
                                                        21/01/2023
                                                      </strong>
                                                    </td>
                                                    <td>
                                                      {
                                                        benelists.BeneficiaryName
                                                      }
                                                    </td>
                                                    <td>
                                                      <strong>
                                                        {benelists.AccountNo}
                                                      </strong>
                                                    </td>
                                                    <td>
                                                      <strong>
                                                        {benelists.BankName}
                                                      </strong>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-primary"
                                            >
                                              Save changes
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  {/* <td>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-toggle="modal"
                                      data-target={
                                        `#exampleModal5` + item.username
                                      }
                                      key={item._id}
                                      onClick={() => withdrawreq(item.userId)}
                                    >
                                      Check
                                    </button>
                                    <div
                                      className="modal fade"
                                      id={`exampleModal5` + item.username}
                                      tabindex="-1"
                                      role="dialog"
                                      aria-labelledby="exampleModalLabel3"
                                      aria-hidden="true"
                                    >
                                      <div
                                        className="modal-dialog"
                                        role="document"
                                      >
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="exampleModalLabel3"
                                            >
                                              All Beneficiaries
                                            </h5>
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">
                                                &times;
                                              </span>
                                            </button>
                                          </div>
                                          <div className="card">
                                            <h5 className="card-header">
                                              Status
                                            </h5>
                                            <div className="table-responsive text-nowrap">
                                              <table className="table">
                                                <thead>
                                                  <tr>
                                                    <th>Withdraw Request</th>
                                                  </tr>
                                                </thead>
                                                <tbody className="table-border-bottom-0">
                                                  <tr className="table-info">
                                                    <td>
                                                      <i className="fab fa-sketch fa-lg text-warning me-3"></i>
                                                      <strong>
                                                        {checkbutton}
                                                      </strong>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-primary"
                                            >
                                              Save changes
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td> */}

                                  <td>
                                    <button
                                      className="btn btn-danger deactivate-account"
                                      key={item.email}
                                      onClick={() => block(item.email)}
                                      style={{
                                        borderadius: "5rem",
                                        background: "red",
                                        width: "min-content",
                                      }}
                                    >
                                      BLOCK
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* <!--/ Withdrawal History --> */}
                    <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                      <div
                        className="card"
                        style={{
                          width: "min-content",
                        }}
                      >
                        <div className="card-header">
                          <h5
                            style={{
                              margin: 0,
                            }}
                          >
                            Withdrawal Request
                          </h5>
                          <a href="withdraw-details.html">
                            <p
                              style={{
                                margin: 0,
                              }}
                            >
                              Show all Requests
                            </p>
                          </a>
                        </div>
                        <div
                          className="table-responsive text-nowrap"
                          style={{
                            overflowX: "scroll",
                            width: "75vw",
                          }}
                        >
                          <table
                            className="table"
                            style={{
                              width: "75vw",
                            }}
                          >
                            <thead>
                              <tr>
                                <th>Created On</th>
                                <th>User Name</th>
                                <th>Email</th>

                                <th>Amount</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              
                              {allwithdraw?.slice(0, 6)?.map((item, index) => (

                                <>
                          
                                  {item.withdrawmessage ===
                                  "No withdraw request for the user at this moment" ? (
                                    <>{item.withdrawmessage}</>
                                  ) : (
                                    <>
                                      <tr className="table-secondary">
                                        <td>
                                          <i className="fab fa-sketch fa-lg text-warning me-3"></i>
                                          <strong>{item.createdAt}</strong>
                                        </td>
                                        <td>{item.username}</td>
                                        <td>
                                          <strong>{item.email}</strong>
                                        </td>

                                        <td>
                                          <strong>{item.amount}</strong>
                                        </td>
                                        <td>
                                          <select
                                            name="cars"
                                            id="cars"
                                            className="badge bg-label-primary me-1"
                                            onChange={() => withdrawreq(item.userId)}
                                          >
                                            <option processed="saab">
                                              Processing
                                            </option>
                                            <option processed="saab">
                                              Processed
                                            </option>
                                           
                                          </select>
                                        </td>
                                      </tr>
                                    </>
                                  )}
                                </>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* <!-- / Content --> */}

                      {/* <!-- Footer --> */}
                      <footer className="content-footer footer bg-footer-theme my-4">
                        <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                          <div className="mb-2 mb-md-0">
                            ©
                            <script>
                              document.write(new Date().getFullYear());
                            </script>
                            , made with ❤️ by
                            <p>CityGlobal</p>
                          </div>
                        </div>
                      </footer>
                      {/* <!-- / Footer --> */}

                      <div className="content-backdrop fade"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
