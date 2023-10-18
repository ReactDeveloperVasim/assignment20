import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import Select from "react-select";
import { datas } from "../data";

export const Colours = () => {
  const [data, setData] = useState([]);
  const [colour, setColour] = useState(datas[1]);

  useEffect(() => {
    setData([...data, colour]);
  }, [colour]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Select options={datas} onChange={(e) => setColour(e)} />
      </Grid>
      <Grid item xs={3}></Grid>

      {data.map((item) => (
        <React.Fragment>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Card sx={{ bgcolor: item.label, height: "200px" }}>
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};
