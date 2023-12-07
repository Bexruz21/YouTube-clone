import axios from "axios"

export const textStrip = (text) => {
  return (text < 1000) ? text : (text >= 1000 && text < 1000000) ?
    `${String(text).slice(0, -3)} тыс.` :
    `${String(text).slice(0, -6)} млн.`
}

export const fetchData = (api, setState) => {
  axios.get(api).then(res => setState(res.data.data))
}


const register = (response) => {
  axios.post('http://localhost:1337/api/auth/local/register', {
    username: response.data.name,
    email: response.data.email,
    name: response.data.given_name,
    surname: response.data.family_name,
    imageUrl: response.data.picture,
    password: response.data.id
  }).then(res => {
    localStorage.setItem("jwt", res.data.jwt)
    localStorage.setItem("user", JSON.stringify(res.data.user))
    window.location.reload()
  })
}

export const auth = async (accessToken) => {
  axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }).then(response => {
    axios.get(`http://localhost:1337/api/users?filters[email]=${response.data.email}`)
      .then(res => {
        if (res.data[0]) {
          axios.post('http://localhost:1337/api/auth/local', {
            identifier: response.data.email,
            password: response.data.id
          }).then(res => {
            localStorage.setItem("jwt", res.data.jwt)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            window.location.reload()
          })
        }
        else {
          register(response)
        }
      })

  })
}
