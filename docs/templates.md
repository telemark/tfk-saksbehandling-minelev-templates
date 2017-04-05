# Maler

Modulen inneholder maler for varsler og elevsamtaler

# Maler - Varsler

Modulen inneholder 3 maler for varsel og 2 for interne notater dersom det skal distribueres varsel til elever med hemmelig adresse eller
elever hvor man ikke har fått foresattes adresse fra folkeregisteret.

Varselmalene er [atferd](../templates/atferd.docx), [fag](../templates/fag.docx) og [orden](../templates/orden.docx).

Notatmalene er [hemmelig-adresse](../templates/hemmelig-adresse.docx) og [foresatte](../templates/foresatte.docx)

## Atferd
Denne malen benyttes dersom det er fare for nedsatt karakter i oppførsel.

Koder som benyttes:

- ```{navnElev}``` Elevens fulle navn
- ```{navnAvsender}``` Navn på den som sender varselet
- ```{navnSkole}``` Skolens navn
- ```{tlfSkole}``` Skolens telefonnummer
- ```{dato}``` Dato for produksjon av varselet på formatet dd.mm.åååå
- ```{Arsak}``` Årsak(er) til at varselet sendes. Kan inneholde flere linjer adskilt med ```\n```
- ```{varselPeriode}``` Halvårsvurdering 1. termin, 2. termin eller standpunktkarakter
- ```{skoleAar}``` Hvilket skoleår

## Fag
Denne malen benyttes dersom det er fare for nedsatt karakter i ett eller flere fag.

Koder som benyttes:

- ```{navnElev}``` Elevens fulle navn
- ```{navnAvsender}``` Navn på den som sender varselet
- ```{navnSkole}``` Skolens navn
- ```{tlfSkole}``` Skolens telefonnummer
- ```{dato}``` Dato for produksjon av varselet på formatet dd.mm.åååå
- ```{Arsak}``` Årsak(er) til at varselet sendes. Kan inneholde flere linjer adskilt med ```\n```
- ```{fag}``` Fag varselet omfatter. Kan inneholde flere linjer adskilt med ```\n```
- ```{varselPeriode}``` Halvårsvurdering 1. termin, 2. termin eller standpunktkarakter
- ```{skoleAar}``` Hvilket skoleår

## Orden
Denne malen benyttes dersom det er fare for nedsatt karakter i orden.

Koder som benyttes:

- ```{navnElev}``` Elevens fulle navn
- ```{navnAvsender}``` Navn på den som sender varselet
- ```{navnSkole}``` Skolens navn
- ```{tlfSkole}``` Skolens telefonnummer
- ```{dato}``` Dato for produksjon av varselet på formatet dd.mm.åååå
- ```{Arsak}``` Årsak(er) til at varselet sendes. Kan inneholde flere linjer adskilt med ```\n```
- ```{varselPeriode}``` Halvårsvurdering 1. termin, 2. termin eller standpunktkarakter
- ```{skoleAar}``` Hvilket skoleår

## Hemmelig adresse
Denne malen benyttes dersom varselet skal distribueres til elever med hemmelig adresse.

I slike tilfeller vil det produseres og arkiveres et varsel som vanlig, men det sendes et internt notat via sak/arkiv-systemet til elevens skole.
Deretter vil varselet bli skrevet ut og distribuert etter gjeldende avtale for den enkelte elev.

Koder som benyttes:

- ```{dato}``` Dato for produksjon av notatet på formatet dd.mm.åååå
- ```{navnElev}``` Elevens fulle navn
- ```{klasseElev}``` Elevens klasse
- ```{navnAvsender}``` Navn på den som sender varselet
- ```{navnSkole}``` Skolen som skal distribuere varselet

## Ikke lik folkeregistrert adresse
Denne malen benyttes dersom varselet skal distribueres til foresatte og ingen av de man fant på dsf har lik adresse som eleven.

I slike tilfeller vil det produseres og arkiveres et varsel som vanlig, men det sendes et internt notat via sak/arkiv-systemet til elevens skole.
Deretter vil varselet bli skrevet ut og distribuert etter gjeldende avtale for den enkelte elev.

Koder som benyttes:

- ```{dato}``` Dato for produksjon av notatet på formatet dd.mm.åååå
- ```{navnElev}``` Elevens fulle navn
- ```{klasseElev}``` Elevens klasse
- ```{navnAvsender}``` Navn på den som sender varselet
- ```{navnSkole}``` Skolen som skal distribuere varselet

# Maler - Elevsamtaler

## Undervegsvurdering

## Utviklingssamtale

## Annet
