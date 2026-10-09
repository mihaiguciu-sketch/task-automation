// Date comune: aplicația principală (index.html) și pagina operatorului (status.html)
const activitati = [
  {id:1, title:"Decaparea esplanadelor – intrare Calea Floreasca", fields:[
     {key:'detergent', label:'Detergent', placeholder:'ex: PAVIMAX HEAVY'},
   ],
   desc:"Decapare pardoseala esplanada exterioara FLOREASCA cu detergent {{DETERGENT}} si NUFAR doar unde sunt pete.\n• Aplicarea soluției decapante pe pardoseala (la 1 galeata mare de 20L puneti 0.4L de solutie decapanta);\n• Timp de acționare conform procedurii minim 15 minute trebuie sa ramana detergentul pe pardoseala;\n• Frecare mecanizată mașină automată T3 sau T7 sau manuala cu talpa - insistati in zonele cu pete;\n• Aspirarea rezidurilor lichide;\n• Clătire cu masina cu apa curata fara detergent (pentru a preveni alunecarea)."},
  {id:2, title:"Decaparea esplanadelor – intrare Barbu Văcărescu", fields:[
     {key:'detergent', label:'Detergent', placeholder:'ex: PAVIMAX HEAVY'},
   ],
   desc:"Decapare pardoseala esplanada exterioara BARBU VACARESCU cu detergent {{DETERGENT}} si NUFAR doar unde sunt pete.\n• Aplicarea soluției decapante pe pardoseala (la 1 galeata mare de 20L puneti 0.4L de solutie decapanta);\n• Timp de acționare conform procedurii minim 15 minute trebuie sa ramana detergentul pe pardoseala;\n• Frecare mecanizată mașină automată T3 sau T7 sau manuala cu talpa - insistati in zonele cu pete;\n• Aspirarea rezidurilor lichide;\n• Clătire cu masina cu apa curata fara detergent (pentru a preveni alunecarea)."},
  {id:3, title:"Spălare rampă acces parcare subterană Barbu Văcărescu (stradă → nivel -3)",
   desc:"Cu peria de mână și utilajul T300, spălați foarte bine pardoseala de pe rampa de acces auto a parcării subterane – acces BARBU VACARESCU.\n• Insistați în zonele foarte murdare și mai ales pe marginile albastre, dar și pe zona centrală dintre stâlpișorii de separare a benzilor.\n• Acordați atenție zonelor cu acumulări de ulei și murdărie persistentă (urme de anvelope).\n• Dacă este necesar, repetați spălarea în zonele unde murdăria nu este îndepărtată complet din prima trecere.\n• Folosiți cantitatea corectă de detergent și nu lăsați exces de apă pe rampă (risc de alunecare).\n• La final, verificați vizual rampa pe toată lungimea și asigurați-vă că nu au rămas zone necurățate."},
  {id:4, title:"Spălare rampă acces parcare subterană Floreasca (stradă → nivel -3)",
   desc:"Cu peria de mână și utilajul T300, spălați foarte bine pardoseala de pe rampa de acces auto a parcării subterane – acces FLOREASCA.\n• Insistați în zonele foarte murdare și mai ales pe marginile albastre, dar și pe zona centrală dintre stâlpișorii de separare a benzilor.\n• Acordați atenție zonelor cu acumulări de ulei și murdărie persistentă (urme de anvelope).\n• Dacă este necesar, repetați spălarea în zonele unde murdăria nu este îndepărtată complet din prima trecere.\n• Folosiți cantitatea corectă de detergent și nu lăsați exces de apă pe rampă (risc de alunecare).\n• La final, verificați vizual rampa pe toată lungimea și asigurați-vă că nu au rămas zone necurățate."},
  {id:5, title:"Decapare Food Court", fields:[
     {key:'p1', label:'Punct 1', placeholder:'ex: Intrare Toalete'},
     {key:'p2', label:'Punct 2', placeholder:'ex: Burger King'},
     {key:'p3', label:'Punct 3', placeholder:'ex: Chopstix'},
     {key:'p4', label:'Punct 4', placeholder:'ex: Burton'},
     {key:'z1', label:'Zonă tehnică 1', placeholder:'ex: Chopstix'},
     {key:'z2', label:'Zonă tehnică 2', placeholder:'ex: Toans'},
   ],
   desc:"Decapare cu detergent PAVIMAX HEAVY.\n🕐 Zona de lucru:\n• Zona meselor si Coridorul din fața restaurantelor: {{P1}} – {{P2}} – {{P3}} – {{P4}}, inclusiv intrările către spațiile tehnice din zona {{Z1}} și {{Z2}}.\n🔹 Etapele de lucru:\n• Diluția soluției: 2 litri de detergent PAVIMAX HEAVY la o găleată mare de 20L.\n• Aplicarea soluției decapante PAVIMAX HEAVY pe toate zonele stabilite.\n• Respectarea unui timp minim de acționare de 10 minute.\n• Frecarea manuală a pardoselii cu talpa timp de 10–15 minute, insistând asupra petelor și depunerilor persistente.\n• Aspirarea reziduurilor lichide cu mașina T300.\n• Clătirea și neutralizarea suprafeței cu apă curată pentru prevenirea alunecării.\n• Uscarea completă a zonei înainte de finalizarea lucrării."},
  {id:6, title:"Spălare scări rulante Nord (zona Carrefour)",
   desc:"Spălare scări rulante și travelatoare – zona Carrefour (trepte și contratrepte):\n   * Nivel -3 ➜ -2\n   * Nivel -2 ➜ -1\n   * Nivel -1 ➜ 0\n   * Nivel 0 ➜ 1\n   * Nivel 1 ➜ 2\nÎnainte de a pune buretele pe scări, folosiți pulverizatorul mare pentru a stropi/înmuia bine treptele și contratreptele, apoi folosiți buretele."},
  {id:7, title:"Spălare scări rulante Sud (zona Zara)",
   desc:"Spălare scări rulante și travelatoare – zona Zara (trepte și contratrepte):\n   * Nivel -3 ➜ -2\n   * Nivel -2 ➜ -1\n   * Nivel -1 ➜ 0\n   * Nivel 0 ➜ 1\n   * Nivel 1 ➜ 2\nÎnainte de a pune buretele pe scări, folosiți pulverizatorul mare pentru a stropi/înmuia bine treptele și contratreptele, apoi folosiți buretele."},
  {id:8, title:"Spălare în profunzime parcare subterană Nivel -2", fields:[
     {key:'culoare', label:'Culoar', placeholder:'ex: PORTOCALIU'},
     {key:'interval', label:'Interval orar', placeholder:'ex: 23:00 - 00:30'},
   ],
   desc:"Mașina T17 pentru zonele deschise și T300 pentru margini, stâlpi și zone greu accesibile.\nCuloar: {{CULOARE}}\nInterval: {{INTERVAL}}\nSe va spăla integral culoarul indicat și toate zonele adiacente. Se vor curăța: colțurile, marginile pereților, zonele din jurul stâlpilor, spațiile din jurul hidranților și echipamentelor tehnice. Orice pete persistente de ulei sau murdărie trebuie tratate suplimentar și curățate înainte de finalizarea lucrării."},
  {id:9, title:"Spălare în profunzime parcare subterană Nivel -3", fields:[
     {key:'culoare', label:'Culoar', placeholder:'ex: PORTOCALIU'},
     {key:'interval', label:'Interval orar', placeholder:'ex: 23:00 - 00:30'},
   ],
   desc:"Mașina T17 pentru zonele deschise și T300 pentru margini, stâlpi și zone greu accesibile.\nCuloar: {{CULOARE}}\nInterval: {{INTERVAL}}\nSe va spăla integral culoarul indicat și toate zonele adiacente. Se vor curăța: colțurile, marginile pereților, zonele din jurul stâlpilor, spațiile din jurul hidranților și echipamentelor tehnice. Orice pete persistente de ulei sau murdărie trebuie tratate suplimentar și curățate înainte de finalizarea lucrării."},
  {id:10, title:"CURĂȚENIE GENERALĂ – GRUPURI SANITARE NIVEL -1", fields:[{key:'detergent', label:'Detergent', placeholder:'ex: nume detergent'}],
   desc:"🔹 Curățenie generală completă: pardoseli, obiecte sanitare, oglinzi, uși, pereți despărțitori și toate suprafețele verticale.\n🔹 Curățați și dezinfectați vasele WC, pisoarele și chiuvetele cu GEL DEZINFECTANT.\n🔹 Bateriile, dispenserele, uscătoarele și toate suprafețele de contact se curăță cu lavetă umedă, apoi se șterg cu lavetă uscată.\n🔹 Curățați complet semnalistica grupurilor sanitare, inclusiv panourile, indicatoarele și ramele decorative.\n🔹 Decaparea pardoselii cu detergent {{DETERGENT}}, insistând pe colțuri, margini și zonele greu accesibile.\n⚠️ La final, întregul grup sanitar trebuie să fie complet curat și uscat, fără pete."},
  {id:11, title:"CURĂȚENIE GENERALĂ – GRUPURI SANITARE NIVEL 1", fields:[{key:'detergent', label:'Detergent', placeholder:'ex: nume detergent'}],
   desc:"🔹 Curățenie generală completă: pardoseli, obiecte sanitare, oglinzi, uși, pereți despărțitori și toate suprafețele verticale.\n🔹 Curățați și dezinfectați vasele WC, pisoarele și chiuvetele cu GEL DEZINFECTANT.\n🔹 Bateriile, dispenserele, uscătoarele și toate suprafețele de contact se curăță cu lavetă umedă, apoi se șterg cu lavetă uscată.\n🔹 Curățați complet semnalistica grupurilor sanitare, inclusiv panourile, indicatoarele și ramele decorative.\n🔹 Decaparea pardoselii cu detergent {{DETERGENT}}, insistând pe colțuri, margini și zonele greu accesibile.\n⚠️ La final, întregul grup sanitar trebuie să fie complet curat și uscat, fără pete."},
  {id:12, title:"CURĂȚENIE GENERALĂ – GRUPURI SANITARE NIVEL 0", fields:[{key:'detergent', label:'Detergent', placeholder:'ex: nume detergent'}],
   desc:"🔹 Curățenie generală completă: pardoseli, obiecte sanitare, oglinzi, uși, pereți despărțitori și toate suprafețele verticale.\n🔹 Curățați și dezinfectați vasele WC, pisoarele și chiuvetele cu GEL DEZINFECTANT.\n🔹 Bateriile, dispenserele, uscătoarele și toate suprafețele de contact se curăță cu lavetă umedă, apoi se șterg cu lavetă uscată.\n🔹 Curățați complet semnalistica grupurilor sanitare, inclusiv panourile, indicatoarele și ramele decorative.\n🔹 Decaparea pardoselii cu detergent {{DETERGENT}}, insistând pe colțuri, margini și zonele greu accesibile.\n⚠️ La final, întregul grup sanitar trebuie să fie complet curat și uscat, fără pete."},
  {id:13, title:"CURĂȚENIE GENERALĂ – GRUPURI SANITARE NIVEL 2", fields:[{key:'detergent', label:'Detergent', placeholder:'ex: nume detergent'}],
   desc:"🔹 Curățenie generală completă: pardoseli, obiecte sanitare, oglinzi, uși, pereți despărțitori și toate suprafețele verticale.\n🔹 Curățați și dezinfectați vasele WC, pisoarele și chiuvetele cu GEL DEZINFECTANT.\n🔹 Bateriile, dispenserele, uscătoarele și toate suprafețele de contact se curăță cu lavetă umedă, apoi se șterg cu lavetă uscată.\n🔹 Curățați complet semnalistica grupurilor sanitare, inclusiv panourile, indicatoarele și ramele decorative.\n🔹 Decaparea pardoselii cu detergent {{DETERGENT}}, insistând pe colțuri, margini și zonele greu accesibile.\n⚠️ La final, întregul grup sanitar trebuie să fie complet curat și uscat, fără pete."},
  {id:14, title:"Spălare covoare lamelare – EXTERIOR – intrare {{INTRARE}}", reportTitle:"Spălare covoare lamelare – EXTERIOR", fields:[{key:'intrare', label:'Intrare', placeholder:'ex: Floreasca'}],
   desc:"🔹 Ridicați toate covoarele lamelare și scoateți-le pe esplanadă.\n🔹 Aspirați foarte bine întreaga suprafață de sub covoare, inclusiv marginile și colțurile, îndepărtând complet noroiul, nisipul și murdăria acumulată.\n🔹 Spălați covoarele lamelare cu furtunul cu apă și, în același timp, frecați foarte bine întreaga suprafață cu peria.\n🔹 Clătiți bine până când apa rămâne curată și nu mai există urme de murdărie."},
];

