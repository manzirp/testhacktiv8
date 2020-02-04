function SecondGreatLow(arr) {
    if (arr.length >= 2) {
        var biggest = Math.max.apply(null, arr);
        var lowest = Math.min.apply(null, arr);
        var secondB = 0;
        var secondL = biggest;
        if (arr.length > 2) {
            arr.map((x) => {
                if (x < biggest && x > secondB) secondB = x;
                if (x > lowest && x < secondL) secondL = x;
            })
            console.log(secondL + ' ' + secondB);
        } else {
            console.log(biggest + ' ' + lowest);
        }
    } else {
        console.log('Invalid input !');
    }
}

function Multiplicative(num) {
    function multiply(n) {
        // var rs=0;
        // for(var i=0; i<n.length; i++){
        //     rs = rs + (parseInt(n[i]) * parseInt(n[i+1]));
        // }
        // console.log(rs);
        // return rs;
        return n.reduce(function (a, b) { return a * b; });
    }
    var counter = 0;
    while (num.toString().length > 1) {
        num = num.toString().split("");
        num = multiply(num);
        counter++;
    }
    console.log(counter)
}

function MeanMode(numbers) {
    function mean(numbers) {
        var total = 0, i;
        for (i = 0; i < numbers.length; i += 1) {
            total += numbers[i];
        }
        return total / numbers.length;
    }

    function mode(numbers) {
        var modes = [], count = [], i, number, maxIndex = 0;

        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }

        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }

        return modes;
    }
    var rs = 0;
    if(mean(numbers) == mode(numbers)) rs = 1;
    console.log(rs);
}

SecondGreatLow([5, 1]);
Multiplicative(39);
MeanMode([5,3,3,3,1])