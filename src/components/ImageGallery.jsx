/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import React, { useState } from 'react'

/**
 * Represents an individual image in the gallery.
 *
 * @param {Object} props - The component's properties.
 * @param {string} props.src - The source URL of the image.
 * @param {Function} props.onRemove - The function to remove the image.
 */
function Image({ src, onRemove }) {
	return (
		<div className='image__wrapper'>
			<img src={src} alt='' />
			<button className='image__remove' onClick={onRemove}>
				X
			</button>
		</div>
	)
}

/**
 * Represents an image gallery component.
 *
 * @param {Object} props - The component's properties.
 * @param {Array} props.links - The list of image URLs to display.
 */
export function ImageGallery({ links }) {
	// Utilizes local state to track the images to be displayed in the gallery.
	const [images, setImages] = useState(links)

	/**
	 * Handles the removal of an image from the gallery.
	 *
	 * @param {number} index - The index of the image to remove.
	 */
	const handleRemoveImage = (index) => {
		// Creates a copy of the images array without the image at the 'index'.
		const updatedImages = [...images]
		updatedImages.splice(index, 1)
		setImages(updatedImages)
	}

	return (
		<div>
			{images?.map((link, index) => (
				<Image
					key={index}
					src={link}
					onRemove={() => handleRemoveImage(index)}
				/>
			))}
		</div>
	)
}
