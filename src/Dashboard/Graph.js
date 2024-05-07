import { XAxis, YAxis, CartesianGrid, Tooltip, Legend ,BarChart, Bar, Rectangle, AreaChart, Area } from 'recharts';

export default function Graph() {
    
const data1= [
    {
      name: '2021',
      Jaipur: 3000,
      Ajmer: 2300,
      amt: 400,
    },
    {
      name: '2022',
    Jaipur: 2400,
    Ajmer: 1398,
      amt: 210,
    },
    {
      name: '2023',
      Jaipur: 2000,
      Ajmer: 900,
      amt: 2290,
    },
    {
      name: '2024',
      Jaipur: 2780,
      Ajmer: 3908,
      amt: 2000,
    },
  ];

  const data2= [
    {
      name: '2021',
      Jaipur: 300,
      Ajmer: 230,
      amt: 400,
    },
    {
      name: '2022',
    Jaipur: 100,
    Ajmer: 138,
      amt: 210,
    },
    {
      name: '2023',
      Jaipur: 200,
      Ajmer: 900,
      amt: 2290,
    },
    {
      name: '2024',
      Jaipur: 380,
      Ajmer: 208,
      amt: 2000,
    },
  ];
  return (
     <div>
      <div className="Graph" style={{marginTop:"6%"}}>
        <div className="Heading"style={{color:"white",textAlign:"center",margin:"4%"
      }}>
          <h2>Sales In Regions</h2>
        </div>
        <div className="graphs" style={{display:"flex",gap:"60px",textAlign:"center",justifyContent:"center",width:"100%",opacity:"1"}}>
        <BarChart
          width={600}
          height={400}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
          style={{background:"#191C24",cursor:"pointer"}}
        >
          <CartesianGrid strokeDasharray="2 3"/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip/>
          <Legend />
          <Bar dataKey="Jaipur" fill="#AC171A" activeBar={<Rectangle />} />
          <Bar dataKey="Ajmer" fill="#581B20" activeBar={<Rectangle />} />
        </BarChart>
  

      
      <AreaChart
                width={500} height={400}
                data={data2}
                margin={{
                    top: 5,
                    right: 10,
                    left: 0,
                    bottom: 5,
                }}
                style={{background:"#191C24",cursor:"pointer"}}>
                <CartesianGrid strokeDasharray="2 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Jaipur" stroke="#AC171A" fill="#AC171A" activeDot={{ r: 12 }} />
                <Area type="monotone" dataKey="Ajmer" stroke="#581B20"  fill="#581B20"/>
            </AreaChart>
            </div>
            </div>
            </div>
  )
}
