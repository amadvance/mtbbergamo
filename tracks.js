/*
 * MTB Bergamo (c) by Andrea Mazzoleni 2022
 *
 * MTB Bergamo is licensed under a
 * Creative Commons Attribution-ShareAlike 4.0 International License.
 *
 * You should have received a copy of the license along with this
 * work. If not, see <http://creativecommons.org/licenses/by-sa/4.0/>.
 */

/*
\u00E0 a
\u00E8 e
\u00EC i
\u00F2 o
\u00F9 u
*/

var TRACKS = [
//
// COLLI DI BERGAMO
//
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord', name: '712 Nord', kind: 'down', file: 'Colli_712Nord.gpx', link: '2019/03/roccolone-nord', elevation_gain: 2, elevation_loss: 56 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_sud', name: '712 Sud', kind: 'down', file: 'Colli_712Sud.gpx', link: '2019/01/roccolone-sud', elevation_gain: 0, elevation_loss: 63 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord', name: '713 / Partigiano', kind: 'down', file: 'Colli_713Partigiano.gpx', link: '2019/03/roccolone-nord', elevation_gain: 0, elevation_loss: 93 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord', name: 'Roccolone Nord', kind: 'down', file: 'Colli_RoccoloneNord.gpx', link: '2019/03/roccolone-nord', elevation_gain: 0, elevation_loss: 71 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'colli', name: '910 / Alpini', kind: 'down', file: 'Colli_910.gpx', link: '2018/12/910', elevation_gain: 8, elevation_loss: 151 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'colli,gussa', name: 'Gussa Est', kind: 'down', file: 'Colli_GussaEst.gpx', link: '2019/01/monte-gussa', elevation_gain: 2, elevation_loss: 60 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'colli,gussa', name: 'Gussa Nord', kind: 'down', file: 'Colli_GussaNord.gpx', link: '2019/01/monte-gussa', elevation_gain: 0, elevation_loss: 121 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,gussa', name: 'Gussa Ovest', kind: 'down', file: 'Colli_GussaOvest.gpx', link: '2019/01/monte-gussa', elevation_gain: 0, elevation_loss: 60 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'colli,gussa', name: 'Gussa Sud', kind: 'down', file: 'Colli_GussaSud.gpx', link: '2019/01/monte-gussa', elevation_gain: 0, elevation_loss: 53 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord', name: 'ExPistino', kind: 'down', file: 'Colli_ExPistino.gpx', link: '2019/03/roccolone-nord', elevation_gain: 0, elevation_loss: 82 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_sud', name: 'Pistino Downhill', kind: 'down', file: 'Colli_PistinoDownhill.gpx', link: '2019/03/pistino-downhill', elevation_gain: 0, elevation_loss: 41 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'colli', name: 'Roccolone', kind: 'down', file: 'Colli_Roccolone.gpx', link: '2018/12/roccolone', elevation_gain: 20, elevation_loss: 130 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'colli,roccolone_sud', name: 'Roccolone Sud', kind: 'down', file: 'Colli_RoccoloneSud.gpx', link: '2019/01/roccolone-sud', elevation_gain: 0, elevation_loss: 72 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_sud', name: 'Gradoni', kind: 'down', file: 'Colli_Gradoni.gpx', link: '2019/01/roccolone-sud', elevation_gain: 0, elevation_loss: 33 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'colli,allegrezza', name: 'Allegrezza', kind: 'down', file: 'Colli_Allegrezza.gpx', link: '2018/12/allegrezza', elevation_gain: 0, elevation_loss: 31 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,allegrezza', name: 'Allegrezza Sud', kind: 'down', file: 'Colli_AllegrezzaSud.gpx', link: '2018/12/allegrezza', elevation_gain: 18, elevation_loss: 47 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_sud', name: 'Torre', kind: 'down', file: 'Colli_Torre.gpx', link: '2019/01/roccolone-sud', elevation_gain: 2, elevation_loss: 109 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord', name: 'Fogna', kind: 'down', file: 'Colli_Fogna.gpx', link: '2024/10/fogna', elevation_gain: 0, elevation_loss: 80 },


// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli', name: 'Salita da Astino', kind: 'up', file: 'Colli_SalitaAstino.gpx', link: '2018/12/salite-colli-bergamo', elevation_gain: 100, elevation_loss: 13 },
/*
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli,gussa', name: 'Salita al Monte Gussa', kind: 'up', file: 'Colli_SalitaGussaSud.gpx', link: '2019/01/monte-gussa', elevation_gain: 76, elevation_loss: 5 },
*/
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli,gussa', name: 'Salita al Monte Gussa', kind: 'up', file: 'Colli_SalitaGussaEst_EBIKE.gpx', link: '2019/01/monte-gussa', elevation_gain: 72, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli', name: 'Salita dalla Madonna del Bosco', kind: 'up', file: 'Colli_SalitaMadonnaDelBosco.gpx', link: '2018/12/salite-colli-bergamo', elevation_gain: 203, elevation_loss: 13 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord,roccolone_sud', name: 'Salita dal Roccolone', kind: 'up', file: 'Colli_SalitaRoccolone.gpx', link: '2018/12/salite-colli-bergamo', elevation_gain: 117, elevation_loss: 15 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord,roccolone_sud', name: 'Salita al Colle Roccolone', kind: 'up', file: 'Colli_SalitaCimaRoccolone.gpx', link: '2018/12/salite-colli-bergamo', elevation_gain: 15, elevation_loss: 0 },


//
// BERGAMO
//
{ vote: 3, rate: 0, rate_max: 1, cycle: 0, zone: 'colli', name: 'Giro Parco del Brembo', kind: 'trek', file: 'Bergamo_GiroParcoDelBrembo.gpx', link: '2024/04/brembo', elevation_gain: 160, elevation_loss: 129 },
{ vote: 3, rate: 0, rate_max: 1, cycle: 0, zone: 'colli', name: 'Giro del Romanico', kind: 'trek', file: 'Bergamo_GiroDelRomanico.gpx', link: '2024/04/romanico', elevation_gain: 120, elevation_loss: 125 },

//
// MARESANA E SORISOLE
//
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'maresana', name: 'Albanesi / 532, San Rocco', kind: 'down', file: 'Maresana_Albanesi.gpx', link: '2019/02/532', elevation_gain: 0, elevation_loss: 243 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 1, zone: 'maresana', name: 'Vertigo / 604', kind: 'down', file: 'Maresana_604.gpx', link: '2018/11/604', elevation_gain: 0, elevation_loss: 328 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'maresana', name: 'Bruna', kind: 'down', file: 'Maresana_Bruna.gpx', link: '2018/11/bruna', elevation_gain: 15, elevation_loss: 321 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'maresana', name: 'FarWest', kind: 'down', file: 'Maresana_FarWest.gpx', link: '2018/11/farwest', elevation_gain: 5, elevation_loss: 324 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Cowboy', kind: 'down', file: 'Maresana_Cowboy.gpx', link: '2023/02/cowboy', elevation_gain: 0, elevation_loss: 268 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'maresana', name: 'Apache', kind: 'down', file: 'Maresana_Apache.gpx', link: '2023/03/apache', elevation_gain: 5, elevation_loss: 267 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'maresana', name: 'Calvarola / Filoncino / 401', kind: 'down', file: 'Maresana_Filoncino.gpx', link: '2018/11/401-filoncino', elevation_gain: 2, elevation_loss: 301 },
{ vote: 2, rate: 2, rate_max: 2, cycle: 0, zone: 'maresana', name: 'Calvarola 2', kind: 'down', file: 'Maresana_Calvarola2.gpx', elevation_gain: 0, elevation_loss: 140 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'maresana', name: 'Filone Easy', kind: 'down', file: 'Maresana_FiloneEasy.gpx', link: '2018/11/filone-easy', elevation_gain: 2, elevation_loss: 174 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Colle Alto, Magnati', kind: 'down', file: 'Maresana_ColleAltoMagnati.gpx', link: '2021/03/colle-alto-magnati', elevation_gain: 0, elevation_loss: 186 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Filone / Agostini / 533', kind: 'down', file: 'Maresana_Filone.gpx', link: '2018/11/533-filone', elevation_gain: 0, elevation_loss: 209 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Colle Alto, Tremana', kind: 'down', file: 'Maresana_Tremana.gpx', link: '2020/12/colle-alto-tremana', elevation_gain: 0, elevation_loss: 247 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'maresana', name: 'Scabla', kind: 'down', file: 'Maresana_Scabla.gpx', link: '2021/04/scabla', elevation_gain: 0, elevation_loss: 150 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Veloce / Illegale / 533', kind: 'down', file: 'Maresana_Illegale.gpx', link: '2018/11/533-illegale', elevation_gain: 0, elevation_loss: 119 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Rosciano', kind: 'down', file: 'Maresana_Rosciano.gpx', link: '2018/11/rosciano', elevation_gain: 0, elevation_loss: 159 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'maresana', name: 'San Rocco / 402', kind: 'down', file: 'Maresana_SanRocco.gpx', link: '2018/11/402-san-rocco', elevation_gain: 85, elevation_loss: 181 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Tornantini / 409', kind: 'down', file: 'Maresana_Tornantini.gpx', link: '2018/11/tornantini', elevation_gain: 0, elevation_loss: 169 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'maresana, legnaia', name: 'Legnaia', kind: 'down', file: 'Maresana_Legnaia.gpx', link: '2018/11/legnaia', elevation_gain: 0, elevation_loss: 289 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'legnaia', name: 'Legnaia Sud', kind: 'down', file: 'Maresana_LegnaiaSud.gpx', link: '2018/11/legnaia', elevation_gain: 10, elevation_loss: 337 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'maresana', name: 'Birondina', kind: 'down', file: 'Maresana_Birondina.gpx', link: '2019/02/birondina', elevation_gain: 5, elevation_loss: 259 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'maresana, bassa_seriana', name: '532A, Olera', kind: 'down', file: 'Maresana_532A_Olera.gpx', link: '2019/03/532a-olera', elevation_gain: 4, elevation_loss: 235 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Flying Dutchman', kind: 'down', file: 'Maresana_FlyingDutchman.gpx', link: '2019/01/flying-dutchman', elevation_gain: 0, elevation_loss: 193 },
{ vote: 3, rate: 1, rate_max: 3, cycle: 0, zone: 'maresana', name: 'Gaito', kind: 'down', file: 'Maresana_Gaito.gpx', link: '2021/03/gaito', elevation_gain: 1, elevation_loss: 199 },
//{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'sorisole', name: 'Bacino', kind: 'down', file: 'Sorisole_Bacino.gpx' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'sorisole, pisgiu_dh', name: 'Pista DH', kind: 'down', file: 'Sorisole_PistaDH.gpx', link: '2018/12/pista-downhill', elevation_gain: 3, elevation_loss: 308 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 0, zone: 'sorisole, pisgiu_dh', name: 'Pista DH Hard', kind: 'down', file: 'Sorisole_PistaDHHard.gpx', link: '2018/12/pista-downhill', elevation_gain: 1, elevation_loss: 288 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'maresana, sorisole, 229', name: 'Catene / 229', kind: 'down', file: 'Sorisole_Catene229.gpx', link: '2018/12/229', elevation_gain: 0, elevation_loss: 328 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: '229', name: 'Premerlino, 229', kind: 'down', file: 'Sorisole_Premerlino229.gpx', link: '2018/12/229', elevation_gain: 0, elevation_loss: 180 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Sorisole, Ponteranica Alta', kind: 'down', file: 'Sorisole_SorisolePonteranicaAlta.gpx', elevation_gain: 2, elevation_loss: 54 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'sorisole, galusu', name: 'Galus\u00F9 Ovest', kind: 'down', file: 'Sorisole_GalusuOvest.gpx', link: '2018/12/galusu', elevation_gain: 0, elevation_loss: 81 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'sorisole, galusu', name: 'Galus\u00F9 Sud', kind: 'down', file: 'Sorisole_GalusuSud.gpx', link: '2018/12/galusu', elevation_gain: 0, elevation_loss: 75 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'sorisole, galusu', name: 'Galus\u00F9', kind: 'down', file: 'Sorisole_Galusu.gpx', link: '2018/12/galusu', elevation_gain: 0, elevation_loss: 178 },
{ vote: 4, rate: 1, rate_max: 3, cycle: 0, zone: 'sorisole', name: 'Canto Alto, 507, Prati Parini, 113, Sedrina', kind: 'down', file: 'Sorisole_CantoAltoPratiPariniSedrina.gpx', link: '2019/06/canto-alto-prati-parini-sedrina', elevation_gain: 24, elevation_loss: 825 },
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'sorisole', name: 'Canto Alto, 220, Forcella di Cambl\u00EC, 113, Pisgiu, Sorisole', kind: 'down', file: 'Sorisole_CantoAlto220Sorisole.gpx', link: '2019/06/canto-alto-forcella-di-cambli-pisgiu', elevation_gain: 32, elevation_loss: 854 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Sorisole, Pistino Scuola MTB', kind: 'down', file: 'Sorisole_SorisolePistinoScuolaMTB.gpx', link: '2019/06/pistino-scuola-mtb-sorisole', elevation_gain: 20, elevation_loss: 122 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 0, zone: 'sorisole', name: 'Canto Alto, Canto Basso, Catene, Pista DH', kind: 'down', file: 'Sorisole_CantoAltoBassoCatenePistaDH.gpx', link: '2023/04/canto-alto-catene-dh', elevation_gain: 214, elevation_loss: 1048 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'sorisole, giongo', name: 'Giongo', kind: 'down', file: 'Sorisole_Giongo.gpx', link: '2023/04/giongo', elevation_gain: 4, elevation_loss: 100 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'sorisole, giongo', name: 'Valle del Giongo, Monte Bastia', kind: 'down', file: 'Sorisole_ValleGiongoMonteBastia.gpx', link: '2023/04/giongo', elevation_gain: 399, elevation_loss: 745 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'sorisole', name: 'Canto Alto, Forcellino, 220, Pista DH', kind: 'down', file: 'Sorisole_CantoAltoForcellino220PistaDH.gpx', link: '2023/05/canto-alto-forcellino', elevation_gain: 123, elevation_loss: 957 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Forcellino, Forcella di Rua, Giongo Hard', kind: 'down', file: 'Sorisole_ForcellinoForcellaDiRuaGiongoHard.gpx', link: '2024/04/giongo-hard', elevation_gain: 313, elevation_loss: 949 },

/*
// abbandonato
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Luca West', kind: 'down', file: 'Maresana_LucaWest.gpx', link: '2018/11/lucawest', elevation_gain: 1, elevation_loss: 107 },
*/

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Salita Ranica, Monte Zuccone', kind: 'up', file: 'Maresana_SalitaRanicaZuccone_EBIKE.gpx', link: '2018/11/salite-maresana', elevation_gain: 437, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Salita Ponteranica, Croce di Ranica', kind: 'up', file: 'Maresana_SalitaPonteranica.gpx', link: '2018/11/salite-maresana', elevation_gain: 446, elevation_loss: 11 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Salita Colle Alto', kind: 'up', file: 'Maresana_SalitaColleAlto_EBIKE.gpx', link: '2018/11/salite-maresana', elevation_gain: 44, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana, sorisole', name: 'Salita Ponteranica Alta', kind: 'up', file: 'Maresana_SalitaPonteranicaAlta.gpx', link: '2018/11/salite-maresana', elevation_gain: 304, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Salita Olera', kind: 'up', file: 'Maresana_SalitaOlera.gpx', link: '2018/11/salite-maresana', elevation_gain: 196, elevation_loss: 33 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana, 229', name: 'Trasferimento Ca Del Lacc, Forcella Del Sorriso', kind: 'up', file: 'Maresana_CaDelLaccForcellaDelSorriso.gpx', link: '2018/11/salite-maresana', elevation_gain: 97, elevation_loss: 14 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana, sorisole, 229', name: 'Trasferimento Premerlino, Ponteranica Alta', kind: 'up', file: 'Maresana_PremerlinoPonteranicaAlta.gpx', link: '2018/11/salite-maresana', elevation_gain: 55, elevation_loss: 87 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Trasferimento Castello della Moretta, Maresana', kind: 'up', file: 'Maresana_MorettaMaresana.gpx', link: '2018/11/salite-maresana', elevation_gain: 17, elevation_loss: 40 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Salita Forcella di Rua', kind: 'up', file: 'Sorisole_SalitaForcellaDiRua.gpx', link: '2019/06/salite-sorisole', elevation_gain: 369, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'pisgiu_dh', name: 'Salita Pontesecco, Pista DH', kind: 'up', file: 'Sorisole_SalitaPonteseccoPistaDH.gpx', link: '2019/06/salite-sorisole', elevation_gain: 376, elevation_loss: 12 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'galusu', name: 'Salita Pontesecco, Galus\u00F9', kind: 'up', file: 'Sorisole_SalitaPonteseccoGalusu_EBIKE.gpx', link: '2019/06/salite-sorisole', elevation_gain: 445, elevation_loss: 8 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Salita Galus\u00F9', kind: 'up', file: 'Sorisole_SalitaGalusu_EBIKE.gpx', link: '2019/06/salite-sorisole', elevation_gain: 80, elevation_loss: 3 },
//{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Salita Giongo', kind: 'up', file: 'Sorisole_SalitaGiongo.gpx', link: '2019/06/salite-sorisole' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 4, zone: 'sorisole', name: 'Salita Sedrina, Prati Parini, Canto Alto', kind: 'up', file: 'Sorisole_SalitaSedrinaCantoAlto_EBIKE.gpx', link: '2023/04/canto-alto-catene-dh', elevation_gain: 902, elevation_loss: 74 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'sorisole', name: 'Salita Ponti di Sedrina, Cava, Canto Alto', kind: 'up', file: 'Sorisole_SalitaPontiSedrinaCavaCantoAlto_EBIKE.gpx', link: '2023/05/canto-alto-forcellino', elevation_gain: 1068, elevation_loss: 209 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "10 minuti Canto Basso, 30 minuti Canto Alto", zone: 'sorisole', name: 'Salita Ponteranica, Canto Alto', kind: 'up', file: 'Sorisole_SalitaPonteranicaCantoAlto.gpx', link: '2019/06/canto-alto-forcella-di-cambli-pisgiu', elevation_gain: 880, elevation_loss: 41 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "5 minuti Canto Basso, 30 minuti Canto Alto", zone: 'sorisole', name: 'Salita Nese, Canto Basso, Canto Alto', kind: 'up', file: 'Sorisole_SalitaNeseCantoAlto.gpx', link: '2019/06/canto-alto-prati-parini-sedrina', elevation_gain: 884, elevation_loss: 32 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'sorisole, giongo', name: 'Salita Petosino, Forcella di Rua', kind: 'up', file: 'Sorisole_SalitaPetosinoForcellaDiRua_EBIKE.gpx', link: '2023/04/giongo', elevation_gain: 355, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Salita Petosino, Ca del Latte, Forcellino', kind: 'up', file: 'Sorisole_SalitaPetosinoForcellaSorrisoForcellino_EBIKE.gpx', link: '2024/04/giongo-hard', elevation_gain: 707, elevation_loss: 107 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Ranica, Pozza del Colle', kind: 'up', file: 'Maresana_SalitaRanicaPozzaDelColle_EBIKE.gpx', link: '2018/11/salite-maresana', elevation_gain: 422, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'legnaia', name: 'Salita Legnaia, Ca Del Lac', kind: 'up', file: 'Maresana_SalitaLegnaiaCaDelLac_EBIKE.gpx', link: '2018/11/salite-maresana', elevation_gain: 366, elevation_loss: 75 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 30, zone: '', name: 'Salita Canto Basso, Canto Alto', kind: 'up', file: 'Sorisole_SalitaCantoBassoCantoAlto.gpx', link: '2019/06/salite-sorisole', elevation_gain: 246, elevation_loss: 7 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '229', name: 'Trasferimento da Catene al Pisgi\u00F9', kind: 'up', file: 'Sorisole_CatenePisgiu_EBIKE.gpx', link: '2019/06/salite-sorisole', elevation_gain: 98, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Trasferimento alla Pista Downhill', kind: 'up', file: 'Sorisole_203.gpx', link: '2019/06/salite-sorisole', elevation_gain: 39, elevation_loss: 11 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 10, zone: '', name: 'Salita Forcella del Sorriso, Canto Basso', kind: 'up', file: 'Sorisole_SalitaForcellaDelSorrisoCantoBasso.gpx', link: '2019/06/salite-sorisole', elevation_gain: 147, elevation_loss: 3 },

