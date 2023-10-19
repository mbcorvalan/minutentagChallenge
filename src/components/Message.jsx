/*
 * The Message component contains an anchor element and
 * a paragraph below the anchor. Rendering of the paragraph
 * should be toggled by clicking on the anchor element
 * using the following logic:
 *
 * - At the start, the paragraph should not be rendered.
 * - After a click, the paragraph should be rendered.
 * - After another click, the paragraph should not be rendered.
 * - Finish the Message component by implementing this logic.
 */

import React, { useState } from 'react'

/**
 * Represents a message component that shows or hides a paragraph when a link is clicked.
 */
export function Message() {
	const [showParagraph, setShowParagraph] = useState(false)

	/**
	 * Handles the click event for the link to toggle the visibility of the paragraph.
	 *
	 * @param {Event} event - The click event.
	 */
	const handleLinkClick = (event) => {
		event.preventDefault() // Prevents the default link behavior.

		// Toggle the state to show or hide the paragraph.
		setShowParagraph(!showParagraph)
	}

	return (
		<>
			<a href='#test' onClick={handleLinkClick}>
				Want to buy a new car?
			</a>
			{showParagraph && <p>Call +11 22 33 44 now!</p>}
		</>
	)
}
