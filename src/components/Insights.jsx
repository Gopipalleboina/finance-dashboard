function Insights({data}){
    let maxCategory="";
    let maxAmount=0;
    const map={};
    data.forEach((t)=>{
        if(t.type==="expense"){
            map[t.category]=(map[t.category] || 0)+t.amount;
            if(map[t.category]>maxAmount){
                maxAmount=map[t.category];
                maxCategory=t.category;
            }
        }
    });
    return(
        <div>
            <h2 className="text-xl font-semibold mb-3">Insights</h2>
            <p>Highest spending Category:{maxCategory}</p>
            <p>Total spent:₹{maxAmount}</p>
        </div>
    )
}
export default Insights;