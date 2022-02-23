import React, {useState} from 'react';
import { Button, Form } from "react-bootstrap";
import {IBrand, IModel} from "../../pages/page.types";

interface ITarget {
  value: string;
  name: keyof IModel;
}

interface IProps {
  brands: IBrand[];
}

type TView = (props: IProps) => JSX.Element;

const ModelAddForm: TView = ({ brands }) => {
  const [model, setModel] = useState<IModel>({
    model: '',
    brandId: 0,
    price: '',
    image: '',
  });

  const handleModelForm = ({ target }) => {
    const { name, value } = target as ITarget;
    switch (name) {
      case 'brandId': {
        return setModel({ ...model, [name]: Number(value) });
      }
      default: {
        setModel({ ...model, [name]: value });
      }
    }
  }

  const sendModel = async (e) => {
    e.preventDefault();
    await fetch('./api/sendModel/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(model),
    })
  }

  return (
    <>
      <Form onSubmit={sendModel}>
        <Form.Group className={"mt-3"}>
          <Form.Label>Модель</Form.Label>
          <Form.Control
            type={"text"}
            name={"model"}
            onChange={handleModelForm}
          />
        </Form.Group>
        <Form.Group className={"mt-3"}>
          <Form.Label>Брэнд</Form.Label>
          <Form.Control
            as="select"
            type={"text"}
            name={"brandId"}
            onChange={handleModelForm}
          >
            {brands.map(({ id, brand }) =>
              <option value={id}>{brand}</option>
            )}
          </Form.Control>
        </Form.Group>
        <Form.Group className={"mt-3"}>
          <Form.Label>Цена</Form.Label>
          <Form.Control
            type={"text"}
            name={"price"}
            onChange={handleModelForm}
          />
        </Form.Group>
        <Form.Group className={"mt-3"}>
          <Form.Label>Фотографии</Form.Label>
          <Form.Control
            type={"text"}
            name={"image"}
            onChange={handleModelForm}
          />
        </Form.Group>
        <Button className={"mt-3 d-block m-auto"} type={"submit"} variant={"success"}>Добавить</Button>
      </Form>
    </>
  );
};

export default ModelAddForm;
