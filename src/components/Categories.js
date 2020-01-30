import React from 'react';
import { ListGroup } from 'react-bootstrap';

export const Categories = () => (
    <ListGroup horizontal variant="flush" className="justify-content-center ">
          <ListGroup.Item className="col-sm-2">Lançamentos</ListGroup.Item>
          <ListGroup.Item className="col-sm-2">Bolsas</ListGroup.Item>
          <ListGroup.Item className="col-sm-2">Cintos</ListGroup.Item>
          <ListGroup.Item className="col-sm-2">Acessórios</ListGroup.Item>
    </ListGroup>
)