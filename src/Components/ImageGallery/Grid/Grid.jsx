
import React from "react"; 
export function Grid({ children, columns }) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridGap: 20,
          padding: 80,
        }}
      >
        {React.Children.map(children, (child, index) => {
          // Check if this is the first child
          const isFirst = index === 0;
  
          // Define the grid styles for the first child
          const gridStyles = isFirst
            ? {
                gridColumn: 'span 2', // Takes up 2 columns
                gridRow: 'span 2',    // Takes up 2 rows
              }
            : {}; // Default styles for other children
  
          return <div style={gridStyles}>{child}</div>;
        })}
      </div>
    );
  }
  