import { request } from "./request"


export function getDetail(iid) {
    return request({
        url: '/detail',
        params: { iid }
    })
}
export function getRecommend() {
    return request({
      url: '/recommend'
    })
  }

export class Goods {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.realPrice = itemInfo.lowNowPrice
        this.price = itemInfo.price
        this.columns = columns
        this.services = shopInfo.services
    }
}
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}

export class GoodsParam {
    constructor(info, rule) {
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}