// traduceri EN pentru mesajul generat (interfața rămâne în română) — indexate după id
const activitatiEN = {
  1: {title:"STRIPPING / DEEP CLEANING – exterior plaza – Calea Floreasca entrance",
      desc:"STRIPPING / DEEP CLEANING of the FLOREASCA exterior plaza flooring with {{DETERGENT}} and NUFAR detergent, only where there are stains.\n• Apply the stripping solution to the floor (for 1 large 20L bucket, add 0.4L of stripping solution);\n• Minimum contact time per procedure: 15 minutes – the detergent must remain on the floor;\n• Mechanized scrubbing with the T3 or T7 auto-scrubber, or manual scrubbing with a pad – focus on stained areas;\n• Vacuum up the liquid residue;\n• Rinse with the machine using clean water without detergent (to prevent slipping)."},
  2: {title:"STRIPPING / DEEP CLEANING – exterior plaza – Barbu Văcărescu entrance",
      desc:"STRIPPING / DEEP CLEANING of the BARBU VACARESCU exterior plaza flooring with {{DETERGENT}} and NUFAR detergent, only where there are stains.\n• Apply the stripping solution to the floor (for 1 large 20L bucket, add 0.4L of stripping solution);\n• Minimum contact time per procedure: 15 minutes – the detergent must remain on the floor;\n• Mechanized scrubbing with the T3 or T7 auto-scrubber, or manual scrubbing with a pad – focus on stained areas;\n• Vacuum up the liquid residue;\n• Rinse with the machine using clean water without detergent (to prevent slipping)."},
  3: {title:"Washing the underground parking access ramp – Barbu Văcărescu (street → level -3)",
      desc:"Using the hand brush and the T300 machine, thoroughly wash the flooring of the vehicle access ramp to the underground parking – BARBU VACARESCU entrance.\n• Focus on heavily soiled areas, especially the blue edges, and the central area between the lane-dividing bollards.\n• Pay attention to areas with oil buildup and persistent dirt (tire marks).\n• If necessary, repeat washing in areas where dirt was not fully removed on the first pass.\n• Use the correct amount of detergent and do not leave excess water on the ramp (slip hazard).\n• At the end, visually check the entire length of the ramp and make sure no areas were left uncleaned."},
  4: {title:"Washing the underground parking access ramp – Floreasca (street → level -3)",
      desc:"Using the hand brush and the T300 machine, thoroughly wash the flooring of the vehicle access ramp to the underground parking – FLOREASCA entrance.\n• Focus on heavily soiled areas, especially the blue edges, and the central area between the lane-dividing bollards.\n• Pay attention to areas with oil buildup and persistent dirt (tire marks).\n• If necessary, repeat washing in areas where dirt was not fully removed on the first pass.\n• Use the correct amount of detergent and do not leave excess water on the ramp (slip hazard).\n• At the end, visually check the entire length of the ramp and make sure no areas were left uncleaned."},
  5: {title:"STRIPPING / DEEP CLEANING – Food Court",
      desc:"STRIPPING / DEEP CLEANING with PAVIMAX HEAVY detergent.\n🕐 Work area:\n• Dining area and corridor in front of the restaurants: {{P1}} – {{P2}} – {{P3}} – {{P4}}, including the entrances to the technical areas in the {{Z1}} and {{Z2}} zone.\n🔹 Work steps:\n• Solution dilution: 2 liters of PAVIMAX HEAVY detergent per large 20L bucket.\n• Apply PAVIMAX HEAVY stripping solution to all designated areas.\n• Allow a minimum contact time of 10 minutes.\n• Manually scrub the floor with a pad for 10–15 minutes, focusing on stains and persistent buildup.\n• Vacuum up liquid residue using the T300 machine.\n• Rinse and neutralize the surface with clean water to prevent slipping.\n• Fully dry the area before finishing the job."},
  6: {title:"Washing the North escalators (Carrefour area)",
      desc:"Wash the escalators and travelators – Carrefour area (steps and risers):\n   * Level -3 ➜ -2\n   * Level -2 ➜ -1\n   * Level -1 ➜ 0\n   * Level 0 ➜ 1\n   * Level 1 ➜ 2\nBefore applying the sponge to the steps, use the large sprayer to spray/soak the steps and risers well, then use the sponge."},
  7: {title:"Washing the South escalators (Zara area)",
      desc:"Wash the escalators and travelators – Zara area (steps and risers):\n   * Level -3 ➜ -2\n   * Level -2 ➜ -1\n   * Level -1 ➜ 0\n   * Level 0 ➜ 1\n   * Level 1 ➜ 2\nBefore applying the sponge to the steps, use the large sprayer to spray/soak the steps and risers well, then use the sponge."},
  8: {title:"Deep washing of underground parking – Level -2",
      desc:"T17 machine for open areas and T300 for edges, columns and hard-to-reach areas.\nCorridor: {{CULOARE}}\nTime slot: {{INTERVAL}}\nThe entire indicated corridor and all adjacent areas must be washed. Pay attention to and clean: corners, wall edges, areas around columns, spaces around hydrants and technical equipment. Any persistent oil stains or dirt must be treated additionally and cleaned before finishing the job."},
  9: {title:"Deep washing of underground parking – Level -3",
      desc:"T17 machine for open areas and T300 for edges, columns and hard-to-reach areas.\nCorridor: {{CULOARE}}\nTime slot: {{INTERVAL}}\nThe entire indicated corridor and all adjacent areas must be washed. Pay attention to and clean: corners, wall edges, areas around columns, spaces around hydrants and technical equipment. Any persistent oil stains or dirt must be treated additionally and cleaned before finishing the job."},
  10: {title:"GENERAL CLEANING – RESTROOMS LEVEL -1",
       desc:"🔹 Complete general cleaning: floors, sanitary fixtures, mirrors, doors, partition walls and all vertical surfaces.\n🔹 Clean and disinfect the toilet bowls, urinals and sinks with DISINFECTANT GEL.\n🔹 Taps, dispensers, hand dryers and all contact surfaces are cleaned with a damp cloth, then wiped with a dry cloth.\n🔹 Thoroughly clean the restroom signage, including panels, signs and decorative frames.\n🔹 STRIPPING / DEEP CLEANING of the floor with {{DETERGENT}} detergent, focusing on corners, edges and hard-to-reach areas.\n⚠️ At the end, the entire restroom must be completely clean and dry, stain-free."},
  11: {title:"GENERAL CLEANING – RESTROOMS LEVEL 1",
       desc:"🔹 Complete general cleaning: floors, sanitary fixtures, mirrors, doors, partition walls and all vertical surfaces.\n🔹 Clean and disinfect the toilet bowls, urinals and sinks with DISINFECTANT GEL.\n🔹 Taps, dispensers, hand dryers and all contact surfaces are cleaned with a damp cloth, then wiped with a dry cloth.\n🔹 Thoroughly clean the restroom signage, including panels, signs and decorative frames.\n🔹 STRIPPING / DEEP CLEANING of the floor with {{DETERGENT}} detergent, focusing on corners, edges and hard-to-reach areas.\n⚠️ At the end, the entire restroom must be completely clean and dry, stain-free."},
  12: {title:"GENERAL CLEANING – RESTROOMS LEVEL 0",
       desc:"🔹 Complete general cleaning: floors, sanitary fixtures, mirrors, doors, partition walls and all vertical surfaces.\n🔹 Clean and disinfect the toilet bowls, urinals and sinks with DISINFECTANT GEL.\n🔹 Taps, dispensers, hand dryers and all contact surfaces are cleaned with a damp cloth, then wiped with a dry cloth.\n🔹 Thoroughly clean the restroom signage, including panels, signs and decorative frames.\n🔹 STRIPPING / DEEP CLEANING of the floor with {{DETERGENT}} detergent, focusing on corners, edges and hard-to-reach areas.\n⚠️ At the end, the entire restroom must be completely clean and dry, stain-free."},
  13: {title:"GENERAL CLEANING – RESTROOMS LEVEL 2",
       desc:"🔹 Complete general cleaning: floors, sanitary fixtures, mirrors, doors, partition walls and all vertical surfaces.\n🔹 Clean and disinfect the toilet bowls, urinals and sinks with DISINFECTANT GEL.\n🔹 Taps, dispensers, hand dryers and all contact surfaces are cleaned with a damp cloth, then wiped with a dry cloth.\n🔹 Thoroughly clean the restroom signage, including panels, signs and decorative frames.\n🔹 STRIPPING / DEEP CLEANING of the floor with {{DETERGENT}} detergent, focusing on corners, edges and hard-to-reach areas.\n⚠️ At the end, the entire restroom must be completely clean and dry, stain-free."},
  14: {title:"Washing slat mats – EXTERIOR – entrance {{INTRARE}}",
       desc:"🔹 Lift all slat mats and take them out onto the plaza.\n🔹 Thoroughly vacuum the entire surface under the mats, including edges and corners, completely removing the mud, sand and accumulated dirt.\n🔹 Wash the slat mats with the water hose and, at the same time, scrub the entire surface thoroughly with the brush.\n🔹 Rinse well until the water stays clean and no traces of dirt remain."},
};

