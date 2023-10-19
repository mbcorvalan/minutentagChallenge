/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import { useState, useCallback } from 'react'

/**
 * Component Product representing a product in the grocery store list.
 *
 * @param {Object} props - The component's properties.
 * @param {Object} props.product - The product details.
 * @param {string} props.product.name - The product's name.
 * @param {number} props.product.votes - The number of votes for the product.
 * @param {Function} props.handleVote - The function to handle votes for the product.
 */
const Product = ({ product, handleVote }) => {
	/**
	 * Handles a positive vote for the product.
	 */
	const handlePlus = () => {
		handleVote(product, 1)
	}

	/**
	 * Handles a negative vote for the product.
	 */
	const handleMinus = () => {
		handleVote(product, -1)
	}

	return (
		<li>
			<span>
				{product.name} - votes: {product.votes}
			</span>
			<button className='btn--primary' onClick={handlePlus}>
				+
			</button>
			<button className='btn--primary' onClick={handleMinus}>
				-
			</button>
		</li>
	)
}

/**
 * Component Grocery representing a list of products in the grocery store.
 *
 * @param {Object} props - The component's properties.
 * @param {Array} props.products - The list of products.
 */
export const Grocery = ({ products }) => {
	const [items, setItems] = useState(products)

	/**
	 * Handles votes for a specific product.
	 *
	 * @param {Object} product - The product details.
	 * @param {number} value - The vote value (positive or negative).
	 */
	const handleVote = useCallback(
		(product, value) => {
			const index = products.indexOf(product)
			const newProducts = [...products]
			newProducts[index].votes += value
			setItems(newProducts)
		},
		[products]
	)

	return (
		<ul>
			{items.map((item, index) => {
				return <Product key={index} product={item} handleVote={handleVote} />
			})}
		</ul>
	)
}
