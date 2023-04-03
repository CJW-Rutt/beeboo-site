import { useState } from "react"
import { teamInfo } from "../../data/team"
import TeamMember from "../team-member"

export default function TeamPage() {

    const [teamMember, setTeamMember] = useState("nobody")
    const [chooseMember, setChooseMember] = useState(true)
    const [data, setData] = useState({ teamInfo })
    const [memberData, setMemberData] = useState()

    return (
        <>
            {
                chooseMember ?
                    data.teamInfo && data.teamInfo.map((info, index) => {
                        return (
                            <div key={index} onClick={() => {
                                setTeamMember(info.name)
                                setMemberData(teamInfo[index])
                                setChooseMember(false)
                            }}>
                                {info.name}
                            </div>
                        )
                    })
                    :
                    <>
                        <TeamMember name={memberData.name} description={memberData.description} />
                    </>
            }
        </>
    )
}