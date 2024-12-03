import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div>
        <CircularProgress thickness={1} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
