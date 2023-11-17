import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from '../components/Message';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../components/CartItem';
import useTitle from '../hooks/useTitle';
import { getProductsCount } from '../utils/cartUtils';

export const CartPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { cartItems, totalPrice } = useSelector((state) => state.cart);
	const isEmpty = cartItems.length === 0;

	const totalCount = getProductsCount(cartItems);
	useTitle(`Cart (${totalCount})`);
	return (
		<Row>
			<Col md={8}>
				<h1 style={{ marginBottom: '20px' }}>Shopping Cart</h1>
				{isEmpty ? (
					<Message>
						Your cart is empty <Link to="/">Go Home</Link>
					</Message>
				) : (
					<ListGroup variant="flush">
						{cartItems.map((item) => {
							return (
								<CartItem
									key={item._id}
									item={item}
								/>
							);
						})}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Subtotal ({totalCount}) items</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Col>${totalPrice}</Col>
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								type="button"
								className="btn-block"
								disabled={isEmpty}>
								Proceed To Checkpoutt
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
};
