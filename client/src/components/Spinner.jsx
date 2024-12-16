import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
	return (
		<div className="absolute w-screen h-screen flex items-center justify-center">
			<RotatingLines
				visible={true}
				height="96"
				width="96"
				color="blue"
				strokeWidth="5"
				animationDuration="0.75"
				ariaLabel="rotating-lines-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		</div>
	);
};

export default Spinner;
