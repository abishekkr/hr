import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar } from "../sidebar/sideBar"
import { Viewpayslip } from "../essentials"




let payslipData = [
    {
        month:"jan",
        year:"2022",
        amountPaid:"20000",
    },
    {
        month:"Feb",
        year:"2022",
        amountPaid:"22000",
    },
    {
        month:"Mar",
        year:"2022",
        amountPaid:"30000",
    },
 ]


function Employee_ViewPayslip(){
    
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
                <EmployeeSidebar/>
                <Viewpayslip data={payslipData}/>
            </div>
        </div>
    )
}

export default Employee_ViewPayslip;