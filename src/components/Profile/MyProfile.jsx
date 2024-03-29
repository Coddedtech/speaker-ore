import React from "react";
import user from "../images/profile.png";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import AccountSide from "../accountSide";
export default function MyProfile() {
  const [userData, setUser] = useState("");
  const planId = localStorage.getItem("@planId")
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/auth/get-loogedin/${JSON.parse(localStorage.getItem("@token"))?.userdata?.id
        }`
      )
      .then((data) => {
        console.log('userdata:', data?.data);
        setUser(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="mp-parent">
        <div className="mp-left">
          <AccountSide userData={userData} />
          <div style={{ marginLeft: "2rem", display: "flex" }}>
            <span style={{ fontSize: "2rem" }}>
              <AiOutlineSafetyCertificate />
            </span>
            <span
              style={{
                fontSize: "small",
                marginLeft: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Your information is secured with <br /> SpeakerOre
            </span>
          </div>
        </div>
        <div className="ep-right">
          <div className="eprcard">
            <div className="avatar-parent">
              <img src="" alt="" />
            </div>
            <p>
              Hi, <b style={{ fontWeight: "500" }}>{userData?.name}!</b>
            </p>
            <span className="eprtext1">{userData?.role}</span>
            <div style={{ marginTop: "3rem" }} className="eprbtn2">
              Create a new event
            </div>
            <div className="eprbtn2">
              <a href="/events">SpeakerOre exclusive Events</a>
            </div>
            <div
              style={{
                marginTop: "0",
                background: "rgba(255, 191, 25, 0.4)",
              }}
              className="eprbtn1"
            >
              Subscribed
            </div>
          </div>

          <div className="eprcard">
            <p>
              <b style={{ fontWeight: "500" }}>Resources</b>
            </p>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.3rem",
              }}
              className="eprtext1"
            >
              <div>About Us</div>
              <div>
                <BsChevronRight />
              </div>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.3rem",
              }}
              className="eprtext1"
            >
              <div>How it works</div>
              <div>
                <BsChevronRight />
              </div>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.3rem",
              }}
              className="eprtext1"
            >
              <div>Privacy Policy</div>
              <div>
                <BsChevronRight />
              </div>
            </span>
            <div style={{ marginTop: "10px" }} className="eprbtn1">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
