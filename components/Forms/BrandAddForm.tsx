import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface IProps{
  handleAddBrand: (brand: string) => void;
}

type TView = (props: IProps) => JSX.Element;

const BrandAddForm: TView = ({ handleAddBrand }) => {
  const [ brand, setBrand ] = useState<string>('');
  const handleChange = ({ target }) => {
    const { value } = target;
    setBrand(value);
  }

  const sendBrand = async (e) => {
    e.preventDefault();
    handleAddBrand(brand);
    await fetch('./api/sendBrand/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brand }),
    })
  }

  return (
    <>
      <Form onSubmit={sendBrand}>
        <Form.Group className={'mt-3'}>
          <Form.Label>Добавить брэнд</Form.Label>
          <Form.Control
            type={'text'}
            name={'brand'}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className={'mt-3 d-block m-auto'} type={'submit'} variant={'success'}>Добавить</Button>
      </Form>
    </>
  );
};

export default BrandAddForm;
