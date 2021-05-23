import { mount } from "marketing/MarketingShow";

import React, { useRef, useEffect } from "react";

const MarketingShow = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};

export default MarketingShow;
