/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */
import { useState } from 'react'

/**
 * Represents a list of teams with various sorting and filtering options.
 * @component
 */
export function TeamsList() {
	const [teams, setTeams] = useState(TEAMS)

	/**
	 * Orders the teams by their total score in descending order (highest to lowest).
	 */
	function orderTeamByScoreHighestToLowest() {
		const sortedTeams = [...teams]
		sortedTeams.sort((a, b) => {
			return (
				b.games.reduce((acc, game) => acc + game.score, 0) -
				a.games.reduce((acc, game) => acc + game.score, 0)
			)
		})
		setTeams(sortedTeams)
	}

	/**
	 * Orders the teams by their total score in ascending order (lowest to highest).
	 */
	function orderTeamByScoreLowestToHighest() {
		const sortedTeams = [...teams]
		sortedTeams.sort((a, b) => {
			return (
				a.games.reduce((acc, game) => acc + game.score, 0) -
				b.games.reduce((acc, game) => acc + game.score, 0)
			)
		})
		setTeams(sortedTeams)
	}

	/**
	 * Filters the teams to show only those with at least 3 players.
	 */
	function teamsWithMoreThanThreePlayers() {
		const filteredTeams = teams.filter((team) => team.players.length > 3)
		setTeams(filteredTeams)
	}

	return (
		<div>
			<button className='btn--primary' onClick={() => setTeams(TEAMS)}>
				Initial list
			</button>
			<button
				className='btn--primary'
				onClick={orderTeamByScoreHighestToLowest}
			>
				Highest to Lowest
			</button>
			<button
				className='btn--primary'
				onClick={orderTeamByScoreLowestToHighest}
			>
				Lowest to Highest
			</button>
			<button className='btn--primary' onClick={teamsWithMoreThanThreePlayers}>
				Teams with at least 3 players
			</button>

			<ul className='teams'>
				{teams.map((team, index) => (
					<li key={index}>
						<p>Team Name: {team.name}</p>
						<p>Player’s quantity: {team.players.length}</p>
						<p>
							Total Score of the team:{' '}
							{team.games.reduce((acc, game) => acc + game.score, 0)}
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}

const TEAMS = [
	{
		name: 'Red',
		players: ['Robin', 'Rey', 'Roger', 'Richard'],
		games: [
			{
				score: 10,
				city: 'LA',
			},
			{
				score: 1,
				city: 'NJ',
			},
			{
				score: 3,
				city: 'NY',
			},
		],
	},
	{
		name: 'Blue',
		players: ['Bob', 'Ben'],
		games: [
			{
				score: 6,
				city: 'CA',
			},
			{
				score: 3,
				city: 'LA',
			},
		],
	},
	{
		name: 'Yellow',
		players: ['Yesmin', 'Yuliana', 'Yosemite'],
		games: [
			{
				score: 2,
				city: 'NY',
			},
			{
				score: 4,
				city: 'LA',
			},
			{
				score: 7,
				city: 'AK',
			},
		],
	},
]
