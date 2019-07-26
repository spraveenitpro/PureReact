import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

import FileListItem from "./FileListItem";

const testFiles = [
	{
		id: 1,
		name: "src",
		type: "folder",
		updated_at: "2017-07-11 21:24:00",
		latestCommit: {
			message: "initial commit"
		}
	},
	{
		id: 2,
		name: "tests",
		type: "folder",
		updated_at: "2019-07-11 21:24:00",
		latestCommit: {
			message: "initial commit"
		}
	},
	{
		id: 3,
		name: "README",
		type: "file",
		updated_at: "2018-07-11 21:24:00",
		latestCommit: {
			message: "Added a readme"
		}
	}
];

const FileList = ({ files }) => (
	//return <>{files.map(file => file.name)}</>;

	<table className='file-list'>
		<tbody>
			{files.map(file => (
				<FileListItem key={file.id} file={file} />
			))}
		</tbody>
	</table>
);

FileList.propTypes = {
	files: PropTypes.array
};

ReactDOM.render(<FileList files={testFiles} />, document.getElementById("root"));
