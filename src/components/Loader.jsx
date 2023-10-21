import React from "react";

import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <MutatingDots
        height="100"
        width="100"
        color="#604090"
        secondaryColor="#602090"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
