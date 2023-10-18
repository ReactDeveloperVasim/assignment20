import React from "react";
import {Card,CardContent} from "@mui/material"
import { Colours } from "./components/Colours";


function App() {
  return (
    <Card sx={{height:""}}>
        <CardContent>
            <Colours />
        </CardContent>
    </Card>    
  );
}

export default App;
