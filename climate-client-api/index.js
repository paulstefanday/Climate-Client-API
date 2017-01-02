import 'isomorphic-fetch'

export const login = form => fetch('/authentication', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(form)
})
.then(res => {
	let body = JSON.parse(res.body)
	localStorage.setItem('climateToken', body.accessToken)
	return body
})

export const signup = form => fetch('/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
})
.then(res => JSON.parse(res.body))

export const hasAuth = () => localStorage.getItem('climateToken')

export const logout = () => localStorage.removeItem('climateToken')
