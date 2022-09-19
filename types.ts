export type addressType = {
  street: string,
  suit: string,
  city: string,
  zipcode: string
}


export type contactType = {
  id: string,
  name: string,
  email: string,
  address: addressType
}

export type postType = {
  title: string,
  body: string 
}

// export type postsDataGeo = {
//   lat: string,
//   lng: string
// }

// export type postsDataAddress = {
//   street: string,
//   suite: string,
//   city: string,
//   zipcode: string,
//   geo: postsDataGeo
// }

// export type postsDataCompany = {
//   name: string,
//   catchPhrase: string,
//   bs: string
// }

export type postsDataType = {
    // id: number,
    // name: string,
    // username: string,
    // email: string,
    // address: postsDataAddress,
    // phone: string,
    // website: string,
    // company: postsDataCompany

    id: number
    userId: number
    body: string
    title: string
}