//
// IMAGNA NORD
//
// downhill
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'imagna', name: 'Vetta Resegone, Brumano', kind: 'down', file: 'Imagna_ResegoneBrumano.gpx', link: '2021/09/vetta-resegone', elevation_gain: 7, elevation_loss: 936 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'locatello', name: 'Bustoseta, Selino', kind: 'down', file: 'Imagna_BustosetaSelino.gpx', link: '2019/07/locatello', elevation_gain: 1, elevation_loss: 150 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'locatello', name: 'Buonanome, Selino', kind: 'down', file: 'Imagna_BuonanomeSelino.gpx', link: '2019/07/locatello', elevation_gain: 2, elevation_loss: 132 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'locatello', name: 'Coegia, Selino', kind: 'down', file: 'Imagna_CoegiaSelino.gpx', link: '2019/07/locatello', elevation_gain: 3, elevation_loss: 134 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Passo Porta, 586, Ca Piatone, Ca Prospero, Selino', kind: 'down', file: 'Imagna_PassoPorta586CaPiatoneCaProsperoSelino.gpx', link: '2019/06/passo-porta', elevation_gain: 129, elevation_loss: 796 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna', name: 'Cascine Zucchero, Pramagnone, Ponte Vanzarolo, Ca Piatone, Campi, Selino', kind: 'down', file: 'Imagna_PramagnoneCaPiatoneCampiSelino.gpx', link: '2019/07/pramagnone', elevation_gain: 16, elevation_loss: 702 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, rota', name: 'Rota d\'Imagna, Fucine, Selino', kind: 'down', file: 'Imagna_RotaFucineSelino.gpx', link: '2019/06/rota-imagna', elevation_gain: 11, elevation_loss: 261 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'rota', name: 'Rota d\'Imagna, CaProspero, Selino', kind: 'down', file: 'Imagna_RotaCaProsperoSelino.gpx', link: '2019/06/rota-imagna', elevation_gain: 3, elevation_loss: 250 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'rota', name: 'Ca Piatone, Campi, Selino', kind: 'down', file: 'Imagna_CaPiatoneCampiSelino.gpx', link: '2019/06/rota-imagna', elevation_gain: 8, elevation_loss: 333 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'vanzarolo', name: 'Ponte Vanzarolo, CaPiatone', kind: 'down', file: 'Imagna_VanzaroloCaPiatone.gpx', link: '2019/07/vanzarolo', elevation_gain: 6, elevation_loss: 81 },
{ vote: 1, rate: 1, rate_max: 0, cycle: 0, zone: 'imagna, vanzarolo', name: 'Ponte Vanzarolo, Chignolo', kind: 'down', file: 'Imagna_VanzaroloChignolo.gpx', link: '2019/07/vanzarolo', elevation_gain: 6, elevation_loss: 214 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, vanzarolo', name: 'Ca Piatone, Chignolo', kind: 'down', file: 'Imagna_CaPiatoneChignolo.gpx', link: '2019/07/vanzarolo', elevation_gain: 31, elevation_loss: 165 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, rota', name: 'Ca Piatone, Foppe, Selino', kind: 'down', file: 'Imagna_CaPiatoneFoppeSelino.gpx', link: '2019/06/rota-imagna', elevation_gain: 10, elevation_loss: 342 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: '', name: 'Frontale, Foppe, Enel', kind: 'down', file: 'Imagna_FrontaleFoppeEnel.gpx', link: '2019/06/rota-imagna', elevation_gain: 2, elevation_loss: 146 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'vanzarolo', name: 'Chignolo, Frontale, Foppe, Enel', kind: 'down', file: 'Imagna_ChignoloFrontaleFoppeEnel.gpx', link: '2019/07/vanzarolo', elevation_gain: 53, elevation_loss: 155 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'vanzarolo', name: 'Chignolo, Enel', kind: 'down', file: 'Imagna_ChignoloEnel.gpx', link: '2019/07/vanzarolo', elevation_gain: 0, elevation_loss: 96 },
{ vote: 3, rate: 2, rate_max: 3, cycle: "1 minuto nella salita ai Canti", zone: 'imagna,canti', name: 'Zuc De Valmana, Canti, 579A, Tre Faggi, Fuipiano', kind: 'down', file: 'Imagna_ZucDeValmanaCanti579ATreFaggiFuipiano.gpx', link: '2020/02/canti', elevation_gain: 189, elevation_loss: 687 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'canti', name: 'Canti, Freeride, Tre Faggi', kind: 'down', file: 'Imagna_CantiFreerideTreFaggi.gpx', link: '2020/02/canti', elevation_gain: 96, elevation_loss: 259 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 3, zone: 'canti', name: 'Canti, 571, Tre Faggi', kind: 'down', file: 'Imagna_Canti571TreFaggi.gpx', link: '2020/02/canti', elevation_gain: 30, elevation_loss: 179 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 1, zone: 'imagna', name: 'Passo del Palio, Orso, Pagafone, Coegia', kind: 'down', file: 'Imagna_PassoPalioOrsoPagafoneCoegia.gpx', link: '2020/06/orso', elevation_gain: 110, elevation_loss: 1045 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'imagna,costa_del_palio', name: 'Costa del Palio, Forcella di Valmana, 579B, Fuipiano', kind: 'down', file: 'Imagna_CostaDelPalio579B_EBIKE.gpx', link: '2019/04/costa-del-palio-fuipiano', elevation_gain: 150, elevation_loss: 446 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna,costa_del_palio', name: 'Passo di Valbona, 579B, Prati, Fuipiano', kind: 'down', file: 'Imagna_PassoValbona579BPrati.gpx', link: '2019/04/costa-del-palio-fuipiano', elevation_gain: 32, elevation_loss: 432 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 1, zone: 'imagna', name: 'Passo Porta, 575, Valsecca, Scuderia, Mazzoleni, Selino', kind: 'down', file: 'Imagna_PassoPorta575ValseccaMazzoleniSelino.gpx', link: '2019/07/passo-porta-575-valsecca', elevation_gain: 230, elevation_loss: 911 },
{ vote: 3, rate: 2, rate_max: 4, cycle: 0, zone: 'imagna', name: 'Tre Faggi, 580, Disdiroli, Selino', kind: 'down', file: 'Imagna_TreFaggi580DisdiroliSelino.gpx', link: '2019/06/tre-faggi-580-disdiroli-selino', elevation_gain: 2, elevation_loss: 965 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Tre Faggi, 571, Selino Alto, Selino', kind: 'down', file: 'Imagna_TreFaggi571SelinoAlto.gpx', link: '2020/05/tre-faggi-571-selino-alto', elevation_gain: 49, elevation_loss: 1032 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna', name: 'Tre Faggi, 592E, Valle Brunone', kind: 'down', file: 'Imagna_TreFaggi592EBrunone.gpx', link: '2020/07/tre-faggi-valle-brunone', elevation_gain: 88, elevation_loss: 1120 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Tre Faggi, 581, Locatello, Selino', kind: 'down', file: 'Imagna_TreFaggi581Locatello.gpx', link: '2020/05/tre-faggi-581-locatello', elevation_gain: 29, elevation_loss: 1009 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Tre Faggi, Traverso Ovest, Fuipiano. Coegia, Selino', kind: 'down', file: 'Imagna_TreFaggiTraversoFuipianoCoegia.gpx', link: '2020/02/tre-faggi-traverso-ovest', elevation_gain: 63, elevation_loss: 1056 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna,zuc_de_valmana', name: 'Passo di Valbona, Sbarra di Brumano', kind: 'down', file: 'Imagna_PassoValbonaSbarra.gpx', link: '2019/05/zuc-de-valmana', elevation_gain: 0, elevation_loss: 285 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna,zuc_de_valmana', name: 'Passo del Palio, Sbarra di Brumano', kind: 'down', file: 'Imagna_PassoPalioSbarra.gpx', link: '2019/05/zuc-de-valmana', elevation_gain: 0, elevation_loss: 221 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'imagna,zuc_de_valmana', name: 'Zuc de Valmana, Cresta, Passo del Palio', kind: 'down', file: 'Imagna_ZucDeValmanaCrestaPassoPalio.gpx', link: '2019/05/zuc-de-valmana', elevation_gain: 66, elevation_loss: 248 },
{ vote: 2, rate: 2, rate_max: 3, cycle: 4, zone: 'imagna, taleggio', name: 'Passo del Palio, Selvano, Sorgente Enna, Piazzoli, Fuipiano', kind: 'down', file: 'Imagna_PalioSelvanoEnnaPiazzoliGrasselloFuipiano.gpx', link: '2022/04/sorgenti-enna', elevation_gain: 921, elevation_loss: 1200 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, taleggio', name: 'Passo del Palio, Foo di Valmana, Selvano, Morterone, Fuipiano', kind: 'down', file: 'Imagna_PalioFooValmanaSelvanoMorteroneFuipiano.gpx', link: '2022/04/foo-di-valmana', elevation_gain: 601, elevation_loss: 948 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, taleggio', name: 'Passo del Palio, Grandi Alberi, Morterone, Fuipiano', kind: 'down', file: 'Imagna_PalioGrandiAlberiFuipiano.gpx', link: '2022/03/grandi-alberi', elevation_gain: 594, elevation_loss: 966 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna, morterone, taleggio', name: 'Passo del Palio, Forbesette, Morterone', kind: 'down', file: 'Imagna_PassoPalioForbesetteMorterone.gpx', link: '2020/12/morterone', elevation_gain: 67, elevation_loss: 321 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna, morterone, taleggio', name: 'Passo del Palio, Forbesette, Morterone Nord', kind: 'down', file: 'Imagna_PassoPalioForbesetteMorteroneNord.gpx', link: '2020/12/morterone', elevation_gain: 104, elevation_loss: 339 },
{ vote: 3, rate: 1, rate_max: 3, cycle: 0, zone: 'imagna, morterone, taleggio', name: 'Passo del Palio, Freeride, Morterone', kind: 'down', file: 'Imagna_PassoPalioFreerideMorterone.gpx', link: '2020/12/morterone', elevation_gain: 1, elevation_loss: 286 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 45, zone: 'imagna', name: 'Anello del Resegone', kind: 'down', file: 'Imagna_AnelloResegone.gpx', link: '2020/08/anello-resegone', elevation_gain: 819, elevation_loss: 1021 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, taleggio', name: 'Passo del Palio, Forcella di Olino, Morterone, Fuipiano', kind: 'down', file: 'Imagna_ForcellaDiOlino.gpx', link: '2024/02/forcella-di-olino', elevation_gain: 662, elevation_loss: 968 },

// trek
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna', name: 'Sentiero della Cultura Casearia', kind: 'trek', file: 'Imagna_SentieroDellaCulturaCasearia_EBIKE.gpx', link: '2022/10/corna-casere', elevation_gain: 712, elevation_loss: 711 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 7, zone: 'imagna', name: 'Sentiero dei Giganti', kind: 'trek', file: 'Imagna_SentieroDeiGiganti_EBIKE.gpx', link: '2022/11/giganti', elevation_gain: 1336, elevation_loss: 1249 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 7, zone: 'imagna', name: 'Anello delle Contrade', kind: 'trek', file: 'Imagna_AnelloContrade_EBIKE.gpx', link: '2023/01/anello-contrade', elevation_gain: 830, elevation_loss: 802 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna', name: 'Antiche Tracce', kind: 'trek', file: 'Imagna_AnticheTracce_EBIKE.gpx', link: '2022/12/antiche-tracce', elevation_gain: 987, elevation_loss: 991 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 2, zone: 'imagna', name: 'Sentiero dei Ponti', kind: 'trek', file: 'Imagna_SentieroDeiPonti_EBIKE.gpx', link: '2022/11/ponti', elevation_gain: 321, elevation_loss: 317 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 3, zone: 'imagna', name: 'Sentiero del Castagno', kind: 'trek', file: 'Imagna_SentieroDelCastagno_EBIKE.gpx', link: '2022/12/castagno', elevation_gain: 300, elevation_loss: 284 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 2, zone: 'imagna', name: 'Sentiero dei Roccoli, dell\'Acqua e dei Borghi', kind: 'trek', file: 'Imagna_SentieroRoccoliAcquaBorghi.gpx', link: '2023/04/roncola-comunali', elevation_gain: 669, elevation_loss: 672 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: "45 minuti, ultimi 400m di dislivello a spalla", zone: 'imagna', name: 'Salita Stanga di Brumano, Vetta Resegone', kind: 'up', file: 'Imagna_SalitaBrumanoResegone.gpx', link: '2021/09/vetta-resegone', elevation_gain: 1000, elevation_loss: 36 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita dal Passo del Palio allo Zuc De Valmana', kind: 'up', file: 'Imagna_SalitaPassoPalioZucDeValmana_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 198, elevation_loss: 25 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Trasferimento dal Rifugio Resegone al Passo Porta', kind: 'up', file: 'Imagna_RifResegonePassoPorta.gpx', link: '2018/12/salite-imagna', elevation_gain: 42, elevation_loss: 184 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Trasferimento da Valsecca a Rota Imagna e a Locatello', kind: 'up', file: 'Imagna_ValseccaRotaLocatello.gpx', link: '2018/12/salite-imagna', elevation_gain: 142, elevation_loss: 258 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita da Brumano ai Pra d\'Alet', kind: 'up', file: 'Imagna_SalitaBrumanoPraDAlet_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 161, elevation_loss: 11 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, morterone, taleggio', name: 'Salita dalla Sbarra di Brumano al Palio', kind: 'up', file: 'Imagna_SalitaSbarraPalio_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 249, elevation_loss: 25 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita da Selino a Fuipiano e ai Tre Faggi', kind: 'up', file: 'Imagna_SalitaSelinoFuipianoTreFaggi.gpx', link: '2018/12/salite-imagna', elevation_gain: 957, elevation_loss: 8 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, taleggio, costa_del_palio', name: 'Salita (nuova) da Fuipiano, Capione al Palio', kind: 'up', file: 'Imagna_SalitaFuipianoCapionePalio_EBIKE.gpx', link: '2022/04/sorgenti-enna', elevation_gain: 363, elevation_loss: 39 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, taleggio', name: 'Salita (nuova) da Fuipiano al Palio', kind: 'up', file: 'Imagna_SalitaFuipianoCimaPalio_EBIKE.gpx', link: '2022/03/grandi-alberi', elevation_gain: 415, elevation_loss: 30 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'costa_del_palio', name: 'Salita dalla Sbarra di Brumano al Palio', kind: 'up', file: 'Imagna_SalitaSbarraPalio.gpx', link: '2018/12/salite-imagna', elevation_gain: 242, elevation_loss: 20 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'zuc_de_valmana,canti', name: 'Salita dalla Sbarra di Brumano allo Zuc De Valmana', kind: 'up', file: 'Imagna_SalitaSbarraPalioZucDeValmana_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 452, elevation_loss: 50 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, morterone, taleggio', name: 'Salita da Morterone al Passo del Palio', kind: 'up', file: 'Imagna_SalitaMorteronePassoPalio_EBIKE.gpx', link: '2020/12/morterone', elevation_gain: 279, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'imagna', name: 'Salita Selino, Ca Prospero, Chignolo, Brumano, Cascine Zucchero', kind: 'up', file: 'Imagna_SalitaSelinoCaProsperoChignoloCascineZucchero_EBIKE.gpx', link: '2019/06/passo-porta', elevation_gain: 920, elevation_loss: 199 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita Selino, Campi, Brumano, Cascine Zucchero', kind: 'up', file: 'Imagna_SalitaSelinoCampiCascineZucchero_EBIKE.gpx', link: '2019/07/passo-porta-575-valsecca', elevation_gain: 674, elevation_loss: 33 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita Ponte Giurino, Selino, Tre Faggi', kind: 'up', file: 'Imagna_SalitaPonteGiurinoTreFaggi_EBIKE.gpx', link: '2020/07/tre-faggi-valle-brunone', elevation_gain: 1276, elevation_loss: 110 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Arnosto, Passo del Palio', kind: 'up', file: 'Imagna_SalitaArnostoPalio_EBIKE.gpx', link: '2024/02/forcella-di-olino', elevation_gain: 374, elevation_loss: 48 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita (nuova) da Fuipiano, Capione al Palio', kind: 'up', file: 'Imagna_SalitaFuipianoCapioneCimaPalio_EBIKE.gpx', link: '2022/04/foo-di-valmana', elevation_gain: 426, elevation_loss: 39 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Brumano alle Cascine Zucchero', kind: 'up', file: 'Imagna_SalitaBrumanoCascineZucchero_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 179, elevation_loss: 0 },

// replaced
{ vote: 3, rate: 2, rate_max: 3, cycle: 2, zone: '', name: 'Galzaniga, Orso, Chignolo, Ex Centrale Enel, Coegia, Selino', kind: 'down', file: 'Imagna_GalzanigaOrsoChignoloEnelCoegiaSelino.gpx', link: '2019/07/orso', elevation_gain: 41, elevation_loss: 676 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: '', name: 'Otto di Pagafone', kind: 'down', file: 'Imagna_PagafoneOtto.gpx', link: '2020/03/otto-pagafone', elevation_gain: 163, elevation_loss: 601 },

// deleted
/*
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita da Brumano al Passo Porta', kind: 'up', file: 'Imagna_SalitaBrumanoPassoPorta_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 241, elevation_loss: 27 },
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'imagna', name: 'Resegone, Bocchetta del Palio, Grande Faggio', kind: 'down', file: 'Imagna_ResegoneGrandeFaggio.gpx', link: '2019/06/resegone', elevation_gain: 2, elevation_loss: 627 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "40%, con ultimi 400m di dislivello a spalla", zone: 'imagna', name: 'Salita dal Passo del Palio al Resegone', kind: 'up', file: 'Imagna_SalitaPalioResegone.gpx', link: '2018/12/salite-imagna', elevation_gain: 502, elevation_loss: 18 },
*/

// removed for not so relevant
/*
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Passo del Palio, Rifugio Resegone', kind: 'down', file: 'Imagna_PassoPalioBocchettaRifResegone_EBIKE.gpx', elevation_gain: 71, elevation_loss: 164 },
*/

// removed for request of the owner
/*
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna,costa_del_palio', name: 'Passo del Palio, 571 Basso, 579, Fuipiano', kind: 'down', file: 'Imagna_PassoPalio571Basso579Fuipiano.gpx', link: '2019/04/costa-del-palio-fuipiano', elevation_gain: 113, elevation_loss: 443 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna,zuc_de_valmana', name: 'Salita da Fuipiano allo Zuc De Valmana', kind: 'up', file: 'Imagna_SalitaZucDeValmana_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 502, elevation_loss: 1 },
*/

//
// IMAGNA SUD
//
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: '', name: 'Valsecca, Fonti', kind: 'down', file: 'Imagna_ValseccaFonti.gpx', elevation_gain: 3, elevation_loss: 171 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: '', name: 'Valsecca, Scuderia, Mazzoleni, Selino', kind: 'down', file: 'Imagna_ValseccaScuderiaMazzoleniSelino.gpx', elevation_gain: 84, elevation_loss: 292 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, imagna, valcava', name: 'Linzone, 571, Roncola, 571, Almenno', kind: 'down', file: 'Imagna_Linzone571Roncola571Almenno.gpx', link: '2018/11/linzone-roncola', elevation_gain: 26, elevation_loss: 1050 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna, valcava', name: 'Valcava, 572, Selino', kind: 'down', file: 'Imagna_Valcava572Selino.gpx', link: '2020/07/valcava-cornabusa-selino', elevation_gain: 37, elevation_loss: 950 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'imagna, valcava', name: 'Forcella Alta, 573, Selino', kind: 'down', file: 'Imagna_ForcellaAlta573Selino.gpx', link: '2019/06/forcella-alta-573-selino', elevation_gain: 47, elevation_loss: 912 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, valcava', name: 'Forcella Alta, 574, Valsecca, Selino', kind: 'down', file: 'Imagna_ForcellaAlta574Selino.gpx', link: '2020/11/forcella-alta-574-valsecca', elevation_gain: 86, elevation_loss: 955 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna, valcava', name: 'Forcella Alta, Rizzolo, Selino', kind: 'down', file: 'Imagna_ForcellaAltaRizzolo.gpx', link: '2020/08/forcella-alta-rizzolo-selino', elevation_gain: 40, elevation_loss: 911 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, valcava', name: 'Valcava, Roncola Alta, Ponte Giurino', kind: 'down', file: 'Imagna_ValcavaPonteGiurino.gpx', link: '2020/08/valcava-roncola-alta-ponte-giurino', elevation_gain: 61, elevation_loss: 1020 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 0, zone: 'imagna, valcava', name: 'Linzone, Roncola Alta, Amagno', kind: 'down', file: 'Imagna_LinzoneRoncolaAltaAmagno.gpx', link: '2020/11/linzone-roncola-alta-amagno', elevation_gain: 8, elevation_loss: 969 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, imagna, valcava, roncola', name: 'Roncola, Barlino', kind: 'down', file: 'Imagna_RoncolaBarlino.gpx', link: '2019/04/roncola', elevation_gain: 0, elevation_loss: 450 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'roncola', name: 'Roncola, 571, Almenno', kind: 'down', file: 'Imagna_Roncola571Almenno.gpx', link: '2019/04/roncola', elevation_gain: 20, elevation_loss: 533 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, valcava, roncola', name: 'Roncola, CaLiger, Almenno', kind: 'down', file: 'Imagna_RoncolaCaLigerAlmenno.gpx', link: '2019/04/roncola', elevation_gain: 29, elevation_loss: 553 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, valcava, roncola', name: 'Roncola, CaLiger, Cava di Strozza', kind: 'down', file: 'Imagna_RoncolaCava.gpx', link: '2019/04/roncola', elevation_gain: 11, elevation_loss: 562 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'roncola', name: 'Salita da Almenno a Roncola', kind: 'up', file: 'Imagna_SalitaRoncola.gpx', elevation_gain: 535, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, imagna, valcava', name: 'Salita da Valcava al Linzone', kind: 'up', file: 'Martino_ValcavaLinzone.gpx', link: '2018/12/salite-imagna', elevation_gain: 86, elevation_loss: 38 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Amagno al Linzone', kind: 'up', file: 'Imagna_SalitaAmagnoValcavaLinzone_EBIKE.gpx', elevation_gain: 1028, elevation_loss: 69 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Trasferimento Ponte Giurino, Selino', kind: 'up', file: 'Imagna_PonteGiurinoSelino_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 124, elevation_loss: 99 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Ciclabile Valle Imagna', kind: 'up', file: 'Imagna_CiclabileValleImagna.gpx', link: '2018/12/salite-imagna', elevation_gain: 390, elevation_loss: 170 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita da Selino alla Forcella Alta', kind: 'up', file: 'Imagna_SalitaSelinoForcellaAlta_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 862, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita da Almenno a Costa Imagna e Valcava', kind: 'up', file: 'Imagna_SalitaAlmennoCostaValcava.gpx', link: '2018/12/salite-imagna', elevation_gain: 1076, elevation_loss: 49 },