const FIXED_EN = {
  punct1Title: "FOOD COURT Area",
  punctFix1: `🔹 All tables must be completely cleared by 22:20 at the latest.
🔹 The trolleys from the Food Court and terrace must be moved to the sorting area by 22:30, so the areas remain completely clear overnight.
🔹 All trash bins in the FOOD COURT area (from Gymboland to Batroun and Taco Bell) must be fully emptied. Where necessary, the inside of the bins must be washed and sanitized.
⚠️ If there is no staff left in the collection area of the technical corridor, please place all waste collected from tables or trolleys into large black bags and take it to the trash room.
⚠️ Please make sure no trays, food scraps or other waste remain on tables, trolleys or in the Food Court area before finishing the activity.
🔹 *At 07:00, please go help Mirela at Inditex until 10:00.*`,
  punct2Title: "MECHANIZED WASHING OF COMMON AREAS",
  punctFix2: `🔹 Mechanized floor washing is carried out on:
   * Level -1
   * Level 0
   * Level 1
   * Level 2 (pay special attention to high-traffic areas and areas with visible marks on the floor).
SCRUB AND WASH EVERY SINGLE TILE! (T7 machine – detergent: 1 L / tank)
🔹 The black tiles along the edges of the stores must be washed very thoroughly, along their entire length.`,
  punct5Title: "VACUUMING INTERIOR CARPETS AND CLEANING THE SLAT MATS IN THE REVOLVING DOORS",
  punctFix5: `🔹 Thoroughly vacuum all fabric carpets at the entrances.
🔹 Completely remove the dirt, chewing gum, dust and debris accumulated in the slat mats of the revolving doors.
🔹 The revolving doors are washed with water and a brush, focusing on the dirty areas.
🔹 At the end, wipe and clean the rubber strip at the base of each revolving door panel.`,
  punct6Title: "WASHING THE PLAZAS WITH THE T7 MACHINE",
  punctFix6: `🔹 Time slot: 05:30 – 07:00
🔹 Using the T7 machine, wash the plaza flooring, in this mandatory order:
   1. Floreasca Plaza
   2. Barbu Văcărescu Plaza
🔹 Areas the T7 machine cannot reach must be washed manually with the mop, focusing on edges, corners, narrow areas and steps/stairs.
⚠️ Follow the order above — do not start Barbu Văcărescu before finishing Floreasca.`,
  closing: `🔚 END OF SHIFT – BEFORE LEAVING

🔹 Clean the machines and tools used and store them in the designated places.
🔹 Check the condition of the equipment and report any malfunction immediately.

⚠️ Use the machines carefully and avoid hitting windows, walls, railings or other finishes. Damage caused by negligence will be charged.

⚠️ IMPORTANT: All tasks must be fully completed. Do not leave stains, dirt or partially cleaned areas. At the end, all areas must be clean, dry and ready for inspection.`,
  additionalActivities: "Additional activities",
  noActivitySelected: "(no activity selected)",
  personInCharge: "Person in charge",
};

