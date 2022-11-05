import College from "./College"
import Employee from "./Employee"

let myStyle = {color:'red'}
let name = "Tung Po Alex Tsang"

let emp = {
    fnm: "Tung Po Alex",
    lnm: "Tsang",
    salary: 1200.00,
    city: "Toronto",
    designation: "Prof."
}

function Hello() {
    return (
        <>
            <h2 style={ myStyle }>Tung Po Alex Tsang</h2>
            <College city="Toronto" />
            <Employee employee = {emp}/>
        </>
    )
}

export default Hello