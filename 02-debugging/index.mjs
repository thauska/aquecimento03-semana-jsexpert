import http from 'http'

function netSalary({ discount, salary }) {
    const percent = (discount / 100)
    const cost = salary * percent
    const result = salary - cost

    return result
}

http.createServer((req, res) => {

    res.end('hello world')
    
}).listen(3000, () => console.log('app running at 3000'))