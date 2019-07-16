import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";
import PropTypes from "prop-types";

var testTweet = {
	message: "This time you are going to the finish line..whatever that is..",
	gravatar: "80ad7e627570e773e0048ffb5208bba3",
	author: {
		handle: "catperson",
		name: "I am a catperson!"
	},
	likes: 535,
	retweets: 5670,
	timestamp: "2016-07-30 21:24:37"
};

function Tweet({ tweet }) {
	return (
		<div className='tweet'>
			<Avatar hash={tweet.gravatar} />
			<div className='content'>
				<NameWithHandle author={tweet.author} />
				<Message text={tweet.message} />
				<div className='buttons'>
					<ReplyButton />
					<RetweetButton countre={tweet.retweets} />
					<LikeButton countli={tweet.likes} />
					<MoreOptionsButton />
					<Time time={tweet.timestamp} />
				</div>
			</div>
		</div>
	);
}

function Avatar({ hash }) {
	var url = `https://www.gravatar.com/avatar/${hash}`;
	return <img src={url} className='avatar' alt='avatar' />;
}

function Message({ text }) {
	return <div className='message'>{text}</div>;
}

function NameWithHandle({ author }) {
	return (
		<span className='name-with-handle'>
			<span className='name'>{author.handle}</span>
			<span className='handle'>{author.name}</span>
		</span>
	);
}

NameWithHandle.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		handle: PropTypes.string.isRequired
	}).isRequired
};

function getRetweetCount(count) {
	if (count > 0) {
		return <span className='retweet-count'>{count}</span>;
	} else {
		return null;
	}
}

const Time = ({ time }) => {
	const timeString = moment(time).fromNow();
	return <span className='time'>{timeString}</span>;
};

const ReplyButton = () => <i className='fa fa-reply reply-button' />;

const RetweetButton = ({ countre }) => (
	<span className='retweet-button'>
		<i className='fa fa-retweet' />
		{getRetweetCount(countre)}
	</span>
);

const LikeButton = ({ countli }) => (
	<span className='like-button'>
		<i className='fa fa-heart' />
		<span className='like-count'>{countli ? countli : null}</span>
	</span>
);

LikeButton.propTypes = {
	countli: PropTypes.number
};

const MoreOptionsButton = () => <i className='fa fa-ellipsis-h more-options-button' />;

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById("root"));
