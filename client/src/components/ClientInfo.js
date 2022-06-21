import React from "react";
import { FaPhone, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
export default function ClientInfo({ client }) {
  return (
    <>
      <h3>Client Information</h3>
      <hr />
      <div className="border-1">
        <ul>
          <li className="">{client.name}</li>
          <li className="">{client.email}</li>
          <li className="">{client.phone}</li>
        </ul>
      </div>
    </>
  );
}
