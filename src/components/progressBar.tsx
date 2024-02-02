import * as React from "react";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

type Props = {
  value: number;
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => {
  return {
    height: 5,
    width: "150px",
    borderRadius: 5,

    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },

    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: "#25A56A",
      // backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  };
});

function ProgressBar({ value }: Props) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={value} />
      </Box>
    </>
  );
}

export default React.memo(ProgressBar);
