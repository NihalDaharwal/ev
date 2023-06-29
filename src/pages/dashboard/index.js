import Sidebar from "@/components/Sidebar/Sidebar";
import Avtaar from "@/components/header/Avtaar";
import BadgeComponent from "@/components/header/BadgeComponent";
import Filter from "@/components/header/Filter";
import Searchbox from "@/components/header/Searchbox";
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Chart from "chart.js/auto";
import Image from "next/image";
import totalRevenue from "../../assets/images/totalRevenue.png";
import totalOrders from "../../assets/images/totalOrders.png";
import totalDelivered from "../../assets/images/totalDelivered.png";
import totalCancelled from "../../assets/images/totalCancelled.png";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ReviewCard from "@/garbadge/ReviewCard";
import { logo } from "@/assets/images/logo.png";
import FullSidebar from "@/garbadge/fullSidebar";
import piechart from "@/assets/images/pieChart.png";
import cardchart from "@/assets/images/card_chart_order.png";
import cardTotalrevenue from "@/assets/images/card_total_revenue.png";
import cardcustomermap from "@/assets/images/card_customer_map.png";
import ReviewCard2 from "@/components/ReviewCard2";
import food from "@/assets/images/food.png";
import food2 from "@/assets/images/food2.png";
import { Header } from "@/garbadge/Header/Header";
import { Cards } from "@/garbadge/Cards";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const ordersData = [
    {
      image: totalOrders,
      numbers: "75",
      orders: "Total Orders",
      percentage: "4%",
      days: "30days",
    },
    {
      image: totalDelivered,
      numbers: "357",
      orders: " Total Delivered",
      percentage: "4%",
      days: "30days",
    },
    {
      image: totalCancelled,
      numbers: "95",
      orders: "  Total Cancelled",
      percentage: "4%",
      days: "30days",
    },
    {
      image: totalRevenue,
      numbers: "$128",
      orders: "  Total Revenue",
      percentage: "4%",
      days: "30days",
    },
  ];

  const reviewdData = [
    {
      avtarphoto: "",
      avtarname: "John Cena",
      onlinedays: "2 days ago",
      rating: "4.5",
      image: food,
    },
    {
      avtarphoto: "",
      avtarname: "Sofia",
      onlinedays: "2 days ago",
      rating: "4.0",
      image: food2,
    },
    {
      avtarphoto: "",
      avtarname: "Anandreansyah",
      onlinedays: "2 days ago",
      rating: "4.5",
      image: food,
    },
  ];

  return (
    <>
      <Grid container bgcolor="#f3f2f7">
        <Grid item xs={2} md={2} lg={2}>
          <Sidebar />
        </Grid>

        {/* <Header /> */}

        <Grid item lg={10} sm={10} xs={10} md={10}>
          <Box
            sx={{
              display: "flex",
              gap: 3.5,
              position: "sticky",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Searchbox />

            <Stack
              mr={5}
              direction="row"
              spacing={5}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <BadgeComponent />
              <Avtaar />
            </Stack>
          </Box>
        </Grid>

        <Grid>
          <Grid
            container
            mt={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid mx={2}>
              <h1>Dashboard</h1>
              <small>Hi Samantha. Welcome back to Sedap Admin </small>
            </Grid>

            <Item>
              <Filter />
            </Item>
          </Grid>
        </Grid>

        <Grid container direction="row" mt={2} justifyContent="space-between">
          {ordersData.map((item) => {
            return (
              <>
                <Item>
                  <Stack direction="row" spacing={2} textAlign="left">
                    <Image src={item.image} width="100px" height="100px" />
                    <Stack direction="column" width={120} alignContent="left">
                      <Typography variant="h3" color="black">
                        {item.numbers}
                      </Typography>
                      <Typography variant="" color="black">
                        {item.orders}
                      </Typography>
                      <Typography variant="">
                        <small>
                          {item.percentage}
                          {`(${item.days})`}
                        </small>
                      </Typography>
                    </Stack>
                  </Stack>
                </Item>
              </>
            );
          })}
        </Grid>

        <Grid container mt={2} direction="row" justifyContent="space-between">
          <Item>
            <Image src={piechart} width="450" height="260" />
          </Item>

          <Item>
            <Image src={cardchart} width="450" height="260" />
          </Item>
        </Grid>

        <Grid container mt={2} direction="row" justifyContent="space-between">
          <Item>
            <Image src={cardTotalrevenue} width="650" height="250" />
          </Item>
          <Item>
            <Image src={cardcustomermap} width="300" height="250" />
          </Item>
        </Grid>

        <Grid>
          <Grid
            container
            mt={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid mx={0}>
              <h1>Customer Review</h1>
              <small>Eum fuga consequuntur utadsjn et.</small>
            </Grid>

            <Grid>
              <Grid container rowGap="5px">
                <Item>
                  <NavigateBeforeIcon />
                </Item>
                <Item>
                  <NavigateNextIcon />
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
          }}
        >
          {reviewdData.map((item) => {
            return (
              <>
                <Grid>
                  <Box>
                    <ReviewCard2 item={item} />
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