// removed as not significative
/*
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita da Almenno a Roncola e Valcava', kind: 'up', file: 'Imagna_SalitaAlmennoRoncolaValcava.gpx', link: '2018/12/salite-imagna', elevation_gain: 1074, elevation_loss: 37 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'imagna, valcava, roncola', name: 'Roncola, Selino', kind: 'down', file: 'Imagna_RoncolaSelino.gpx', link: '2019/04/roncola', elevation_gain: 28, elevation_loss: 473 },
*/

//
// UBIONE
//
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Passo del Canto, Capizzone', kind: 'down', file: 'Imagna_PassoCantoCapizzone.gpx', link: '2020/09/passo-canto-capizzone', elevation_gain: 67, elevation_loss: 516 },
{ vote: 3, rate: 2, rate_max: 4, cycle: "1 minuto nel tratto iniziale con passaggi a piedi", zone: 'imagna, ubione', name: 'Ubione, 571, Belved\u00EC, Clanezzo', kind: 'down', file: 'Imagna_Ubione571.gpx', link: '2020/08/ubione-571', elevation_gain: 1, elevation_loss: 559 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, ubione', name: 'Roccoli Passata, Costa Cavallina', kind: 'down', file: 'Imagna_CostaCavallina.gpx', link: '2019/09/costa-cavallina', elevation_gain: 19, elevation_loss: 435 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Final, Sopracorna', kind: 'down', file: 'Imagna_FinalSopracorna.gpx', link: '2020/05/sopracorna', elevation_gain: 28, elevation_loss: 459 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Postiera', kind: 'down', file: 'Imagna_Postiera.gpx', link: '2020/05/sopracorna', elevation_gain: 16, elevation_loss: 437 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Final, Postiera', kind: 'down', file: 'Imagna_FinalPostiera.gpx', link: '2020/05/sopracorna', elevation_gain: 15, elevation_loss: 455 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Final, Valle Mori', kind: 'down', file: 'Imagna_FinalValleMori.gpx', link: '2020/05/sopracorna', elevation_gain: 16, elevation_loss: 427 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'imagna, ubione', name: 'Corna Marcia, Coyote Scamburtit, Ca Bonor\u00E8', kind: 'down', file: 'Imagna_CoyoteScamburtit.gpx', link: '2019/09/coyote-scamburtit', elevation_gain: 19, elevation_loss: 702 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, ubione', name: 'Monte Ubiale, Ubiale', kind: 'down', file: 'Imagna_MonteUbialeClanezzo.gpx', link: '2023/05/monte-ubiale', elevation_gain: 85, elevation_loss: 756 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 0, zone: 'imagna, ubione', name: 'Fiori, Sopracorna', kind: 'down', file: 'Imagna_FioriSopracorna.gpx', link: '2024/07/fiori', elevation_gain: 18, elevation_loss: 522 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, ubione', name: 'Salita ciclabile del Chito, Corna Marcia', kind: 'up', file: 'Imagna_SalitaChitoBottaCornaMarcia_EBIKE.gpx', link: '2019/09/coyote-scamburtit', elevation_gain: 806, elevation_loss: 136 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, ubione', name: 'Salita ciclabile del Chito, Roccoli Passata', kind: 'up', file: 'Imagna_SalitaChitoCeresolaCantoPassata_EBIKE.gpx', link: '2019/09/costa-cavallina', elevation_gain: 694, elevation_loss: 309 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "22 minuti con ultimi 100m di dislivello a spalla", zone: 'imagna, ubione', name: 'Salita Clanezzo, Monte Ubione', kind: 'up', file: 'Imagna_SalitaClanezzoUbione.gpx', link: '2020/08/ubione-571', elevation_gain: 582, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 5, zone: 'imagna, ubione', name: 'Salita Clanezzo, Passo del Canto, Monte Ubiale', kind: 'up', file: 'Imagna_SalitaClanezzoMonteUbiale_EBIKE.gpx', link: '2023/05/monte-ubiale', elevation_gain: 871, elevation_loss: 241 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'ubione, sopracorna', name: 'Salita Clanezzo, Roccoli Passata', kind: 'up', file: 'Imagna_SalitaClanezzoRoccoliPassata_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 475, elevation_loss: 12 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'ubione', name: 'Salita diretta ciclabile del Chito, Passo del Canto', kind: 'up', file: 'Imagna_SalitaChitoCantoDiretta_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 513, elevation_loss: 53 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'ubione', name: 'Salita Clanezzo, Roccoli Passata, Fiori', kind: 'up', file: 'Imagna_SalitaClanezzoFiori_EBIKE.gpx', link: '2024/07/fiori', elevation_gain: 520, elevation_loss: 3 },
//Imagna_MalanotteFoppo.gpx

//
// SAN MARTINO
//
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, roncola', name: 'Roncola, San Rocco', kind: 'down', file: 'Martino_RoncolaSanRocco.gpx', link: '2019/04/roncola', elevation_gain: 0, elevation_loss: 332 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, roncola', name: 'Baita, Camutaglio, Longa, Golf', kind: 'down', file: 'Martino_BaitaCamutaglioLongaGolf.gpx', link: '2019/04/roncola', elevation_gain: 147, elevation_loss: 630 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, roncola', name: 'Prabacioc, San Rocco', kind: 'down', file: 'Martino_PrabaciocSanRocco.gpx', link: '2019/04/roncola', elevation_gain: 0, elevation_loss: 305 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Pedrino DH, Faggeta, Perlupario', kind: 'down', file: 'Martino_PedrinoDHFaggetaPerlupario.gpx', link: '2019/04/colle-pedrino', elevation_gain: 12, elevation_loss: 385 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Ciacallo, Burligo', kind: 'down', file: 'Martino_Ciacallo.gpx', link: '2019/04/colle-pedrino', elevation_gain: 0, elevation_loss: 183 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Pedrino, Ca Muracca, Forcella di Burligo', kind: 'down', file: 'Martino_PedrinoMuraccaForcella.gpx', link: '2019/04/colle-pedrino', elevation_gain: 1, elevation_loss: 218 },
{ vote: 1, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Pedrino, Cavatori', kind: 'down', file: 'Martino_PedrinoCavatori.gpx', link: '2019/04/colle-pedrino', elevation_gain: 0, elevation_loss: 109 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'pedrino', name: '807 / Palestra', kind: 'down', file: 'Martino_807Palestra.gpx', link: '2019/04/colle-pedrino', elevation_gain: 0, elevation_loss: 147 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'pedrino', name: 'Mulattiera', kind: 'down', file: 'Martino_PedrinoMulattieraOpreno.gpx', link: '2019/04/colle-pedrino', elevation_gain: 1, elevation_loss: 239 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava, piacca', name: 'Linzone, Monte Piacca, Baita, Spino, Palazzago', kind: 'down', file: 'Martino_LinzonePiaccaBaitaSpinoPalazzago.gpx', link: '2018/11/linzone-monte-piacca-baita-burligo', elevation_gain: 49, elevation_loss: 1008 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava, piacca', name: 'Linzone, Monte Piacca, Col Pedrino, Palestra / 807, Burligo', kind: 'down', file: 'Martino_LinzonePiaccaColPedrinoPalestraBurligo.gpx', link: '2018/11/linzone-monte-piacca-baita-burligo', elevation_gain: 83, elevation_loss: 960 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: 'martino, valcava', name: 'Monte Linzone, Giallo-Blu Ovest, Dusnale', kind: 'down', file: 'Martino_LinzoneGialloBluOvest.gpx', link: '2018/11/2025/05/giallo-blu-ovest', elevation_gain: 116, elevation_loss: 970 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'martino, valcava', name: 'Antenne Valcava, Funivia, Coldara, Col Fopa, Opreno, Burligo', kind: 'down', file: 'Martino_AntenneValcavaFuniviaColFopaBurligo.gpx', link: '2019/01/funivia-coldara-colle-pedrino-opreno', elevation_gain: 76, elevation_loss: 962 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: '', name: 'Antenne Valcava, Zuccherone, Coldara, Colle Pedrino, Opreno, Burligo', kind: 'down', file: 'Martino_AntenneValcavaZuccheroneColPedrinoBurligo.gpx', link: '2019/03/zuccherone-coldara-col-fopa-opreno', elevation_gain: 74, elevation_loss: 986 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 1, zone: 'martino, valcava', name: 'Antenne Valcava, Cava, Col Pedrino, Burligo', kind: 'down', file: 'Martino_AntenneValcavaCavaPedrinoBurligo.gpx', link: '2021/12/antenne-cava', elevation_gain: 16, elevation_loss: 913 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Crinale dei colli di Palazzago', kind: 'down', file: 'Martino_ColliPalazzago_EBIKE.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 177, elevation_loss: 494 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Cadimaggio, Acqua, Borghetto', kind: 'down', file: 'Martino_CrinaleCadimaggioAcquaBorghetto.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 25, elevation_loss: 143 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Monte Valmora, Borghetto', kind: 'down', file: 'Martino_CrinaleMonteValmoraBorghetto.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 43, elevation_loss: 139 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Picco Alto, Palazzago', kind: 'down', file: 'Martino_CrinalePiccoAltoPalazzago.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 14, elevation_loss: 148 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'martino, crinale', name: 'Pracerito, Ca Zucchetti', kind: 'down', file: 'Martino_CrinalePraceritoCaZucchetti.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 31, elevation_loss: 228 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Pracerito, Fomorone', kind: 'down', file: 'Martino_CrinalePraceritoFomorone.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 2, elevation_loss: 194 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Ca Maggio, Borghetto', kind: 'down', file: 'Martino_CrinaleBorghetto.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 0, elevation_loss: 108 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Gronfaleggio, Bressanone, Bund\u00E8', kind: 'down', file: 'Martino_GronfaleggioBressanoneBunde.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 22, elevation_loss: 264 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Gronfaleggio, Colle dei Frati, Pontida', kind: 'down', file: 'Martino_GronfaleggioColleDeiFratiPontida.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 18, elevation_loss: 233 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Valcava, 823, Colle di Sogno, Corna Martinella, Classica', kind: 'down', file: 'Martino_Valcava823SognoMartinellaClassica.gpx', link: '2018/12/valcava-colle-di-sogno-corna-martinella', elevation_gain: 125, elevation_loss: 892 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'martino, valcava', name: 'Valcava, 821, Torre de Busi', kind: 'down', file: 'Martino_Valcava821Busi.gpx', link: '2019/12/valcava-821-busi', elevation_gain: 3, elevation_loss: 982 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Forcella Alta, 817 Direttissima, Carenno', kind: 'down', file: 'Martino_ForcellaAlta817Carenno.gpx', link: '2018/12/forcella-alta-817-carenno', elevation_gain: 1, elevation_loss: 664 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'martino, valcava', name: 'Forcella Alta, 815 Muerte, Carenno', kind: 'down', file: 'Martino_ForcellaAlta815Carenno.gpx', link: '2019/01/forcella-alta-815-carenno', elevation_gain: 5, elevation_loss: 658 },
{ vote: 4, rate: 4, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Forcella Alta, 812, Carenno', kind: 'down', file: 'Martino_ForcellaAlta812Carenno.gpx', link: '2019/01/forcella-alta-812-carenno', elevation_gain: 29, elevation_loss: 691 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Forcella Alta, 811, Carenno', kind: 'down', file: 'Martino_ForcellaAlta811Carenno.gpx', link: '2020/01/forcella-alta-811-carenno', elevation_gain: 33, elevation_loss: 707 },
{ vote: 2, rate: 3, rate_max: 4, cycle: 0, zone: 'martino, valcava', name: 'Forcella Alta, 802, Carenno', kind: 'down', file: 'Martino_ForcellaAlta802Carenno.gpx', link: '2020/06/forcella-alta-802-carenno', elevation_gain: 21, elevation_loss: 665 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Convento Pertus, Erve, Saina, Somasca', kind: 'down', file: 'Martino_ConventoPertusErveSainaSomasca_EBIKE.gpx', link: '2020/07/convento-pertus-erve-saina-somasca', elevation_gain: 195, elevation_loss: 1051 },
{ vote: 3, rate: 4, rate_max: 0, cycle: 6, zone: 'martino, valcava', name: 'Convento Pertus, Nesolio, Madonna del Corno', kind: 'down', file: 'Martino_ConventoPertusNesolioCorno.gpx', link: '2021/06/nesolio', elevation_gain: 51, elevation_loss: 724 },
{ vote: 1, rate: 4, rate_max: 0, cycle: 11, zone: 'martino, valcava', name: 'Convento Pertus, Pian Munik, Madonna del Corno', kind: 'down', file: 'Martino_ConventoPertusMunikCorno.gpx', link: '2021/07/munik', elevation_gain: 116, elevation_loss: 765 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava, tesoro', name: 'Monte Tesoro, Direttissima, Colle Di Sogno, Corna Martinella, Cristai Super Flow, Torre de Busi', kind: 'down', file: 'Martino_TesoroDirSognoMartinellaCristaiSuperFlow.gpx', link: '2018/12/monte-tesoro-direttissima-colle-di', elevation_gain: 31, elevation_loss: 1018 },
{ vote: 1, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, sogno', name: 'Colle Di Sogno, 819, Torre de Busi', kind: 'down', file: 'Martino_ColleDiSogno819.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 40, elevation_loss: 541 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, sogno', name: 'Colle Di Sogno, 823, Torre de Busi', kind: 'down', file: 'Martino_ColleDiSogno823.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 10, elevation_loss: 507 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, sogno', name: 'Colle Di Sogno, Corna Martinella, Explo', kind: 'down', file: 'Martino_ColleDiSognoCornaMartinellaExplo.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 53, elevation_loss: 245 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'sogno', name: 'Colle Di Sogno, 811, Carenno', kind: 'down', file: 'Martino_ColleDiSogno811.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 1, elevation_loss: 326 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'tesoro', name: 'Colle Di Sogno, Carenno', kind: 'down', file: 'Martino_ColleDiSognoCarenno.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 31, elevation_loss: 360 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'sogno', name: 'Colle Di Sogno, Corna Martinella, Nord', kind: 'down', file: 'Martino_ColleDiSognoCornaMartinellaNord.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 109, elevation_loss: 307 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'sogno', name: 'Colle Di Sogno, Corna Martinella, Sud', kind: 'down', file: 'Martino_ColleDiSognoCornaMartinellaSud.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 14, elevation_loss: 212 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'martino, martinella', name: 'Corna Martinella, 822, 801A', kind: 'down', file: 'Martino_CornaMartinella822801A.gpx', link: '2020/01/corna-martinella', elevation_gain: 8, elevation_loss: 358 },
{ vote: 5, rate: 1, rate_max: 3, cycle: 0, zone: 'martinella', name: 'Corna Martinella, Classica', kind: 'down', file: 'Martino_CornaMartinellaClassica.gpx', link: '2020/01/corna-martinella', elevation_gain: 22, elevation_loss: 344 },
{ vote: 5, rate: 1, rate_max: 3, cycle: 0, zone: 'martinella', name: 'Corna Martinella, Cristai Super Flow', kind: 'down', file: 'Martino_CornaMartinellaCristaiSuperFlow.gpx', link: '2020/01/corna-martinella', elevation_gain: 12, elevation_loss: 332 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'martino, martinella', name: 'Santa Margherita, Pistino', kind: 'down', file: 'Martino_MargheritaPistino.gpx', link: '2020/01/corna-martinella', elevation_gain: 0, elevation_loss: 242 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'martino, coldara', name: 'Coldara, PizzoPec, Torre de Busi', kind: 'down', file: 'Martino_ColdaraPizzoPec.gpx', link: '2020/01/coldara', elevation_gain: 4, elevation_loss: 488 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, coldara', name: 'Coldara, San Marco, Torre de Busi', kind: 'down', file: 'Martino_ColdaraSanMarco.gpx', link: '2020/01/coldara', elevation_gain: 30, elevation_loss: 510 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, coldara', name: 'Coldara, Val Bratta, Torre de Busi', kind: 'down', file: 'Martino_ColdaraValBratta.gpx', link: '2020/01/coldara', elevation_gain: 20, elevation_loss: 505 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'coldara', name: 'Coldara, Col Fopa, Opreno', kind: 'down', file: 'Martino_ColdaraColFopaOpreno.gpx', link: '2020/01/coldara', elevation_gain: 20, elevation_loss: 401 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Kavast\u00F2poi (Cavatappi)', kind: 'down', file: 'Martino_Kavastopoi.gpx', link: '2023/02/kavastopoi', elevation_gain: 5, elevation_loss: 583 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'martino, valcava', name: 'Sommaskio Trail', kind: 'down', file: 'Martino_SommaskioTrail.gpx', link: '2023/04/valcavastopoi', elevation_gain: 59, elevation_loss: 947 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Linzone, Monte Piacca, Cava Col Pedrino, Ca Muracca, Burligo', kind: 'down', file: 'Martino_LinzoneAlbenzaCavaBurligo.gpx', link: '2023/10/linzone-cava-pedrino', elevation_gain: 3, elevation_loss: 844 },
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'martino, valcava', name: 'Valcava, Vekkia Miniera, Burligo', kind: 'down', file: 'Martino_ValcavaVekkiaMiniera.gpx', link: '2025/02/vekkia-miniera', elevation_gain: 58, elevation_loss: 946 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Cava, Faidello DH, Opreno, Burligo', kind: 'down', file: 'Martino_FaidelloDH.gpx', link: '2025/02/faidello', elevation_gain: 55, elevation_loss: 529 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: 'martino, valcava', name: 'Antenne Valcava, Zuccherone, Faidello, Opreno, Burligo', kind: 'down', file: 'Martino_AntenneValcavaZuccheroneFaidelloBurligo.gpx', link: '2025/04/zuccherone-faidello', elevation_gain: 72, elevation_loss: 935 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, roncola', name: 'Trasferimento da Roncola alla Baita', kind: 'up', file: 'Martino_RoncolaBaita.gpx', link: '2018/12/salite-san-martino', elevation_gain: 86, elevation_loss: 120 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, roncola', name: 'Salita da Palazzago al Monte Piacca', kind: 'up', file: 'Martino_SalitaPalazzagoMontePiacca_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 711, elevation_loss: 27 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'pedrino', name: 'Salita da Burligo a Colle Pedrino', kind: 'up', file: 'Martino_SalitaBurligoCollePedrino.gpx', link: '2018/12/salite-san-martino', elevation_gain: 282, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Burligo alle antenne di Valcava', kind: 'up', file: 'Martino_SalitaBurligoCavaAntenneValcava_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 906, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'piacca', name: 'Salita da Burligo al Monte Linzone', kind: 'up', file: 'Martino_SalitaBurligoCavaLinzone.gpx', link: '2018/12/salite-san-martino', elevation_gain: 905, elevation_loss: 9 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita al Crinale da Borghetto', kind: 'up', file: 'Martino_SalitaCrinaleBorghetto_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 110, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita al Crinale da Ca Zucchetti', kind: 'up', file: 'Martino_SalitaCrinaleCaZucchetti_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 185, elevation_loss: 9 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita al Crinale da Palazzago', kind: 'up', file: 'Martino_SalitaCrinalePalazzago_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 123, elevation_loss: 12 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita al Crinale da Burligo localit\u00E0 Acqua', kind: 'up', file: 'Martino_SalitaAcquaCrinale_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 79, elevation_loss: 4 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita a Gronfaleggio da CaZucchetti', kind: 'up', file: 'Martino_SalitaCaZuchettiGronfaleggio_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 106, elevation_loss: 4 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita a Gronfaleggio da Celana', kind: 'up', file: 'Martino_SalitaCelanaGronfaleggio_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 100, elevation_loss: 12 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Madonna del Corno, Convento del Pertus', kind: 'up', file: 'Martino_SalitaCornoConventoPertus_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 753, elevation_loss: 99 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita Madonna del Corno, Oneta, Convento del Pertus', kind: 'up', file: 'Martino_SalitaCornoOnetaConventoPertus_EBIKE.gpx', link: '2021/06/nesolio', elevation_gain: 776, elevation_loss: 130 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, martinella', name: 'Salita Torre de Busi a Santa Margherita', kind: 'up', file: 'Martino_SalitaBusiMargherita_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 248, elevation_loss: 40 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, tesoro', name: 'Salita da Torre De Busi a Valcava', kind: 'up', file: 'Martino_SalitaBusiValcava_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 950, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita da Carenno alla Forcella Alta', kind: 'up', file: 'Martino_SalitaCarennoForcellaAlta.gpx', link: '2018/12/salite-san-martino', elevation_gain: 684, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita da Somasca al Convento del Pertus', kind: 'up', file: 'Martino_SalitaSomascaCarennoConventoPertus_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 898, elevation_loss: 42 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'tesoro', name: 'Salita da Carenno alla Forcella Alta', kind: 'up', file: 'Martino_SalitaCarennoForcellaAlta_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 669, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, martinella', name: 'Salita da Carenno alla Corna Martinella', kind: 'up', file: 'Martino_SalitaCarenno819CornaMartinella_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 152, elevation_loss: 21 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita dalla Forcella Alta al Monte Tesoro', kind: 'up', file: 'Martino_SalitaForcellaAltaMonteTesoro.gpx', link: '2018/12/salite-san-martino', elevation_gain: 124, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'tesoro', name: 'Salita dalla Forcella Alta al Monte Tesoro', kind: 'up', file: 'Martino_SalitaForcellaAltaMonteTesoro_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 123, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, tesoro', name: 'Salita dal Passo di Valcava al Monte Tesoro', kind: 'up', file: 'Martino_SalitaValcavaTesoro_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 189, elevation_loss: 106 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita da Torre De Busi a Carenno', kind: 'up', file: 'Martino_SalitaBusiCarenno.gpx', link: '2018/12/salite-san-martino', elevation_gain: 311, elevation_loss: 80 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, martinella', name: 'Salita da Torre De Busi alla Corna Martinella', kind: 'up', file: 'Martino_SalitaBusiCornaMartinella_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 427, elevation_loss: 86 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, coldara', name: 'Salita da Torre De Busi ad Opreno', kind: 'up', file: 'Martino_SalitaBusiOpreno_EBIKE.gpx', link: '2018/12/salite-san-martino', elevation_gain: 249, elevation_loss: 56 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita da Palazzago alla Cava', kind: 'up', file: 'Martino_SalitaPalazzagoCava.gpx', link: '2018/12/salite-san-martino', elevation_gain: 987, elevation_loss: 4 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Almenno al Monte Linzone', kind: 'up', file: 'Martino_SalitaAlmennoPalazzagoLinzone_EBIKE.gpx', link: '2018/11/linzone-roncola', elevation_gain: 1188, elevation_loss: 137 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Trasferimento da Opreno a Burligo', kind: 'up', file: 'Martino_OprenoBurligo.gpx', link: '2018/12/salite-san-martino', elevation_gain: 60, elevation_loss: 112 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Trasferimento da Opreno a Burligo', kind: 'up', file: 'Martino_OprenoBurligo.gpx', link: '2018/12/salite-san-martino', elevation_gain: 60, elevation_loss: 112 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'pedrino', name: 'Salita Perlupario, Cava di Valcava', kind: 'up', file: 'Martino_SalitaPerluparioCava_EBIKE.gpx', link: '2023/02/kavastopoi', elevation_gain: 735, elevation_loss: 109 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Burligo, Cava', kind: 'up', file: 'Martino_SalitaBurligoCava_EBIKE.gpx', link: '2025/02/faidello', elevation_gain: 508, elevation_loss: 0 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: '', name: 'Monte Piacca, Dusnale', kind: 'down', file: 'Martino_PiaccaDusnale.gpx', link: '2021/06/monte-piacca-dusnale', elevation_gain: 24, elevation_loss: 636 },

//
// MONTE CANTO
//
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'canto', name: 'La Frana', kind: 'down', file: 'Canto_Frana.gpx', link: '2023/04/frana', elevation_gain: 0, elevation_loss: 288 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'canto', name: 'Crocione, California 2', kind: 'down', file: 'Canto_CrocioneCalifornia2.gpx', link: '2023/04/crocione-california-2', elevation_gain: 12, elevation_loss: 405 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'canto', name: 'Tronchi, Canyon', kind: 'down', file: 'Canto_Canyon.gpx', link: '2021/05/canyon', elevation_gain: 1, elevation_loss: 324 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'canto', name: 'Traliccio', kind: 'down', file: 'Canto_Traliccio.gpx', link: '2021/05/traliccio', elevation_gain: 0, elevation_loss: 303 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'canto', name: 'Radici, Genestaro / Scorbutico', kind: 'down', file: 'Canto_RadiciGenestaro.gpx', link: '2020/03/radici-genestaro', elevation_gain: 5, elevation_loss: 203 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'canto', name: 'Crocione, Guendalina', kind: 'down', file: 'Canto_CrocioneGuendalina.gpx', link: '2020/02/crocione-guendalina', elevation_gain: 45, elevation_loss: 432 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'canto', name: 'Biglietto da Visita', kind: 'down', file: 'Canto_BigliettoDaVisita.gpx', link: '2020/02/biglietto-da-visita', elevation_gain: 87, elevation_loss: 454 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'canto', name: 'Kompressor', kind: 'down', file: 'Canto_Kompressor.gpx', link: '2019/02/kompressor', elevation_gain: 23, elevation_loss: 343 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'canto', name: 'Borderline', kind: 'down', file: 'Canto_Borderline.gpx', link: '2023/02/borderline', elevation_gain: 13, elevation_loss: 385 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'canto', name: 'Pietra Sant Alberto', kind: 'down', file: 'Canto_PietraSAlberto.gpx', link: '2020/03/pietra-santalberto', elevation_gain: 12, elevation_loss: 150 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'canto, rocce', name: 'Rocce / Muschio e Lame Rotanti', kind: 'down', file: 'Canto_RocceLameRotanti.gpx', link: '2019/02/rocce-muschio', elevation_gain: 17, elevation_loss: 296 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: 'canto', name: 'Scalette', kind: 'down', file: 'Canto_Scalette.gpx', link: '2019/02/scalette', elevation_gain: 8, elevation_loss: 316 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'canto', name: 'Uccellaia 1 e 2', kind: 'down', file: 'Canto_Uccellaia1E2.gpx', link: '2019/02/uccellaia', elevation_gain: 22, elevation_loss: 399 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'canto', name: 'Zandona', kind: 'down', file: 'Canto_Zandona.gpx', link: '2019/02/zandona', elevation_gain: 5, elevation_loss: 75 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'canto', name: 'Porcile, San Giovanni', kind: 'down', file: 'Canto_PorcileSanGiovanni.gpx', link: '2020/03/porcile-san-giovanni', elevation_gain: 35, elevation_loss: 395 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'canto, bob', name: 'Bob', kind: 'down', file: 'Canto_Bob.gpx', link: '2023/02/bob', elevation_gain: 40, elevation_loss: 312 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'canto', name: 'California', kind: 'down', file: 'Canto_California.gpx', link: '2023/02/california', elevation_gain: 28, elevation_loss: 373 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'canto, grezia', name: 'Grezia', kind: 'down', file: 'Canto_Grezia.gpx', link: '2023/02/grezia', elevation_gain: 23, elevation_loss: 298 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto, bob, grezia, rocce', name: 'Salita Sotto il Monte, Santa Barbara', kind: 'up', file: 'Canto_SalitaSottoIlMonte.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 373, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Somasca, Pontida', kind: 'up', file: 'Canto_SalitaSomascaPontida_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 75, elevation_loss: 14 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Ruderi, Monte Canto', kind: 'up', file: 'Canto_SalitaMonteCanto.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 81, elevation_loss: 4 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Pontida, Santa Barbara', kind: 'up', file: 'Canto_SalitaPontida.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 313, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Pontida, GEP, Santa Barbara', kind: 'up', file: 'Canto_SalitaPontidaGEP_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 350, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Somasca, Monte Albano', kind: 'up', file: 'Canto_SalitaSomasca_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 211, elevation_loss: 18 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Ambivere, Monte Albano', kind: 'up', file: 'Canto_SalitaAmbivere.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 245, elevation_loss: 20 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Fontanella, Santa Barbara', kind: 'up', file: 'Canto_SalitaFontanella.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 192, elevation_loss: 35 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto, bob, grezia, rocce', name: 'Cross, Trasferimento Roncarro-Caneve', kind: 'up', file: 'Canto_Cross_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 53, elevation_loss: 85 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Sotto il Monte', kind: 'up', file: 'Canto_SalitaSottoIlMonte_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 379, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Ruderi, Crocione', kind: 'up', file: 'Canto_SalitaCrocione_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 58, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Pontida, Santa Barbara', kind: 'up', file: 'Canto_SalitaPontida_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 352, elevation_loss: 0 },

