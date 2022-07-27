const express = require('express')
const cors = require('cors');

const bodyParser = require('body-parser');

const uuid = require('uuid');
const { response } = require('express');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())



let users = [
    {
        phone: 'admin',
        code: '',
        password: '123',
        token: 'asdasf2sf25s1af13'
    },
    {
        phone: '123',
        code: '',
        password: '123',
        token: 'f12fas2d13af12a3sf1'
    }
]


let cartList = [
    {
        id: 61,
        userId: "2",
        skuId: 1,
        cartPrice: 5999,
        skuNum: 4,
        imgUrl: "/images/mobile01.png",
        skuName: "Apple iPhone 11 (A2223) ",
        isChecked: 1,
        skuPrice: 5999,


    },
    {
        id: 62,
        userId: "2",
        skuId: 2,
        cartPrice: 5499,
        skuNum: 5,
        imgUrl: "/images/mobile02.png",
        skuName: "Apple iPhone 12 (A2223)",
        isChecked: 0,
        skuPrice: 5499,

    },
    {
        id: 63,
        userId: "2",
        skuId: 3,
        cartPrice: 5499,
        skuNum: 6,
        imgUrl: "/images/mobile03.png",
        skuName: "Apple iPhone 13 (A2223)",
        isChecked: 0,
        skuPrice: 5499,

    },
    {
        id: 64,
        userId: "2",
        skuId: 4,
        cartPrice: 5999,
        skuNum: 7,
        imgUrl: "/images/mobile04.png",
        skuName: "Apple iPhone 14 (A2223) ",
        isChecked: 1,
        skuPrice: 5999,
    },
]

app.get('/api/bannerlist', (request, response) => {
    let data = {
        "code": 200,
        "message": "成功",
        "data": [
            {
                "id": 1,
                "title": "小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱",
                "imageUrl": "http://localhost:8081/images/banner1.jpg",
                "linkUrl": "http://item.atguigu.cn/21.html",
                "sort": 0
            },
            {
                "id": 2,
                "title": "test",
                "imageUrl": "http://localhost:8081/images/banner2.jpg",
                "linkUrl": "http://item.atguigu.cn/21.html",
                "sort": 0
            },
            {
                "id": 3,
                "title": "华为 HUAWEI P40 麒麟990 5G SoC芯片 5000万超感知徕卡三摄",
                "imageUrl": "http://localhost:8081/images/banner3.jpg",
                "linkUrl": "http://item.atguigu.cn/16.html",
                "sort": 1
            }
        ],

        "ok": true
    }
    response.send(JSON.stringify(data));
})

