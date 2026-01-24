import { prisma } from "@/lib/prisma"
import { Product } from "../components/ProductsListEditable"

const names = ["Аманн"
,"Бабка Кардамон"
,"Бабка корица и карамель"
,"Бабка Мак"
,"Бабка Тхина"
,"Даниш яблочный пирог с заварным кремом"
,"Бриошь 10х10"
,"Бриошь с ванильным кремом в ягодной глазури"
,"Бриошь с шапкой"
,"Булка Грецкий орех - мёд"
,"Булка для донера"
,"Даниш круглый в форме с грузом"
,"Булка конопля"
,"Булка с кардамоном"
,"Булка с корицей"
,"Булка Тимьян-Чеснок"
,"Булка с тхиной"
,"Даниш яблочный пирог с заварным кремом"
,"Бриошь с ванильным кремом в ягодной глазури"
,"Кекс мак-лимон"
,"Кекс морковный с карамельной глазурью"
,"Краффин брусника-маскарпоне"
,"Миндальный круассан 50г"
,"Даниш Банан-пекан"
,"Кекс морковный с карамельной глазурью"
,"Киш с курицей, брокколи и цветной капустой"
,"Краффин брауни-вишня"
,"Маритоццо Тирамису"
,"Миндальный круассан 75г"
,"Мини даниш с курдом"
,"Даниш франжипан грецкий орех"
,"Мини-даниш (с грузом)"
,"Печенье арахисовое"
,"Пирог сезонный "
,"Плие бекон"
]

//fetch(...)
export  const getProductsFromPoint = async (point:string) => {
    console.log(point)
    const productsSql = await prisma.orders.findMany({
    where: { shop_name: point },
  })

    const products : Product[] = []
    for (let productSql of productsSql) {
        if (productSql.product_count) {
            products.push({name: productSql.product_name, quantity: productSql.product_count})
        } 
    }
    return products
}

export  const getProductsFromPointAndDate = async (point:string, date:string | Date) => {
    console.log(point)
    const today = new Date(date)
    const tomorow = new Date(date)
    tomorow.setDate(tomorow.getDate() + 1)
    const productsSql = await prisma.orders.findMany({
    where: { shop_name: point, order_date: {gte: today, lt: tomorow},  product_count: {gt: 0}},
  })
    const products : Product[] = []
    for (let productSql of productsSql) {
        if (productSql.product_count) {
            products.push({name: productSql.product_name, quantity: productSql.product_count})
        } 
    }
    return products
}

export const getAllProductsForDate = async (date: string| Date) => {
    const today = new Date(date)
    const tomorow = new Date(date)
    tomorow.setDate(tomorow.getDate() + 1)

    const productsSql = await prisma.orders.findMany(
        { where: {  order_date: {gte: today, lt: tomorow}, product_count: {gt: 0}}}
    )
    const products : Product[] = []
      for (let productSql of productsSql) {
        if ( productSql.product_count) {
            products.push({name: productSql.product_name, quantity: productSql.product_count, shopName: productSql.shop_name})
        } 
    }
    return products   
}

export const getAllShopNamesForDate = async (date: string| Date) => {
    const today = new Date(date)
    const tomorow = new Date(date)
    tomorow.setDate(tomorow.getDate() + 1)
    const shopsSql = await prisma.orders.groupBy({
        by: ['shop_name'],  where: { order_date: {gte: today, lt: tomorow} }})
    return shopsSql.map((shop) => shop.shop_name)
}