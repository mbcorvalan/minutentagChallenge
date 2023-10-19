/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

/**
 * Represents a star rating component.
 * @component
 */
export function Rating() {
	const [rating, setRating] = useState(null)

	/**
	 * Handles the click event on a star to set the rating.
	 * @param {number} currentRate - The value of the clicked star.
	 */
	const handleStarClick = (currentRate) => {
		setRating(currentRate)
	}

	return (
		<>
			{Array(5)
				.fill()
				.map((_, index) => {
					const currentRate = index + 1
					const isRated = currentRate <= rating

					return (
						<label key={index}>
							<input
								type='radio'
								name='rate'
								value={currentRate}
								onClick={() => handleStarClick(currentRate)}
							/>
							<FaStar size={50} color={isRated ? 'yellow' : 'grey'} />
						</label>
					)
				})}
		</>
	)
}
