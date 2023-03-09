
const fs = require('fs')

const registroCita = (nombre, edad, animal, color, enfermedad) => {
    const cita = fs.readFileSync('cita.json', 'utf-8')
    const citasP = JSON.parse(cita)
    
    const citas = {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad, enfermedad
    }

    citasP.push(citas)
    
    fs.writeFileSync('cita.json', JSON.stringify(citasP))


}



const leercita = () => {
    const cita = fs.readFileSync('cita.json', 'utf-8')

    JSON.parse(cita).forEach(citas => console.log(citas))
}


module.exports = { registroCita, leercita }