app.get('/api/basecategorylist', (request, response) => {
    let data = {
        "code": 200,
        "message": "成功",
        "data": {
            "categoryList": [
                {
                    "categoryId": 1,
                    "categoryName": "手机",
                    "categoryChild": [
                        {
                            "categoryChild": [
                                {
                                    "categoryName": "红米30",
                                    "categoryId": 1
                                },
                                {
                                    "categoryName": "红米k30",
                                    "categoryId": 2
                                }

                            ],
                            "categoryName": "小米",
                            "categoryId": 1
                        },
                        {
                            "categoryName": "华为",
                            "categoryId": 2
                        }
                    ],
                },
                {
                    "categoryId": 2,
                    "categoryName": "电视",
                    "categoryChild": [
                        {
                            "categoryChild": [
                                {
                                    "categoryName": "电视11",
                                    "categoryId": 1
                                }
                            ],
                            "categoryName": "电视1",
                            "categoryId": 1
                        }
                    ],
                },
                {
                    "categoryId": 3,
                    "categoryName": "冰箱",
                },
                {
                    "categoryId": 4,
                    "categoryName": "索芙特",
                },
                {
                    "categoryId": 5,
                    "categoryName": "CAREMiLLE",
                },
                {
                    "categoryId": 6,
                    "categoryName": "长粒香",
                },
                {
                    "categoryId": 7,
                    "categoryName": "金沙河",
                },
                {
                    "categoryId": 8,
                    "categoryName": "香奈儿",
                },
                {
                    "categoryId": 9,
                    "categoryName": "香奈儿",
                },
                {
                    "categoryId": 10,
                    "categoryName": "香奈儿",
                },
                {
                    "categoryId": 11,
                    "categoryName": "香奈儿",
                },
                {
                    "categoryId": 12,
                    "categoryName": "香奈儿",
                },
                {
                    "categoryId": 13,
                    "categoryName": "香奈儿",
                },
                {
                    "categoryId": 14,
                    "categoryName": "香奈儿",
                },
                {
                    "categoryId": 15,
                    "categoryName": "香奈儿",
                },
            ],
            "attrsList": [
                {
                    "attrId": 1,
                    "attrValueList": [
                        "GSM(移动/联通2G)",
                        "电信2G",
                        "电信3G",
                        "电信4G",
                        "移动2G",
                        "移动3G",
                        "移动4G",
                        "联通2G",
                        "联通3G",
                        "联通4G",
                    ],
                    "attrName": "网络制式"
                },
                {
                    "attrId": 2,
                    "attrValueList": [
                        "4.0-4.9英寸",
                        "5.0-5.9英寸",
                        "6.0-6.9英寸",
                    ],
                    "attrName": "显示屏尺寸"
                },
                {
                    "attrId": 3,
                    "attrValueList": [
                        "1200万以上",
                        "800-1199万",
                        "1200-1599万",
                        "1600万以上",
                        "无摄像头"
                    ],
                    "attrName": "摄像头像素"
                },
                {
                    "attrId": 4,
                    "attrValueList": [
                        "0-500元",
                        "500-1000元",
                        "1000-1500元",
                        "1500-2000元",
                        "2000-2500元",
                        "3000元以上",
                    ],
                    "attrName": "价格"
                },
                {
                    "attrId": 5,
                    "attrValueList": [
                        "特点",
                        "系统",
                        "手机内存",
                        "单卡双卡",
                        "其他"
                    ],
                    "attrName": "更多筛选项"
                },
            ],
            "goodsList": [
                {
                    "id": 2,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                }
            ],
            "total": 34,
            "pageSize": 2,
            "pageNo": 1,
            "totalPages": 4
        },
        "ok": true
    }
    response.send(JSON.stringify(data));
})

app.post('/api/list', (request, response) => {
    let data = {
        "code": 200,
        "message": "成功",
        "data": {
            "trademarkList": [
                {
                    "tmId": 1,
                    "tmName": "苹果"
                },
                {
                    "tmId": 2,
                    "tmName": "小米"
                },
                {
                    "tmId": 3,
                    "tmName": "华为"
                },
                {
                    "tmId": 4,
                    "tmName": "vivo"
                },
                {
                    "tmId": 5,
                    "tmName": "oppo"
                },
            ],
            "attrsList": [
                {
                    "attrId": 1,
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ],
                    "attrName": "价格"
                },
                {
                    "attrId": 2,
                    "attrValueList": [
                        "126G",
                        "256G",
                        "512G"
                    ],
                    "attrName": "内存"
                },

            ],
            "goodsList": [
                {
                    "id": 1,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "imgURL": "http://localhost:8081/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 2,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "imgURL": "http://localhost:8081/images/mobile02.png",
                    "title": "Apple iPhone 12 (A2223)",
                    "price": 6499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 3,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "imgURL": "http://localhost:8081/images/mobile03.png",
                    "title": "Apple iPhone 13 (A2223)",
                    "price": 7499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 4,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "imgURL": "http://localhost:8081/images/mobile04.png",
                    "title": "Apple iPhone 14 (A2223)",
                    "price": 8499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 5,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "imgURL": "http://localhost:8081/images/mobile05.png",
                    "title": "Apple iPhone 15 (A2223)",
                    "price": 9499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 6,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "imgURL": "http://localhost:8081/images/mobile05.png",
                    "title": "Apple iPhone 16 (A2223)",
                    "price": 9499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 7,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "imgURL": "http://localhost:8081/images/mobile05.png",
                    "title": "Apple iPhone 17 (A2223)",
                    "price": 9499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 8,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "imgURL": "http://localhost:8081/images/mobile05.png",
                    "title": "Apple iPhone 18 (A2223)",
                    "price": 9499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 9,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "imgURL": "http://localhost:8081/images/mobile05.png",
                    "title": "Apple iPhone 19 (A2223)",
                    "price": 9499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 10,
                    "defaultImg": "http://192.168.200.128:8080/xxx.jpg",
                    "imgURL": "http://localhost:8081/images/mobile05.png",
                    "title": "Apple iPhone 20 (A2223)",
                    "price": 9499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },


            ],
            "total": 59,
            "pageSize": 5,
            "pageNo": 1,
            "totalPages": 4
        },
        "ok": true
    }
    response.send(JSON.stringify(data))
})

