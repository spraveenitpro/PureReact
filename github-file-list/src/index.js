import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import { file } from "@babel/types";

const testFiles = [
	{
		id: 1,
		name: "src",
		type: "folder",
		updated_at: "2016-07-11 21:24:00",
		latestCommit: {
			message: "initial commit"
		}
	},
	{
		id: 2,
		name: "tests",
		type: "folder",
		updated_at: "2016-07-11 21:24:00",
		latestCommit: {
			message: "initial commit"
		}
	},
	{
		id: 3,
		name: "README",
		type: "file",
		updated_at: "2016-07-11 21:24:00",
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
				<tr className='file-list-item' key={file.id}>
					<td>{file.name}</td>
				</tr>
			))}
		</tbody>
	</table>
);

FileList.propTypes = {
	files: PropTypes.array
};

ReactDOM.render(<FileList files={testFiles} />, document.getElementById("root"));
