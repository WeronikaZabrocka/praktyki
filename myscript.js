function handleCalculator(form) {
    form.result.innerHTML = calculate(form.input1.value, form.input2.value, form.mode.value);
}

function calculate(x, y, mode) {
    x = parseFloat(x);
    y = parseFloat(y);
    switch (mode) {
        case 'add':
            return x + y;
        case 'sub':
            return x - y;
        case 'mul':
            return x * y;
        case 'div':
            if (y == 0)
                return 'HEHE bardzo smieszne ale to nie przejdzie';
            return x / y;
    }
}

function changeNames(form, mode) {
    n1 = form.f1;
    n2 = form.f2;
    i2 = form.f3;
    i2.disabled = false;
    switch (mode) {
        case 'add':
            n1.innerHTML = 'Składnik:';
            n2.innerHTML = 'Składnik:';
            return;
        case 'sub':
            n1.innerHTML = 'Odjemna:';
            n2.innerHTML = 'Odejmnik:';
            return;
        case 'mul':
            n1.innerHTML = 'Czynnik:';
            n2.innerHTML = 'Czynnik:';
            return;
        case 'div':
            n1.innerHTML = 'Dzielna:';
            n2.innerHTML = 'Dzielnik:';
            return;
    }
}

function handlePalindrome(form) {
    form.result.innerHTML = palindrome(form.input.value);
}

function palindrome(x) {
    x = x.toLowerCase();
    for (let i in x) {
        if (x[i] != x[x.length - 1 - i])
            return 'Nie tym razem, próbuj dalej';
    }
    return 'Wohooo to palindrom';
}

function handleAnagramForm(form) {

    let word1 = form.inputbox3.value;
    let word2 = form.inputbox4.value;
    document.getElementById("anagramResult").innerHTML = anagram(word1, word2);
}

function bubbleSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

function anagram(var1, var2) {
    let word1 = [];
    let word2 = [];
    let flag = true;

    word1ASCII = [];
    word2ASCII = [];

    word1 = var1.split('');
    word2 = var2.split('');

    if (word1.length == word2.length) {
        for (let i = 0; i < word1.length; i++) {
            word1ASCII[i] = word1[i].charCodeAt(0);
        }

        for (let i = 0; i < word2.length; i++) {
            word2ASCII[i] = word2[i].charCodeAt(0);
        }

        word1ASCII = bubbleSort(word1ASCII);
        word2ASCII = bubbleSort(word2ASCII);

        console.log(word1ASCII);
        console.log(word2ASCII);


        for (let i = 0; i < word1ASCII.length; i++) {
            if (word1ASCII[i] != word2ASCII[i]) {
                flag = false;
                break;
            }
        }
    } else {
        return false;
    }
    return flag;
}

console.log(anagram("siema", "siemb"));
console.log("a".charCodeAt(0));
console.log("b".charCodeAt(0));