app.get('/api/detail/:skuId', (request, response) => {
    let data = {
        "code": 200,
        "message": "成功",
        "data": {
            "valuesSkuJson": "{\"3|5|7\":6,\"3|4|7\":2,\"2|4|7\":3,\"2|5|7\":4}",
            "price": 5499,
            "categoryView": {
                "id": 61,
                "category1Id": 2,
                "category1Name": "手机",
                "category2Id": 13,
                "category2Name": "手机通讯",
                "category3Id": 61,
                "category3Name": "Apple苹果"
            },
            "spuSaleAttrList": [
                {
                    "id": 1,
                    "spuId": 1,
                    "baseSaleAttrId": 1,
                    "saleAttrName": "选择颜色",
                    "spuSaleAttrValueList": [
                        {
                            "id": 1,
                            "spuId": 1,
                            "baseSaleAttrId": 1,
                            "saleAttrValueName": "金色",
                            "saleAttrName": "选择颜色",
                            "isChecked": "1"
                        },
                        {
                            "id": 2,
                            "spuId": 1,
                            "baseSaleAttrId": 1,
                            "saleAttrValueName": "银色",
                            "saleAttrName": "选择颜色",
                            "isChecked": "0"
                        },
                        {
                            "id": 3,
                            "spuId": 1,
                            "baseSaleAttrId": 1,
                            "saleAttrValueName": "黑色",
                            "saleAttrName": "选择颜色",
                            "isChecked": "0"
                        }
                    ]
                },
                {
                    "id": 2,
                    "spuId": 1,
                    "baseSaleAttrId": 2,
                    "saleAttrName": "内存容量",
                    "spuSaleAttrValueList": [
                        {
                            "id": 1,
                            "spuId": 1,
                            "baseSaleAttrId": 2,
                            "saleAttrValueName": "16GB",
                            "saleAttrName": "内存容量",
                            "isChecked": "1"
                        },
                        {
                            "id": 2,
                            "spuId": 1,
                            "baseSaleAttrId": 2,
                            "saleAttrValueName": "32GB",
                            "saleAttrName": "内存容量",
                            "isChecked": "0"
                        },
                        {
                            "id": 3,
                            "spuId": 1,
                            "baseSaleAttrId": 2,
                            "saleAttrValueName": "64GB",
                            "saleAttrName": "内存容量",
                            "isChecked": "0"
                        },
                        {
                            "id": 4,
                            "spuId": 1,
                            "baseSaleAttrId": 2,
                            "saleAttrValueName": "128GB",
                            "saleAttrName": "内存容量",
                            "isChecked": "0"
                        },
                    ]
                },
                {
                    "id": 3,
                    "spuId": 1,
                    "baseSaleAttrId": 3,
                    "saleAttrName": "选择版本",
                    "spuSaleAttrValueList": [
                        {
                            "id": 1,
                            "spuId": 1,
                            "baseSaleAttrId": 3,
                            "saleAttrValueName": "公开版",
                            "saleAttrName": "选择版本",
                            "isChecked": "1"
                        },
                        {
                            "id": 2,
                            "spuId": 1,
                            "baseSaleAttrId": 3,
                            "saleAttrValueName": "移动版",
                            "saleAttrName": "选择版本",
                            "isChecked": "0"
                        }
                    ]
                },
                {
                    "id": 4,
                    "spuId": 1,
                    "baseSaleAttrId": 3,
                    "saleAttrName": "购买方式",
                    "spuSaleAttrValueList": [
                        {
                            "id": 1,
                            "spuId": 1,
                            "baseSaleAttrId": 3,
                            "saleAttrValueName": "官方标配",
                            "saleAttrName": "购买方式",
                            "isChecked": "1"
                        },
                        {
                            "id": 2,
                            "spuId": 1,
                            "baseSaleAttrId": 3,
                            "saleAttrValueName": "优惠移动版",
                            "saleAttrName": "购买方式",
                            "isChecked": "0"
                        },
                        {
                            "id": 3,
                            "spuId": 1,
                            "baseSaleAttrId": 3,
                            "saleAttrValueName": "电信优惠版",
                            "saleAttrName": "购买方式",
                            "isChecked": "0"
                        }
                    ]
                }
            ],
            "skuInfo": {
                "id": 2,
                "spuId": 1,
                "price": 5000,
                "skuName": "Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机",
                "skuDesc": "主体\n入网型号\nA2223\n品牌\n机身厚度（mm）\n8.3\n运营商标志或内容\n无",
                "weight": "0.47",
                "tmId": 1,
                "category3Id": 61,
                "skuDefaultImg": "/images/s1.png",
                "isSale": 1,
                "skuImageList": [
                    {
                        "id": 1,
                        "skuId": 1,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "/images/s1.png",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 2,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "/images/s2.png",
                        "spuImgId": 3,
                        "isDefault": "0"
                    },
                    {
                        "id": 3,
                        "skuI": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "/images/s3.png",
                        "spuImgId": 4,
                        "isDefault": "0"
                    },
                    {
                        "id": 4,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "/images/s1.png",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 5,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "/images/s2.png",
                        "spuImgId": 3,
                        "isDefault": "0"
                    },
                    {
                        "id": 6,
                        "skuI": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "/images/s3.png",
                        "spuImgId": 4,
                        "isDefault": "0"
                    },
                    {
                        "id": 7,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "/images/s1.png",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 8,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "/images/s2.png",
                        "spuImgId": 3,
                        "isDefault": "0"
                    },
                    {
                        "id": 9,
                        "skuI": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "/images/s3.png",
                        "spuImgId": 4,
                        "isDefault": "0"
                    }
                ],
                "skuAttrValueList": [
                    {
                        "id": 6,
                        "attrId": 1,
                        "valueId": 6,
                        "skuId": 2
                    }
                ],
                "skuSaleAttrValueList": null
            }
        },
        "ok": true
    }
    response.send(JSON.stringify(data))
})

