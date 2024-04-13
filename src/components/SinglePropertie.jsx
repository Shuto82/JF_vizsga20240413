import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  CardBody,
} from "reactstrap";

export const SinglePropertie = ({ obj }) => {
  return (
    <div className="col-md-3 col-sm-12 my-1">
      <Card style={{height: "100%"}}>
        <img className="img-fluid" alt={obj.title} src={obj.imageUrl} />
        <CardBody>
          <CardTitle tag="h5">{obj.category}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            A hirdetés feladásának dátuma: {obj.createAt}
          </CardSubtitle>
          <CardText name="szobák száma">
            Szobák száma: {obj.rooms}
          </CardText>
          <CardText name="alapterület">
            Alapterület: {obj.area} m<sup>2</sup>
          </CardText><br />
          <Button name="eladó" style={{width: "100%", position: "absolute", bottom: 0, left: 0}}>Eladó: {obj.sellerName} 📷</Button>
        </CardBody>
      </Card>
    </div>
  );
};
