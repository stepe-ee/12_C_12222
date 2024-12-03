console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH")
console.log('_'.repeat(50))



function validateData(studentData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (!studentData.nama) {
            reject(new Error("Invalid Data"))
        }else if (studentData.umur < 18) {
            reject(new Error("Student is too young"))
        }else if (studentData.ktp.length !== 16) {
            reject(new Error("Invalid KTP Number"))
        }else {
            resolve(`Student ${studentData.nama} has been successfully registered`)
            }
        }, 5000)
    })
}

async function processData(studentData) {
    try {
        const result = await validateData(studentData)
        console.log(result)
    }catch (error) {
        console.error(`An Error Occured: ${error.message}`)
    }
}

processData({nama: "", umur: 22, ktp: "1234567890123456"})
processData({nama: "Fahmy", umur: 16, ktp: "1234567890123456"})
processData({nama: "Kevin", umur: 20, ktp: "12345"})
processData({nama: "Steve", umur: 19, ktp: "2317122221234567"})
processData({nama: "Kay", umur: 22, ktp: "1122334455667788"})