// 添加购物车
app.post('/api/addtocart/:skuId/:skuNum', (request, response) => {
    let flag = false
    let data = {
        code: 200,
    }
    cartList.find(item => {
        if (item.skuId === parseInt(request.params.skuId)) {
            return flag = true
        }
        console.log(item.skuId, request.params.skuId, flag);
    })
    console.log(flag);
    if (flag) {
        cartList.forEach(item => {
            if (item.skuId === parseInt(request.params.skuId)) {
                item.skuNum += parseInt(request.params.skuNum)
            }
        })
    } else {
        cartList.push({
            id: parseInt(6+request.params.skuId),
            userId: "2",
            skuId: parseInt(request.params.skuId),
            cartPrice: 5999,
            skuNum: parseInt(request.params.skuNum),
            imgUrl: "/images/mobile04.png",
            skuName: `Apple iPhone ${10+parseInt(request.params.skuId)} (A2223) `,
            isChecked: 1,
            skuPrice: 5999,
        })
    }

    response.send(JSON.stringify(data))
})

// 获取购物车列表
app.get('/api/cart/cartlist', (request, response) => {
    let data = {
        code: 200,
        data: cartList
    }
    response.send(JSON.stringify(data))
})
// 修改购物车
app.get('/api/cart/checkCart/:skuId/:isChecked', (request, response) => {
    let data = {
        code: 200,
    }
    cartList.forEach(item => {
        if (item.skuId === parseInt(request.params.skuId)) {

            item.isChecked = parseInt(request.params.isChecked)
        }
    })
    response.send(JSON.stringify(data))
})

// 删除购物车
app.delete('/api/cart/deleteCart/:skuId', (request, response) => {
    let data = {
        code: 200,
    }
    cartList.forEach((item, index) => {
        if (item.skuId === parseInt(request.params.skuId)) {
            cartList.splice(index, 1)
        }
    })
    response.send(JSON.stringify(data))
})

// 注册
app.post('/api/user/password/register', (request, response) => {
    let data = {
        code: 200
    }
    request.body.token = uuid.v4()
    users.push(request.body)
    response.send(JSON.stringify(data));
})

