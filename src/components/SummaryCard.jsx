function SummaryCard({title,amount,color}){
    return(
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transaction duration-300">
            <h2 className="text-gray-500 text-sm">{title}</h2>
            <p className={`text-3xl font-semibold mt-2 ${color}`}>₹{amount}</p>

        </div>
    )
}
export default SummaryCard;