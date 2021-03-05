import { HttpService, GET, ResponseAdapter, LocaServiceResponse } from './core'

interface Member {
    name: string
    username: string
    registeredDate: string
}

type GetMemberListResponse = {
    memberlist: Member[]
}

class MemberService extends HttpService {
    @GET('/members')
    @ResponseAdapter((data: GetMemberListResponse) => data.memberlist)
    async getMemberList(): LocaServiceResponse<Member[]> {
        return null
    }
}

export { MemberService, Member }
