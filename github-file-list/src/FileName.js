import React from "react";

import PropTypes from "prop-types";

const FileName = ({ file }) => {
	return <>{file.name}</>;
};

FileName.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileName;
