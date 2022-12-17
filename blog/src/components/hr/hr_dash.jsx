import { ViewProfile } from "../essentials";
import NavigationLogout from "../navigationLogout";
import { HR_Sidebar } from "../sidebar/sideBar";


let data = {
    employee_id:'5',
    name:'abishek',
    address:'393, erode main road, thamaraipalayam, erode, tamilnadu',
    department:'ess',
    superior1:'1'
}

export function HR_dash(){
    
    return (
        <div>
             <NavigationLogout/>
            <div style={{display:"flex"}}>
            <HR_Sidebar/>   
            <ViewProfile data={data}/>
            </div>
        </div>
    )
}