
async function UpdateNGODetails (token, ngoName, ngoDescription) {
  const response = await fetch('https://sociocredz.herokuapp.com/api/v1/ngo/update', {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ngoName,
      ngoDescription
    })
  })
  const respJSON = await response.json()
  return respJSON
}

module.exports = {
  UpdateNGODetails
}
