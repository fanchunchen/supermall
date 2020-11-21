import { ADDCOUNTER, ADDTOCART } from "./mutation.types"

// const actions={
//     addCart(context, payload) {
//         let oldProduct = context.state.cartList.find(function (item) { return item.iid === payload.iid })
//         if (oldProduct) {
//             context.commit(ADDCOUNTER, oldProduct)

//             // oldProduct.count += 1
//         }
//         else {
//             payload.count = 1;
//             // state.cartList.push(payload)
//             context.commit(ADDTOCART, payload)
//         }

//     }
// }
// export default  actions
export default {addCart(context, payload) {
    let oldProduct = context.state.cartList.find(function (item) { return item.iid === payload.iid })
    if (oldProduct) {
        context.commit(ADDCOUNTER, oldProduct)

        // oldProduct.count += 1
    }
    else {
        payload.count = 1;
        // state.cartList.push(payload)
        context.commit(ADDTOCART, payload)
    }

}
}