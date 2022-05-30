import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';
import {
  Container,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  Total,
  ContainerList,
} from './styles';

function Cart() {
  const { state, setState } = useContext(CartContext);
  const subTotal = state.cart.map((elem) => elem.price * elem.quantity);
  const totalPrice = subTotal.reduce((acc, curr) => acc + curr, 0);

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quantity readOnly type="number" value={el.quantity} />
            <Subtotal>
              <p>{el.quantity * el.price}</p>
              <button type="button">
                <MdDelete size={24} color="#0676d9" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
        <Total>
          <div>
            <span>TOTAL</span>
            <p>{totalPrice}</p>
          </div>
        </Total>
      </ContainerList>
    </Container>
  );
}

export default Cart;
