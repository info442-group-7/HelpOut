import React from "react";
import axios from "axios";
import { DashboardLayout } from "../../components/DashboardLayout";
import s from "./Home.module.css";

const Home = (props) => {
    return (
      <HomeView {...props} />
    )
  }
  
  export default Home;