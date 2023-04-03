import { useState } from "react"
import { teamInfo } from "../../data/team"

export default function TeamPage() {

    const [teamMember, setTeamMember] = useState("")
    const [data, setData] = useState({ teamInfo })

    return (
        <>
            {
                data.teamInfo && data.teamInfo.map((info, index) => {
                    return( 
                        <div>
                            {info.name}
                        </div>
                    )
                })
            }
        </>
    )
}