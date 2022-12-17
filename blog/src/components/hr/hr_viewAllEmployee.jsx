import { ViewAllEmployee } from "../essentials";
import NavigationLogout from "../navigationLogout";
import { HR_Sidebar } from "../sidebar/sideBar";


let employeeDB = [{
    employee_id:'1',
    name:"abk",
    designation:"tl",
    address:"asd",
    department:'asd'
},
{
    employee_id:'2',
    name:"asd",
    designation:"asd",
    address:"asd",
    department:'sad'
},
{
    employee_id:'3',
    name:"sadas",
    designation:"asd",
    address:"asdd",
    department:'dasd'
},
{
    employee_id:'4',
    name:"asdas",
    designation:"asd",
    address:"asd",
    department:'sadas'
},
{
    employee_id:'5',
    name:"asd",
    designation:"asdd",
    address:"ads",
    department:'asda'
},
]

function HR_viewAllEmployee(){

    return (
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <HR_Sidebar/>
            <ViewAllEmployee data={employeeDB}/>
            </div>
        </div>
    )
}

export default HR_viewAllEmployee;