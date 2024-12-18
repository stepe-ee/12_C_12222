console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH")
console.log('_'.repeat(50))

function validateBirthDate(tanggal) {
    const today = new Date()
    const birthDate = new Date(tanggal)
    const age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    if (isNaN(birthDate.getTime()) || age < 17) {
        throw new Error("Student is too young")
    }
}

function validateData(studentData) {
    return new Promise((resolve, reject) => {
        try {
            if (!studentData.nama || typeof studentData.nama !== "string") {
                throw new Error("Invalid data")
            }

            validateBirthDate(studentData.tanggal)

            if (studentData.ktp.length !== 16 || isNaN(Number(studentData.ktp))) {
                throw new Error("Invalid KTP number")
            }

            resolve(`Student ${studentData.nama} has been successfully registered`);
        } catch (error) {
            reject(error)
        }
    })
}

async function processData(studentData) {
    try {
        const result = await validateData(studentData)
        console.log(result)
    } catch (error) {
        console.error(`An error occurred: ${error.message}`)
    }
}

const students = [
    { nama: "", tanggal: "2005-01-01", ktp: "1234567890123456" },
    { nama: "Fahmy", tanggal: "2010-05-05", ktp: "1234567890123456" },
    { nama: "Kevin", tanggal: "2000-12-30", ktp: "12345" },
    { nama: "Steve", tanggal: "2004-07-20", ktp: "2317122221234567" },
    { nama: "Kay", tanggal: "1995-08-15", ktp: "1122334455667788" },
]

students.forEach((student) => processData(student))
