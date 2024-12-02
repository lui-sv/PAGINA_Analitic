import React from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const SimpleBarChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        data={data} 
        width={500} 
        height={300}
        margin={
          {top:5,
          right:30,
          left:20,
          bottom:5
        }}
      >
      <CartesianGrid strokeDasharray="4 1 2"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Legend />
      <Bar dataKey="weight" fill="#6b48ff"/>
      <Bar dataKey="age" fill="#1ee3cf"/>
      <Bar dataKey="xt" fill="#a236f4"/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default SimpleBarChart