// removed perch� trasformato in strada
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: '', name: 'GEP', kind: 'down', file: 'Canto_GEP.gpx', link: '2021/05/gep', elevation_gain: 0, elevation_loss: 304 },

//
// BASSA SERIANA
//
// nord
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Canto Basso, 533, Forcella del Sorriso', kind: 'down', file: 'Seriana_CantoBassoForcellaSorriso.gpx', link: '2019/03/canto-basso-533-forcella-del-sorriso', elevation_gain: 3, elevation_loss: 143 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Lonno, Val del Luio, Alzano', kind: 'down', file: 'Seriana_LonnoLuio.gpx', link: '2019/04/lonno', elevation_gain: 0, elevation_loss: 402 },
/* { vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Cavallo, Canto Basso', kind: 'down', file: 'Seriana_MonteCavallo.gpx' }, */
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Poieto, 523, Gazzaniga', kind: 'down', file: 'Seriana_Poieto523Gazzaniga.gpx', link: '2023/09/poieto-gazzaniga', elevation_gain: 8, elevation_loss: 944 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Poieto, Slayer Lane, Vertova', kind: 'down', file: 'Seriana_PoietoSlayerVertova.gpx', link: '2023/09/slayer', elevation_gain: 26, elevation_loss: 935 },
{ vote: 2, rate: 2, rate_max: 3, cycle: 3, zone: 'bassa_seriana', name: 'C\u00E0 Donadoni, 524, Vertova', kind: 'down', file: 'Seriana_Donadoni524Vertova.gpx', link: '2023/09/donadoni', elevation_gain: 285, elevation_loss: 1049 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 2, zone: 'bassa_seriana', name: 'Monte Poieto, 516, Val Vertova', kind: 'down', file: 'Seriana_Poieto516ValVertova.gpx', link: '2023/09/poieto-516', elevation_gain: 113, elevation_loss: 1023 },
/* 
rimosso perchè il primo tratto è troppo selvaggio ed il finale non è niete di che. Meglio l'alternativa che segue
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Pizzo di Lonno, Monte Ganda, Alzano Sopra', kind: 'down', file: 'Seriana_LonnoPizzoMonteGanda.gpx', link: '2019/04/lonno', elevation_gain: 111, elevation_loss: 530 }, 
*/
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Pizzo di Lonno, Monte Ganda, Sentiero delle Corne, Alzano Sopra', kind: 'down', file: 'Seriana_PizzoDiLonnoMonteGandaSentieroDelleCorne.gpx', link: '2019/04/lonno', elevation_gain: 34, elevation_loss: 510 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Pizzo di Lonno, Brumano, Val Nesa', kind: 'down', file: 'Seriana_PizzoDiLonnoValNesa.gpx', elevation_gain: 79, elevation_loss: 560 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Lonno, Percorso Vita, Valbona', kind: 'down', file: 'Seriana_LonnoPercorsoVita.gpx', link: '2019/04/lonno', elevation_gain: 10, elevation_loss: 400 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Lonno, Percorso Vita, Luio', kind: 'down', file: 'Seriana_LonnoPercorsoVitaLuio.gpx', link: '2019/04/lonno', elevation_gain: 4, elevation_loss: 417 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Lonno, Colle Bastia, Percorso Vita, Viana', kind: 'down', file: 'Seriana_LonnoColleBastia.gpx', link: '2019/04/lonno', elevation_gain: 26, elevation_loss: 448 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salmezza, Lonno, Percorso Vita', kind: 'down', file: 'Seriana_SalmezzaLonnoVita.gpx', link: '2024/06/salmezza-vita', elevation_gain: 14, elevation_loss: 738 },
//Seriana_SalmezzaLonnoVita.gpx
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salmezza, 533, Forcella di Nese', kind: 'down', file: 'Seriana_Salmezza533ForcellaNese.gpx', link: '2019/05/salmezza-533-forcella-di-nese', elevation_gain: 118, elevation_loss: 312 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 2, zone: 'bassa_seriana', name: 'Salmezza, Baita GAP, Lonno', kind: 'down', file: 'Seriana_SalmezzaBaitaGAPLonno.gpx', link: '2019/05/salmezza-gap-lonno', elevation_gain: 26, elevation_loss: 376 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Forcella di Nese, 531, Nese', kind: 'down', file: 'Seriana_ForcellaNese531Nese.gpx', link: '2019/05/forcella-di-nese-531-nese', elevation_gain: 7, elevation_loss: 586 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 1, zone: 'bassa_seriana, valtrusa', name: 'Selvino, 535, Lonno', kind: 'down', file: 'Seriana_535Lonno.gpx', link: '2019/05/monte-valtrusa', elevation_gain: 61, elevation_loss: 227 },
{ vote: 2, rate: 2, rate_max: 0, cycle: "3 minuti la salita al Valtrusa", zone: 'bassa_seriana, valtrusa', name: 'Selvino, 535, Monte Valtrusa, Lonno', kind: 'down', file: 'Seriana_535Valtrusa.gpx', link: '2019/05/monte-valtrusa', elevation_gain: 174, elevation_loss: 348 },
/*
removed su richiesta del CAI Albino
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Selvino, 550 / Mulattiera, Albino', kind: 'down', file: 'Seriana_550MulattieraAlbino.gpx', link: '2019/03/550-mulattiera', elevation_gain: 4, elevation_loss: 615 },
*/
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Selvino, Trevasco, Nembro', kind: 'down', file: 'Seriana_Trevasco.gpx', link: '2019/04/trevasco', elevation_gain: 105, elevation_loss: 737 },
{ vote: 2, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Selvino, Trevasco Est, Nembro', kind: 'down', file: 'Seriana_TrevascoEst.gpx', link: '2024/05/trevasco-est', elevation_gain: 84, elevation_loss: 710 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Selvino, Monte Purito, Monte Cereto, Nembro', kind: 'down', file: 'Seriana_PuritoCereto.gpx', link: '2019/04/purito-cereto', elevation_gain: 50, elevation_loss: 860 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 1, zone: 'bassa_seriana', name: 'Selvino, Ama, Trote, Albino', kind: 'down', file: 'Seriana_Trote.gpx', link: '2019/03/trote', elevation_gain: 25, elevation_loss: 612 },
{ vote: 4, rate: 4, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Selvino, Ama, Nigromo, Vertical, Albino', kind: 'down', file: 'Seriana_NigromoVertical.gpx', link: '2021/04/nigromo-vertical', elevation_gain: 27, elevation_loss: 649 },
{ vote: 4, rate: 4, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Canto Basso, 540A, Olera', kind: 'down', file: 'Seriana_540A.gpx', link: '2019/03/canto-basso-540a-olera', elevation_gain: 4, elevation_loss: 367 },
{ vote: 1, rate: 1, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Olera, 532, Burro, 531, Nese', kind: 'down', file: 'Seriana_Olera532Burro531Nese.gpx', link: '2019/03/olera-532-burro-531-nese', elevation_gain: 69, elevation_loss: 238 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana, 520', name: 'Ganda, 520, Gazzaniga', kind: 'down', file: 'Seriana_Ganda520.gpx', link: '2019/03/520', elevation_gain: 0, elevation_loss: 691 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana, 520', name: 'Ganda, 520 DH On Fire, Gazzaniga', kind: 'down', file: 'Seriana_Ganda520DH.gpx', link: '2019/03/520', elevation_gain: 0, elevation_loss: 681 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Ganda, 521, Gazzaniga', kind: 'down', file: 'Seriana_Ganda521.gpx', link: '2019/05/521', elevation_gain: 5, elevation_loss: 693 },
{ vote: 2, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Pista Downhill Poieto', kind: 'down', file: 'Seriana_PoietoDH.gpx', link: '2019/03/poieto-dh', elevation_gain: 1, elevation_loss: 317 },
{ vote: 3, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Nembro Trail', kind: 'down', file: 'Seriana_NembroTrail.gpx', link: '2019/05/nembro-trail', elevation_gain: 11, elevation_loss: 8 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Poieto, Ganda, Camocco, Albino', kind: 'down', file: 'Seriana_PoietoGandaCamoccoAlbino.gpx', link: '2022/11/camocco', elevation_gain: 32, elevation_loss: 1039 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 5, zone: 'bassa_seriana', name: 'Monte Poieto, Cornagera, Pradale, Valgua', kind: 'down', file: 'Seriana_PoietoCornageraPradaleValgua.gpx', link: '2022/12/cornagera', elevation_gain: 73, elevation_loss: 1088 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Rena, Bomba Trail, Albino', kind: 'down', file: 'Seriana_RenaBombaAlbino.gpx', link: '2022/12/rena-bomba', elevation_gain: 17, elevation_loss: 825 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Monte Poieto, Amora, Petello', kind: 'down', file: 'Seriana_PoeitoAmoraAlbino.gpx', link: '2023/01/amora', elevation_gain: 34, elevation_loss: 1053 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Tribulina di Ganda, 522, Gazzaniga', kind: 'down', file: 'Seriana_TribulinaGanda522Gazzaniga.gpx', link: '2023/01/522', elevation_gain: 43, elevation_loss: 742 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Rena, Croce San Luigi, Desenzano', kind: 'down', file: 'Seriana_RenaLuigiDesenzano.gpx', link: '2023/01/luigi', elevation_gain: 107, elevation_loss: 927 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Plazza, Gazzaniga', kind: 'down', file: 'Seriana_PlazzaGazzaniga.gpx', link: '2025/05/plazza', elevation_gain: 72, elevation_loss: 779 },

// removed for not so relevant
/*
{ vote: 2, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Rena, Albino', kind: 'down', file: 'Seriana_RenaAlbino.gpx', elevation_gain: 14, elevation_loss: 825 },
*/

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Trasferimento dalla Forcella di Nese al Canto Basso', kind: 'up', file: 'Seriana_ForcellaNese533BCantoBasso.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 88, elevation_loss: 57 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Monte di Nese al Canto Basso', kind: 'up', file: 'Seriana_SalitaMonteDiNeseCantoBasso.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 78, elevation_loss: 23 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Selvino a Salmezza', kind: 'up', file: 'Seriana_SalitaSalmezza.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 152, elevation_loss: 8 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Selvino al Monte Purito', kind: 'up', file: 'Seriana_SalitaPurito_EBIKE.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 184, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Salita da Alzano a Lonno', kind: 'up', file: 'Seriana_SalitaAlzanoPizzoDiLonno_EBIKE.gpx', link: '2019/04/lonno', elevation_gain: 509, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Nembro a Selvino', kind: 'up', file: 'Seriana_SalitaNembroSelvino.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 608, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, 520', name: 'Trasferimento da Selvino a Ganda', kind: 'up', file: 'Seriana_SalitaSelvinoGanda.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 86, elevation_loss: 35 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita dalla Forcella al Monte Cavallo', kind: 'up', file: 'Seriana_SalitaMonteCavallo.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 106, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Nese alla Forcella', kind: 'up', file: 'Seriana_SalitaNeseForcella.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 586, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Albino, Col du Bates, Ganda, Monte Poieto', kind: 'up', file: 'Seriana_SalitaAlbinoBatesGandaPoieto_EBIKE.gpx', link: '2022/11/camocco', elevation_gain: 1059, elevation_loss: 38 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Albino, Col du Bates, Monte Rena', kind: 'up', file: 'Seriana_SalitaAlbinoBatesGandaRena_EBIKE.gpx', elevation_gain: 857, elevation_loss: 44 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Aviatico, Monte Poieto', kind: 'up', file: 'Seriana_SalitaAviaticoPoeito_EBIKE.gpx', link: '2023/01/amora', elevation_gain: 329, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Aviatico, Forca, Monte Poieto', kind: 'up', file: 'Seriana_SalitaAviaticoForcaPoieto_EBIKE.gpx', link: '2023/01/amora', elevation_gain: 434, elevation_loss: 43 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'bassa_seriana', name: 'Salita Gazzaniga, Mer\u00E0, Tribulina di Ganda', kind: 'up', file: 'Seriana_SalitaGazzanigaMeraGanda_EBIKE.gpx', link: '2023/01/522', elevation_gain: 801, elevation_loss: 52 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Gazzaniga, Val del Gr\u00F9, Monte Poieto', kind: 'up', file: 'Seriana_SalitaGazzanigaGruPoieto_EBIKE.gpx', link: '2023/09/poieto-gazzaniga', elevation_gain: 1060, elevation_loss: 99 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Vertova, Val del Gr\u00F9, C\u00E0 Donadoni', kind: 'up', file: 'Seriana_SalitaVertovaGruDonadoni_EBIKE.gpx', link: '2023/09/donadoni', elevation_gain: 980, elevation_loss: 144 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Vertova, Val del Gr\u00F9, Monte Poieto', kind: 'up', file: 'Seriana_SalitaVertovaGruPoieto_EBIKE.gpx', link: '2023/09/poieto-516', elevation_gain: 1016, elevation_loss: 88 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Gazzaniga, Ganda', kind: 'up', file: 'Seriana_SalitaGazzanigaGanda_EBIKE.gpx', link: '2019/05/521', elevation_gain: 720, elevation_loss: 23 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Gazzaniga, Coldre, Val del Gru', kind: 'up', file: 'Seriana_SalitaGazzanigaColdreGru_EBIKE.gpx', link: '2025/05/plazza', elevation_gain: 800, elevation_loss: 78 },

// trek
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_seriana', name: 'Anello del Misma', kind: 'trek', file: 'Seriana_AnelloDelMisma_EBIKE.gpx', link: '2024/09/anello-misma', elevation_gain: 867, elevation_loss: 862 },

// sud
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, 520', name: 'Ciclabile Valle Seriana', kind: 'up', file: 'Seriana_CiclabileValleSeriana.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 145, elevation_loss: 32 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Ciclovia delle Rogge', kind: 'up', file: 'Seriana_CicloviaDelleRogge.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 49, elevation_loss: 16 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Pradale, Costa Sorgenti, Cornale', kind: 'down', file: 'Seriana_PradaleCostaSorgenti.gpx', link: '2021/03/pradale-costa-sorgenti', elevation_gain: 4, elevation_loss: 409 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Pradale, Val Coler, Rinnovata', kind: 'down', file: 'Seriana_PradaleColerRinnovata.gpx', link: '2021/03/pradale-val-coler-rinnovata', elevation_gain: 59, elevation_loss: 453 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana, misma', name: 'Misma, Pradale', kind: 'down', file: 'Seriana_MismaPradale.gpx', link: '2020/05/misma', elevation_gain: 18, elevation_loss: 855 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana, misma', name: 'Misma, Pratolina', kind: 'down', file: 'Seriana_MismaPratolina.gpx', link: '2021/03/misma-pratolina', elevation_gain: 117, elevation_loss: 972 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Val Coler, Sant Antonio', kind: 'down', file: 'Seriana_ColerSantAntonio.gpx', link: '2021/06/val-coler-sant-antonio', elevation_gain: 2, elevation_loss: 331 },
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'bassa_seriana', name: 'Val Coler, Vertical', kind: 'down', file: 'Seriana_ColerVertical.gpx', link: '2021/04/val-coler-vertical', elevation_gain: 0, elevation_loss: 332 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Val Coler, Biroli, Cornale', kind: 'down', file: 'Seriana_ColerBiroliCornale.gpx', link: '2021/04/val-coler-biroli-cornale', elevation_gain: 13, elevation_loss: 316 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Carezzola', kind: 'down', file: 'Seriana_BastiaCarezzola.gpx', link: '2021/04/scanzorosciate', elevation_gain: 1, elevation_loss: 121 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Carezzola 2', kind: 'down', file: 'Seriana_BastiaCarezzola2.gpx', link: '2021/04/scanzorosciate', elevation_gain: 2, elevation_loss: 121 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Centrale', kind: 'down', file: 'Seriana_BastiaCentrale.gpx', link: '2021/04/scanzorosciate', elevation_gain: 2, elevation_loss: 155 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Fola', kind: 'down', file: 'Seriana_BastiaFola.gpx', link: '2021/04/scanzorosciate', elevation_gain: 0, elevation_loss: 146 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Gianino', kind: 'down', file: 'Seriana_BastiaGianino.gpx', link: '2021/04/scanzorosciate', elevation_gain: 0, elevation_loss: 108 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Valbona', kind: 'down', file: 'Seriana_BastiaValbona.gpx', link: '2021/04/scanzorosciate', elevation_gain: 0, elevation_loss: 97 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Prati Moletti, Cene', kind: 'down', file: 'Seriana_MonteAltinoPratiMolettiCene.gpx', link: '2024/11/altino', elevation_gain: 94, elevation_loss: 721 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Canfer, Cene', kind: 'down', file: 'Seriana_MonteAltinoCanfer.gpx', link: '2024/11/altino-canfer', elevation_gain: 133, elevation_loss: 773 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Vall Alta, Cene', kind: 'down', file: 'Seriana_MonteAltinoVallAlta.gpx', link: '2024/12/altino-vallalta', elevation_gain: 48, elevation_loss: 686 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Dossello, Cene', kind: 'down', file: 'Seriana_MonteAltinoDosselloCene.gpx', link: '2024/12/altino-dossello', elevation_gain: 71, elevation_loss: 720 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Grumelduro, Cene', kind: 'down', file: 'Seriana_MonteAltinoGrumelduro.gpx', link: '2025/01/altino-grumelduro', elevation_gain: 107, elevation_loss: 739 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Abbazia', kind: 'down', file: 'Seriana_MonteAltinoAbbazia.gpx', link: '2025/01/altino-abbazia', elevation_gain: 56, elevation_loss: 658 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Beio DH, Cene', kind: 'down', file: 'Seriana_MonteBeioDHCene.gpx', link: '2025/02/beio-dh', elevation_gain: 32, elevation_loss: 369 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Monte Bue, Monte Croce, Monte Beio, Cene', kind: 'down', file: 'Seriana_MonteBueCroceBeioCene_EBIKE.gpx', link: '2025/03/bo-croce-beio', elevation_gain: 1089, elevation_loss: 1002 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Pier, Rolling Stones, Val Rossa', kind: 'down', file: 'Seriana_MontePierRollingStonesValRossa.gpx', link: '2025/03/rolling-stones', elevation_gain: 109, elevation_loss: 757 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Pier, Bretei Peia, Monte Beio', kind: 'down', file: 'Seriana_MontePierBreteiPeiaSanRoccoCavalliCene.gpx', link: '2025/03/bretei-cavalli', elevation_gain: 177, elevation_loss: 813 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Morosini, Ripetitori, Monte Misma', kind: 'up', file: 'Seriana_SalitaMismaRipetitori_EBIKE.gpx', link: '2021/04/misma-santa-maria-cenate-sopra', elevation_gain: 839, elevation_loss: 13 },
/*
removed as not significative
Con una MTB conviene fare la salita alternativa, che passa da Fiobbio, e prosegue per il 511, pedalabile fino all'incrocio con il sentiero per la Santa Maria di Misma. Da qui occorre spingere o spallare per 200 metri di dislivello.
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Morosini, 511, Monte Misma', kind: 'up', file: 'Seriana_SalitaMisma511.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 936, elevation_loss: 108 },
*/
{ vote: 0, rate: 0, rate_max: 0, cycle: 6, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Forcella, Monte Misma', kind: 'up', file: 'Seriana_SalitaForcellaMisma_EBIKE.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 886, elevation_loss: 40 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Forcella, Ripetitori, Monte Misma', kind: 'up', file: 'Seriana_SalitaForcellaRipetitoriMisma_EBIKE.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 873, elevation_loss: 55 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Salita al Monte Bastia', kind: 'up', file: 'Seriana_SalitaBastia_EBIKE.gpx', link: '2021/04/scanzorosciate', elevation_gain: 198, elevation_loss: 50 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Salita alla Forcella del Cagnolo, Moette', kind: 'up', file: 'Seriana_SalitaCagnoloMoette_EBIKE.gpx', link: '2021/04/scanzorosciate', elevation_gain: 183, elevation_loss: 49 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Salita alla Via Pomarolo', kind: 'up', file: 'Seriana_SalitaPomarolo_EBIKE.gpx', link: '2021/04/scanzorosciate', elevation_gain: 177, elevation_loss: 7 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita alla Val Coler', kind: 'up', file: 'Seriana_SalitaTribulinaColer_EBIKE.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 334, elevation_loss: 28 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Cornale, Pradale', kind: 'up', file: 'Seriana_SalitaCornalePradale_EBIKE.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 381, elevation_loss: 51 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Cene, Monte Altino', kind: 'up', file: 'Seriana_SalitaCeneMonteAltino_EBIKE.gpx', link: '2024/11/altino', elevation_gain: 706, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Cene, Santuario di Altino, Periplo e cima Monte Altino', kind: 'up', file: 'Seriana_SalitaCenePeriploCimaMonteAltino_EBIKE.gpx', link: '2024/12/altino-dossello', elevation_gain: 787, elevation_loss: 147 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Abbazia, Prati Moletti, Santuario di Altino, Monte Altino', kind: 'up', file: 'Seriana_AbbaziaMolettiMonteAltino_EBIKE.gpx', link: '2025/01/altino-abbazia', elevation_gain: 722, elevation_loss: 36 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Cene, Monte Beio', kind: 'up', file: 'Seriana_SalitaCeneMonteBeio_EBIKE.gpx', link: '2025/02/beio-dh', elevation_gain: 411, elevation_loss: 55 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Cene, Monte Bue, Monte Croce, Monte Pier', kind: 'up', file: 'Seriana_SalitaCeneMonteBueCrocePier_EBIKE.gpx', elevation_gain: 829, elevation_loss: 166 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Ganda al Monte Poieto', kind: 'up', file: 'Seriana_SalitaGandaPoieto.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 293, elevation_loss: 11 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Nembro, Salmezza', kind: 'up', file: 'Seriana_SalitaNembroSalmezza_EBIKE.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 780, elevation_loss: 9 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Nembro, Selvino, Pista da Sci', kind: 'up', file: 'Seriana_SalitaNembroSelvinoPista_EBIKE.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 655, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Cene, Santuario di Altino, Monte Altino', kind: 'up', file: 'Seriana_SalitaCeneSantuarioMonteAltino_EBIKE.gpx', link: '2024/11/altino-canfer', elevation_gain: 700, elevation_loss: 0 },

//
// MEDIA SERIANA (oltre Gazzaniga)
//
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Forcella Vaccaro, 240, Parre', kind: 'down', file: 'Seriana_ForcellaVaccaro240Parre.gpx', link: '2021/11/vaccaro-forcella', elevation_gain: 1, elevation_loss: 1084 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Passo di Bliben, 529 Easy, Vertova', kind: 'down', file: 'Seriana_Bliben529EasyVertova.gpx', link: '2021/12/529-easy', elevation_gain: 32, elevation_loss: 914 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Baita Garda, Dasla, 528 Special, Vertova', kind: 'down', file: 'Seriana_GardaDasla528SpecialVertova.gpx', link: '2021/12/528-special', elevation_gain: 40, elevation_loss: 836 },
{ vote: 3, rate: 1, rate_max: 3, cycle: 0, zone: 'media_seriana', name: 'Tisa, 518, Bondo, Ponte Nossa', kind: 'down', file: 'Seriana_Tisa518BondoPonteNossa.gpx', link: '2022/01/monte-tisa-518-bondo', elevation_gain: 22, elevation_loss: 893 },
{ vote: 3, rate: 4, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Passo di Bliben, 529 Hard, Vertova', kind: 'down', file: 'Seriana_Bliben529HardVertova.gpx', link: '2022/01/529-hard', elevation_gain: 16, elevation_loss: 892 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana, 530', name: '530 George', kind: 'down', file: 'Seriana_530George.gpx', link: '2023/03/530-george', elevation_gain: 7, elevation_loss: 774 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana, 530', name: '530 Original', kind: 'down', file: 'Seriana_530Original.gpx', link: '2023/03/530-george', elevation_gain: 7, elevation_loss: 773 },
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'media_seriana', name: 'Cima Vaccaro Freeride', kind: 'down', file: 'Seriana_CimaVaccaroFreeRide.gpx', link: '2023/03/cima-vaccaro-freeride', elevation_gain: 13, elevation_loss: 1352 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana', name: 'Colle di Zambla, Madonna del Frassino', kind: 'down', file: 'Seriana_ColleDiZamblaFrassinoSantuarioSantissimo.gpx', link: '2024/11/frassino', elevation_gain: 171, elevation_loss: 924 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Salita Parre, Rifugio Vaccaro, Forcella', kind: 'up', file: 'Seriana_SalitaParreVaccaroForcella_EBIKE.gpx', link: '2021/11/vaccaro-forcella', elevation_gain: 1209, elevation_loss: 101 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Salita Vertova, Passo di Bliben', kind: 'up', file: 'Seriana_SalitaVertovaDaslaBliben_EBIKE.gpx', link: '2021/12/529-easy', elevation_gain: 913, elevation_loss: 31 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Salita Vertova, Bondo, Cavlera, Baita Garda', kind: 'up', file: 'Seriana_SalitaVertovaBondoCavleraGarda_EBIKE.gpx', link: '2021/12/528-special', elevation_gain: 864, elevation_loss: 74 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 5, zone: 'media_seriana', name: 'Salita Ponte Nossa, Barbata, Cima di Tisa', kind: 'up', file: 'Seriana_SalitaPonteNossaBarbataTisa_EBIKE.gpx', link: '2022/01/monte-tisa-518-bondo', elevation_gain: 910, elevation_loss: 24 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 23, zone: 'media_seriana', name: 'Salita Parre, Cima Vaccaro', kind: 'up', file: 'Seriana_SalitaCimaVaccaro_EBIKE.gpx', link: '2023/03/cima-vaccaro-freeride', elevation_gain: 1368, elevation_loss: 30 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Salita Santuario Santissimo, Colle di Zambla', kind: 'up', file: 'Seriana_SalitaSantuarioSantissimoColleDiZambla_EBIKE.gpx', link: '2024/11/frassino', elevation_gain: 824, elevation_loss: 0 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '530', name: 'Salita Vertova, Rifugio Cavlera', kind: 'up', file: 'Seriana_SalitaVertovaCavlera_EBIKE.gpx', link: '2023/03/530-george', elevation_gain: 773, elevation_loss: 5 },

//
// GANDINO
//
{ vote: 5, rate: 1, rate_max: 3, cycle: 0, zone: 'media_seriana, gandino', name: 'Pizzo Formico, Monte Farno, 543, Casnigo', kind: 'down', file: 'Gandino_FormicoFarno543Casnigo.gpx', link: '2022/01/formico-543-casnigo', elevation_gain: 22, elevation_loss: 1146 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana, gandino', name: 'Pizzo Formico, Rifugio Parafulmine, Groaro, Gandino', kind: 'down', file: 'Gandino_FormicoParafulmineGroaroGandino.gpx', link: '2022/01/pizzo-formico-groaro', elevation_gain: 124, elevation_loss: 1225 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Giro Val Gandino, Rifugio Parafulmine, Malga Lunga, Monte Sparavera', kind: 'down', file: 'Gandino_ParafulmineMalgaLungaSparavera547Gandino.gpx', link: '2022/01/giro-val-gandino', elevation_gain: 278, elevation_loss: 1294 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Monte Sparavera, Leffe', kind: 'down', file: 'Gandino_SparaveraLeffe.gpx', link: '2022/02/leffe-malga-lunga', elevation_gain: 30, elevation_loss: 958 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana, gandino', name: 'Rifugio Parafulmine, Guazza, Monte Farno, Pizzo di Casnigo', kind: 'down', file: 'Gandino_ParafulmineGuazzaFarnoPizzoCasnigo.gpx', elevation_gain: 101, elevation_loss: 1094 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana, gandino', name: 'Monte Farno, Cirano, Barzizza', kind: 'down', file: 'Gandino_MonteFarnoCiranoBarzizza.gpx', elevation_gain: 165, elevation_loss: 830 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: "6 minuti con ultimi 30m dislivello a spinta", zone: 'media_seriana, gandino', name: 'Salita Casnigo, Monte Farno, Pizzo Formico', kind: 'up', file: 'Gandino_SalitaCasnigoFarnoFormico_EBIKE.gpx', link: '2022/01/formico-543-casnigo', elevation_gain: 1146, elevation_loss: 17 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "6 minuti con ultimi 30m dislivello a spinta", zone: 'media_seriana, gandino', name: 'Salita Gandino, Monte Farno, Pizzo Formico', kind: 'up', file: 'Gandino_SalitaGandinoFarnoFormico_EBIKE.gpx', link: '2022/01/pizzo-formico-groaro', elevation_gain: 1110, elevation_loss: 12 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Salita Gandino, Monte Farno, Rifugio Parafulmine', kind: 'up', file: 'Gandino_SalitaGandinoFarnoParafulmine_EBIKE.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 1056, elevation_loss: 38 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Salita Leffe, Malga Lunga, Monte Sparavera', kind: 'up', file: 'Gandino_SalitaLeffeMalgaLungaSparevera_EBIKE.gpx', link: '2022/02/leffe-malga-lunga', elevation_gain: 1058, elevation_loss: 55 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Salita Casnigo, Monte Farno, Pizzo Formico', kind: 'up', file: 'Gandino_SalitaCasnigoErbiaFarnoParafulmine_EBIKE.gpx', elevation_gain: 1163, elevation_loss: 150 },

//
// VALSASSINA
//
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'valsassina', name: 'Arvaggio 2000, Piani di Artavaggio, Vasca, Moggio', kind: 'down', file: 'Valsassina_CazzanigaArtavaggioVascaNeve.gpx', link: '2020/01/artavaggio', elevation_gain: 80, elevation_loss: 1073 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'valsassina', name: 'Salita Moggio, Piani di Artavaggio, Artavaggio 2000', kind: 'up', file: 'Valsassina_MoggioArtavaggioCazzaniga.gpx', link: '2020/01/artavaggio', elevation_gain: 1027, elevation_loss: 33 },

//
// TALEGGIO
//
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'taleggio', name: 'Piani di Artavaggio, Rifugio Gherardi, Ponte Becco', kind: 'down', file: 'Taleggio_ArtavaggioGherardiPonteBecco.gpx', link: '2022/03/artavaggio-gherardi-becco', elevation_gain: 238, elevation_loss: 1284 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'taleggio', name: 'Sella, Corno Zuccone, Reggetto, Sottochiesa', kind: 'down', file: 'Taleggio_SellaZucconeReggettoSottochiesa.gpx', link:'2022/04/corno-zuccone', elevation_gain: 22, elevation_loss: 756 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 3, zone: 'taleggio', name: 'Passo Grialeggio, Baita Canvervo, Cantiglio, Ponte Becco', kind: 'down', file: 'Taleggio_GrialeggioCancervoCantiglioBecco.gpx', link: '2022/05/grialeggio-ponte-becco', elevation_gain: 84, elevation_loss: 1366 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 4, zone: 'taleggio', name: 'Canti, Tre Faggi, Corna Bianca, Peghera', kind: 'down', file: 'Taleggio_CantiTreFaggiCornaBiancaPeghera.gpx', link: '2022/05/canti-tre-faggi-corna-bianca', elevation_gain: 103, elevation_loss: 829 },
{ vote: 2, rate: 2, rate_max: 4, cycle: 0, zone: 'taleggio', name: 'Canti, Peghera', kind: 'down', file: 'Taleggio_CantiPeghera.gpx', link: '2022/08/canti-peghera', elevation_gain: 4, elevation_loss: 713 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'taleggio', name: 'Pizzo Baciamorti, Pizzino, Sottochiesa', kind: 'down', file: 'Taleggio_BaciamortiSottochiesa.gpx', link: '2022/05/baciamorti', elevation_gain: 72, elevation_loss: 1266 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'taleggio', name: 'Piani di Artavaggio, Reggetto, Sottochiesa', kind: 'down', file: 'Taleggio_ArtavaggioReggettoSottochiesa.gpx', link: '2022/09/artavaggio-reggetto', elevation_gain: 33, elevation_loss: 907 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'taleggio', name: 'Pizzo Baciamorti, Bocchetta di Regadur, Ridugio Gherardi, Sottochiesa', kind: 'down', file: 'Taleggio_BaciamortiRegadurGherardiSottochiesa.gpx', link: '2022/09/baciamorti-antiorario', elevation_gain: 90, elevation_loss: 1348 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'taleggio', name: 'Cima di Piazzo, Bocchetta di Regadur, Ridugio Gherardi, Fraggio, Sottochiesa', kind: 'down', file: 'Taleggio_CimaPiazzoNicolaRegadurGherardiFraggioSottochiesa.gpx', link: '2022/10/cima-di-piazzo', elevation_gain: 136, elevation_loss: 1440 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'taleggio', name: 'Rifugio Nicola, Piani di Artavaggio, Corno Zuccone, Fraggio, Pizzino, Sottochiesa', kind: 'down', file: 'Taleggio_NicolaZucconeSudFraggioSottochiesa.gpx', link: '2022/10/corno-zuccone-sud', elevation_gain: 176, elevation_loss: 1296 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'taleggio', name: 'Rifugio Nicola, Piani di Artavaggio, Corno Zuccone, 151B, Reggetto, Pizzino, Sottochiesa', kind: 'down', file: 'Taleggio_NicolaArtavaggioZuccone151BPizzinoSottochiesa.gpx', link: '2022/10/corno-zuccone-151b', elevation_gain: 158, elevation_loss: 1270 },
{ vote: 4, rate: 2, rate_max: 0, cycle: "dipende dalla neve", zone: 'taleggio', name: 'Rifugio Nicola, Piani di Artavaggio, Fraggio, Sottochiesa (INVERNALE)', kind: 'down', file: 'Taleggio_NicolaArtavaggioFraggioSottochiesaInvernale.gpx', link: '2023/01/nicola-neve', elevation_gain: 30, elevation_loss: 1182 },
{ vote: 4, rate: 2, rate_max: 0, cycle: "dipende dalla neve", zone: 'taleggio', name: 'Rifugio Nicola, Piani di Artavaggio, Reggetto, Sottochiesa (INVERNALE)', kind: 'down', file: 'Taleggio_NicolaArtavaggioReggettoSottochiesaInvernale.gpx', link: '2024/02/nicola-reggetto-neve', elevation_gain: 44, elevation_loss: 1164 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'taleggio, brembana', name: 'Salita, Ponte Becco, Sottochiesa, Piani di Artavaggio', kind: 'up', file: 'Taleggio_SalitaBeccoSottochiesaArtavaggio_EBIKE.gpx', link: '2022/03/artavaggio-gherardi-becco', elevation_gain: 1070, elevation_loss: 22 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Fraggio, Reggetto', kind: 'up', file: 'Taleggio_SalitaSottochiesaFraggio155Reggetto_EBIKE.gpx', elevation_gain: 332, elevation_loss: 163 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Reggetto, Avolasio, Sella', kind: 'up', file: 'Taleggio_SalitaSottochiesaReggettoAvolasioSella_EBIKE.gpx', link:'2022/04/corno-zuccone', elevation_gain: 963, elevation_loss: 246 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 5, zone: 'taleggio, brembana', name: 'Salita San Giovanni Bianco, Pianca, Passo Grialeggio', kind: 'up', file: 'Taleggio_SalitaSGBiancoPiancaGrialeggio_EBIKE.gpx', link: '2022/05/grialeggio-ponte-becco', elevation_gain: 1276, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 5, zone: 'taleggio, brembana', name: 'Salita Peghera, Ponte Senesi, Vedeseta, Bocca del Grassello, Canti', kind: 'up', file: 'Taleggio_SalitaPegheraVedesetaCanti_EBIKE.gpx', link: '2022/05/canti-tre-faggi-corna-bianca', elevation_gain: 1075, elevation_loss: 325 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 10, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Piani di Artavaggio, Pizzo Baciamorti', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioBaciamorti_EBIKE.gpx', link: '2022/05/baciamorti', elevation_gain: 1338, elevation_loss: 128 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Rifugio Gherardi, Piani di Artavaggio', kind: 'up', file: 'Taleggio_SalitaSottochiesaGherardiArtavaggio_EBIKE.gpx', link: '2022/09/artavaggio-reggetto', elevation_gain: 1115, elevation_loss: 197 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 18, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Quindicina, Passo e Pizzo Baciamorti', kind: 'up', file: 'Taleggio_SalitaSottochiesaQuindicinaBaciamorti_EBIKE.gpx', link: '2022/09/baciamorti-antiorario', elevation_gain: 1303, elevation_loss: 44 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola, Cima di Piazzo', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicolaCimaPiazzo_EBIKE.gpx', link: '2022/10/cima-di-piazzo', elevation_gain: 1333, elevation_loss: 23 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Culmine di San Pietro, Piani di Artavaggio, Rifugio Nicola (INVERNALE)', kind: 'up', file: 'Taleggio_SalitaSottochiesaSanPietroArtavaggioNicolaInvernale_EBIKE.gpx', link: '2023/01/nicola-neve', elevation_gain: 1331, elevation_loss: 209 },

// overlapping
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: '', name: 'Rifugio Nicola, Bocchetta di Redagur, Rifugio Gherardi, Fraggio, Sottochiesa', kind: 'down', file: 'Taleggio_NicolaGherardiFraggioSottochiesa.gpx', link: '2022/03/nicola-regadur-gherardi', elevation_gain: 154, elevation_loss: 1295 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicola_EBIKE.gpx', link: '2022/03/nicola-regadur-gherardi', elevation_gain: 1141, elevation_loss: 21 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: '', name: 'Piani di Artavaggio, Fraggio, Sottochiesa', kind: 'down', file: 'Taleggio_ArtavaggioFraggioSottochiesa.gpx', link: '2022/04/artagaggio-fraggio', elevation_gain: 77, elevation_loss: 978 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Sottochiesa, Avolasio, Piani di Artavaggio', kind: 'up', file: 'Taleggio_SalitaSottochiesaAvolasioArtavaggio_EBIKE.gpx', link: '2022/04/artagaggio-fraggio', elevation_gain: 1065, elevation_loss: 99 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Sottochiesa, Rifugio Gherardi, Piani di Artavaggio, Rifugio Nicola', kind: 'up', file: 'Taleggio_SalitaSottochiesaGherardiArtavaggioNicola_EBIKE.gpx', link: '2022/10/corno-zuccone-sud', elevation_gain: 1368, elevation_loss: 196 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicola_EBIKE.gpx', link: '2022/10/corno-zuccone-151b', elevation_gain: 1141, elevation_loss: 21 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola (INVERNALE)', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicolaInvernale_EBIKE.gpx', link: '2024/02/nicola-reggetto-neve', elevation_gain: 1193, elevation_loss: 21 },

// trek
{ vote: 5, rate: 0, rate_max: 1, cycle: 0, zone: 'taleggio', name: 'Epic Tour Val Taleggio', kind: 'trek', file: 'Taleggio_AnelloTaleggio_EBIKE.gpx', link: '2024/03/epic-tour-taleggio', elevation_gain: 1831, elevation_loss: 1819 },

//
// BREMBILLA
//
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Tre Faggi, Blello, Brembilla', kind: 'down', file: 'Brembilla_TreFaggiBlelloBrembilla.gpx', link: '2021/07/tre-faggi-blello-brembilla', elevation_gain: 11, elevation_loss: 953 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Piazzacava, Gerosa, Foppa, Brembilla', kind: 'down', file: 'Brembilla_PiazzacavaFoppaBrembilla.gpx', link: '2021/07/piazzacava-gerosa-foppa', elevation_gain: 105, elevation_loss: 808 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Pizzo Cerro, Piane, Brembilla', kind: 'down', file: 'Brembilla_PizzoCerroPianeBrembilla.gpx', link: '2021/07/pizzo-cerro-piane-brembilla', elevation_gain: 18, elevation_loss: 857 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Pizzo Cerro, Fienili, Brembilla', kind: 'down', file: 'Brembilla_PizzoCerroFieniliBrembilla.gpx', link: '2021/08/pizzo-cerro-fienili-brembilla', elevation_gain: 32, elevation_loss: 867 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 3, zone: 'bassa_brembana, brembilla', name: 'Pizzo Cerro, Cavaglia, Brembilla', kind: 'down', file: 'Brembilla_PizzoCerroCavaglia.gpx', link: '2021/07/pizzo-cerro-cavaglia-brembilla', elevation_gain: 37, elevation_loss: 868 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Forcella di Berbenno, Ripe, Brembilla', kind: 'down', file: 'Brembilla_BerbennoRipeBrembilla.gpx', link: '2021/09/ripe', elevation_gain: 2, elevation_loss: 335 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Berbenno CAT, Lera, Brembilla', kind: 'down', file: 'Brembilla_BerbennoLeraBrembilla.gpx', link: '2021/09/lera', elevation_gain: 8, elevation_loss: 335 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Catremerio, Truca, Brembilla', kind: 'down', file: 'Brembana_CatremerioTruca.gpx', link: '2020/11/catremerio-truca-brembilla', elevation_gain: 14, elevation_loss: 587 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Passo Mercante del Ferro, Forcella di Bura, Brembilla', kind: 'down', file: 'Brembana_PassoMercanteDelFerroBuraBrembilla.gpx', link: '2021/08/monte-foldone-e-sornadello', elevation_gain: 27, elevation_loss: 1129 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Corna Marcia, Laxolo, Brembilla', kind: 'down', file: 'Brembilla_CornaMarciaLaxoloBrembilla.gpx', link: '2023/05/corna-marcia-laxolo', elevation_gain: 5, elevation_loss: 647 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Zuccone dell\'Arco, Rifugio GESP, 592A, Brembilla', kind: 'down', file: 'Brembilla_ZucconeArcoGESPSAntonio592ABrembilla.gpx', link: '2024/01/zuccone-arco', elevation_gain: 96, elevation_loss: 914 },
{ vote: 3, rate: 2, rate_max: 4, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Monte Zucco, Pernice, Zogno', kind: 'down', file: 'Brembana_ZuccoPerniceZogno.gpx', link: '2024/03/monte-zucco', elevation_gain: 9, elevation_loss: 909 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 4, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Piazzacava', kind: 'up', file: 'Brembilla_SalitaBrembillaPiazzacava_EBIKE.gpx', link: '2021/07/piazzacava-gerosa-foppa', elevation_gain: 890, elevation_loss: 149 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Tre Faggi', kind: 'up', file: 'Brembilla_SalitaBrembillaTreFaggi_EBIKE.gpx', link: '2021/07/tre-faggi-blello-brembilla', elevation_gain: 993, elevation_loss: 21 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Crosnello, Pizzo Cerro', kind: 'up', file: 'Brembilla_SalitaBrembillaCrosnelloPizzoCerro_EBIKE.gpx', link: '2021/07/pizzo-cerro-piane-brembilla', elevation_gain: 894, elevation_loss: 49 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "35 minuti, 200m dislivello a spinta", zone: 'bassa_brembana, brembilla', name: 'Salita Catremerio, Passo del Mercante del Ferro', kind: 'up', file: 'Brembana_SalitaCatremerioPassoMercanteDelFerro_EBIKE.gpx', link: '2021/08/monte-foldone-e-sornadello', elevation_gain: 1265, elevation_loss: 143 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Berbenno CAT', kind: 'up', file: 'Brembilla_SalitaBrembillaCAT_EBIKE.gpx', link: '2021/09/lera', elevation_gain: 420, elevation_loss: 45 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Forcella di Berbenno', kind: 'up', file: 'Brembilla_SalitaBrembillaForcellaBerbenno_EBIKE.gpx', link: '2021/09/ripe', elevation_gain: 387, elevation_loss: 30 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Castignola, S. Antonio Abbandonato, Strada Taverna, Catremerio', kind: 'up', file: 'Brembilla_SalitaCastignolaSAntonioTavernaCatremerio_EBIKE.gpx', link: '2020/11/catremerio-truca-brembilla', elevation_gain: 693, elevation_loss: 66 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Colle di Berbenno, Corna Marcia', kind: 'up', file: 'Brembilla_SalitaBrembillaCornaMarcia_EBIKE.gpx', link: '2023/05/corna-marcia-laxolo', elevation_gain: 624, elevation_loss: 37 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Catremerio, Zuccone dell\'Arco', kind: 'up', file: 'Brembilla_SalitaBrembillaCatremerioZucconeArco_EBIKE.gpx', link: '2024/01/zuccone-arco', elevation_gain: 990, elevation_loss: 61 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 13, zone: 'bassa_brembana, brembilla', name: 'Salita Zogno, Catremerio, Monte Zucco', kind: 'up', file: 'Brembana_SalitaZognoCatremerioZucco_EBIKE.gpx', link: '2024/03/monte-zucco', elevation_gain: 1114, elevation_loss: 193 },

// replaced
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: '', name: 'Castignola, 592A, Brembilla', kind: 'down', file: 'Brembilla_Castignola592ABrembilla.gpx', elevation_gain: 0, elevation_loss: 561 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: '', name: 'Passo del Canto, Laxolo, Brembilla', kind: 'down', file: 'Brembilla_CantoLaxoloBrembilla.gpx', link: '2021/11/laxolo', elevation_gain: 1, elevation_loss: 461 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita dal Colle di Berbenno al Passo del Canto', kind: 'up', file: 'Brembilla_SalitaColleBerbennoCanto_EBIKE.gpx', link: '2021/11/laxolo', elevation_gain: 137, elevation_loss: 8 },

//
// BASSA BREMBANA
//
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'S. Antonio Abbandonato, Casarielli, Zogno', kind: 'down', file: 'Brembana_SAntonioCasarielli.gpx', link: '2020/07/casarielli', elevation_gain: 12, elevation_loss: 674 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'S. Antonio Abbandonato, Strada Taverna, Ponti', kind: 'down', file: 'Brembana_SAntonioTaverna.gpx', link: '2020/07/strada-taverna', elevation_gain: 6, elevation_loss: 669 },
{ vote: 2, rate: 2, rate_max: 4, cycle: 0, zone: 'bassa_brembana', name: 'Ca del C\u00E8co, Sonzogno, Pernice, Zogno', kind: 'down', file: 'Brembana_CecoSonzognoPerniceZogno.gpx', link: '2021/06/ceco-sonzogno-pernice', elevation_gain: 31, elevation_loss: 790 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: '505A, Zogno', kind: 'down', file: 'Brembana_505AZogno.gpx', link: '2021/06/ceco-sonzogno-pernice', elevation_gain: 0, elevation_loss: 387 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Crosnello, Sussia, Vettarola', kind: 'down', file: 'Brembana_CrosnelloSussiaVettarola.gpx', link: '2020/08/crosnello-sussia-vettarola-san', elevation_gain: 107, elevation_loss: 854 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Pizzo di Spino, San Pellegrino', kind: 'down', file: 'Brembana_PizzoSpinoSanPellegrino.gpx', link: '2020/11/pizzo-spino', elevation_gain: 59, elevation_loss: 668 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Forcella di Spettino, Molini, San Gallo, San Pellegrino', kind: 'down', file: 'Brembana_ForcellaSpettinoMoliniSanGallo.gpx', link: '2021/02/forcella-di-spettino-molini', elevation_gain: 205, elevation_loss: 890 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 1, zone: 'bassa_brembana', name: 'Periplo del Monte Gioco', kind: 'down', file: 'Brembana_PeriploMonteGioco_EBIKE.gpx', link: '2021/02/periplo-monte-gioco', elevation_gain: 477, elevation_loss: 1017 },
{ vote: 5, rate: 4, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Valcumina', kind: 'down', file: 'Brembana_Valcumina.gpx', link: '2021/05/valcumina', elevation_gain: 4, elevation_loss: 625 },
{ vote: 1, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana, frasnito', name: 'Sussia Alta, Frasnito, San Pellegrino', kind: 'down', file: 'Brembana_SussiaFrasnito.gpx', link: '2021/03/sussia-frasnito', elevation_gain: 12, elevation_loss: 701 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, frasnito', name: 'Vetta, Frasnito', kind: 'down', file: 'Brembana_VettaFrasnito.gpx', link: '2021/03/sussia-frasnito', elevation_gain: 0, elevation_loss: 128 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Monte Molinasco, San Giovanni Bianco', kind: 'down', file: 'Brembana_MolinascoSanGiovanniBianco.gpx', link: '2021/03/monte-molinasco', elevation_gain: 61, elevation_loss: 819 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana, pradai', name: 'Panchina Gigante, Pradai, Frasnadello', kind: 'down', file: 'Brembana_PanchinaGigantePradaiFrasnadello.gpx', link: '2021/06/panchina-gigante-pradai-frasnadello', elevation_gain: 323, elevation_loss: 1010 },
{ vote: 2, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana, pradai', name: 'Campel, Cresta, Frasnadello', kind: 'down', file: 'Brembana_CampelCrestaFrasnadello.gpx', link: '2021/06/panchina-gigante-pradai-frasnadello', elevation_gain: 45, elevation_loss: 207 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Monte Vaccareggio, Camerata Cornello', kind: 'down', file: 'Brembana_VaccareggioCamerataCornello.gpx', link: '2023/08/vaccareggio', elevation_gain: 80, elevation_loss: 1078 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Monte Vaccareggio, San Pietro, San Giovanni Bianco', kind: 'down', file: 'Brembana_VaccareggioSanPietroSanGiovanniBianco.gpx', link: '2023/10/vaccareggio-bianco', elevation_gain: 63, elevation_loss: 1088 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Monte Vaccareggio, S.S. Trinit\u00E0, San Giovanni Bianco', kind: 'down', file: 'Brembana_VaccareggioTrinitaSanGiovanniBianco.gpx', link: '2023/11/vaccareggio-trinita', elevation_gain: 82, elevation_loss: 1133 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 3, zone: 'bassa_brembana', name: 'Monte Castello, Mosche, Ambria, Zogno', kind: 'down', file: 'Brembana_MonteCastelloMoscheZogno.gpx', link: '2023/11/castello-mosche', elevation_gain: 160, elevation_loss: 934 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Monte Castello, Passata, Endenna, Zogno', kind: 'down', file: 'Brembana_MonteCastelloPassataEndennaZogno.gpx', link: '2023/11/giro-castello', elevation_gain: 73, elevation_loss: 848 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Monte Castello, Val Pagana, Strada Birocciabile', kind: 'down', file: 'Brembana_MonteCastelloValPaganaBirocciabile.gpx', link: '2023/11/pagana-birocciabile', elevation_gain: 80, elevation_loss: 840 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Stalla Fopp, Poscante, Zogno', kind: 'down', file: 'Brembana_StallaFoppPoscante.gpx', link: '2024/04/poscante-back', elevation_gain: 70, elevation_loss: 910 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Canto Basso, Poscante, Zogno', kind: 'down', file: 'Brembana_CantoBassoPoscanteZogno.gpx', link: '2024/05/canto-basso-poscante', elevation_gain: 61, elevation_loss: 614 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 5, zone: 'bassa_brembana', name: 'Canto Alto, 507A, Zogno', kind: 'down', file: 'Brembana_CantoAlto507AZogno.gpx', link: '2024/06/canto-alto-507a', elevation_gain: 10, elevation_loss: 788 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Pizzo di Spino, Pregaroldi, Ambria', kind: 'down', file: 'Brembana_PizzoSpinoPregaroldiAmbria.gpx', link: '2024/06/spino-ambria', elevation_gain: 38, elevation_loss: 637 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Pizzo Grande, Bocchetta Ronco, San Giovanni Bianco', kind: 'down', file: 'Brembana_PizzoGrandeBocchettaRoncoSanGiovanniBianco.gpx', link: '2024/07/pizzo-grande', elevation_gain: 50, elevation_loss: 1156 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Pizzo Rabbioso, Pagliaro, Algua', kind: 'down', file: 'Brembana_PizzoRabbiosoPagliaroAlgua.gpx', link: '2024/07/rabbioso', elevation_gain: 10, elevation_loss: 700 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 5, zone: 'bassa_brembana', name: 'Monte Sornadello, Monte Foldone, Bocchetta Ronco, CinguaDH', kind: 'down', file: 'Brembana_SornadelloFoldoneBocchettaRoncoCinguaDH.gpx', link: '2024/08/sornadello', elevation_gain: 130, elevation_loss: 1201 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Era, Pianca, Cornello Dei Tasso', kind: 'down', file: 'Brembana_EraPiancaCornelloDeiTasso.gpx', link: '2025/06/era-pianca', elevation_gain: 308, elevation_loss: 881 },

// trek
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_brembana', name: 'Vie del Passato', kind: 'trek', file: 'Brembana_VieDelPassato.gpx', link: '2023/08/passato', elevation_gain: 1141, elevation_loss: 1111 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'bassa_brembana', name: 'Salita da S. Antonio Abbandonato a Ca del C\u00E8co', kind: 'up', file: 'Brembana_SalitaSantAntonioCeco_EBIKE.gpx', link: '2021/06/ceco-sonzogno-pernice', elevation_gain: 145, elevation_loss: 20 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, pradai', name: 'Salita da Spettino alla Panchina Gigante', kind: 'up', file: 'Brembana_SalitaSpettinoPanchinaGigante_EBIKE.gpx', link: '2021/06/panchina-gigante-pradai-frasnadello', elevation_gain: 232, elevation_loss: 38 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita da Zogno a S. Antonio Abbandonato', kind: 'up', file: 'Brembana_SalitaZognoSAntonio_EBIKE.gpx', link: '2020/07/casarielli', elevation_gain: 652, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 8, zone: 'bassa_brembana', name: 'Salita da San Pellegrino al Pizzo di Spino', kind: 'up', file: 'Brembana_SalitaSantaCrocePizzoSpino_EBIKE.gpx', link: '2020/11/pizzo-spino', elevation_gain: 738, elevation_loss: 161 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 5, zone: 'bassa_brembana', name: 'Salita Ambria, Frerola, Pizzo di Spino', kind: 'up', file: 'Brembana_SalitaAmbriaPizzoSpino_EBIKE.gpx', link: '2024/06/spino-ambria', elevation_gain: 910, elevation_loss: 295 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita da San Pellegrino alla Forcella di Spettino', kind: 'up', file: 'Brembana_SalitaForcellaSpettino_EBIKE.gpx', link: '2021/02/forcella-di-spettino-molini', elevation_gain: 728, elevation_loss: 10 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, frasnito', name: 'Salita da San Pellegrino a Frasnito e Sussia', kind: 'up', file: 'Brembana_SalitaFrasnitoSussia_EBIKE.gpx', link: '2021/03/sussia-frasnito', elevation_gain: 710, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_brembana', name: 'Salita da San Giovanni Bianco al Monte Molinasco', kind: 'up', file: 'Brembana_SalitaMolinasco_EBIKE.gpx', link: '2021/03/monte-molinasco', elevation_gain: 776, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'bassa_brembana', name: 'Salita Camerata Cornello, Monte Vaccareggio', kind: 'up', file: 'Brembana_SalitaCamerataCornelloVaccareggio_EBIKE.gpx', link: '2023/08/vaccareggio', elevation_gain: 1083, elevation_loss: 61 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'bassa_brembana', name: 'Salita San Giovanni Bianco, S. S. Trinit\u00E0, Monte Vaccareggio', kind: 'up', file: 'Brembana_SalitaSanGiovanniBiancoVaccareggio_EBIKE.gpx', link: '2023/10/vaccareggio-bianco', elevation_gain: 1122, elevation_loss: 74 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita da Zogno al Monte Castello diretta', kind: 'up', file: 'Brembana_SalitaZognoMonteCastello_EBIKE.gpx', link: '2023/11/castello-mosche', elevation_gain: 733, elevation_loss: 14 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita da Zogno al Monte Castello con periplo', kind: 'up', file: 'Brembana_SalitaZognoGiroMonteCastello_EBIKE.gpx', link: '2023/11/giro-castello', elevation_gain: 905, elevation_loss: 125 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita Zogno, Valico di Salmezza, Stalla Fopp', kind: 'up', file: 'Brembana_SalitaZognoStallaFopp_EBIKE.gpx', link: '2024/04/poscante-back', elevation_gain: 897, elevation_loss: 43 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita Zogno, Valico di Salmezza, Stalla Fopp', kind: 'up', file: 'Brembana_SalitaZognoPoscanteCantoBasso_EBIKE.gpx', link: '2024/05/canto-basso-poscante', elevation_gain: 652, elevation_loss: 54 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita Zogno, Prati Parini, Canto Alto', kind: 'up', file: 'Brembana_SalitaZognoPariniCantoAlto_EBIKE.gpx', link: '2024/06/canto-alto-507a', elevation_gain: 885, elevation_loss: 84 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'bassa_brembana', name: 'Salita San Giovanni Bianco. Bocchetta Roco, Pizzo Grande', kind: 'up', file: 'Brembana_SalitaSanGiovanniBiancoBocchettaRoncoPizzoGrande_EBIKE.gpx', link: '2024/07/pizzo-grande', elevation_gain: 1210, elevation_loss: 36 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'bassa_brembana', name: 'Salita Algua, Bracca, Frerola, Pizzo Rabbioso', kind: 'up', file: 'Brembana_SalitaAlguaPizzoRabbioso_EBIKE.gpx', link: '2024/07/rabbioso', elevation_gain: 782, elevation_loss: 68 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'bassa_brembana', name: 'Salita San Giovanni Bianco. Bocchetta Roco, Passo Mercante del Ferro, Monte Sornadello', kind: 'up', file: 'Brembana_SalitaSanGiovanniBiancoPassoMercanteFerroSornadello_EBIKE.gpx', link: '2024/08/sornadello', elevation_gain: 1155, elevation_loss: 70 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita Camerata Cornello, Era', kind: 'up', file: 'Brembana_SalitaCamerataCornelloEra_EBIKE.gpx', link: '2025/06/era-pianca', elevation_gain: 637, elevation_loss: 3 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: '', name: 'Salita da Salvarizza alla Forcella della Valcumina', kind: 'up', file: 'Brembana_SalvarizzaForcellaValcumina_EBIKE.gpx', link: '2021/05/valcumina', elevation_gain: 772, elevation_loss: 115 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da San Pellegrino a Salvarizza', kind: 'up', file: 'Brembana_SalitaSalvarizza_EBIKE.gpx', link: '2021/02/periplo-monte-gioco', elevation_gain: 666, elevation_loss: 0 },

// replaced
{ vote: 2, rate: 3, rate_max: 0, cycle: 3, zone: '', name: 'Monte Castello, Algua, Zogno', kind: 'down', file: 'Brembana_MonteCastelloAlguaZogno.gpx', link: '2021/06/monte-castello', elevation_gain: 359, elevation_loss: 1099 },

//
// SERINA
//
{ vote: 5, rate: 2, rate_max: 3, cycle: 1, zone: 'serina, brembana', name: 'Cima di Grem, Cresta, Zambla Alta', kind: 'down', file: 'Serina_CimaGremCrestaZambla.gpx', link: '2022/11/cima-di-grem', elevation_gain: 54, elevation_loss: 877 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 4, zone: 'serina, brembana', name: 'Capanna 2000, Sentiero dei Fiori, Val Vedra', kind: 'down', file: 'Serina_Capanna2000VedraOltreIlColle.gpx', link: '2022/11/val-vedra', elevation_gain: 357, elevation_loss: 1291 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'serina, brembana', name: 'Zambla, Oltre il Colle, Serina', kind: 'down', file: 'Serina_ZamblaAltaOltreIlColleSerina.gpx', link: '2023/06/anello-serina-zambla', elevation_gain: 456, elevation_loss: 968 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 3, zone: 'serina, brembana', name: 'Anello Serina, Corone, Cornalba, Serina', kind: 'down', file: 'Serina_AnelloSerinaCoroneCornalbaErasmo_EBIKE.gpx', link: '2023/06/anello-serina-erasmo', elevation_gain: 1078, elevation_loss: 1048 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Monte Vaccareggio, Via Mercatorum, Serina', kind: 'down', file: 'Serina_VaccareggioMercatorumSerina.gpx', link: '2023/06/vaccareggio', elevation_gain: 89, elevation_loss: 793 },
{ vote: 4, rate: 4, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Rifugio Monte Alben, Sentiero Tre Valloni', kind: 'down', file: 'Serina_RifugioAlbenTreValloniBagnella.gpx', link: '2023/07/alben-tre-valloni', elevation_gain: 70, elevation_loss: 938 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 1, zone: 'serina, brembana', name: 'Rifugio Monte Alben, Sentiero Panoramico', kind: 'down', file: 'Serina_RifugioAlbenPanoramicoCornalbaBolzagna.gpx', link: '2023/06/alben-panoramico', elevation_gain: 23, elevation_loss: 866 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: 'serina, brembana', name: 'Monte Suchello, Passo Barbata, Val del Ferro, Ambriola', kind: 'down', file: 'Serina_SuchelloBarbataFerroAmbriola.gpx', link: '2023/07/suchello', elevation_gain: 139, elevation_loss: 1111 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 1, zone: 'serina, brembana', name: 'Monte Vaccareggio, Valpiana, Serina', kind: 'down', file: 'Serina_VaccareggioValpianaSerina.gpx', link: '2023/07/vaccareggio-valpiana', elevation_gain: 133, elevation_loss: 827 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 3, zone: 'serina, brembana', name: 'Bocchetta di Grem, Bivacco Telini, Rifugio Grem, Zambla Alta', kind: 'down', file: 'Serina_BocchettaGremTeliniZambla.gpx', link: '2023/07/telini', elevation_gain: 199, elevation_loss: 959 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'serina, brembana', name: 'Forcellino, Trafficanti, Via Mercatorum, Algua', kind: 'down', file: 'Serina_ForcellinoTrafficantiMercatorumAlgua.gpx', link: '2023/10/trafficanti-mercatorum', elevation_gain: 53, elevation_loss: 841 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Valico di Salmezza, Perello, Rigosa', kind: 'down', file: 'Serina_ValicoSalmezzaPerelloRigosa.gpx', link: '2023/12/perello', elevation_gain: 61, elevation_loss: 511 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Monte Castello, Sambusita, Molino', kind: 'down', file: 'Serina_MonteCastelloSambusitaMolino.gpx', link: '2024/08/sambusita', elevation_gain: 7, elevation_loss: 501 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 1, zone: 'serina, brembana', name: 'Capanna 2000, Zambla Alta', kind: 'down', file: 'Serina_Capanna2000Zambla.gpx', link: '2024/09/capana-2000-zambla', elevation_gain: 95, elevation_loss: 818 },
{ vote: 5, rate: 3, rate_max: 3, cycle: 0, zone: 'serina, brembana', name: 'Capanna 2000, Cattedrale Vegetale, Oltre il colle', kind: 'down', file: 'Serina_Capanna2000CattedraleVegetaleOltreIlColle.gpx', link: '2024/09/capanna-2000-oltreilcolle', elevation_gain: 204, elevation_loss: 1119 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 2, zone: 'serina, brembana', name: 'Baita Zuccone, Plassa, Oltre il colle', kind: 'down', file: 'Serina_BaitaZucconePlassaOltreIlColle.gpx', link: '2024/11/zuccone-plassa', elevation_gain: 214, elevation_loss: 970 },
{ vote: 2, rate: 3, rate_max: 4, cycle: 2, zone: 'serina, brembana', name: 'Capanna 2000, Val Vedra (fondovalle), Oltre il colle', kind: 'down', file: 'Serina_Capanna2000ValVedraFondovalle.gpx', elevation_gain: 284, elevation_loss: 1205 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 12, zone: 'serina, brembana', name: 'Salita Zambla Alta, Plassa, Capanna 2000, Cima di Grem', kind: 'up', file: 'Serina_SalitaZamblaPlassaCapanna200CimaGrem_EBIKE.gpx', link: '2022/11/cima-di-grem', elevation_gain: 1178, elevation_loss: 353 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Salita Oltre il Colle, Capanna 2000', kind: 'up', file: 'Serina_SalitaOltreIlColleCapanna2000_EBIKE.gpx', link: '2022/11/val-vedra', elevation_gain: 1035, elevation_loss: 89 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Salita Serina, Conca d\'Alben, Zambla', kind: 'up', file: 'Serina_SalitaSerinaConcaAlbenZambla_EBIKE.gpx', link: '2023/06/anello-serina-zambla', elevation_gain: 700, elevation_loss: 169 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'serina, brembana', name: 'Salita Serina, Valpiana, Monte Vaccareggio', kind: 'up', file: 'Serina_SalitaSerinaValpianaVaccareggio_EBIKE.gpx', link: '2023/06/vaccareggio', elevation_gain: 852, elevation_loss: 124 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 24, zone: 'serina, brembana', name: 'Salita Serina, Valpiana, Passo Sappl\u00EC, Rifugio Monte Alben', kind: 'up', file: 'Serina_SalitaValpianaSappliRifugioAlben-EBIKE.gpx', link: '2023/07/alben-tre-valloni', elevation_gain: 1024, elevation_loss: 116 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 11, zone: 'serina, brembana', name: 'Salita Serina, Cornalba, Sentiero Panoramico, Rifugio Monte Alben', kind: 'up', file: 'Serina_SalitaBagnellaCornalbaPanoramicoRifugioAlben-EBIKE.gpx', link: '2023/06/alben-panoramico', elevation_gain: 916, elevation_loss: 47 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 7, zone: 'serina, brembana', name: 'Salita Ambriola, Tassone, Monte Suchello', kind: 'up', file: 'Serina_AmbriolaSuchello_EBIKE.gpx', link: '2023/07/suchello', elevation_gain: 1052, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'serina, brembana', name: 'Salita Serina, Via Mercatorum, Monte Vaccareggio', kind: 'up', file: 'Serina_SalitaSerinaMercatorumVaccareggio_EBIKE.gpx', link: '2023/07/vaccareggio-valpiana', elevation_gain: 833, elevation_loss: 80 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 4, zone: 'serina, brembana', name: 'Salita Zambla Alta, Plassa, Bocchetta di Grem', kind: 'up', file: 'Serina_SalitaZamblaPlassaBocchettaGrem_EBIKE.gpx', link: '2023/07/telini', elevation_gain: 978, elevation_loss: 208 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'serina, brembana', name: 'Salita Algua, Ambriola, Via Mercatorum, Aviatico, Forca di Aviatico, Forcellino', kind: 'up', file: 'Serina_SalitaAlguaMercatorumAviaticoForcellino_EBIKE.gpx', link: '2023/10/trafficanti-mercatorum', elevation_gain: 884, elevation_loss: 92 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Salita Rigosa, Molino, Monte Castello, Valico di Salmezza', kind: 'up', file: 'Serina_SalitaRigosaMonteCastelloValicoSalmezza_EBIKE.gpx', link: '2023/12/perello', elevation_gain: 720, elevation_loss: 265 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Salita Molino, Rigosa, Selvino, Perello, Monte Castello', kind: 'up', file: 'Serina_SalitaMolinoPerelloMonteCastello_EBIKE.gpx', link: '2024/08/sambusita', elevation_gain: 715, elevation_loss: 190 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Salita Oltre il Colle, Plassa, Baita Zuccone', kind: 'up', file: 'Serina_SalitaOltreIlCollePlassaBaitaZuccone_EBIKE.gpx', link: '2024/11/zuccone-plassa', elevation_gain: 933, elevation_loss: 113 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Zambla Alta, Plassa, Capanna 2000', kind: 'up', file: 'Serina_SalitaZamblaCapanna2000_EBIKE.gpx', link: '2024/09/capana-2000-zambla', elevation_gain: 883, elevation_loss: 98 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Oltre il Colle, Zambla Bassa, Plassa, Capanna 2000', kind: 'up', file: 'Serina_SalitaOltreIlColleZamblaBassaCapanna2000_EBIKE.gpx', link: '2024/09/capanna-2000-oltreilcolle', elevation_gain: 1082, elevation_loss: 156 },

//
// ALTA BREMBANA
//
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Terza dell\'Avaro', kind: 'down', file: 'Brembana_AvaroTerza.gpx', link: '2020/08/terza-avaro', elevation_gain: 118, elevation_loss: 1212 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Piani dell\' Avaro, Monte Disner', kind: 'down', file: 'Brembana_AvaroDisner.gpx', link: '2021/09/avaro-disner', elevation_gain: 76, elevation_loss: 1193 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Monte Torcola, Piazza Brembana', kind: 'down', file: 'Brembana_TorcolaPiazzaBrembana.gpx', link: '2020/09/monte-torcola-piazza-brembana', elevation_gain: 20, elevation_loss: 1193 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Monte Torcola, Bolli Arancio, Piazzolo', kind: 'down', file: 'Brembana_TorcolaBolliArancioPiazzolo.gpx', link: '2020/09/rifugio-torcole-bolli-arancio-piazzolo', elevation_gain: 20, elevation_loss: 1162 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Passo San Marco, 113, via del Ferro', kind: 'down', file: 'Brembana_SanMarco113Ferro.gpx', link: '2020/09/passo-san-marco-113-via-del-ferro', elevation_gain: 110, elevation_loss: 1481 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Val Terzera, Piazzatorre', kind: 'down', file: 'Brembana_TerzeraPiazzatorre.gpx', link: '2023/08/terzera', elevation_gain: 112, elevation_loss: 974 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Baita Campo, 127, Olmo al Brembo', kind: 'down', file: 'Brembana_BaitaCampoOlmo.gpx', link: '2020/09/baita-campo-olmo-al-brembo', elevation_gain: 40, elevation_loss: 909 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'alta_brembana', name: 'Enzo Ronzoni (Ornica, Caprile)', kind: 'down', file: 'Brembana_EnzoRonzoni.gpx', link: '2021/10/enzo-ronzoni', elevation_gain: 1001, elevation_loss: 1002 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 0, zone: 'alta_brembana', name: 'Pizzo Badile, Piazzatorre', kind: 'down', file: 'Brembana_PizzoBadilePiazzatorre.gpx', link: '2021/08/pizzo-badile', elevation_gain: 31, elevation_loss: 1100 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Monte Mincucco, Diga di Valmora, Cantedoldo, Averara', kind: 'down', file: 'Brembana_MincuccoDigaValMoraCantedoldoAverara.gpx', link: '2022/07/mincuccocantedoldo', elevation_gain: 251, elevation_loss: 1570 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Laghetti di Ponteranica, Diga di Valmora, Caprile, Santa Brigida', kind: 'down', file: 'Brembana_PonteranicaDigaValmoraCaprileSantaBrigida.gpx', link: '2022/07/ponteranica-valmora', elevation_gain: 66, elevation_loss: 1348 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Piani dell\'Avaro, Corna Rossa', kind: 'down', file: 'Brembana_AvaroCornaRossa.gpx', link: '2021/11/corna-rossa', elevation_gain: 107, elevation_loss: 1240 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 1, zone: 'alta_brembana', name: 'Valle d\'Inferno', kind: 'down', file: 'Brembana_ValInferno.gpx', link: '2021/10/val-dinferno', elevation_gain: 770, elevation_loss: 1147 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 18, zone: 'alta_brembana', name: 'Passo Selletta, Rifugio Calvi, Sentiero Estivo, Carona', kind: 'down', file: 'Brembana_SellettaCalviEstivoCarona.gpx', link: '2022/07/selletta-calvi-estivo', elevation_gain: 194, elevation_loss: 1476 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 1, zone: 'alta_brembana', name: 'Cima di Lemma, Passo Tartano, Prato Marino, Valleve', kind: 'down', file: 'Brembana_CimaLemmaPassoTartanoPratoMarinoValleve.gpx', link: '2022/07/cima-lemma-tartano', elevation_gain: 19, elevation_loss: 1198 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 2, zone: 'alta_brembana', name: 'Cresta Monte Chierico, Val Sambuzza, Carona', kind: 'down', file: 'Brembana_ChiericoSambuzzaCarona.gpx', link: '2022/07/carisole-sambuzza', elevation_gain: 14, elevation_loss: 1014 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 2, zone: 'alta_brembana', name: 'Cima Montebello, Passo Dordona, Valleve', kind: 'down', file: 'Brembana_CimaMontebelloPassoDordonaValleve.gpx', link: '2022/08/valcervia-dordona', elevation_gain: 92, elevation_loss: 1299 },
{ vote: 5, rate: 4, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Lago Colombo, 212, Branzi', kind: 'down', file: 'Brembana_Colombo212Branzi.gpx', link: '2022/08/colombo-212', elevation_gain: 17, elevation_loss: 1192 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Cima Montebello, Lago Moro, Rifugio Mirtillo, Carona', kind: 'down', file: 'Brembana_CimaMontebelloLagoMoroMirtilloCarona.gpx', link: '2022/08/lago-moro', elevation_gain: 96, elevation_loss: 1361 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'alta_brembana', name: 'Porta delle Cornacchie, Piccarelli, Lenna', kind: 'down', file: 'Brembana_CornacchiePiccarelliLenna.gpx', link: '2022/09/cornacchie', elevation_gain: 58, elevation_loss: 752 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Baite di Mezzeno, Passo del Vendulo, Piccarelli, Lenna', kind: 'down', file: 'Brembana_MezzenoVenduloPiccarelliLenna.gpx', link: '2022/09/mezzeno', elevation_gain: 105, elevation_loss: 1185 },
{ vote: 1, rate: 3, rate_max: 5, cycle: 10, zone: 'alta_brembana', name: 'Monte Torcola, 126, Moio de Calvi', kind: 'down', file: 'Brembana_Torcola126Moio.gpx', link: '2021/11/monte-torcola-126-moio-de-calvi', elevation_gain: 4, elevation_loss: 1217 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Passo San Marco, Via Priula', kind: 'down', file: 'Brembana_SanMarcoViaPriula.gpx', link: '2021/11/via-priula', elevation_gain: 5, elevation_loss: 1187 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Monte Torcola, Piazzolo, Piazzatorre', kind: 'down', file: 'Brembana_TolcolaPiazzoloPiazzatorre.gpx', link: '2023/08/piazzolo', elevation_gain: 314, elevation_loss: 1246 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Forcolino di Torcola, Branzi, Moio de Calvi', kind: 'down', file: 'Brembana_ForcolinoBranziMoio.gpx', link: '2023/10/forcolino', elevation_gain: 13, elevation_loss: 1231 },
{ vote: 3, rate: 2, rate_max: 5, cycle: 5, zone: 'alta_brembana', name: '125, Pusdosso, Moio de Calvi', kind: 'down', file: 'Brembana_125PusdossoMoio.gpx', link: '2023/10/pusdosso', elevation_gain: 4, elevation_loss: 1083 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita da Piazza Brembana al Monte Torcola', kind: 'up', file: 'Brembana_SalitaPiazzaBrembanaTorcola_EBIKE.gpx', link: '2020/09/monte-torcola-piazza-brembana', elevation_gain: 1231, elevation_loss: 30 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita da Olmo al Brembo al Passo San Marco', kind: 'up', file: 'Brembana_SalitaOlmoSanMarco_EBIKE.gpx', link: '2020/09/passo-san-marco-113-via-del-ferro', elevation_gain: 1367, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita da Olmo al Brembo al Monte Torcola', kind: 'up', file: 'Brembana_SalitaOlmoPiazzatorreTorcola_EBIKE.gpx', link: '2020/09/rifugio-torcole-bolli-arancio-piazzolo', elevation_gain: 1165, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita alla Baita Campo', kind: 'up', file: 'Brembana_SalitaBaitaCampo_EBIKE.gpx', link: '2020/09/baita-campo-olmo-al-brembo', elevation_gain: 963, elevation_loss: 4 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita Piazzatorre, Via Priula, Val Terzera', kind: 'up', file: 'Brembana_SalitaPiazzatorePriulaTerzera_EBIKE.gpx', link: '2023/08/terzera', elevation_gain: 1072, elevation_loss: 202 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 4, zone: 'alta_brembana', name: 'Salita Piazzatorre, Forcolino, Pizzo Badile', kind: 'up', file: 'Brembana_SalitaPiazzatorreForcolinoPizzoBadile_EBIKE.gpx', link: '2021/08/pizzo-badile', elevation_gain: 1323, elevation_loss: 190 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 8, zone: 'alta_brembana', name: 'Salita Averara, Piani dell\'Avaro, Monte Mincucco', kind: 'up', file: 'Brembana_SalitaAveraraAvaroMincucco_EBIKE.gpx', link: '2022/07/mincuccocantedoldo', elevation_gain: 1447, elevation_loss: 92 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 6, zone: 'alta_brembana', name: 'Salita Santa Brigida, Piani dell\'Avaro, Monte Mincucco', kind: 'up', file: 'Brembana_SalitaSantaBrigidaAvaroPonteranica_EBIKE.gpx', link: '2022/07/ponteranica-valmora', elevation_gain: 1416, elevation_loss: 44 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita Mezzoldo, Via Priula, Passo San Marco', kind: 'up', file: 'Brembana_SalitaViaPriulaSanMarco_EBIKE.gpx', link: '2021/11/via-priula', elevation_gain: 1205, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 34, zone: 'alta_brembana', name: 'Salita Carona, Rifugio Longo, Lago del Diavolo, Passo Selletta', kind: 'up', file: 'Brembana_SalitaCaronaLongoDiavoloSelletta_EBIKE.gpx', link: '2022/07/selletta-calvi-estivo', elevation_gain: 1365, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 33, zone: 'alta_brembana', name: 'Salita Valleve, San Simone, Passo di Lemma, Cima di Lemma', kind: 'up', file: 'Brembana_SalitaValleveSanSimoneCimaLemma_EBIKE.gpx', link: '2022/07/cima-lemma-tartano', elevation_gain: 1270, elevation_loss: 24 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 8, zone: 'alta_brembana', name: 'Carona, Val Carisole, Lago di Carisole, Cresta Monte Chierico', kind: 'up', file: 'Brembana_SalitaCaronaCarisoleChierico_EBIKE.gpx', link: '2022/07/carisole-sambuzza', elevation_gain: 1135, elevation_loss: 85 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 14, zone: 'alta_brembana', name: 'Salita Valleve, Lago Moro, Passo Valcervia, Cima Montebello', kind: 'up', file: 'Brembana_SalitaValleveLagoMoroCimaMontebello_EBIKE.gpx', link: '2022/08/valcervia-dordona', elevation_gain: 1219, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 24, zone: 'alta_brembana', name: 'Salita Branzi, Carona, Laghi Gemelli, Lago Colombo', kind: 'up', file: 'Brembana_BranziCaronaGemelliColombo_EBIKE.gpx', link: '2022/08/colombo-212', elevation_gain: 1492, elevation_loss: 311 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 12, zone: 'alta_brembana', name: 'Salita Carona, Lago Moro, Cima Montebello', kind: 'up', file: 'Brembana_SalitaCaronaLagoMoroCimaMontenbello_EBIKE.gpx', link: '2022/08/lago-moro', elevation_gain: 1305, elevation_loss: 24 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita Lenna, Roncobello, Mezzeno', kind: 'up', file: 'Brembana_SalitaLennaRoncobelloMezzeno_EBIKE.gpx', link: '2022/09/mezzeno', elevation_gain: 1184, elevation_loss: 47 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'alta_brembana', name: 'Salita Lenna, Valsecca, Strada Piana, Porta delle Cornacchie', kind: 'up', file: 'Brembana_SalitaLennaValseccaPianaCornacchie_EBIKE.gpx', link: '2022/09/cornacchie', elevation_gain: 804, elevation_loss: 83 },

// replaced
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: '', name: 'Lago Moro, Rifugio Mirtillo, Carona', kind: 'down', file: 'Brembana_LagoMoroCarona.gpx', link: '2021/10/lago-moro', elevation_gain: 117, elevation_loss: 1508 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Branzi, Foppolo, Lago Moro', kind: 'up', file: 'Brembana_SalitaFoppoloLagoMoro_EBIKE.gpx', link: '2021/10/lago-moro', elevation_gain: 1390, elevation_loss: 0 },

// replaced
{ vote: 3, rate: 3, rate_max: 0, cycle: 2, zone: '', name: 'Incrocio 101, Acqua Nera, Diga Valmora, Caprile', kind: 'down', file: 'Brembana_Incrocio101AcquaNeraDigaValmoraCaprile.gpx', link: '2021/10/101-valmora', elevation_gain: 116, elevation_loss: 1280 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: '', name: 'Salita Santa Brigida, Piani dell\'Avaro, Incrocio 101', kind: 'up', file: 'Brembana_SalitaSantaBrigidaAvaroIncrocio101_EBIKE.gpx', link: '2021/10/101-valmora', elevation_gain: 1201, elevation_loss: 34 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Olmo al Brembo ai Piani dell\'Avaro', kind: 'up', file: 'Brembana_SalitaOlmoAvaro_EBIKE.gpx', link: '2020/08/terza-avaro', elevation_gain: 1098, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Santa Brigida, Colle Maddalena', kind: 'up', file: 'Brembana_SalitaSantaBrigidaColleMaddalena_EBIKE.gpx', link: '2021/10/val-dinferno', elevation_gain: 420, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Piazzatorre, Monte Torcola', kind: 'up', file: 'Brembana_SalitaPiazzatorreTorcola_EBIKE.gpx', elevation_gain: 917, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: '', name: 'Salita Moio de Calvi, Torcola, Forcolino di Torcola', kind: 'up', file: 'Brembana_SalitaMoioForcolino_EBIKE.gpx', link: '2023/10/forcolino', elevation_gain: 1413, elevation_loss: 167 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Moio de Calvi, Pista da sci di Torcola, 125', kind: 'up', file: 'Brembana_SalitaMoioPistaTorcola125_EBIKE.gpx', link: '2023/10/pusdosso', elevation_gain: 1215, elevation_loss: 76 },

//
// CAVALLINA
//
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Percorso Vita', kind: 'down', file: 'Cavallina_ArgonPercorsoVita.gpx', link: '2021/05/argon', elevation_gain: 7, elevation_loss: 157 },
{ vote: 2, rate: 1, rate_max: 3, cycle: 0, zone: 'cavallina, argon', name: 'Pietria dell\'Eremo', kind: 'down', file: 'Cavallina_ArgonPietraiaEremo.gpx', link: '2021/05/argon', elevation_gain: 7, elevation_loss: 223 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'cavallina, argon', name: 'San Giorgio, Valle d\'Albano', kind: 'down', file: 'Cavallina_ArgonSanGiorgioValleAlbano.gpx', link: '2021/05/argon', elevation_gain: 63, elevation_loss: 278 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Valle d\'Albano', kind: 'down', file: 'Cavallina_ArgonValleAlbano.gpx', link: '2021/05/argon', elevation_gain: 6, elevation_loss: 222 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'cavallina, argon', name: 'Sentiero della Luna', kind: 'down', file: 'Cavallina_ArgonSentieroDellaLuna.gpx', link: '2021/05/argon', elevation_gain: 37, elevation_loss: 249 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Vertical', kind: 'down', file: 'Cavallina_ArgonVertical.gpx', link: '2021/05/argon', elevation_gain: 0, elevation_loss: 211 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Welcome to the Jungle', kind: 'down', file: 'Cavallina_ArgonWelcomeToTheJungle.gpx', link: '2021/05/argon', elevation_gain: 27, elevation_loss: 173 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Salita al Colle di Pasta e Monte d\'Argon', kind: 'up', file: 'Cavallina_ArgonSalitaPastaArgon_EBIKE.gpx', link: '2021/05/argon', elevation_gain: 220, elevation_loss: 18 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Salita al Colle di Pasta', kind: 'up', file: 'Cavallina_ArgonSalitaPasta_EBIKE.gpx', link: '2021/05/argon', elevation_gain: 171, elevation_loss: 14 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Salita al Monte d\'Argon', kind: 'up', file: 'Cavallina_ArgonSalitaMonteArgon_EBIKE.gpx', link: '2021/05/argon', elevation_gain: 220, elevation_loss: 0 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: 'cavallina, misma', name: 'Misma, Santa Maria, Cenate', kind: 'down', file: 'Cavallina_MismaCenate.gpx', link: '2021/04/misma-santa-maria-cenate-sopra', elevation_gain: 7, elevation_loss: 805 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'cavallina, misma', name: 'Corna Clima, Sant\'Ambrogio', kind: 'down', file: 'Cavallina_CornaClimaSantAmbrogio.gpx', link: '2021/05/sant-ambrogio', elevation_gain: 22, elevation_loss: 559 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'cavallina, misma', name: 'Corna Clima, Mirabile', kind: 'down', file: 'Cavallina_CornaClimaMirabileVallese.gpx', link: '2022/03/mirabile', elevation_gain: 6, elevation_loss: 497 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'cavallina', name: 'Faisecco, Prati Alti, 611, Luzzana', kind: 'down', file: 'Cavallina_FaiseccoPratiAlti611Luzzana.gpx', link: '2022/03/pranza-luzzana', elevation_gain: 140, elevation_loss: 852 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina, minardi', name: 'Pistino Minardi 1', kind: 'down', file: 'Cavallina_Minardi1.gpx', link: '2022/03/minardi', elevation_gain: 0, elevation_loss: 31 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina, minardi', name: 'Pistino Minardi 2', kind: 'down', file: 'Cavallina_Minardi2.gpx', link: '2022/03/minardi', elevation_gain: 7, elevation_loss: 71 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'cavallina, minardi', name: 'Pistino Minardi 3', kind: 'down', file: 'Cavallina_Minardi3.gpx', link: '2022/03/minardi', elevation_gain: 0, elevation_loss: 77 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina, minardi', name: 'Pistino Minardi Muro', kind: 'down', file: 'Cavallina_MinardiMuro.gpx', link: '2022/03/minardi', elevation_gain: 0, elevation_loss: 75 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, minardi', name: 'Salita a Minardi', kind: 'up', file: 'Cavallina_SalitaMinardi_EBIKE.gpx', link: '2022/03/minardi', elevation_gain: 108, elevation_loss: 22 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Prati Alti, 611A, Luzzana', kind: 'down', file: 'Cavallina_PratiAlti611AEntratico.gpx', link: '2022/04/prati-alti-luzzana', elevation_gain: 11, elevation_loss: 522 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: '', name: 'Corna Clima, Mirabile, Entratico', kind: 'down', file: 'Cavallina_CornaClimaMirabileEntratico.gpx', link: '2022/03/mirabile', elevation_gain: 88, elevation_loss: 665 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina, misma', name: 'Valpredina, Cenate Sopra', kind: 'down', file: 'Cavallina_ValpredinaCenateSopra.gpx', link: '2021/05/valpredina', elevation_gain: 6, elevation_loss: 436 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Anello Zandobbio', kind: 'down', file: 'Cavallina_AnelloZandobbio_EBIKE.gpx', link: '2023/05/anello-zandobbio', elevation_gain: 631, elevation_loss: 590 },

{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita da Entratico alla Corna Clima', kind: 'up', file: 'Cavallina_SalitaEntraticoCornaClima_EBIKE.gpx', link: '2022/03/mirabile', elevation_gain: 680, elevation_loss: 99 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita da Entratico ai Prati Alti ', kind: 'up', file: 'Cavallina_SalitaEntraticoLuzzanaPratiAlti_EBIKE.gpx', link: '2022/04/prati-alti-luzzana', elevation_gain: 518, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, misma', name: 'Salita da Tribulina alla Corna Clima', kind: 'up', file: 'Cavallina_SalitaTribuliaCornaClima_EBIKE.gpx', link: '2021/05/sant-ambrogio', elevation_gain: 594, elevation_loss: 80 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Monte Grione, 618, Endine Gaiano', kind: 'down', file: 'Cavallina_Grione618Endine.gpx', link: '2022/02/monte-grione', elevation_gain: 4, elevation_loss: 1015 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Malga Lunga, 563, Sovere, Endine Gaiano', kind: 'down', file: 'Cavallina_MalgaLonga563SovereEndine.gpx', link: '2022/02/malga-lunga-563', elevation_gain: 261, elevation_loss: 1144 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Monte Ballerino, Cummia, Colognola, Borgo di Terzo', kind: 'down', file: 'Cavallina_BallerinoCummiaColognola.gpx', link: '2022/03/colli-san-fermo-cummia-colognola', elevation_gain: 102, elevation_loss: 1085 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Monte Gremalto, Val Torrezzo, Colognola, Borgo di Terzo', kind: 'down', file: 'Cavallina_GremaltoTorrezzoColognola.gpx', link: '2022/06/val-torrezzo', elevation_gain: 235, elevation_loss: 1248 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Monte Sicolo, Endine Gaiano', kind: 'down', file: 'Cavallina_SicoloEndine.gpx', link: '2022/04/monte-sicolo', elevation_gain: 4, elevation_loss: 887 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 1, zone: 'cavallina', name: 'Monte Torrezzo, Endine Gaiano', kind: 'down', file: 'Cavallina_TorrezzoEndine.gpx', link: '2022/04/monte-torrezzo', elevation_gain: 15, elevation_loss: 939 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Monte Boario, Solto Collina', kind: 'down', file: 'Cavallina_BoarioSoltoCollina.gpx', link: '2022/05/monte-boario', elevation_gain: 17, elevation_loss: 785 },
{ vote: 3, rate: 2, rate_max: 4, cycle: 0, zone: 'cavallina', name: 'Monte Pranz\u00E0, Cesul\u00EC, Casazza', kind: 'down', file: 'Cavallina_PranzaCesuliCasazza.gpx', link: '2022/05/pranza-cesuli-casazza', elevation_gain: 17, elevation_loss: 716 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'cavallina', name: 'Monte Colombina, Forcellino di Bossico, Bossico, Sovere', kind: 'down', file: 'Cavallina_ColombinaForcellinoBossicoSovere.gpx', link: '2022/06/monte-colombina', elevation_gain: 196, elevation_loss: 1255 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Valico di San Fermo, Buca del Corno, Zandobbio', kind: 'down', file: 'Cavallina_SanFermoCornoZandobbio.gpx', link: '2022/06/buca-del-corno', elevation_gain: 306, elevation_loss: 1070 },

{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'cavallina', name: 'Salita Casazza, Colle Gallo, Monte Pranz\u00E0', kind: 'up', file: 'Cavallina_SalitaCasazzaPranza_EBIKE.gpx', link: '2022/05/pranza-cesuli-casazza', elevation_gain: 718, elevation_loss: 14 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Endine Gaiano, Forcella di Ranzanico, Monte Grione', kind: 'up', file: 'Cavallina_SalitaEndineForcellaGrione_EBIKE.gpx', link: '2022/02/monte-grione', elevation_gain: 1165, elevation_loss: 42 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Endine Gaiano, Forcella di Ranzanico, Malga Lunga', kind: 'up', file: 'Cavallina_SalitaEndineForcellaMalgaLunga_EBIKE.gpx', link: '2022/02/malga-lunga-563', elevation_gain: 1064, elevation_loss: 146 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina, ranzanico', name: 'Forcella di Ranzanico, 618, Ranzanico', kind: 'down', file: 'Cavallina_Forcella618Ranzanico.gpx', link: '2022/02/doppietta-ranzanico', elevation_gain: 1, elevation_loss: 432 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina, ranzanico', name: 'Forcella di Ranzanico, Sorgenti Bondo, Ranzanico', kind: 'down', file: 'Cavallina_ForcellaSorgenteRanzanico.gpx', link: '2022/02/doppietta-ranzanico', elevation_gain: 6, elevation_loss: 398 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, ranzanico', name: 'Salita Spinone al Lago, Forcella di Ranzanico', kind: 'up', file: 'Cavallina_SalitaSpinoneForcellaRanzanico_EBIKE.gpx', link: '2022/02/doppietta-ranzanico', elevation_gain: 645, elevation_loss: 23 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, ranzanico', name: 'Collegamento Ranzanico, Spinone al Lago', kind: 'up', file: 'Cavallina_CollegamentoRanzanicoSpinone_EBIKE.gpx', link: '2022/02/doppietta-ranzanico', elevation_gain: 180, elevation_loss: 405 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Entratico, Casazza, Colle Gallo, Faisecco', kind: 'up', file: 'Cavallina_SalitaEntraticoCasazzaFaisecco_EBIKE.gpx', link: '2022/03/pranza-luzzana', elevation_gain: 762, elevation_loss: 36 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Borgo di Terzo, 615, Colle di San Fermo, Monte Ballerino', kind: 'up', file: 'Cavallina_SalitaTerzo615SanFermoBallerino_EBIKE.gpx', link: '2022/03/colli-san-fermo-cummia-colognola', elevation_gain: 1174, elevation_loss: 197 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Borgo di Terzo, Grone, Colle di San Fermo, Monte Gremalto', kind: 'up', file: 'Cavallina_SalitaTerzoGroneSanFermoGremalto_EBIKE.gpx', link: '2022/06/val-torrezzo', elevation_gain: 1043, elevation_loss: 55 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Endine Gaiano, Fonteno, Monte Sicolo', kind: 'up', file: 'Cavallina_SalitaEndineSicolo_EBIKE.gpx', link: '2022/04/monte-sicolo', elevation_gain: 1017, elevation_loss: 127 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Endine Gaiano, Fonteno, Monte Torrezzo', kind: 'up', file: 'Cavallina_SalitaEndineTorrezzo_EBIKE.gpx', link: '2022/04/monte-torrezzo', elevation_gain: 1110, elevation_loss: 170 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'cavallina', name: 'Salita Solto Collina, Fonteno, Monte Boario', kind: 'up', file: 'Cavallina_SalitaSoltoCollinaBoario_EBIKE.gpx', link: '2022/05/monte-boario', elevation_gain: 812, elevation_loss: 23 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'cavallina', name: 'Salita Sovere, Falecchio, Monte Colombia', kind: 'up', file: 'Cavallina_SalitaSovereFalecchioColombina_EBILE.gpx', link: '2022/06/monte-colombina', elevation_gain: 1305, elevation_loss: 208 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Zandobbio, Grone, Valico San Fermo', kind: 'up', file: 'Cavallina_SalitaZandobbioGroneSanFermo_EBIKE.gpx', link: '2022/06/buca-del-corno', elevation_gain: 827, elevation_loss: 41 },
];
