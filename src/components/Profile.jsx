import React from "react";
import PropTypes from "prop-types";

export const Profile = ({
	username,
	tag,
	location,
	avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
	stats,
}) => {
	return (
		<div class="profile">
			<div class="description">
				<img src={avatar} alt={username} width="100" class="avatar" />
				<p class="name">{username}</p>
				<p class="tag">@{tag}</p>
				<p class="location">{location}</p>
			</div>
			<ul class="stats">
				<li>
					<span className="label">Followers</span>
					<span className="quantity">{stats.followers}</span>
				</li>
				<li>
					<span className="label">Views</span>
					<span className="quantity">{stats.views}</span>
				</li>
				<li>
					<span className="label">Likes</span>
					<span className="quantity">{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
};

Profile.propTypes = {
	avatar: PropTypes.string,
	username: PropTypes.string.isRequired,
	tag: PropTypes.number.isRequired,
};
