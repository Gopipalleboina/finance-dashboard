import { LineChart,Line,XAxis,YAxis,Tooltip,PieChart,Pie,Cell } from "recharts";
function Charts({data}){
    const lineData=data.map((t)=>({
        date:t.date,
        amount:t.amount
    }));
    const categoryMap={};
    data.forEach((t)=>{
        if(!categoryMap[t.category]){
            categoryMap[t.category]=0;
        }
        categoryMap[t.category]+=t.amount;
    });
    const pieData=Object.keys(categoryMap).map((key)=>({
        name:key,
        value:categoryMap[key]
    }));
    const colors=["#4CAF50","#FF5733","#2196F3","#FFC107"];
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4">Balance Trend</h2>
                <LineChart width={300} height={200} data={lineData}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="amount" stroke="#8884d8"/>
                </LineChart>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4">Spending Breakdown</h2>
                <PieChart width={300} height={200}>
                    <Pie data={pieData} dataKey="value" outerRadius={80}>
                        {pieData.map((entry,index)=>(
                            <Cell key={index} fill={colors[index%colors.length]}/>
                        ))}
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </div>
        </div>
    )
};
export default Charts;

