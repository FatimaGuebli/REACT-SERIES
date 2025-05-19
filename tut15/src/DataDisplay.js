import React from "react";

// Recursive render function
const renderItem = (item, structure) => {
  return structure.map((field, index) => {
    if (typeof field === "string") {
      return (
        <div key={index}>
          <strong>{field}:</strong> {item[field]}
        </div>
      );
    }

    if (typeof field === "object") {
      // handle nested fields
      return Object.entries(field).map(([key, nestedFields]) => {
        const nestedItem = item[key] || {};

        return (
          <div key={key} style={{ marginLeft: "20px" }}>
            <strong>{key}:</strong>
            {renderItem(nestedItem, nestedFields)}
          </div>
        );
      });
    }

    return null;
  });
};

function DataDisplay({ data, clickedButton }) {
  if (!clickedButton || !clickedButton.structure) {
    return <div>No structure selected</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      {Array.isArray(data) ? (
        data.map((item) => (
          <div
            key={item.id || Math.random()}
            style={{
              border: "1px solid #ccc",
              marginBottom: "15px",
              padding: "10px",
            }}
          >
            {renderItem(item, clickedButton.structure)}
          </div>
        ))
      ) : (
        <div>{renderItem(data, clickedButton.structure)}</div>
      )}
    </div>
  );
}

export default DataDisplay;
