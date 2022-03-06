import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import { GetServerSideProps } from 'next';
import prisma from '../lib/prisma';
import { IBrand } from './page.types';
import BrandAddForm from '../components/Forms/BrandAddForm';
import ModelAddForm from '../components/Forms/ModelAddForm';

interface IProps {
  brand: IBrand[];
}

type TView = (props: IProps) => JSX.Element;

const Admin: TView = (props) => {
  const [ brands, setBrands ] = useState<IBrand[]>([]);
  useEffect(() => {
    setBrands(props.brand);
  }, []);
  const handleAddBrand = (brand: string): void => {
    const currentBrand: IBrand = {
      id: brands[brands.length - 1].id + 1,
      brand,
    };
    setBrands([ ...brands, currentBrand ]);
  };

  return (
    <>
      <title>Адиминистрирование</title>
      <Layout>
        <div className={'d-flex flex-column align-items-center justify-content-center'}>
          <Container>
            <Row className={'justify-content-center'}>
              <Col lg={6} md={8}>
                <BrandAddForm handleAddBrand={handleAddBrand} />
              </Col>
              <Col lg={6} md={8}>
                <ModelAddForm brands={brands} />
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const brand = await prisma.brand.findMany();

  return {
    props: {
      brand,
    },
  }
}

export default Admin;
