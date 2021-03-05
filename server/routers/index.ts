import { makeCard } from './card'
import getMembers from './members'

const card = makeCard()

export default {
    card,
    members: getMembers()
}
