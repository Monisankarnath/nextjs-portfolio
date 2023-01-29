import React, { ReactElement } from "react";

type NestedLayoutProps = {
  children: ReactElement;
};

const NestedLayout = ({ children }: NestedLayoutProps) => {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default NestedLayout;