// 登录
app.post('/api/user/passport/login', (request, response) => {

    let { phone, password } = request.body
    let data = {
        code: '',
        data: [],
    }

    users.forEach(item => {
        if (item.phone === phone && item.password === password) {
            data = {
                code: 200,
                data: item
            }
            response.send(JSON.stringify(data));
        } else {
            data = {
                code: 500,
                data: null
            }
        }
    })
})

// 根据token获取用户信息
app.get('/api/user/passport/auth/getUserInfo', (request, response) => {
    let data = {
        code: 200,
        data: []
    }
    let token = request.headers.token
    users.forEach(item => {
        if (item.token === token) {
            data.data.push(item)
        }
    })
    response.send(JSON.stringify(data))

})


// 退出登录
app.get('/api/user/passport/logout', (request, response) => {
    let data = {
        code: 200,
        data: []
    }
    response.send(JSON.stringify(data))

})

// 获取订单交易页信息
app.get('/api/order/auth/trade', (request, response) => {
    let data = {
        code: 200,
        data: {
            userAddressList: [
                {
                    "id": 1,
                    "userAddress": "北京市昌平区1",
                    "userId": 2,
                    "consignee": "admin",
                    "phoneNum": "15060240385",
                    "isDefault": "1"
                },
                {
                    "id": 2,
                    "userAddress": "北京市昌平区2",
                    "userId": 2,
                    "consignee": "123",
                    "phoneNum": "18033968291",
                    "isDefault": "0"
                }
            ],
            detailArrayList: [

            ],
            totalAmount: 0,
        }
    }
    cartList.forEach(item => {
        if (item.isChecked) {
            data.data.detailArrayList.push(item)
        }
    })
    data.data.detailArrayList.forEach(item => {
        data.data.totalAmount += item.skuPrice * item.skuNum
    });
    data.data.totalNum = data.data.detailArrayList.length
    data.data.tradeNo = uuid.v4()
    response.send(JSON.stringify(data))
})

// 提交订单
app.post('/api/order/auth/submitOrder', (request, response) => {
    let data = {
        code: 200,
        data: 1
    }
    response.send(JSON.stringify(data))
})

// 获取支付信息
app.get('/api/payment/weixin/createNative/:orderId', (request, response) => {
    let totalFee
    cartList.forEach(item => {
        if (item.isChecked) {
            totalFee += item.skuPrice * item.skuNum
        }
    })
    let data = {
        code: 200,
        data: {
            orderId: request.params.orderId,
            totalFee,
        }
    }
    data.data.totalFee = 0.01
    console.log(request.path);
    response.send(JSON.stringify(data))
})


// 查询订单支付状态
app.get('/api/payment/weixin/queryPayStatus/:orderId', (request, response) => {
    let data = {
        code: 205,
    }
    response.send(JSON.stringify(data))
})


