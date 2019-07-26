import PropTypes from "prop-types";

const CommitMessage = ({ commit }) => {
	return commit.message;
};

CommitMessage.propTypes = {
	commit: PropTypes.object.isRequired
};

export default CommitMessage;
