const whatsAppNum = "85269338128"

const phoneNum = "+852 69122011"
const smallPhoneNum = "6912 2011"
const toWhatsApp = () =>{
  location.href = `https://wa.me/${whatsAppNum}?text=Hello愛康健,我想查詢牙科服務`
}
const whatsapplink = `https://wa.me/${whatsAppNum}?text=Hello愛康健,我想查詢牙科服務`

const toPhone = ()=>{
  location.href = `tel: ${phoneNum}`
}

export{
  whatsAppNum,
  phoneNum,
  smallPhoneNum,
  toWhatsApp,
  toPhone,
  whatsapplink
}