/* react */
import React, { memo } from "react";
/* assets */
import { ReactComponent as OwlDeadAsset } from "./OwlDead.asset.svg";
/* utils */
import { mergeStrings } from "../../utils";
/* styles */
import "./OwlDead.styles.scss";

const OwlDead = ({ className, ...rest }) => {
  return (
    <i className={mergeStrings({ values: ["OwlDead", className] })} {...rest}>
      <OwlDeadAsset />
    </i>
  );
};

export default memo(OwlDead);
