import React, { useEffect, useState } from "react";
import MainBox from "../main-box/MainBox";
import axios from "axios";

import deskTopImage from "../../imgs/pattern-bg-desktop.png";

const Header = ({ setLocation }) => {
  const [ipAddress, setIpAddress] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  // To Search for Any ip Address Form User
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validIp =
      /([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(\d{1,3}\.){3}\d{1,3}/.test(
        ipAddress
      );
    try {
      if (validIp) {
        const res = await axios.get(
          `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_pIiTB3rhXI8un5benTxAakKoT3kjf&ipAddress=${ipAddress}`
        );
        setData(res.data);
        setLocation({
          lat: res.data.location.lat,
          lng: res.data.location.lng,
        });
        setIpAddress("");
      } else {
        setError("Invalid IP address");
      }
    } catch (error) {
      setError("Some Thing Wrong Please Try Again");
      console.log(error);
    }
  };

  // This to make my Own IP address on the map on the initial page load
  useEffect(() => {
    const fetchLocation = async () => {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_pIiTB3rhXI8un5benTxAakKoT3kjf`
      );
      setData(res.data);
      setLocation({
        lat: res.data.location.lat,
        lng: res.data.location.lng,
      });
    };
    fetchLocation();
  }, []); // eslint-disable-line

  return (
    <header
      className="h-[47svh] md:h-[40svh] pt-8 text-center  relative z-10"
      style={{ backgroundImage: `url(${deskTopImage})` }}
    >
      <h1 className="font-semibold text-3xl text-white mb-4">
        IP Address Tracker
      </h1>
      <form className="w-[85%] md:w-[500px]   m-auto flex">
        <input
          type="text"
          required
          className="p-4 font-semibold text-md md:placeholder:text-md  md:text-lg flex-1 rounded-s-xl outline-none w-full"
          placeholder="Search For Any Ip Address or Domain"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="font-bold text-white bg-black px-6 rounded-e-xl text-xl"
        >
          &gt;
        </button>
      </form>
      {error && (
        <p className="text-red-700 text-md font-semibold mb-1">{error}</p>
      )}
      <MainBox data={data} />
    </header>
  );
};

export default Header;
