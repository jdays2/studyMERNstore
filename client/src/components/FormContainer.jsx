import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

export const FormContainer = ({ children }) => {
	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col
					xs={12}
					md={6}>
					{children}
				</Col>
			</Row>
		</Container>
	);
};