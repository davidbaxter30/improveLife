import React from 'react';
import { connect } from 'react-redux';

import { Table, Badge, Col, Row, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getRecipes, Recipe } from './health-menu.reducer';

import './health-menu.scss';

export interface IHealthMenuPageProps extends StateProps, DispatchProps {}

export interface IHealthMenuPageState {
  recipes: any[];
}

export class HealthMenuPage extends React.Component<IHealthMenuPageProps, IHealthMenuPageState> {
  componentDidMount() {
    this.props.getRecipes();
  }

  getRecipes = () => {
    if (!this.props.isFetching) {
      this.props.getRecipes();
    }
  };

  render() {
    const { recipes, isFetching } = this.props;
    const data = recipes || [];

    const recipeElemnts = data.map((recipe: Recipe) => (
      <Card>
        <CardBody>
          <CardTitle>{recipe.name}</CardTitle>
        </CardBody>
      </Card>
    ));

    return (
      <div>
        <h2 id="health-page-heading">Healthy Food Menu</h2>
        <Row>
          <Col sm="2">{recipeElemnts}</Col>
          <Col sm="10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sit itaque fugit tenetur, animi consequuntur magnam delectus
            voluptates in, error sapiente! Aliquam id dolorum repellendus officiis cumque cum dolorem sunt.
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  recipes: storeState.healthyFood.recipes,
  isFetching: storeState.healthyFood.loading
});

const mapDispatchToProps = { getRecipes };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HealthMenuPage);
