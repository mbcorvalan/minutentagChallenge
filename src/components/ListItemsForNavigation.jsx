/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import React, { useEffect, useRef, useState } from 'react'

// Simulating a list of items to render.
const itemsList = Array(10).fill({
	// Add properties as needed for your items
	name: 'Item',
})

/**
 * Represents a component for navigating through a list of items using the keyboard.
 *
 * @param {Object} props - The component's properties.
 */
export function ListItemsForNavigation(props) {
	const [selectedIndex, setSelectedIndex] = useState(null)
	const activeItemRef = useRef(null)

	useEffect(() => {
		if (activeItemRef.current) {
			activeItemRef.current.focus()
		}
	}, [selectedIndex])

	/**
	 * Handles keyboard input for item navigation.
	 *
	 * @param {KeyboardEvent} event - The keyboard event.
	 */
	function handleKeyDown(event) {
		if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
			event.preventDefault()
			if (selectedIndex === null) {
				setSelectedIndex(0)
			} else if (selectedIndex > 0) {
				setSelectedIndex(selectedIndex - 1)
			}
		} else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
			event.preventDefault()
			if (selectedIndex === null) {
				setSelectedIndex(0)
			} else if (selectedIndex < itemsList.length - 1) {
				setSelectedIndex(selectedIndex + 1)
			}
		}
	}

	return (
		<ul onKeyDown={handleKeyDown} tabIndex={0}>
			{itemsList.map((item, index) => (
				<li
					key={index}
					tabIndex={selectedIndex === index ? 0 : -1}
					ref={selectedIndex === index ? activeItemRef : null}
				>
					{item.name}
				</li>
			))}
		</ul>
	)
}
