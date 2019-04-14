function isPrime (num) {
    if (num <= 1) {
        return true
    } else if (num <= 3) {
        return true
    } else if (num%2 === 0 || num%3 === 0) {
        return false
    }
    
    let i = 5
    while (i*i <= num) {
        if (num%i === 0 || num%(i+2) === 0) {
            return false
        }
        i += 6
    }
    return true
}

function closestPrime (num) {
    if (num <= 1) {
        return num
    } else if (num <= 3) {
        return num
    } else {
        let less_num = num;
        let bigger_num = num;

        while ( !isPrime(less_num) && !isPrime(bigger_num) ) {
            less_num--;
            bigger_num++
        }
        
        let less_diff = Math.abs( Math.abs(num) - Math.abs(less_num) );
        let bigger_diff = Math.abs( Math.abs(num) - Math.abs(bigger_num) );

        if( less_diff >= bigger_diff ) {
            return less_num
        } else {
            bigger_num
        }
    }

}
