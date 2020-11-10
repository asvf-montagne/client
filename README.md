## ASVF-Montagne client side application

#### How to run

In development `yarn dev`

Build `yarn build`

#### Distinction entre atom, molecule et organism

- Un atom est un coposant unitaire, il n'a pas de state managé (useState) sauf rare exception. 
- Une molecule utilise plusieurs composants atoms.
- Un organisme utilise plusieurs composants molécules, atomes et/ou a un state interne, a une logique.
