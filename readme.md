# Project One Demo Project

## Todo 17/05/2023


Maak een repo aan via de classroom ABC
Clone deze repo naar de pi met de project one image
In deze repo zal je allerminst de readme.md aanpassen met uw eigen naam van uw project.

Daarnaast vind je op de image onder ~/demo_fullstack de oplossing van het laatste labo fullstack (10 RPi gebruiken - Doe het licht maar uit)
De bedoel is dat je, met behulp van het document binnen deze repo, dit project aanpast zodat je een fysieke led en knop kunt laten meewerken met de app.
(zie doc)


## Virtual Environment

### Aanmaken van een nieuwe venv

Zoals tijdens elk project van FSWD maken we een nieuwe venv aan door in de terminal volgend commando in te tikken:

- Voor ![Windows logo](https://icons.getbootstrap.com/assets/icons/windows.svg) : `py -m venv venv_p1demo`
- Voor ![Mac logo](https://icons.getbootstrap.com/assets/icons/apple.svg) : `python3 -m venv venv_p1demo`

Sluit hierna in VS Code de terminal en open een nieuwe en check of je in je venv aan het werken bent.
(of source venv_p1demo/bin/activate)

### Installeren van de benodigde packages via pip

Eerst zullen we nu de nodige packages installeren op onze nieuw gemaakte venv.
Voor het gemak hebben we alle nodige packages opgeslagen in het bestand requirements.txt.

Het installeren van de nodige packages kan met het volgende commando:

- Voor ![Windows logo](https://icons.getbootstrap.com/assets/icons/windows.svg) : `pip install -r ./requirements.txt`
- Voor ![Mac logo](https://icons.getbootstrap.com/assets/icons/apple.svg) : `pip install -r requirements.txt`

## Database

### SQL importeren (REEDS GEDAAN)

Open MySQLWorkbench en importeer het SQL-bestand. In het bestand staat ook onze standaarduser `root_fswd` met als standaardpaswoord `root_fswd`.

### Config voor de database aanpassen (REEDS GEDAAN)

Maak een kopie van _config_example.py_ met de naam _config.py_ en vul het paswoord voor de database aan.

## Flask

Pas in app.py het secret van de Flask server aan, naar een willekeurige string
