import React, { useState } from 'react';
import PropTypes from 'prop-types';
const ProductDescription = ({ description }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  //Toggle text display
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div>
      <p className="text-gray-700">
        {isReadMore ? description : `${description.substring(0, 100)}...`}
      </p>

      {/* Button to toggle between 'Read More' and 'Read Less' */}
      <button
        onClick={toggleReadMore}
        className="mt-2 text-blue-500 hover:underline focus:outline-none"
      >
        {isReadMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
export default ProductDescription;