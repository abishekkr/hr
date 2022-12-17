import React, { useState } from "react";
import { login } from "../../services/accountsHandler"
import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, HR_dashboard, ManagerSidebar } from "../sidebar/sideBar";
import { RequestLeave, ViewAllLeaveReq, ViewleaveRequests, ViewProfile } from "../essentials";


let reqData = [
    {
        "req_id": 1,
        "from": "2022-01-01",
        "to": "2022-01-03",
        "type": "sick",
        "reason": "really sick",
        "approvalStatus": 1,
        "color":"",
        "employee_id": 0,
        "createdAt": "2022-12-16T04:49:08.000Z",
        "updatedAt": "2022-12-16T04:49:08.000Z"
    },
    {
        "req_id": 2,
        "from": "2022-01-01",
        "to": "2022-01-03T00:00:00.000Z",
        "type": "sick",
        "reason": "really sick",
        "approvalStatus": null,
        "color":"",
        "employee_id": 1,
        "createdAt": "2022-12-16T04:49:35.000Z",
        "updatedAt": "2022-12-16T04:49:35.000Z"
    }
]
 


for(let i = 0; i<reqData.length; i++){
    if(reqData[i].approvalStatus==null){
        reqData[i].approvalStatus = "Pending"
        reqData[i].color = "blue"
    }
    else if(reqData[i].approvalStatus==1){
        reqData[i].approvalStatus="Approved"
        reqData[i].color = "green"
    }
    else if(reqData[i].approvalStatus==0){
        reqData[i].approvalStatus="Rejected"
        reqData[i].color = "red"
    }
}

function Employee_viewLeave () {
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <EmployeeSidebar/>
            <ViewleaveRequests data={reqData}/>
            </div>
        </div>
    )
}

export default Employee_viewLeave;