const punct1Title = "Zona FOOD COURT";
const punctFix1 = `🔹 Toate mesele trebuie eliberate complet cel târziu la ora 22:20.
🔹 Rastelurile din Food Court și de pe terasă trebuie transportate în zona de sortare până la ora 22:30, astfel încât zonele să rămână complet libere pe timpul nopții.
🔹 Toate coșurile de gunoi din zona FOOD COURT (de la Gymboland până la Batroun și Taco Bell) trebuie golite complet. Acolo unde este necesar, interiorul coșurilor trebuie spălat și igienizat.
⚠️ Dacă nu mai este personal în zona de colectare de pe coridorul tehnic, vă rog să puneți toate deșeurile colectate de pe mese sau rastele în saci mari negri și să le transportați la camera de gunoi.
⚠️ Vă rog să vă asigurați că nu mai există tăvi, resturi alimentare sau alte deșeuri rămase pe mese, rastele sau în zona Food Court înainte de finalizarea activității.
🔹 *La ora 07:00, vă rog să mergeți să o ajutați pe Mirela la Inditex, până la ora 10:00.*`;

const punct2Title = "SPĂLARE MECANIZATĂ SPAȚII COMUNE";
const punctFix2 = `🔹 Spălarea mecanizată a pardoselilor se efectuează pe:
   * Nivelul -1
   * Nivelul 0
   * Nivelul 1
   * Nivelul 2 (insistați în special în zonele cu trafic intens și acolo unde există urme vizibile pe pardoseală).
INSISTAȚI ȘI SPĂLAȚI FIECARE PLACĂ DE GRESIE! (Mașina T7 – detergent: 1 L / bazin)
🔹 Gresia neagră de pe marginea magazinelor trebuie spălată foarte bine, pe toată lungimea ei.`;

