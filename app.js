function abc(letters) {

    var number = Math.round(Math.random() * 2)
    var output = document.getElementById('main')
    var arrA = [['Apple', 'Airplane', 'Ant'], ['Ball', 'Balti', 'Balloon'], ['Can', 'Cash', 'Cat'], ['Dice', 'Donkey', 'Dog'], ['Elephant', 'Egg', 'Emrella'], ['Fridge', 'Finger', 'Fish'], ['Grapes', 'Grass', 'Goat'], ['Hen', 'Heatter', 'Horse'], ['Inter', 'Ink', 'Iron'], ['Job', 'Jangu', 'Jug'], ['Kick', 'Kangaroo', 'Kite'], ['Life', 'Laptop', 'Lemon'], ['Monkey', 'ManoraBeach', 'Mango'], ['News', 'Norway', 'Nose'], ['Orange', 'Owl', 'Oggy'], ['Parrot', 'Papaya', 'Pink'], ['Quice', 'Queen', 'Quote'], ['Rain', 'Red', 'Rat'], ['Sand', 'Samosa', 'Silance'], ['Taxi', 'Tank', 'Tang'], ['Uphone', 'UMER', 'Umrella'], ['Vacume', 'Venus', 'Vanila'], ['Warm', 'Water', 'Watch'], ['Xylem', 'X-ray', 'Xylophone'], ['Yeppy', 'Yang', 'Yellow'], ['Zong', 'Zimbabwe', 'Zebra']]
    for (var i = 0; i < arrA.length; i++) {
        if (arrA[i][0][0] === letters) {
            console.log(arrA[i][number])
            output.innerText = arrA[i][number]
            break

        }

    }
}
