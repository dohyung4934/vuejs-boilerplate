import { makeCard } from './card'
import { helloWorld } from './helloWorld'

const card = makeCard()

export default {
    card,
    helloWorld: helloWorld()
}
