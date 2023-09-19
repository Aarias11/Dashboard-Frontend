import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

function CardItem() {
  return (
    <Card className="w-xs" decoration="top" decorationColor="teal">
      <Flex>
        <Text>Sales</Text>
        <BadgeDelta deltaType="moderateIncrease">+12.5%</BadgeDelta>
      </Flex>
      <Metric>$ 32,743</Metric>
    </Card>
  );
}

export default CardItem;
