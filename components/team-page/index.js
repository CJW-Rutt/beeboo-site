import { useState } from "react"
import { teamInfo } from "../../data/team"
import TeamMember from "../team-member"
import Image from "next/image"

export default function TeamPage() {

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
                                setMemberData(teamInfo[index])
                                setChooseMember(false)
                            }}>
                                {info.name}
                            </div>
                        )
                    })
                    :
                    <>
                        <TeamMember 
                        name={memberData.name} 
                        description={memberData.description} 
                        avatar={memberData.avatar} 
                        socialMedia={memberData.socialMedia}
                        portfolio={memberData.portfolio} />
                        <Image 
                        src='/ui-icons/close.png' 
                        height={50} 
                        width={50} 
                        onClick={() => setChooseMember(true)}
                        />
                    </>
            }
        </>
    )
}