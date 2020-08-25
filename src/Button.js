import React from "react";

export default function Button({ handleDelete }) {
  return (
    <button type="button" className="button" onClick={handleDelete}>
      delete me
    </button>
  );
}
