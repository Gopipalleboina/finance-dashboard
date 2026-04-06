import Charts from "../components/Charts.jsx";
import SummaryCard from "../components/SummaryCard.jsx";
import {transactions} from "../data/mockData.js";
import TransactionTable from "../components/TransactionTable.jsx";
import { useEffect, useState } from "react";
import RoleSwitcher from "../components/RoleSwitcher.jsx";
import Insights from "../components/Insights.jsx";
function Dashboard(){
   
    const [role,setRole]=useState("viewer");
    const [showform,setshowform]=useState(false);
    const[transactiondata,settransactiondata]=useState(transactions);
     const income=transactiondata.filter(t=>t.type==="income").reduce((acc,t)=>acc+t.amount,0);
    const expenses=transactiondata.filter(t=>t.type==="expense").reduce((acc,t)=>acc+t.amount,0);
    const balance=income-expenses;
    const[category,setcategory]=useState("");
    const[amount,setamount]=useState("");
    const [dark,setdark]=useState(false);
     const handleAddTransaction=()=>{
                if(!category || !amount) return;
                const newtransaction={
                    id:Date.now(),
                    date:new Date().toISOString().split("T")[0],
                    category,
                    amount:Number(amount),
                    type:"expense"
                };
                settransactiondata([newtransaction,...transactiondata]);
                setcategory("");
                setamount("");
                setshowform(false);
            };
    useEffect(()=>{
        const saved=localStorage.getItem("transactions");
        if(saved){
            settransactiondata(JSON.parse(saved));
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem("transactions",JSON.stringify(transactiondata));
    },[transactiondata]);
    return(
        
        <div className={dark?"bg-gray-900 min-h-screen p-6":"bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen p-6"}>
            <button onClick={()=>setdark(!dark)}
        className="mb-6 bg-gray-800 text-white px-4 py-2 rounded"
        >
            Toggle dark mode
        </button>
            <h1 className={`text-3xl font-bold mb-6 ${dark?"text-white":"text-black"}`}>Finance Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <SummaryCard title="Total Balance" amount={balance} color="text-black"/>
                <SummaryCard title="Income" amount={income} color="text-green-500"/>
                <SummaryCard title="Expenses" amount={expenses} color="text-red-500"/>
            </div>
            <div className="mb-6">
                <Charts data={transactiondata}/>
            </div>
             
              <RoleSwitcher role={role} setRole={setRole}/>  
            
            {role==="admin" && (
            <button
                onClick={()=>setshowform(true)}
                className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Add Transaction
                </button>
                )}
           
            {showform && (
                <div className="bg-white p-4 rounded-lg shadow mb-4">
                    <h3 className="font-semibold mb-2">Add Transaction</h3>
                    <input className="border p-2 mr-2" placeholder="Category" 
                    value={category} onChange={(e)=>setcategory(e.target.value)}/>
                    <input className="border p-2 mr-2" placeholder="Amount"
                    value={amount} onChange={(e)=>setamount(e.target.value)}/>
                    <button 
                    onClick={handleAddTransaction}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
                        Add
                    </button>
                    <button
                        onClick={()=>setshowform(false)}
                        className="ml-2 text-red-500"
                        >
                            Cancel
                    </button>
                        </div>
            )}
           
            <div className={`${dark?"bg-gray-800 text-white":"bg-white"} p-6 rounded-2xl shadow mb-6`}>
                <TransactionTable data={transactiondata}/>
            </div>
            <div className={`${dark?"bg-gray-800 text-white":"bg-white"} p-6 rounded-2xl shadow mt-2`}>
                <Insights data={transactiondata}/>
            </div>
        </div>
    )
}
export default Dashboard;