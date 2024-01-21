import React from "react";
import PreviewCard from "../components/PreviewCard";
import { useParams } from "react-router-dom";
import { data } from "../assets/data";

const Preview = (props) => {
  const { id } = useParams();
  const bottleId = Number(id);

  const bottles = data.bottle;

  const filteredItems = bottles.filter(
    (s) => s.price !== null && s.description !== null
  );

  const qtyUpdate = filteredItems.map((item) => {
    return { ...item, qty: 1 };
  });

  const items = qtyUpdate.filter((item) => item.id === bottleId);
  const bottle = items[0];

  return (
    <div className="">
      <PreviewCard bottle={bottle} />
    </div>
  );
};

export default Preview;
