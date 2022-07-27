import Mock from "mockjs";
import todayrecommend from './todayrecommend.json'
import floors from './floors.json'

Mock.mock('/mock/todayrecommend', {
    code: 200,
    data: todayrecommend
})
Mock.mock('/mock/floors', {
    code: 200,
    data: floors
})

console.log('mockServer');