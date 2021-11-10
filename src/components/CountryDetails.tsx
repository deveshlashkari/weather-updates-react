import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function CountryDetails() {
  const navigate = useNavigate();

  const [countryData, setCountryData] = useState(null);

  // Extract countryName from URL
  const { countryName } = useParams();

  useEffect(() => {
    getCountryData(countryName).then((_data: any) => {
      console.log(_data);
    });
  }, []);

  const getCountryData = (name: any) => {
    return axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            {/* Table to render the data */}
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell>Calories</TableCell>
                    <TableCell>Fat&nbsp;(g)</TableCell>
                    <TableCell>Carbs&nbsp;(g)</TableCell>
                    <TableCell>Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Row</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
