import React from "react";
import { Link } from "react-router-dom";

import DisneyLogo from "../images/disney-logo.svg";
import ProfileAvatar from "../images/profile-avatar.png";

import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import PlusIcon from "../icons/PlusIcon";
import StarIcon from "../icons/StarIcon";
import FilmIcon from "../icons/FilmIcon";
import TVIcon from "../icons/TVIcon";

function Navbar(props) {
	return (
		<div className="mb-8">
			<nav className="flex sticky justify-between items-center px-9 py-3">
				<div className="flex items-center">
					<img
						src={DisneyLogo}
						alt="Disney Plus"
						className="h-12 mr-16"
					/>

					<div className="hidden md:flex items-center text-white text-sm space-x-8">
						<NavLink to="/" label="Home" icon={HomeIcon} />
						<NavLink
							to="/search"
							label="Search"
							icon={SearchIcon}
						/>
						<NavLink
							to="/watchlist"
							label="Watchlist"
							icon={PlusIcon}
						/>
						<NavLink
							to="/originals"
							label="Originals"
							icon={StarIcon}
						/>
						<NavLink to="/movies" label="Movies" icon={FilmIcon} />
						<NavLink to="/series" label="Series" icon={TVIcon} />
					</div>
				</div>

				<img
					src={ProfileAvatar}
					alt="Profile"
					className="h-10 rounded-full cursor-pointer"
				/>
			</nav>

			<div className="flex md:hidden justify-between items-center text-white text-sm mt-4 px-9">
				<NavLink to="/" label="Home" icon={HomeIcon} />
				<NavLink to="/search" label="Search" icon={SearchIcon} />
				<NavLink to="/watchlist" label="Watchlist" icon={PlusIcon} />
				<NavLink to="/originals" label="Originals" icon={StarIcon} />
				<NavLink to="/movies" label="Movies" icon={FilmIcon} />
				<NavLink to="/series" label="Series" icon={TVIcon} />
			</div>
		</div>
	);
}

function NavLink(props) {
	return (
		<Link to={props.to} className="flex items-center space-x-2 group">
			<props.icon className="inline h-4" />
			<span className="hidden lg:inline uppercase font-medium tracking-wider border-b border-white border-opacity-0 lg:group-hover:border-opacity-100 py-1 transition-all duration-300 ease-in-out">
				{props.label}
			</span>
		</Link>
	);
}

export default Navbar;