// 获取订单列表
app.get('/api/order/auth/:page/:limit', (request, response) => {
    let data = {
        code: 200,
        message: "成功",
        data: {
            records: [
                {
                    id: 1,
                    consignee: "admin",
                    consigneeTel: "15011111111",
                    totalAmount: 29495,
                    orderStatus: "UNPAID",
                    userId: 2,
                    paymentWay: "ONLINE",
                    deliveryAddress: "北京市昌平区2",
                    orderComment: "",
                    outTradeNo: "ATGUIGU1584247289311481",
                    tradeBody: "Apple iPhone 11 (A2223) 128GB手机 双卡双待 A",
                    createTime: "2020-03-15 12:41:29",
                    expireTime: "2020-03-16 12:41:29",
                    processStatus: "UNPAID",
                    trackingNo: null,
                    parentOrderId: null,
                    imgUrl: null,
                    orderDetailList: [
                        {
                            id: 81,
                            orderId: 70,
                            skuId: 2,
                            skuName: "包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶新款",
                            imgUrl: "/images/goods.png",
                            orderPrice: 5499,
                            skuNum: 1,
                            hasStock: null,
                        },
                        {
                            id: 82,
                            orderId: 70,
                            skuId: 2,
                            skuName: "包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶新款",
                            imgUrl: "/images/goods.png",
                            orderPrice: 5499,
                            skuNum: 1,
                            hasStock: null,
                        },
                    ],
                    orderStatusName: "未支付",
                    wareId: null,
                },
                {
                    id: 2,
                    consignee: "jane",
                    consigneeTel: "15011111111",
                    totalAmount: 29495,
                    orderStatus: "UNPAID",
                    userId: 2,
                    paymentWay: "ONLINE",
                    deliveryAddress: "北京市昌平区2",
                    orderComment: "",
                    outTradeNo: "ATGUIGU1584247289311481",
                    tradeBody: "Apple iPhone 11 (A2223) 128GB手机 双卡双待 A",
                    createTime: "2020-03-15 12:41:29",
                    expireTime: "2020-03-16 12:41:29",
                    processStatus: "UNPAID",
                    trackingNo: null,
                    parentOrderId: null,
                    imgUrl: null,
                    orderDetailList: [
                        {
                            id: 83,
                            orderId: 70,
                            skuId: 2,
                            skuName: "包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶新款",
                            imgUrl: "/images/goods.png",
                            orderPrice: 5499,
                            skuNum: 1,
                            hasStock: null,
                        },
                        {
                            id: 84,
                            orderId: 70,
                            skuId: 2,
                            skuName: "包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶新款",
                            imgUrl: "/images/goods.png",
                            orderPrice: 5499,
                            skuNum: 1,
                            hasStock: null,
                        },
                    ],
                    orderStatusName: "未支付",
                    wareId: null,
                },
                {
                    id: 3,
                    consignee: "lucy",
                    consigneeTel: "15011111111",
                    totalAmount: 29495,
                    orderStatus: "UNPAID",
                    userId: 2,
                    paymentWay: "ONLINE",
                    deliveryAddress: "北京市昌平区2",
                    orderComment: "",
                    outTradeNo: "ATGUIGU1584247289311481",
                    tradeBody: "Apple iPhone 11 (A2223) 128GB手机 双卡双待 A",
                    createTime: "2020-03-15 12:41:29",
                    expireTime: "2020-03-16 12:41:29",
                    processStatus: "UNPAID",
                    trackingNo: null,
                    parentOrderId: null,
                    imgUrl: null,
                    orderDetailList: [
                        {
                            id: 85,
                            orderId: 70,
                            skuId: 2,
                            skuName: "包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶新款",
                            imgUrl: "/images/goods.png",
                            orderPrice: 5499,
                            skuNum: 1,
                            hasStock: null,
                        },
                        {
                            id: 86,
                            orderId: 70,
                            skuId: 2,
                            skuName: "包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶新款",
                            imgUrl: "/images/goods.png",
                            orderPrice: 5499,
                            skuNum: 1,
                            hasStock: null,
                        },
                    ],
                    orderStatusName: "未支付",
                    wareId: null,
                },
                {
                    id: 4,
                    consignee: "mondy",
                    consigneeTel: "15011111111",
                    totalAmount: 29495,
                    orderStatus: "UNPAID",
                    userId: 2,
                    paymentWay: "ONLINE",
                    deliveryAddress: "北京市昌平区2",
                    orderComment: "",
                    outTradeNo: "ATGUIGU1584247289311481",
                    tradeBody: "Apple iPhone 11 (A2223) 128GB手机 双卡双待 A",
                    createTime: "2020-03-15 12:41:29",
                    expireTime: "2020-03-16 12:41:29",
                    processStatus: "UNPAID",
                    trackingNo: null,
                    parentOrderId: null,
                    imgUrl: null,
                    orderDetailList: [
                        {
                            id: 87,
                            orderId: 70,
                            skuId: 2,
                            skuName: "包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶新款",
                            imgUrl: "/images/goods.png",
                            orderPrice: 5499,
                            skuNum: 1,
                            hasStock: null,
                        },
                        {
                            id: 88,
                            orderId: 70,
                            skuId: 2,
                            skuName: "包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶新款",
                            imgUrl: "/images/goods.png",
                            orderPrice: 5499,
                            skuNum: 1,
                            hasStock: null,
                        },
                    ],
                    orderStatusName: "未支付",
                    wareId: null,
                },
            ],
            total: 41,
            size: 2,
            current: 1,
            pages: 21,
        },
        ok: true,
    }
    response.send(JSON.stringify(data))
})



app.listen(8080, () => {
    console.log('8080端口监听');
})