function kalkulator(form) {
    form.result.innerHTML = kalkulator1(form.l1.value, form.l2.value, form.opt.value);
}

function kalkulator1(x, y, opt) {
    x = parseFloat(x);
    y = parseFloat(y);
    switch (opt) {
        case 'dodawanie':
            return x + y;
        case 'odejmowanie':
            return x - y;
        case 'mnozenie':
            return x * y;
        case 'dzielenie':
            if (y == 0)
                return 'HEHE bardzo smieszne ale to nie przejdzie';
            return x / y;
    }
}



function palindrom(form) {
    form.result.innerHTML = palindrom1(form.input.value);
}

function palindrom1(x) {
    x = x.toLowerCase();
    for (let i in x) {
        if (x[i] != x[x.length - 1 - i])
            return 'Nie tym razem, próbuj dalej';
    }
    return 'Wohooo to palindrom';
}


function najwieksza(tab) {
    let najwieksza = 0
    let druganajwieksza = 0
    for (i = 0; i < tab.length; i++) {
        if (tab[i] > najwieksza) {
            druga_najwieksza = najwieksza;
            najwieksza = tab[i];
        }
    }
    return druga_najwieksza;
}
console.log(najwieksza([1, 1, 2, 3, 4, 5, 5, 6, 8]))




function rekurencja(form) {
    a = parseInt(form.a.value);
    b = parseInt(form.b.value);
    form.result.innerHTML = rekurencja1(a, b);
}


function rekurencja1(a, b) {
    if (a < b) {
        return String(a) + " " + String(rekurencja1(a + 1, b))
    } else {
        return a
    }
}