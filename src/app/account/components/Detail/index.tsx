"use client";

import React from "react";
import { Tab } from "@headlessui/react";
import Settings from "./Settings";
import Orders from "./Orders";

const tabs: { [key: string]: React.ReactNode } = {
  Settings: <Settings />,
  Orders: <Orders />,
};

const Index = () => {
  return (
    <div className="">
      <Tab.Group>
        <Tab.List className="[&>button]:px-4 [&>button]:py-1 border-b border-gray-600">
          {Object.keys(tabs).map((key) => (
            <Tab
              key={key}
              className={({ selected }) =>
                `focus-visible:outline-none ${
                  selected ? "border-b-2 border-gray-600" : ""
                }`
              }
            >
              {key}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="p-4">
          {Object.values(tabs).map((component, index) => (
            <Tab.Panel key={index}>{component}</Tab.Panel>
          ))}
          <Tab.Panel>Orders</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Index;
