import React, { useState } from "react";
import { Button, Input, Text } from "@components/ui";

const GENERATE_TOKEN_URL = "/api/cimet/generate-token";
const GET_ADDRESS = "/api/cimet/search-address";

function Cimet() {
  let [token, setToken] = useState({
    isValid: false,
    token: "",
  });
  let [address, setAddress] = useState("");
  let [message, setMessage] = useState("");
  let [data, setData] = useState([]);

  const getToken = () => {
    fetch(GENERATE_TOKEN_URL)
      .then(function (response) {
        if (
          response.status == 422 ||
          response.status == 405 ||
          response.status == 0
        ) {
          setToken({ isValid: false, token: "" });
          return { status: 0 };
        }
        return response.json();
      })
      .then((data) => {
        if (data.status == 0) {
          setToken({ isValid: false, token: "" });
        }

        if (data.status == 1) {
          setToken({ isValid: true, token: data.data.token });
        }
      });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setData([]);
    setMessage("");
    fetch(GET_ADDRESS, {
      method: "POST",
      body: JSON.stringify({ search_address: address, token: token.token }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status == 1) {
          setData(data.data);
        } else {
          if (data.errors) {
            setMessage(data.errors.search_address[0]);
          } else {
            setMessage(data.message);
          }
        }
      });
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4 p-4">
      <Text variant="sectionHeading"> CIMET - Get Australian Address </Text>
      {!token.isValid && <Button onClick={getToken}> GET TOKEN </Button>}
      {token.isValid && (
        <form onSubmit={clickHandler} className="grid grid-cols-8 gap-4">
          <Input
            value={address}
            wrapperClassName="col-span-8 md:col-span-6 flex items-center"
            onChange={(e) => {
              setAddress(e);
            }}
          />
          <Button type="submit" className="col-span-8 md:col-span-2">
            GET TOKEN
          </Button>
        </form>
      )}
      {message && (
        <Text variant="sectionHeading" className="mx-auto">
          {message}
        </Text>
      )}
      {data.length > 0 && (
        <ul className="w-full flex flex-col">
          {data.map((addr) => (
            <li
              className="bg-gray-300 px-4 py-2 mb-2 rounded-lg"
              key={addr.RecordId}
            >
              <Text> {addr.DisplayLine} </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cimet;