const punct5Title = "ASPIRAREA MOCHETELOR DIN INTERIOR ȘI CURĂȚAREA COVOARELOR LAMELARE DIN UȘILE ROTATIVE";
const punctFix5 = `🔹 Aspirați foarte bine toate covoarele textile de la intrări.
🔹 Îndepărtați complet murdăria, gumele, praful și resturile acumulate în covoarele lamelare din ușile rotative.
🔹 Ușile rotative se spală cu apă și perie, insistând pe zonele murdare.
🔹 La final, ștergeți și curățați banda de cauciuc de la baza fiecărui panou al ușilor rotative.`;

const punct6Title = "SPĂLARE ESPLANADE CU MAȘINA T7";
const punctFix6 = `🔹 Interval orar: 05:30 – 07:00
🔹 Cu mașina T7, spălați pardoseala pe esplanade, în această ordine obligatorie:
   1. Esplanada Floreasca
   2. Esplanada Barbu Văcărescu
🔹 Zonele în care mașina T7 nu poate ajunge se vor spăla manual cu mopul, insistând pe margini, colțuri, zonele înguste și trepte/scări.
⚠️ Respectați ordinea de mai sus — nu începeți Barbu Văcărescu înainte de a termina Floreasca.`;

const closing = `🔚 FINAL DE TURĂ – ÎNAINTE DE PLECARE

🔹 Curățați utilajele și ustensilele folosite și depozitați-le în locurile stabilite.
🔹 Verificați starea echipamentelor și anunțați imediat orice defecțiune.

⚠️ Folosiți utilajele cu atenție și evitați lovirea geamurilor, pereților, balustradelor sau altor finisaje. Deteriorările produse din neglijență vor fi imputate.

⚠️ IMPORTANT: Toate sarcinile trebuie finalizate complet. Nu lăsați pete, murdărie sau zone curățate parțial. La final, toate zonele trebuie să fie curate, uscate și pregătite pentru verificare.`;

const POINTS_META = [
  {key:'p1', type:'fixed'},
  {key:'p2', type:'fixed'},
  {key:'p3', title:'Activități suplimentare', type:'checklist', listId:'list3'},
  {key:'p4', title:'Activități suplimentare', type:'checklist', listId:'list4'},
  {key:'p5', type:'fixed'},
  {key:'p6', type:'fixed'},
];

// titluri pentru pagina de status (status.html), indexate după cheia punctului fix
const FIXED_TITLES_RO = {p1:punct1Title, p2:punct2Title, p5:punct5Title, p6:punct6Title};
const FIXED_TITLES_EN = {p1:FIXED_EN.punct1Title, p2:FIXED_EN.punct2Title, p5:FIXED_EN.punct5Title, p6:FIXED_EN.punct6Title};
