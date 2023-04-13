// Todo: email 주소가 string 형태로 주어졌을 때 아이디 일부를 마스킹 처리하여 리턴해보자

const email = 'example@gmail.com'
let maskingMail = ''

let userId = email.split('@')[0]
console.log(userId)
let company = email.split('@')[1]
console.log(company)

