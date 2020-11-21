import { ADDCOUNTER, ADDTOCART } from "./mutation.types"

// const mutations={
//     [ADDCOUNTER](state, payload) {
//         payload.count++
//     }
//     ,
//     [ADDTOCART](state, payload) {
//         state.cartList.push(payload)
//     }
// }
// export default  mutations
export default{
    [ADDCOUNTER](state, payload) {
        payload.count++
    }
,
    [ADDTOCART](state, payload) {
        payload.checked=true
        state.cartList.push(payload)
        
    }
}