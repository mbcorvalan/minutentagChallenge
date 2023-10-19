/**
 * Finish the PlayerStatus component so that it follows the current status of the player.
 * - The status can be either "online" or "away".
 * - When the component first renders, the player should be "online".
 * - The toggleStatus function should change the status variable.
 * - The component should count how many times the user changed their status, using the counter.
 * - When the component first renders, the counter should be 1.
 * - The counter should be updated within useEffect when status changes.
 *
 * For example, after the first render, the div element with id root should look like this:
 *
 *   <div>
 *     <h1>Online</h1>
 *     <h3>1</h3>
 *     <button>Toggle status</button>
 *   </div>
 */
import { useState, useEffect } from 'react'

/**
 * Represents a player status component that toggles between 'Online' and 'Away' status.
 * It also keeps track of how many times the status has changed.
 */
export function PlayerStatus() {
	const initialState = 0
	const [status, setStatus] = useState('Online')
	const [counter, setCounter] = useState(initialState) // Initialize the counter to 1

	/**
	 * Toggles between 'Online' and 'Away' status.
	 */
	function onToggleStatus() {
		// Toggle the status between 'Online' and 'Away'
		setStatus(status === 'Online' ? 'Away' : 'Online')
	}

	/**
	 * An effect that runs when the 'status' state changes.
	 * It increments the counter each time the 'status' changes.
	 */
	useEffect(() => {
		// Increment the counter each time the 'status' changes
		setCounter(counter + 1)
	}, [status]) // This effect runs when 'status' changes

	return (
		<div>
			<h1>{status}</h1>
			<h3>{counter}</h3>
			<button className='btn--primary' onClick={onToggleStatus}>
				Toggle status
			</button>
		</div>
	)
}
