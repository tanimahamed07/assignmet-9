import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";

const ServiceCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="card bg-white shadow-lg rounded-lg flex flex-col h-full hover:shadow-xl transition-shadow"
    >
      <Fade cascade damping={0.2} triggerOnce={true}>
        <figure>
          <img
            src={item.image}
            alt={item.title}
            className="h-48 w-full object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
        </figure>
        <div className="card-body flex flex-col flex-1">
          <h3 className="card-title text-black text-lg font-semibold">
            {item.title}
          </h3>
          <p className="text-gray-600 flex-1">{item.shortDesc}</p>
          <p className="text-black">{item.price}</p>
          <Link
            to={`/details/${item.id}`}
            state={{ item }}
            className="btn btn-primary mt-3"
          >
            See Details
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default ServiceCard;
