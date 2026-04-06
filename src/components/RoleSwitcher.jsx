function RoleSwitcher({role,setRole}){
    return(
        <div className="mb-4">
            <label className="mr-2 font-medium text-red-500">Role:</label>
            <select
                value={role}
                onChange={(e)=>setRole(e.target.value)}
                className="border p-2 rounded-lg"
                >
                    <option value="viewer">viewer</option>
                    <option value="admin">admin</option>
                </select>
        </div>
    )
};
export default RoleSwitcher;