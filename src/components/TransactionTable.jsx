import { useState } from "react";
function TransactionTable({data}){
    const [search,setsearch]=useState("");
    const[filter,setfilter]=useState("all");
    const filtereddata=data.filter((t)=>{
        return(
            t.category.toLowerCase().includes(search.toLowerCase())&&
            (filter==="all" ||t.type===filter)
        )
    });
    return(
        <div>
            <h2 className="text-xl font-semibold mb-4">Transactions</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                    type="text"
                    placeholder="search category..."
                    className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={search}
                    onChange={(e)=>setsearch(e.target.value)}
                    />
                <select
                    className="border p-2 rounded-lg text-indigo-400"
                    value={filter}
                    onChange={(e)=>setfilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
            </div>
            {filtereddata.length===0 ? (
                <p className="text-gray-500 mt-4">No transactions found</p>
            ) : (
                <table className="w-full text-left">
                <thead>
                    <tr className="border-b hover:bg-gray-400 transition">
                        <th className="p-2">Date</th>
                        <th className="p-2">Category</th>
                        <th className="p-2">Type</th>
                        <th className="p-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filtereddata.map(t=>(
                        <tr key={t.id} className="border-b hover:bg-gray-400 transition">
                            <td className="p-2">{t.date}</td>
                            <td className="p-2">{t.category}</td>
                            <td className={`p-2 font-medium ${
                                t.type==="income"?"text-green-500":"text-red-500"
                            }`}>{t.type}</td>
                            <td className="p-2">₹{t.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
        </div>
    )
}
export default TransactionTable;