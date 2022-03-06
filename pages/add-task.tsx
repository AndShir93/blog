import React, { useContext } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import Context from '../Context.js';

interface IWeekday {
  id: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday',
  name: 'Понедельник' | 'Вторник' | 'Среда' | 'Четверг' | 'Пятница' | 'Суббота' | 'Воскресенье',
}

interface IFormData {
  day: string,
  title: string,
  description: string,
}

interface IInvalidfields {
  day: boolean,
  title: boolean,
  description: boolean,
}

const AddTask = () => {
  const weekdays: IWeekday[] = [
    { id: 'monday', name: 'Понедельник' },
    { id: 'tuesday', name: 'Вторник' },
    { id: 'wednesday', name: 'Среда' },
    { id: 'thursday', name: 'Четверг' },
    { id: 'friday', name: 'Пятница' },
    { id: 'saturday', name: 'Суббота' },
    { id: 'sunday', name: 'Воскресенье' },
  ]
  const [ formData, setFormData ] = React.useState<IFormData>({
    day: 'monday',
    title: '',
    description: '',
  });
  const { id } = useContext(Context);
  const [ invalidFields, setInvalidFields ] = React.useState<IInvalidfields>({
    day: false,
    title: false,
    description: false,
  });
  const isValidForm = (description, title) => {
    let invalidFields = {};
    if (!description.trim()) invalidFields = { ...invalidFields, description: true };
    if (!title.trim()) invalidFields = { ...invalidFields, title: true };
    setInvalidFields(invalidFields);

    return invalidFields;
  }
  const handleFormData = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };
  const sendTask = async (e) => {
    e.preventDefault();
    const { title, description } = formData;
    if (Object.keys(isValidForm(title, description)).length) return;
    await fetch('./api/sendTask/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, id }),
    })
  }

  return (
    <>
      <title>Добавить задачу</title>
      <Layout>
      <div className={'d-flex flex-column align-items-center justify-content-center'}>
        <h1>Добавить задачу</h1>
        <Container>
          <Row className={'justify-content-center'}>
            <Col lg={6} md={8}>
              <Form onSubmit={sendTask}>
                <Form.Group>
                  <Form.Label>Выберите день недели</Form.Label>
                  <Form.Control
                    as="select"
                    value={formData.day}
                    name={'day'}
                    isInvalid={invalidFields.day}
                    onChange={handleFormData}
                  >
                    {weekdays.map(day =>
                      <option key={day.id} value={day.id}>{day.name}</option>
                    )}
                  </Form.Control>
                </Form.Group>
                <Form.Group className={'mt-3'}>
                  <Form.Label>Текст задачи</Form.Label>
                  <Form.Control
                    type={'text'}
                    name={'title'}
                    value={formData.title}
                    isInvalid={invalidFields.title}
                    onChange={handleFormData}
                  />
                </Form.Group>
                <Form.Group className={'mt-3'}>
                  <Form.Label>Описание</Form.Label>
                  <Form.Control
                    type={'text'}
                    name={'description'}
                    value={formData.description}
                    isInvalid={invalidFields.description}
                    onChange={handleFormData}
                  />
                </Form.Group>
                <Button className={'mt-3 d-block m-auto'} type={'submit'} variant={'success'}>Отправить</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
    </>
  )
}
export default AddTask;
