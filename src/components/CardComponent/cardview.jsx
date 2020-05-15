import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Card, Avatar } from "antd";
import {
  CloseOutlined,
  EllipsisOutlined,
  CheckOutlined
} from "@ant-design/icons";

const { Meta } = Card;

const CardComponent = (props) => {
    return (
        <Card
            style={{ width: 300 }}
            title="Buying Call of Duty for grandma"
            actions={[
            <CheckOutlined key="done" />,
            <CloseOutlined key="giveup" />,
            <EllipsisOutlined key="more" />
            ]}
        >
        <p>
          Grandma from Seattle is looking for a copy of Call of Duty or Minecraft
          for Xbox One. If you live in the Seattle area please help her out!
        </p>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="John Doe"
          description="Accepted 1 day ago in 98105"
        />
        </Card>,
        document.getElementById("container")
    )
}

export default CardComponent;
