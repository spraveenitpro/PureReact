import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function FileIcon({ file }) {
	let icon = "far fa-file-alt";
	if (file.type === "folder") {
		icon = "fa-folder";
	}

	return <i className={`fa ${icon}`} />;
}

FileIcon.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileIcon;
