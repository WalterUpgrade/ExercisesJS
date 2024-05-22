const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

alumns.forEach(alumn => {

    // contar el número de trimestres aprobados
    let approvedCount = 0;
    if (alumn.T1) approvedCount++;
    if (alumn.T2) approvedCount++;
    if (alumn.T3) approvedCount++;

    // propiedad isApproved basado en el número de trimestres aprobados
    alumn.isApproved = approvedCount >= 2;
});

console.log(alumns);
