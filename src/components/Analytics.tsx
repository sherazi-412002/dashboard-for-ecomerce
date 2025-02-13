'use client';

import React, { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import data from '@/data/analytics';

const availableFilters = [
  {
    value: "uv",
    label: "Unique Visitors",
  },
  {
    value: "pv",
    label: "Page Views",
  },
  {
    value: "amt",
    label: "Amount",
  }
]

const AnalyticsChart = () => {

  const [selection, setSelection] = useState("pv");

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics For This Year</CardTitle>
          <CardDescription>Views Per Month</CardDescription>
          <Select onValueChange={setSelection} defaultValue="pv">
          <SelectTrigger className="w-96 h-8">
            <SelectValue placeholder="Select Account" />
          </SelectTrigger>
          <SelectContent className="bg-[#E9D8A7]">
            <SelectGroup>
             {availableFilters.map((filter) => (
                <SelectItem key={filter.value} value={filter.value}>
                  {filter.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        </CardHeader>
        <CardContent>
          <div className="w-[100%] md:w-[90%] m-auto h-80">
            <ResponsiveContainer>
              <LineChart width={1100} height={300} data={data}>
                <Line type='monotone' dataKey={selection} stroke='#B88E2F' />
                <CartesianGrid stroke='#E9D8A7' />
                <XAxis dataKey='name' />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsChart;