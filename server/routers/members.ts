interface Member {
    name: string
    username: string
    registeredDate: string
}

export default function getMembers(): { memberlist: Member[] } {
    return {
        memberlist: [
            {
                name: '홍길동',
                username: 'kildong',
                registeredDate: new Date().toLocaleDateString()
            },
            {
                name: '성춘향',
                username: 'spring',
                registeredDate: new Date().toLocaleDateString()
            },
            {
                name: '이몽룡',
                username: 'dragon',
                registeredDate: new Date().toLocaleDateString()
            },
            {
                name: '김도형',
                username: 'dohyung',
                registeredDate: new Date().toLocaleDateString()
            }
        ]
    }
}
