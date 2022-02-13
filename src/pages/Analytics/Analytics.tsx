import { FC } from 'react';
import { Helmet } from "react-helmet-async";
import {
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Analytics: FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<>
		  <Helmet>
        <title>{"Analytics"}</title>
        <meta name="description" content={"Analytics page"} />
      </Helmet>
		</>
	)
}

export default Analytics
