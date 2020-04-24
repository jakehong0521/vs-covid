import React from 'react'

export {
	updateBoxTextOrganic
	updateBoxTextPaid
}

function updateBoxTextOrganic() {
	return (
		<div>
			<span aria-label='Update' role='img'>📣</span> <b>Update on April 21, 2020</b>
			<br/>
			Over the past week, there's been an uptick in the number of Covid-related posts, but a decrease in their average performance. This might point to brand audiences being fatigued by the number of Covid-related posts they see on social media, especially if those posts seem inauthentic.
			<br/><br/>
			However, some of the top keywords still include "mask" and "covid", driven by posts like <a className='text-underline vs-text-black' href='https://www.instagram.com/p/B-Qqb6VgSst/?utm_source=ig_embed' rel='noopener noreferrer' target='_blank'>this one</a> that talk about mask production and other charitable acts.
			<br/><br/>
			Try using positive keywords like these ones that made the top list: create, world, making, life, hope, and moment. By the way, two fun keywords that were trending today include "cool cat" and "kittens"!
		</div>
	)
}

function updateBoxTextPaid() {
	return (
		<div>
			<span aria-label='Update' role='img'>📣</span> <b>Update on April 15, 2020</b>
			<br/>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			<br/><br/>
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>
	)
}
