import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions
} from '@material-ui/core';
import Adder from './Adder';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const MenuItem = ({ order, orders, setOrders, index }) => {
  const [count, setCount] = useState(order.qty || 0);
  const updateCount = count => {
    setCount(count);
    if (count !== 0) {
      const newOrder = { ...order };
      newOrder.qty = count;
      const newOrders = [...orders];
      newOrders[index] = newOrder;
      setOrders(newOrders);
    }
  };
  const [ischecked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography>{order.name}</Typography>
          <FormControlLabel
              control={<Checkbox checked={ischecked} onChange={handleChange} />}
              label="Gluko"
          />
          <FormControlLabel
              control={<Checkbox checked={ischecked} onChange={handleChange} />}
              label="Metrio"
          />
          <FormControlLabel
              control={<Checkbox checked={ischecked} onChange={handleChange} />}
              label="Sketo"
          />
        </CardContent>
        <CardActions disableSpacing>
          <Adder count={count} updateCount={updateCount} />
        </CardActions>
      </Card>{' '}      
    </Grid>
  );
};

export default MenuItem;
