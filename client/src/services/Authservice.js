import axios from 'axios';


const AuthService = {
    login: person => {
        return axios.post('http://localhost:8000/api/people/login', {
            body: person,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(responce => responce.data)
    },
    register: person => {
        return axios.post('http://localhost:8000/api/people/regester', {
            body: person,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(responce => responce.data)
    },
    logout: () => {
        return axios.post('http://localhost:8000/api/people/logout')
            .then(responce => responce.data)
    },
    isAuthenticated: () => {
        return axios.get('http://localhost:8000/api/authenticated')
            .then(responce => {
                if (responce.status !== 401)
                    return responce.data;
                else
                    return { isAuthenticated: false, user: { username: "", role: "" } };
            })
    }
}

export default AuthService