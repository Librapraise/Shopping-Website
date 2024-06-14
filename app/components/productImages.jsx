"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ items }) => {
  const [index, setIndex] = useState(0);

  // Check if items array is defined and has elements
  if (!items || items.length === 0) {
    return <div>No images available</div>;
  }

  // Check if the current index is within the bounds
  if (index < 0 || index >= items.length) {
    setIndex(0); // Reset to the first item if index is out of bounds
  }

  return (
    <div>
      <div className="h-[450px] relative">
        <Image 
          src={items[index].image?.url || "/fallback-image.png"} // Fallback image if URL is not available
          alt="Product Image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex justify-between gap-4 mt-8">
        {items.map((item, i) => (
          <div 
            className={`w-1/4 h-32 gap-4 mt-8 cursor-pointer relative ${index === i ? "opacity-50" : ""}`} 
            key={item._id || i} // Use a unique key, fallback to index if _id is not available
            onClick={() => setIndex(i)} // Set index to the clicked item's index
          >
            <Image
              src={item.image?.url || "/fallback-image.png"} // Fallback image if URL is not available
              alt="Thumbnail"
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
