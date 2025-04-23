type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
}

const fruits: IFruit[] = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]

// SOAL NOMOR 1
const getDistinctFruitName = (fruits: IFruit[]) => {
    const fruitNameList: string[] = []
    for (let i = 0; i < fruits.length; i++) {
        let duplicate = false
        for (let j = 0; j < fruitNameList.length; j++) {
            if (fruits[i].fruitName.toLowerCase() === fruitNameList[j].toLowerCase()) {
                duplicate = true
                break
            }
        }

        if (!duplicate) {
            fruitNameList.push(fruits[i].fruitName)
        }
    }
    return fruitNameList
}
console.log("================================")
console.log("1. Andi Memiliki Buah")
const buahAndi = getDistinctFruitName(fruits)
for (let item of buahAndi) {
    console.log(`- ${item}`)
}
console.log("================================")
console.log('\n')

// SOAL NOMOR 2
const getFruitsByType = (fruits: IFruit[]) => {
    const wadah: { [key: string]: string[] } = {}
    for (let fruit of fruits) {
        if (!wadah[fruit.fruitType]) {
            wadah[fruit.fruitType] = []
        }

        let duplicate = false
        for (let i = 0; i < wadah[fruit.fruitType].length; i++) {
            if (fruit.fruitName.toLowerCase() === wadah[fruit.fruitType][i].toLowerCase().trim()) {
                duplicate = true
                break
            }
        }

        if (!duplicate) {
            wadah[fruit.fruitType].push(` ${fruit.fruitName}`)

        }
    }
    return wadah
}
console.log("================================")
console.log("2. Buah Andi Berdasarkan Tipe")
const buahAndiBerdasarkanTipe = getFruitsByType(fruits)
console.log(`Wadah yang dibutuhkan Andi adalah ${Object.keys(buahAndiBerdasarkanTipe).length} wadah`)
console.log('\n')

for (let key in buahAndiBerdasarkanTipe) {
    console.log(`Wadah ${key} : ${buahAndiBerdasarkanTipe[key]}`)
}
console.log("================================")
console.log('\n')

// Soal Nomor 3
const calculateStockEachType = (fruits: IFruit[]) => {
    const stockEachType: { [key: string]: number } = {}
    for (let fruit of fruits) {
        if (!stockEachType[fruit.fruitType]) {
            stockEachType[fruit.fruitType] = 0
        }

        for (let key in stockEachType) {
            if (key === fruit.fruitType) {
                stockEachType[key] += fruit.stock
            }
        }
    }
    return stockEachType


}
console.log("================================")
console.log('3. Total Stock Buah Dalam Masing - Masing Wadah')
const jumlahStockDalamWadah = calculateStockEachType(fruits)
for (let key in jumlahStockDalamWadah) {
    console.log(`Wadah ${key} memiliki stock ${jumlahStockDalamWadah[key]} buah`)
}
console.log("================================")
console.log('\n')

// SOAL NOMOR 4
console.log("================================")
console.log(`4. Beberapa buah dari kasus ini memiliki nama yang sama. 
Dengan code ini, dapat menampilkan nama buah secara distinct atau unique.`)
console.log("================================")





