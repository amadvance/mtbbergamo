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
\u00E0 �
\u00E8 �
\u00EC �
\u00F2 �
\u00F9 �
*/

var TRACKS = [
//
// COLLI DI BERGAMO
//
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'colli,roccolone_nord', name: '712 Nord', kind: 'down', file: 'Colli_712Nord.gpx', link: '2019/03/roccolone-nord' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'colli,roccolone_sud', name: '712 Sud', kind: 'down', file: 'Colli_712Sud.gpx', link: '2019/01/roccolone-sud' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'colli,roccolone_nord', name: '713 / Partigiano', kind: 'down', file: 'Colli_713Partigiano.gpx', link: '2019/03/roccolone-nord' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'colli,roccolone_nord', name: 'Roccolone Nord', kind: 'down', file: 'Colli_RoccoloneNord.gpx', link: '2019/03/roccolone-nord' },
{ vote: 5, rate: 1, rate_max: 2, cycle: 100, zone: 'colli', name: '910 / Alpini', kind: 'down', file: 'Colli_910.gpx', link: '2018/12/910' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'colli,gussa', name: 'Gussa Est', kind: 'down', file: 'Colli_GussaEst.gpx', link: '2019/01/monte-gussa' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'colli,gussa', name: 'Gussa Nord', kind: 'down', file: 'Colli_GussaNord.gpx', link: '2019/01/monte-gussa' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'colli,gussa', name: 'Gussa Ovest', kind: 'down', file: 'Colli_GussaOvest.gpx', link: '2019/01/monte-gussa' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'colli,gussa', name: 'Gussa Sud', kind: 'down', file: 'Colli_GussaSud.gpx', link: '2019/01/monte-gussa' },
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'colli,roccolone_nord', name: 'ExPistino', kind: 'down', file: 'Colli_ExPistino.gpx', link: '2019/03/roccolone-nord' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'colli,roccolone_sud', name: 'Pistino Downhill', kind: 'down', file: 'Colli_PistinoDownhill.gpx', link: '2019/03/pistino-downhill' },
{ vote: 5, rate: 1, rate_max: 0, cycle: 100, zone: 'colli', name: 'Roccolone', kind: 'down', file: 'Colli_Roccolone.gpx', link: '2018/12/roccolone' },
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'colli,roccolone_sud', name: 'Roccolone Sud', kind: 'down', file: 'Colli_RoccoloneSud.gpx', link: '2019/01/roccolone-sud' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'colli,roccolone_sud', name: 'Gradoni', kind: 'down', file: 'Colli_Gradoni.gpx', link: '2019/01/roccolone-sud' },
{ vote: 5, rate: 1, rate_max: 0, cycle: 100, zone: 'colli,allegrezza', name: 'Allegrezza', kind: 'down', file: 'Colli_Allegrezza.gpx', link: '2018/12/allegrezza' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'colli,allegrezza', name: 'Allegrezza Sud', kind: 'down', file: 'Colli_AllegrezzaSud.gpx', link: '2018/12/allegrezza' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'colli,roccolone_sud', name: 'Torre', kind: 'down', file: 'Colli_Torre.gpx', link: '2019/01/roccolone-sud' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'colli', name: 'Salita da Astino', kind: 'up', file: 'Colli_SalitaAstino.gpx', link: '2018/12/salite-colli-bergamo' },
/*
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'colli,gussa', name: 'Salita al Monte Gussa', kind: 'up', file: 'Colli_SalitaGussaSud.gpx', link: '2019/01/monte-gussa' },
*/
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'colli,gussa', name: 'Salita al Monte Gussa', kind: 'up', file: 'Colli_SalitaGussaEst_EBIKE.gpx', link: '2019/01/monte-gussa' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'colli', name: 'Salita dalla Madonna del Bosco', kind: 'up', file: 'Colli_SalitaMadonnaDelBosco.gpx', link: '2018/12/salite-colli-bergamo' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'colli,roccolone_nord,roccolone_sud', name: 'Salita dal Roccolone', kind: 'up', file: 'Colli_SalitaRoccolone.gpx', link: '2018/12/salite-colli-bergamo' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'colli,roccolone_nord,roccolone_sud', name: 'Salita al Colle Roccolone', kind: 'up', file: 'Colli_SalitaCimaRoccolone.gpx', link: '2018/12/salite-colli-bergamo' },

//
// MARESANA E SORISOLE
//
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Albanesi / Olympia Trail / 532, San Rocco', kind: 'down', file: 'Maresana_Albanesi532.gpx', link: '2019/02/532' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 98, zone: 'maresana', name: 'Vertigo / 604', kind: 'down', file: 'Maresana_604.gpx', link: '2018/11/604' },
{ vote: 5, rate: 1, rate_max: 2, cycle: 100, zone: 'maresana', name: 'Bruna', kind: 'down', file: 'Maresana_Bruna.gpx', link: '2018/11/bruna' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'maresana', name: 'FarWest', kind: 'down', file: 'Maresana_FarWest.gpx', link: '2018/11/farwest' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'maresana', name: 'Calvarola / Filoncino / 401', kind: 'down', file: 'Maresana_Filoncino.gpx', link: '2018/11/401-filoncino' },
{ vote: 3, rate: 2, rate_max: 2, cycle: 100, zone: 'maresana', name: 'Calvarola 2', kind: 'down', file: 'Maresana_Calvarola2.gpx' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'maresana', name: 'Filone Easy', kind: 'down', file: 'Maresana_FiloneEasy.gpx', link: '2018/11/filone-easy' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Colle Alto, Magnati', kind: 'down', file: 'Maresana_ColleAltoMagnati.gpx', link: '2021/03/colle-alto-magnati' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Filone / Agostini / 533', kind: 'down', file: 'Maresana_Filone.gpx', link: '2018/11/533-filone' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Colle Alto, Tremana', kind: 'down', file: 'Maresana_Tremana.gpx', link: '2020/12/colle-alto-tremana' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'maresana', name: 'Scabla', kind: 'down', file: 'Maresana_Scabla.gpx', link: '2021/04/scabla' },
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Veloce / Illegale / 533', kind: 'down', file: 'Maresana_Illegale.gpx', link: '2018/11/533-illegale' },
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Rosciano', kind: 'down', file: 'Maresana_Rosciano.gpx', link: '2018/11/rosciano' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 99, zone: 'maresana', name: 'San Rocco / 402', kind: 'down', file: 'Maresana_SanRocco.gpx', link: '2018/11/402-san-rocco' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Tornantini / 409', kind: 'down', file: 'Maresana_Tornantini.gpx', link: '2018/11/tornantini' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Legnaia', kind: 'down', file: 'Maresana_Legnaia.gpx', link: '2018/11/legnaia' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Legnaia Variante Sud', kind: 'down', file: 'Maresana_LegnaiaSud_VAR.gpx', link: '2018/11/legnaia' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Luca West', kind: 'down', file: 'Maresana_LucaWest.gpx', link: '2018/11/lucawest' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Birondina', kind: 'down', file: 'Maresana_Birondina.gpx', link: '2019/02/birondina' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'maresana, bassa_seriana', name: '532A, Olera', kind: 'down', file: 'Maresana_532A_Olera.gpx', link: '2019/03/532a-olera' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Flying Dutchman', kind: 'down', file: 'Maresana_FlyingDutchman.gpx', link: '2019/01/flying-dutchman' },
{ vote: 3, rate: 1, rate_max: 3, cycle: 100, zone: 'maresana', name: 'Gaito', kind: 'down', file: 'Maresana_Gaito.gpx', link: '2021/03/gaito' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'maresana, sorisole', name: 'Trasferimento da Ca Del Lacc alla Forcella Del Sorriso', kind: 'up', file: 'Maresana_CaDelLaccForcellaDelSorriso.gpx', link: '2018/11/salite-maresana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Trasferimento dal Castello della Moretta alla Maresana', kind: 'up', file: 'Maresana_MorettaMaresana.gpx', link: '2018/11/salite-maresana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'maresana, sorisole', name: 'Trasferimento da Premerlino a Ponteranica Alta', kind: 'up', file: 'Maresana_PremerlinoPonteranicaAlta.gpx', link: '2018/11/salite-maresana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Salita da Ranica', kind: 'up', file: 'Maresana_SalitaRanica.gpx', link: '2018/11/salite-maresana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Salita da Ponteranica', kind: 'up', file: 'Maresana_SalitaPonteranica.gpx', link: '2018/11/salite-maresana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Salita al Colle Alto', kind: 'up', file: 'Maresana_SalitaColleAlto_EBIKE.gpx', link: '2018/11/salite-maresana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'maresana, sorisole', name: 'Salita da Ponteranica Alta', kind: 'up', file: 'Maresana_SalitaPonteranicaAlta.gpx', link: '2018/11/salite-maresana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'maresana', name: 'Salita da Olera', kind: 'up', file: 'Maresana_SalitaOlera.gpx', link: '2018/11/salite-maresana' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'sorisole', name: 'Bacino', kind: 'down', file: 'Sorisole_Bacino.gpx' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'sorisole, pisgiu_dh', name: 'Pista Downhill', kind: 'down', file: 'Sorisole_PistaDH.gpx', link: '2018/12/pista-downhill' },
{ vote: 3, rate: 3, rate_max: 4, cycle: 100, zone: 'sorisole, pisgiu_dh', name: 'Pista Downhill Hard', kind: 'down', file: 'Sorisole_PistaDHHard.gpx', link: '2018/12/pista-downhill' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'maresana, sorisole, 229', name: 'Catene / 229', kind: 'down', file: 'Sorisole_Catene229.gpx', link: '2018/12/229' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'maresana, sorisole, 229', name: 'Premerlino, 229', kind: 'down', file: 'Sorisole_Premerlino229.gpx', link: '2018/12/229' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'sorisole, galusu', name: 'Galus\u00F9 Ovest', kind: 'down', file: 'Sorisole_GalusuOvest.gpx', link: '2018/12/galusu' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'sorisole, galusu', name: 'Galus\u00F9 Sud', kind: 'down', file: 'Sorisole_GalusuSud.gpx', link: '2018/12/galusu' },
{ vote: 5, rate: 2, rate_max: 0, cycle: 100, zone: 'sorisole, galusu', name: 'Galus\u00F9', kind: 'down', file: 'Sorisole_Galusu.gpx', link: '2018/12/galusu' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'sorisole', name: 'Giongo', kind: 'down', file: 'Sorisole_Giongo.gpx' },
{ vote: 4, rate: 1, rate_max: 3, cycle: 100, zone: 'sorisole', name: 'Canto Alto, 507, Prati Parini, 113, Sedrina', kind: 'down', file: 'Sorisole_CantoAltoPratiPariniSedrina.gpx', link: '2019/06/canto-alto-prati-parini-sedrina' },
{ vote: 5, rate: 3, rate_max: 4, cycle: 100, zone: 'sorisole', name: 'Canto Alto, 220, Forcella di Cambli, 113, Pisgiu, Sorisole', kind: 'down', file: 'Sorisole_CantoAlto220113Sorisole.gpx', link: '2019/06/canto-alto-forcella-di-cambli-pisgiu' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'sorisole', name: 'Sorisole, Pistino Scuola MTB', kind: 'down', file: 'Sorisole_SorisolePistinoScuolaMTB.gpx', link: '2019/06/pistino-scuola-mtb-sorisole' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'sorisole', name: 'Sorisole, Ponteranica Alta', kind: 'down', file: 'Sorisole_SorisolePonteranicaAlta.gpx' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, comm: "10% dal Canto Basso al Canto Alto a spalla o a spinta", zone: 'sorisole', name: 'Salita dal Canto Basso al Canto Alto', kind: 'up', file: 'Sorisole_SalitaCantoBassoCantoAlto.gpx', link: '2019/06/salite-sorisole' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'sorisole', name: 'Salita alla Forcella di Rua', kind: 'up', file: 'Sorisole_SalitaForcellaDiRua.gpx', link: '2019/06/salite-sorisole' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'pisgiu_dh', name: 'Salita da Pontesecco alla Pista Downhill', kind: 'up', file: 'Sorisole_SalitaPonteseccoPistaDH.gpx', link: '2019/06/salite-sorisole' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'galusu', name: 'Salita da Pontesecco al Galus\u00F9', kind: 'up', file: 'Sorisole_SalitaPonteseccoGalusu_EBIKE.gpx', link: '2019/06/salite-sorisole' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'sorisole', name: 'Salita al Galus\u00F9', kind: 'up', file: 'Sorisole_SalitaGalusu_EBIKE.gpx', link: '2019/06/salite-sorisole' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'sorisole', name: 'Salita al Giongo', kind: 'up', file: 'Sorisole_SalitaGiongo.gpx', link: '2019/06/salite-sorisole' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'sorisole', name: 'Trasferimento da Catene al Pisgi\u00F9', kind: 'up', file: 'Sorisole_CatenePisgiu_EBIKE.gpx', link: '2019/06/salite-sorisole' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'sorisole', name: 'Trasferimento alla Pista Downhill', kind: 'up', file: 'Sorisole_203.gpx', link: '2019/06/salite-sorisole' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'sorisole', name: 'Salita dalla Forcella del Sorriso al Canto Basso', kind: 'up', file: 'Sorisole_SalitaForcellaDelSorrisoCantoBasso.gpx', link: '2019/06/salite-sorisole' },


//
// IMAGNA NORD
//
// downhill
{ vote: 5, rate: 3, rate_max: 4, cycle: 100, zone: 'imagna', name: 'Vetta Resegone, Brumano', kind: 'down', file: 'Imagna_ResegoneBrumano.gpx', link: '2021/09/vetta-resegone' },
{ vote: 2, rate: 1, rate_max: 2, cycle: 100, zone: 'locatello', name: 'Bustoseta, Selino', kind: 'down', file: 'Imagna_BustosetaSelino.gpx', link: '2019/07/locatello' },
{ vote: 2, rate: 1, rate_max: 2, cycle: 100, zone: 'locatello', name: 'Buonanome, Selino', kind: 'down', file: 'Imagna_BuonanomeSelino.gpx', link: '2019/07/locatello' },
{ vote: 2, rate: 1, rate_max: 2, cycle: 100, zone: 'locatello', name: 'Coegia, Selino', kind: 'down', file: 'Imagna_CoegiaSelino.gpx', link: '2019/07/locatello' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Passo Porta, 586, Ca Piatone, Ca Prospero, Selino', kind: 'down', file: 'Imagna_PassoPorta586CaPiatoneCaProsperoSelino.gpx', link: '2019/06/passo-porta' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'imagna', name: 'Cascine Zucchero, Pramagnone, Ponte Vanzarolo, Ca Piatone, Campi, Selino', kind: 'down', file: 'Imagna_CascineZuccheroPramagnoneVanzaroloCaPiatoneCampiSelino.gpx', link: '2019/07/pramagnone' },
{ vote: 2, rate: 1, rate_max: 2, cycle: 100, zone: 'imagna, rota', name: 'Rota d\'Imagna, Fucine, Selino', kind: 'down', file: 'Imagna_RotaFucineSelino.gpx', link: '2019/06/rota-imagna' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'rota', name: 'Rota d\'Imagna, CaProspero, Selino', kind: 'down', file: 'Imagna_RotaCaProsperoSelino.gpx', link: '2019/06/rota-imagna' },
{ vote: 2, rate: 1, rate_max: 2, cycle: 100, zone: 'rota', name: 'Ca Piatone, Campi, Selino', kind: 'down', file: 'Imagna_CaPiatoneCampiSelino.gpx', link: '2019/06/rota-imagna' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'vanzarolo', name: 'Ponte Vanzarolo, CaPiatone', kind: 'down', file: 'Imagna_VanzaroloCaPiatone.gpx', link: '2019/07/vanzarolo' },
{ vote: 1, rate: 1, rate_max: 0, cycle: 100, zone: 'imagna, vanzarolo', name: 'Ponte Vanzarolo, Chignolo', kind: 'down', file: 'Imagna_VanzaroloChignolo.gpx', link: '2019/07/vanzarolo' },
{ vote: 2, rate: 1, rate_max: 2, cycle: 100, zone: 'imagna, vanzarolo', name: 'Ca Piatone, Chignolo', kind: 'down', file: 'Imagna_CaPiatoneChignolo.gpx', link: '2019/07/vanzarolo' },
{ vote: 2, rate: 1, rate_max: 2, cycle: 100, zone: 'imagna, rota', name: 'Ca Piatone, Foppe, Selino', kind: 'down', file: 'Imagna_CaPiatoneFoppeSelino.gpx', link: '2019/06/rota-imagna' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: '', name: 'Frontale, Foppe, Enel', kind: 'down', file: 'Imagna_FrontaleFoppeEnel.gpx', link: '2019/06/rota-imagna' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'vanzarolo', name: 'Chignolo, Frontale, Foppe, Enel', kind: 'down', file: 'Imagna_ChignoloFrontaleFoppeEnel.gpx', link: '2019/07/vanzarolo' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'vanzarolo', name: 'Chignolo, Enel', kind: 'down', file: 'Imagna_ChignoloEnel.gpx', link: '2019/07/vanzarolo' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, comm: "97%, tratto a spinta nella salita ai Canti", zone: 'imagna,canti', name: 'Zuc De Valmana, Canti, 579A, Tre Faggi, Fuipiano', kind: 'down', file: 'Imagna_ZucDeValmanaCanti579ATreFaggiFuipiano.gpx', link: '2020/02/canti' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'canti', name: 'Canti, Freeride, Tre Faggi', kind: 'down', file: 'Imagna_CantiFreerideTreFaggi.gpx', link: '2020/02/canti' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 95, zone: 'canti', name: 'Canti, 571, Tre Faggi', kind: 'down', file: 'Imagna_Canti571TreFaggi.gpx', link: '2020/02/canti' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 99, zone: 'imagna', name: 'Passo del Palio, Orso, Pagafone, Coegia', kind: 'down', file: 'Imagna_PassoPalioOrsoPagafoneCoegia.gpx', link: '2020/06/orso' },
{ vote: 5, rate: 1, rate_max: 0, cycle: 100, zone: 'imagna,costa_del_palio', name: 'Costa del Palio, Forcella di Valmana, 579B, Fuipiano', kind: 'down', file: 'Imagna_CostaDelPalio579B_EBIKE.gpx', link: '2019/04/costa-del-palio-fuipiano' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna,costa_del_palio', name: 'Passo di Valbona, 579B, Prati, Fuipiano', kind: 'down', file: 'Imagna_PassoValbona579BPrati.gpx', link: '2019/04/costa-del-palio-fuipiano' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 95, zone: 'imagna', name: 'Passo Porta, 575, Valsecca, Scuderia, Mazzoleni, Selino', kind: 'down', file: 'Imagna_PassoPorta575ValseccaScuderiaMazzoleniSelino.gpx', link: '2019/07/passo-porta-575-valsecca' },
{ vote: 3, rate: 2, rate_max: 4, cycle: 100, zone: 'imagna', name: 'Tre Faggi, 580, Disdiroli, Selino', kind: 'down', file: 'Imagna_TreFaggi580DisdiroliSelino.gpx', link: '2019/06/tre-faggi-580-disdiroli-selino' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Tre Faggi, 571, Selino Alto, Selino', kind: 'down', file: 'Imagna_TreFaggi571SelinoAlto.gpx', link: '2020/05/tre-faggi-571-selino-alto' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'imagna', name: 'Tre Faggi, 592E, Valle Brunone', kind: 'down', file: 'Imagna_TreFaggi592EBrunone.gpx', link: '2020/07/tre-faggi-valle-brunone'},
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Tre Faggi, 581, Locatello, Selino', kind: 'down', file: 'Imagna_TreFaggi581Locatello.gpx', link: '2020/05/tre-faggi-581-locatello' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Tre Faggi, Traverso Ovest, Fuipiano. Coegia, Selino', kind: 'down', file: 'Imagna_TreFaggiTraversoFuipianoCoegia.gpx', link: '2020/02/tre-faggi-traverso-ovest' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'imagna,zuc_de_valmana', name: 'Passo di Valbona, Sbarra di Brumano', kind: 'down', file: 'Imagna_PassoValbonaSbarra.gpx', link: '2019/05/zuc-de-valmana' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'imagna,zuc_de_valmana', name: 'Passo del Palio, Sbarra di Brumano', kind: 'down', file: 'Imagna_PassoPalioSbarra.gpx', link: '2019/05/zuc-de-valmana' },
{ vote: 5, rate: 1, rate_max: 0, cycle: 100, zone: 'imagna,zuc_de_valmana', name: 'Zuc de Valmana, Cresta, Passo del Palio', kind: 'down', file: 'Imagna_ZucDeValmanaCrestaPassoPalio.gpx', link: '2019/05/zuc-de-valmana' },
{ vote: 2, rate: 2, rate_max: 3, cycle: 95, zone: 'imagna, taleggio', name: 'Passo del Palio, Selvano, Sorgente Enna, Piazzoli, Fuipiano', kind: 'down', file: 'Imagna_PalioSelvanoEnnaPiazzoliGrasselloFuipiano.gpx', link: '2022/04/sorgenti-enna' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'imagna, taleggio', name: 'Passo del Palio, Foo di Valmana, Selvano, Morterone, Fuipiano', kind: 'down', file: 'Imagna_PalioFooValmanaSelvanoMorteroneFuipiano.gpx', link: '2022/04/foo-di-valmana' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'imagna, taleggio', name: 'Passo del Palio, Grandi Alberi, Morterone, Fuipiano', kind: 'down', file: 'Imagna_PalioGrandiAlberiFuipiano.gpx', link: '2022/03/grandi-alberi' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'imagna, morterone, taleggio', name: 'Passo del Palio, Forbesette, Morterone', kind: 'down', file: 'Imagna_PassoPalioForbesetteMorterone.gpx', link: '2020/12/morterone' },
{ vote: 3, rate: 1, rate_max: 3, cycle: 100, zone: 'imagna, morterone, taleggio', name: 'Passo del Palio, Freeride, Morterone', kind: 'down', file: 'Imagna_PassoPalioFreerideMorterone.gpx', link: '2020/12/morterone' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 70, zone: 'imagna', name: 'Anello del Resegone', kind: 'down', file: 'Imagna_AnelloResegone.gpx', link: '2020/08/anello-resegone' },

// trek
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'imagna', name: 'Sentiero della Cultura Casearia', kind: 'trek', file: 'Imagna_SentieroDellaCulturaCasearia_EBIKE.gpx', link: '2022/10/corna-casere' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 95, zone: 'imagna', name: 'Sentiero dei Giganti', kind: 'trek', file: 'Imagna_SentieroDeiGiganti_EBIKE.gpx', link: '2022/11/giganti' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 90, zone: 'imagna', name: 'Anello delle Contrade', kind: 'trek', file: 'Imagna_AnelloContrade_EBIKE.gpx' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'imagna', name: 'Antiche Tracce', kind: 'trek', file: 'Imagna_AnticheTracce_EBIKE.gpx' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 95, zone: 'imagna', name: 'Sentiero dei Ponti', kind: 'trek', file: 'Imagna_SentieroDeiPonti_EBIKE.gpx', link: '2022/11/ponti' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 90, zone: 'imagna', name: 'Sentiero del Castagno', kind: 'trek', file: 'Imagna_SentieroDelCastagno_EBIKE.gpx' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 90, zone: 'imagna', name: 'Sentiero dei Roccoli, dell\'Acqua e dei Borghi', kind: 'trek', file: 'Imagna_SentieroRoccoliAcquaBorghi.gpx' },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, comm: "40%, con ultimi 400m di dislivello a spalla", zone: 'imagna', name: 'Salita dalla Stanga di Brumano alla vetta del Resegone', kind: 'up', file: 'Imagna_SalitaBrumanoResegone.gpx', link: '2021/09/vetta-resegone' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Salita dal Passo del Palio allo Zuc De Valmana', kind: 'up', file: 'Imagna_SalitaPassoPalioZucDeValmana_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Trasferimento dal Rifugio Resegone al Passo Porta', kind: 'up', file: 'Imagna_RifResegonePassoPorta.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Trasferimento da Valsecca a Rota Imagna e a Locatello', kind: 'up', file: 'Imagna_ValseccaRotaLocatello.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Salita da Brumano al Passo Porta', kind: 'up', file: 'Imagna_SalitaBrumanoPassoPorta_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Salita da Brumano ai Pra d\'Alet', kind: 'up', file: 'Imagna_SalitaBrumanoPraDAlet_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna, morterone, taleggio', name: 'Salita dalla Sbarra di Brumano al Palio', kind: 'up', file: 'Imagna_SalitaSbarraPalio_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Salita da Selino a Fuipiano e ai Tre Faggi', kind: 'up', file: 'Imagna_SalitaSelinoFuipianoTreFaggi.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna, taleggio', name: 'Salita (nuova) da Fuipiano, Capione al Palio', kind: 'up', file: 'Imagna_SalitaFuipianoCapionePalio_EBIKE.gpx', link: '2022/04/sorgenti-enna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna, taleggio', name: 'Salita (nuova) da Fuipiano al Palio', kind: 'up', file: 'Imagna_SalitaFuipianoCimaPalio_EBIKE.gpx', link: '2022/03/grandi-alberi' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'costa_del_palio', name: 'Salita dalla Sbarra di Brumano al Palio', kind: 'up', file: 'Imagna_SalitaSbarraPalio.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'zuc_de_valmana,canti', name: 'Salita dalla Sbarra di Brumano allo Zuc De Valmana', kind: 'up', file: 'Imagna_SalitaSbarraPalioZucDeValmana_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna, morterone, taleggio', name: 'Salita da Morterone al Passo del Palio', kind: 'up', file: 'Imagna_SalitaMorteronePassoPalio_EBIKE.gpx', link: '2020/12/morterone' },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita (nuova) da Fuipiano, Capione al Palio', kind: 'up', file: 'Imagna_SalitaFuipianoCapioneCimaPalio_EBIKE.gpx', link: '2022/04/foo-di-valmana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita da Brumano alle Cascine Zucchero', kind: 'up', file: 'Imagna_SalitaBrumanoCascineZucchero_EBIKE.gpx', link: '2018/12/salite-imagna' },

// replaced
{ vote: 3, rate: 2, rate_max: 3, cycle: 97, zone: '', name: 'Galzaniga, Orso, Chignolo, Ex Centrale Enel, Coegia, Selino', kind: 'down', file: 'Imagna_GalzanigaOrsoChignoloEnelCoegiaSelino.gpx', link: '2019/07/orso' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: '', name: 'Otto di Pagafone', kind: 'down', file: 'Imagna_PagafoneOtto.gpx', link: '2020/03/otto-pagafone' },

// deleted
/*
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'imagna', name: 'Colletto di Brumano, Rifugio Resegone, Brumano', kind: 'down', file: 'Imagna_CollettoBrumanoRifResegoneBrumano.gpx', link: '2019/05/colletto-di-brumano-rifugio-resegone' },
{ vote: 5, rate: 3, rate_max: 4, cycle: 100, zone: 'imagna', name: 'Resegone, Bocchetta del Palio, Grande Faggio', kind: 'down', file: 'Imagna_ResegoneGrandeFaggio.gpx', link: '2019/06/resegone' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, comm: "70%, da Forbesette a spinta", zone: 'imagna', name: 'Salita dal Passo del Palio, a Forbesette, e al Colletto di Brumano', kind: 'up', file: 'Imagna_SalitaPalioForbesetteCollettoBrumano_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, comm: "40%, con ultimi 400m di dislivello a spalla", zone: 'imagna', name: 'Salita dal Passo del Palio al Resegone', kind: 'up', file: 'Imagna_SalitaPalioResegone.gpx', link: '2018/12/salite-imagna' },
*/

// removed for not so relevant
/*
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Passo del Palio, Rifugio Resegone', kind: 'down', file: 'Imagna_PassoPalioBocchettaRifResegone_EBIKE.gpx' },
*/

// removed for request of the owner
/*
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna,costa_del_palio', name: 'Passo del Palio, 571 Basso, 579, Fuipiano', kind: 'down', file: 'Imagna_PassoPalio571Basso579Fuipiano.gpx', link: '2019/04/costa-del-palio-fuipiano' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna,zuc_de_valmana', name: 'Salita da Fuipiano allo Zuc De Valmana', kind: 'up', file: 'Imagna_SalitaZucDeValmana_EBIKE.gpx', link: '2018/12/salite-imagna' },
*/

//
// IMAGNA SUD
//
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: '', name: 'Valsecca, Fonti', kind: 'down', file: 'Imagna_ValseccaFonti.gpx' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: '', name: 'Valsecca, Scuderia, Mazzoleni, Selino', kind: 'down', file: 'Imagna_ValseccaScuderiaMazzoleniSelino.gpx' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'martino, imagna, valcava', name: 'Linzone, 571, Roncola, 571, Almenno', kind: 'down', file: 'Imagna_Linzone571Roncola571Almenno.gpx', link: '2018/11/linzone-roncola' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'imagna, valcava', name: 'Valcava, 572, Selino', kind: 'down', file: 'Imagna_Valcava572Selino.gpx', link: '2020/07/valcava-cornabusa-selino'  },
{ vote: 4, rate: 1, rate_max: 0, cycle: 100, zone: 'imagna, valcava', name: 'Forcella Alta, 573, Selino', kind: 'down', file: 'Imagna_ForcellaAlta573Selino.gpx', link: '2019/06/forcella-alta-573-selino' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna, valcava', name: 'Forcella Alta, 574, Valsecca, Selino', kind: 'down', file: 'Imagna_ForcellaAlta574Selino.gpx', link: '2020/11/forcella-alta-574-valsecca' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'imagna, valcava', name: 'Forcella Alta, Rizzolo, Selino', kind: 'down', file: 'Imagna_ForcellaAltaRizzolo.gpx', link: '2020/08/forcella-alta-rizzolo-selino' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna, valcava', name: 'Valcava, Roncola Alta, Ponte Giurino', kind: 'down', file: 'Imagna_ValcavaPonteGiurino.gpx', link: '2020/08/valcava-roncola-alta-ponte-giurino' },
{ vote: 2, rate: 3, rate_max: 0, cycle: 100, zone: 'imagna, valcava', name: 'Linzone, Roncola Alta, Amagno', kind: 'down', file: 'Imagna_LinzoneRoncolaAltaAmagno.gpx', link: '2020/11/linzone-roncola-alta-amagno' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, imagna, valcava, roncola', name: 'Roncola, Barlino', kind: 'down', file: 'Imagna_RoncolaBarlino.gpx', link: '2019/04/roncola' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'roncola', name: 'Roncola, 571, Almenno', kind: 'down', file: 'Imagna_Roncola571Almenno.gpx', link: '2019/04/roncola' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna, valcava, roncola', name: 'Roncola, CaLiger, Almenno', kind: 'down', file: 'Imagna_RoncolaCaLigerAlmenno.gpx', link: '2019/04/roncola' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna, valcava, roncola', name: 'Roncola, CaLiger, Cava di Strozza', kind: 'down', file: 'Imagna_RoncolaCava.gpx', link: '2019/04/roncola' },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'roncola', name: 'Salita da Almenno a Roncola', kind: 'up', file: 'Imagna_SalitaRoncola.gpx' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, imagna, valcava', name: 'Salita da Valcava al Linzone', kind: 'up', file: 'Martino_ValcavaLinzone.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita da Amagno al Linzone', kind: 'up', file: 'Imagna_SalitaAmagnoValcavaLinzone_EBIKE.gpx' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Trasferimento Ponte Giurino, Selino', kind: 'up', file: 'Imagna_PonteGiurinoSelino_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Ciclabile Valle Imagna', kind: 'up', file: 'Imagna_CiclabileValleImagna.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Salita da Selino alla Forcella Alta', kind: 'up', file: 'Imagna_SalitaSelinoForcellaAlta_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Salita da Almenno a Costa Imagna e Valcava', kind: 'up', file: 'Imagna_SalitaAlmennoCostaValcava.gpx', link: '2018/12/salite-imagna' },

// removed as not significative
/*
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Salita da Almenno a Roncola e Valcava', kind: 'up', file: 'Imagna_SalitaAlmennoRoncolaValcava.gpx', link: '2018/12/salite-imagna' },
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'imagna, valcava, roncola', name: 'Roncola, Selino', kind: 'down', file: 'Imagna_RoncolaSelino.gpx', link: '2019/04/roncola' },
*/

//
// UBIONE
//
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna', name: 'Passo del Canto, Capizzone', kind: 'down', file: 'Imagna_PassoCantoCapizzone.gpx', link: '2020/09/passo-canto-capizzone' },
{ vote: 3, rate: 2, rate_max: 4, cycle: 100, comm: "97%, tratto iniziale con passaggi a piedi", zone: 'imagna, ubione', name: 'Ubione, 571, Belved\u00EC, Clanezzo', kind: 'down', file: 'Imagna_Ubione571.gpx', link: '2020/08/ubione-571' },
{ vote: 5, rate: 1, rate_max: 2, cycle: 100, zone: 'imagna, ubione', name: 'Roccoli Passata, Costa Cavallina', kind: 'down', file: 'Imagna_CostaCavallina.gpx', link: '2019/09/costa-cavallina' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Final, Sopracorna', kind: 'down', file: 'Imagna_FinalSopracorna.gpx', link: '2020/05/sopracorna' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Postiera', kind: 'down', file: 'Imagna_Postiera.gpx', link: '2020/05/sopracorna' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Final, Postiera', kind: 'down', file: 'Imagna_FinalPostiera.gpx', link: '2020/05/sopracorna' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Final, Valle Mori', kind: 'down', file: 'Imagna_FinalValleMori.gpx', link: '2020/05/sopracorna' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'imagna, ubione', name: 'Corna Marcia, Coyote Scamburtit, Ca Bonor\u00E8', kind: 'down', file: 'Imagna_CoyoteScamburtit.gpx', link: '2019/09/coyote-scamburtit' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna, ubione', name: 'Salita dalla ciclabile del Chito alla Corna Marcia', kind: 'up', file: 'Imagna_SalitaChitoBottaCornaMarcia_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita diretta dalla ciclabile del Chito al Passo del Canto', kind: 'up', file: 'Imagna_SalitaChitoCantoDiretta_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'imagna, ubione', name: 'Salita dalla ciclabile del Chito ai Roccoli Passata', kind: 'up', file: 'Imagna_SalitaChitoCeresolaCantoPassata_EBIKE.gpx', link: '2019/09/costa-cavallina' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'ubione, sopracorna', name: 'Salita da Clanezzo ai Roccoli Passata', kind: 'up', file: 'Imagna_SalitaClanezzoRoccoliPassata_EBIKE.gpx', link: '2018/12/salite-imagna' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, comm: "60% con ultimi 100m di dislivello a spalla", zone: 'imagna, ubione', name: 'Salita da Clanezzo all\'Ubione', kind: 'up', file: 'Imagna_SalitaClanezzoUbione.gpx', link: '2018/12/salite-imagna' },
//Imagna_MalanotteFoppo.gpx

//
// SAN MARTINO
//
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, valcava, roncola', name: 'Roncola, San Rocco', kind: 'down', file: 'Martino_RoncolaSanRocco.gpx', link: '2019/04/roncola' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, valcava, roncola', name: 'Baita, Camutaglio, Longa, Golf', kind: 'down', file: 'Martino_BaitaCamutaglioLongaGolf.gpx', link: '2019/04/roncola' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, valcava, roncola', name: 'Prabacioc, San Rocco', kind: 'down', file: 'Martino_PrabaciocSanRocco.gpx', link: '2019/04/roncola' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava, roncola', name: 'Trasferimento da Roncola alla Baita', kind: 'up', file: 'Martino_RoncolaBaita.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava, roncola', name: 'Salita da Palazzago al Monte Piacca', kind: 'up', file: 'Martino_SalitaPalazzagoMontePiacca_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 4, rate: 1, rate_max: 0, cycle: 100, zone: 'martino, valcava, pedrino', name: 'Pedrino DH, Faggeta, Perlupario', kind: 'down', file: 'Martino_PedrinoDHFaggetaPerlupario.gpx', link: '2019/04/colle-pedrino'  },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, valcava, pedrino', name: 'Ciacallo, Burligo', kind: 'down', file: 'Martino_Ciacallo.gpx', link: '2019/04/colle-pedrino'  },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, valcava, pedrino', name: 'Pedrino, Ca Muracca, Forcella di Burligo', kind: 'down', file: 'Martino_PedrinoMuraccaForcella.gpx', link: '2019/04/colle-pedrino' },
{ vote: 1, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, valcava, pedrino', name: 'Pedrino, Cavatori', kind: 'down', file: 'Martino_PedrinoCavatori.gpx', link: '2019/04/colle-pedrino' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'pedrino', name: '807 / Palestra', kind: 'down', file: 'Martino_807Palestra.gpx', link: '2019/04/colle-pedrino' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'pedrino', name: 'Mulattiera', kind: 'down', file: 'Martino_PedrinoMulattieraOpreno.gpx', link: '2019/04/colle-pedrino'  },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'pedrino', name: 'Salita da Burligo a Colle Pedrino', kind: 'up', file: 'Martino_SalitaBurligoCollePedrino.gpx', link: '2018/12/salite-san-martino' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'martino, valcava, piacca', name: 'Linzone, Monte Piacca, Baita, Spino, Palazzago', kind: 'down', file: 'Martino_LinzonePiaccaBaitaSpinoPalazzago.gpx', link: '2018/11/linzone-monte-piacca-baita-burligo' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'martino, valcava, piacca', name: 'Linzone, Monte Piacca, Col Pedrino, Palestra / 807, Burligo', kind: 'down', file: 'Martino_LinzonePiaccaColPedrinoPalestraBurligo.gpx', link: '2018/11/linzone-monte-piacca-baita-burligo' },
{ vote: 5, rate: 2, rate_max: 3, cycle: 100, zone: 'martino, valcava', name: 'Antenne Valcava, Funivia, Coldara, Col Fopa, Opreno, Burligo', kind: 'down', file: 'Martino_AntenneValcavaFuniviaColFopaBurligo.gpx', link: '2019/01/funivia-coldara-colle-pedrino-opreno' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 98, zone: 'martino, valcava', name: 'Antenne Valcava, Zuccherone, Coldara, Colle Pedrino, Opreno, Burligo', kind: 'down', file: 'Martino_AntenneValcavaZuccheroneColPedrinoBurligo.gpx', link: '2019/03/zuccherone-coldara-col-fopa-opreno' },
{ vote: 3, rate: 3, rate_max: 4, cycle: 99, zone: 'martino, valcava', name: 'Antenne Valcava, Cava, Col Pedrino, Burligo', kind: 'down', file: 'Martino_AntenneValcavaCavaPedrinoBurligo.gpx', link: '2021/12/antenne-cava' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'martino, valcava', name: 'Monte Piacca, Dusnale', kind: 'down', file: 'Martino_PiaccaDusnale.gpx', link: '2021/06/monte-piacca-dusnale' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita da Burligo alle antenne di Valcava', kind: 'up', file: 'Martino_SalitaBurligoCavaAntenneValcava_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'piacca', name: 'Salita da Burligo al Monte Linzone', kind: 'up', file: 'Martino_SalitaBurligoCavaLinzone.gpx', link: '2018/12/salite-san-martino' },
{ vote: 4, rate: 1, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Crinale dei colli di Palazzago', kind: 'down', file: 'Martino_ColliPalazzago_EBIKE.gpx', link: '2020/10/colli-di-palazzago' },
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Cadimaggio, Acqua, Borghetto', kind: 'down', file: 'Martino_CrinaleCadimaggioAcquaBorghetto.gpx', link: '2020/10/colli-di-palazzago' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Monte Valmora, Borghetto', kind: 'down', file: 'Martino_CrinaleMonteValmoraBorghetto.gpx', link: '2020/10/colli-di-palazzago' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Picco Alto, Palazzago', kind: 'down', file: 'Martino_CrinalePiccoAltoPalazzago.gpx', link: '2020/10/colli-di-palazzago' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'martino, crinale', name: 'Pracerito, Ca Zucchetti', kind: 'down', file: 'Martino_CrinalePraceritoCaZucchetti.gpx', link: '2020/10/colli-di-palazzago' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Pracerito, Fomorone', kind: 'down', file: 'Martino_CrinalePraceritoFomorone.gpx', link: '2020/10/colli-di-palazzago' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Ca Maggio, Borghetto', kind: 'down', file: 'Martino_CrinaleBorghetto.gpx', link: '2020/10/colli-di-palazzago' },
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Gronfaleggio, Bressanone, Bund\u00E8', kind: 'down', file: 'Martino_GronfaleggioBressanoneBunde.gpx', link: '2020/10/colli-di-palazzago' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Gronfaleggio, Colle dei Frati, Pontida', kind: 'down', file: 'Martino_GronfaleggioColleDeiFratiPontida.gpx', link: '2020/10/colli-di-palazzago' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Salita al Crinale da Borghetto', kind: 'up', file: 'Martino_SalitaCrinaleBorghetto_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Salita al Crinale da Ca Zucchetti', kind: 'up', file: 'Martino_SalitaCrinaleCaZucchetti_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Salita al Crinale da Palazzago', kind: 'up', file: 'Martino_SalitaCrinalePalazzago_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Salita al Crinale da Burligo localit\u00E0 Acqua', kind: 'up', file: 'Martino_SalitaAcquaCrinale_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Salita a Gronfaleggio da CaZucchetti', kind: 'up', file: 'Martino_SalitaCaZuchettiGronfaleggio_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, crinale', name: 'Salita a Gronfaleggio da Celana', kind: 'up', file: 'Martino_SalitaCelanaGronfaleggio_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Valcava, 823, Colle di Sogno, Corna Martinella, Classica', kind: 'down', file: 'Martino_Valcava823SognoMartinellaClassica.gpx', link: '2018/12/valcava-colle-di-sogno-corna-martinella' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'martino, valcava', name: 'Valcava, 821, Torre de Busi', kind: 'down', file: 'Martino_Valcava821Busi.gpx', link: '2019/12/valcava-821-busi' },
{ vote: 4, rate: 1, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Forcella Alta, 817 Direttissima, Carenno', kind: 'down', file: 'Martino_ForcellaAlta817Carenno.gpx', link: '2018/12/forcella-alta-817-carenno' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'martino, valcava', name: 'Forcella Alta, 815 Muerte, Carenno', kind: 'down', file: 'Martino_ForcellaAlta815Carenno.gpx', link: '2019/01/forcella-alta-815-carenno' },
{ vote: 4, rate: 4, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Forcella Alta, 812, Carenno', kind: 'down', file: 'Martino_ForcellaAlta812Carenno.gpx', link: '2019/01/forcella-alta-812-carenno' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Forcella Alta, 811, Carenno', kind: 'down', file: 'Martino_ForcellaAlta811Carenno.gpx', link: '2020/01/forcella-alta-811-carenno' },
{ vote: 2, rate: 3, rate_max: 4, cycle: 100, zone: 'martino, valcava', name: 'Forcella Alta, 802, Carenno', kind: 'down', file: 'Martino_ForcellaAlta802Carenno.gpx', link: '2020/06/forcella-alta-802-carenno' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Convento Pertus, Erve, Saina, Somasca', kind: 'down', file: 'Martino_ConventoPertusErveSainaSomasca_EBIKE.gpx', link: '2020/07/convento-pertus-erve-saina-somasca' },
{ vote: 3, rate: 4, rate_max: 0, cycle: 85, zone: 'martino, valcava', name: 'Convento Pertus, Nesolio, Madonna del Corno', kind: 'down', file: 'Martino_ConventoPertusNesolioCorno.gpx', link: '2021/06/nesolio' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita Madonna del Corno, Convento del Pertus', kind: 'up', file: 'Martino_SalitaCornoConventoPertus_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 1, rate: 4, rate_max: 0, cycle: 75, zone: 'martino, valcava', name: 'Convento Pertus, Pian Munik, Madonna del Corno', kind: 'down', file: 'Martino_ConventoPertusMunikCorno.gpx', link: '2021/07/munik' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Salita Madonna del Corno, Oneta, Convento del Pertus', kind: 'up', file: 'Martino_SalitaCornoOnetaConventoPertus_EBIKE.gpx', link: '2021/06/nesolio' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'martino, valcava, tesoro', name: 'Monte Tesoro, Direttissima, Colle Di Sogno, Corna Martinella, Cristai Super Flow, Torre de Busi', kind: 'down', file: 'Martino_TesoroDirSognoMartinellaCristaiSuperFlow.gpx', link: '2018/12/monte-tesoro-direttissima-colle-di' },
{ vote: 1, rate: 3, rate_max: 0, cycle: 100, zone: 'martino, sogno', name: 'Colle Di Sogno, 819, Torre de Busi', kind: 'down', file: 'Martino_ColleDiSogno819.gpx', link: '2019/12/colle-di-sogno' },
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'martino, sogno', name: 'Colle Di Sogno, 823, Torre de Busi', kind: 'down', file: 'Martino_ColleDiSogno823.gpx', link: '2019/12/colle-di-sogno' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, sogno', name: 'Colle Di Sogno, Corna Martinella, Explo', kind: 'down', file: 'Martino_ColleDiSognoCornaMartinellaExplo.gpx', link: '2019/12/colle-di-sogno' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'sogno', name: 'Colle Di Sogno, 811, Carenno', kind: 'down', file: 'Martino_ColleDiSogno811.gpx', link: '2019/12/colle-di-sogno' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'tesoro', name: 'Colle Di Sogno, Carenno', kind: 'down', file: 'Martino_ColleDiSognoCarenno.gpx', link: '2019/12/colle-di-sogno' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'sogno', name: 'Colle Di Sogno, Corna Martinella, Nord', kind: 'down', file: 'Martino_ColleDiSognoCornaMartinellaNord.gpx', link: '2019/12/colle-di-sogno' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'sogno', name: 'Colle Di Sogno, Corna Martinella, Sud', kind: 'down', file: 'Martino_ColleDiSognoCornaMartinellaSud.gpx', link: '2019/12/colle-di-sogno' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'martino, martinella', name: 'Corna Martinella, 822, 801A', kind: 'down', file: 'Martino_CornaMartinella822801A.gpx', link: '2020/01/corna-martinella' },
{ vote: 5, rate: 1, rate_max: 3, cycle: 100, zone: 'martinella', name: 'Corna Martinella, Classica', kind: 'down', file: 'Martino_CornaMartinellaClassica.gpx', link: '2020/01/corna-martinella' },
{ vote: 5, rate: 1, rate_max: 3, cycle: 100, zone: 'martinella', name: 'Corna Martinella, Cristai Super Flow', kind: 'down', file: 'Martino_CornaMartinellaCristaiSuperFlow.gpx', link: '2020/01/corna-martinella' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'martino, martinella', name: 'Santa Margherita, Pistino', kind: 'down', file: 'Martino_MargheritaPistino.gpx', link: '2020/01/corna-martinella' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, martinella', name: 'Salita Torre de Busi a Santa Margherita', kind: 'up', file: 'Martino_SalitaBusiMargherita_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 2, rate: 1, rate_max: 2, cycle: 100, zone: 'martino, coldara', name: 'Coldara, PizzoPec, Torre de Busi', kind: 'down', file: 'Martino_ColdaraPizzoPec.gpx', link: '2020/01/coldara' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, coldara', name: 'Coldara, San Marco, Torre de Busi', kind: 'down', file: 'Martino_ColdaraSanMarco.gpx', link: '2020/01/coldara' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'martino, coldara', name: 'Coldara, Val Bratta, Torre de Busi', kind: 'down', file: 'Martino_ColdaraValBratta.gpx', link: '2020/01/coldara' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'coldara', name: 'Coldara, Col Fopa, Opreno', kind: 'down', file: 'Martino_ColdaraColFopaOpreno.gpx', link: '2020/01/coldara' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava, tesoro', name: 'Salita da Torre De Busi a Valcava', kind: 'up', file: 'Martino_SalitaBusiValcava_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Salita da Carenno alla Forcella Alta', kind: 'up', file: 'Martino_SalitaCarennoForcellaAlta.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Salita da Somasca al Convento del Pertus', kind: 'up', file: 'Martino_SalitaSomascaCarennoConventoPertus_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'tesoro', name: 'Salita da Carenno alla Forcella Alta', kind: 'up', file: 'Martino_SalitaCarennoForcellaAlta_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava, martinella', name: 'Salita da Carenno alla Corna Martinella', kind: 'up', file: 'Martino_SalitaCarenno819CornaMartinella_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Salita dalla Forcella Alta al Monte Tesoro', kind: 'up', file: 'Martino_SalitaForcellaAltaMonteTesoro.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'tesoro', name: 'Salita dalla Forcella Alta al Monte Tesoro', kind: 'up', file: 'Martino_SalitaForcellaAltaMonteTesoro_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava, tesoro', name: 'Salita dal Passo di Valcava al Monte Tesoro', kind: 'up', file: 'Martino_SalitaValcavaTesoro_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Salita da Torre De Busi a Carenno', kind: 'up', file: 'Martino_SalitaBusiCarenno.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava, martinella', name: 'Salita da Torre De Busi alla Corna Martinella', kind: 'up', file: 'Martino_SalitaBusiCornaMartinella_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava, coldara', name: 'Salita da Torre De Busi ad Opreno', kind: 'up', file: 'Martino_SalitaBusiOpreno_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava', name: 'Salita da Palazzago alla Cava', kind: 'up', file: 'Martino_SalitaPalazzagoCava.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita da Almenno al Monte Lizone', kind: 'up', file: 'Martino_SalitaAlmennoPalazzagoLinzone_EBIKE.gpx', link: '2018/12/salite-san-martino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'martino, valcava, pedrino', name: 'Trasferimento da Opreno a Burligo', kind: 'up', file: 'Martino_OprenoBurligo.gpx', link: '2018/12/salite-san-martino' },

//
// MONTE CANTO
//
{ vote: 5, rate: 1, rate_max: 0, cycle: 100, zone: 'canto', name: 'Tronchi, Canyon', kind: 'down', file: 'Canto_Canyon.gpx', link: '2021/05/canyon' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'canto', name: 'Traliccio', kind: 'down', file: 'Canto_Traliccio.gpx', link: '2021/05/traliccio' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'canto', name: 'GEP', kind: 'down', file: 'Canto_GEP.gpx', link: '2021/05/gep' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'canto', name: 'Radici, Genestaro', kind: 'down', file: 'Canto_RadiciGenestaro.gpx', link: '2020/03/radici-genestaro' },
{ vote: 5, rate: 2, rate_max: 3, cycle: 100, zone: 'canto', name: 'Crocione, Guendalina', kind: 'down', file: 'Canto_CrocioneGuendalina.gpx', link: '2020/02/crocione-guendalina' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'canto', name: 'Biglietto da Visita', kind: 'down', file: 'Canto_BigliettoDaVisita.gpx', link: '2020/02/biglietto-da-visita' },
{ vote: 5, rate: 2, rate_max: 3, cycle: 100, zone: 'canto', name: 'Kompressor', kind: 'down', file: 'Canto_Kompressor.gpx', link: '2019/02/kompressor' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'canto', name: 'Pietra Sant Alberto', kind: 'down', file: 'Canto_PietraSAlberto.gpx', link: '2020/03/pietra-santalberto' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'canto', name: 'Rocce / Muschio / California / Lame Rotanti', kind: 'down', file: 'Canto_Rocce.gpx', link: '2019/02/rocce-muschio' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 98, zone: 'canto', name: 'Scalette', kind: 'down', file: 'Canto_Scalette.gpx', link: '2019/02/scalette' },
{ vote: 5, rate: 1, rate_max: 2, cycle: 100, zone: 'canto', name: 'Uccellaia 1 e 2', kind: 'down', file: 'Canto_Uccellaia1E2.gpx', link: '2019/02/uccellaia' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'canto', name: 'Zandona', kind: 'down', file: 'Canto_Zandona.gpx', link: '2019/02/zandona' },
{ vote: 4, rate: 1, rate_max: 0, cycle: 100, zone: 'canto', name: 'Porcile, San Giovanni', kind: 'down', file: 'Canto_PorcileSanGiovanni.gpx', link: '2020/03/porcile-san-giovanni' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'canto', name: 'Salita da Sotto il Monte', kind: 'up', file: 'Canto_SalitaSottoIlMonte.gpx', link: '2019/02/salite-monte-canto' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita da Sotto il Monte', kind: 'up', file: 'Canto_SalitaSottoIlMonte_EBIKE.gpx', link: '2019/02/salite-monte-canto' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'canto', name: 'Salita da Somasca a Pontida', kind: 'up', file: 'Canto_SalitaSomascaPontida_EBIKE.gpx', link: '2019/02/salite-monte-canto' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita al Crocione', kind: 'up', file: 'Canto_SalitaCrocione_EBIKE.gpx', link: '2019/02/salite-monte-canto' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'canto', name: 'Salita al Monte Canto', kind: 'up', file: 'Canto_SalitaMonteCanto.gpx', link: '2019/02/salite-monte-canto' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'canto', name: 'Salita da Pontida', kind: 'up', file: 'Canto_SalitaPontida.gpx', link: '2019/02/salite-monte-canto' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'canto', name: 'Salita da Somasca', kind: 'up', file: 'Canto_SalitaSomasca_EBIKE.gpx', link: '2019/02/salite-monte-canto' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita da Pontida', kind: 'up', file: 'Canto_SalitaPontida_EBIKE.gpx', link: '2019/02/salite-monte-canto' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'canto', name: 'Salita da Ambivere', kind: 'up', file: 'Canto_SalitaAmbivere.gpx', link: '2019/02/salite-monte-canto' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'canto', name: 'Salita da Fontanella', kind: 'up', file: 'Canto_SalitaFontanella.gpx', link: '2019/02/salite-monte-canto' },


//
// SERIANA
//
// nord
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_seriana', name: 'Canto Basso, 533, Forcella del Sorriso', kind: 'down', file: 'Seriana_CantoBassoForcellaSorriso.gpx', link: '2019/03/canto-basso-533-forcella-del-sorriso' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'bassa_seriana,lonno', name: 'Lonno, Val del Luio, Alzano', kind: 'down', file: 'Seriana_LonnoLuio.gpx', link: '2019/04/lonno' },
/* { vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Monte Cavallo, Canto Basso', kind: 'down', file: 'Seriana_MonteCavallo.gpx' }, */
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_seriana', name: 'Poieto, 523, Gazzaniga', kind: 'down', file: 'Seriana_Poieto523Gazzaniga.gpx', link: '2019/05/poieto-gazzaniga' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_seriana,lonno', name: 'Lonno, Pizzo di Lonno, Monte Ganda, Alzano', kind: 'down', file: 'Seriana_LonnoPizzoMonteGanda.gpx', link: '2019/04/lonno' },
{ vote: 5, rate: 1, rate_max: 0, cycle: 100, zone: 'bassa_seriana,lonno', name: 'Lonno, Percorso Vita, Valbona', kind: 'down', file: 'Seriana_LonnoPercorsoVita.gpx', link: '2019/04/lonno' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_seriana,lonno', name: 'Lonno, Percorso Vita, Luio', kind: 'down', file: 'Seriana_LonnoPercorsoVitaLuio.gpx', link: '2019/04/lonno' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'bassa_seriana,lonno', name: 'Lonno, Colle Bastia, Percorso Vita, Viana', kind: 'down', file: 'Seriana_LonnoColleBastia.gpx', link: '2019/04/lonno' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: '534 / Salmezza', kind: 'down', file: 'Seriana_534Salmezza.gpx', link: '2019/04/534-salmezza' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Salmezza, 533, Forcella di Nese', kind: 'down', file: 'Seriana_Salmezza533ForcellaNese.gpx', link: '2019/05/salmezza-533-forcella-di-nese' },
{ vote: 2, rate: 3, rate_max: 0, cycle: 95, zone: 'bassa_seriana', name: 'Salmezza, Baita GAP, Lonno', kind: 'down', file: 'Seriana_SalmezzaBaitaGAPLonno.gpx', link: '2019/05/salmezza-gap-lonno' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Forcella di Nese, 531, Nese', kind: 'down', file: 'Seriana_ForcellaNese531Nese.gpx', link: '2019/05/forcella-di-nese-531-nese' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 99, zone: 'bassa_seriana', name: 'Selvino, 535, Lonno', kind: 'down', file: 'Seriana_535Lonno.gpx', link: '2019/05/monte-valtrusa' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, comm: "95% la salita al Valtrusa", zone: 'bassa_seriana', name: 'Selvino, 535, Monte Valtrusa, Lonno', kind: 'down', file: 'Seriana_535Valtrusa.gpx', link: '2019/05/monte-valtrusa' },
/*
rimosso su richiesta del CAI Albino
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_seriana', name: 'Selvino, 550 / Mulattiera, Albino', kind: 'down', file: 'Seriana_550MulattieraAlbino.gpx', link: '2019/03/550-mulattiera' },
*/
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_seriana', name: 'Selvino, 536 / Trevasco, Nembro', kind: 'down', file: 'Seriana_Trevasco.gpx', link: '2019/04/trevasco' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Selvino, Monte Purito, Monte Cereto, Nembro', kind: 'down', file: 'Seriana_PuritoCereto.gpx', link: '2019/04/purito-cereto' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 99, zone: 'bassa_seriana', name: 'Selvino, Ama, Trote, Albino', kind: 'down', file: 'Seriana_Trote.gpx', link: '2019/03/trote' },
{ vote: 4, rate: 4, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Selvino, Ama, Nigromo, Vertical, Albino', kind: 'down', file: 'Seriana_NigromoVertical.gpx', link: '2021/04/nigromo-vertical' },
{ vote: 4, rate: 4, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Canto Basso, 540A, Olera', kind: 'down', file: 'Seriana_540A.gpx', link: '2019/03/canto-basso-540a-olera' },
{ vote: 1, rate: 1, rate_max: 0, cycle: 98, zone: 'bassa_seriana', name: 'Olera, 532, Burro, 531, Nese', kind: 'down', file: 'Seriana_Olera532Burro531Nese.gpx', link: '2019/03/olera-532-burro-531-nese' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_seriana, 520', name: 'Ganda, 520, Gazzaniga', kind: 'down', file: 'Seriana_Ganda520.gpx', link: '2019/03/520' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'bassa_seriana, 520', name: 'Ganda, 520 DH On Fire, Gazzaniga', kind: 'down', file: 'Seriana_Ganda520DH.gpx', link: '2019/03/520'  },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_seriana', name: 'Ganda, 521, Gazzaniga', kind: 'down', file: 'Seriana_Ganda521.gpx', link: '2019/05/521' },
{ vote: 2, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_seriana', name: 'Pista Downhill Poieto', kind: 'down', file: 'Seriana_PoietoDH.gpx', link: '2019/03/poieto-dh' },
{ vote: 3, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Nembro Trail', kind: 'down', file: 'Seriana_NembroTrail.gpx', link: '2019/05/nembro-trail' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Monte Poieto, Ganda, Camocco, Albino', kind: 'down', file: 'Seriana_PoietoGandaCamoccoAlbino.gpx' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Monte Poieto, Ganda, Bomba Trail, Albino', kind: 'down', file: 'Seriana_PoietoGandaBombaAlbino.gpx' },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Trasferimento dalla Forcella di Nese al Canto Basso', kind: 'up', file: 'Seriana_ForcellaNese533BCantoBasso.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Salita da Monte di Nese al Canto Basso', kind: 'up', file: 'Seriana_SalitaMonteDiNeseCantoBasso.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Salita da Selvino a Salmezza', kind: 'up', file: 'Seriana_SalitaSalmezza.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Salita da Aviatico, al Monte Poieto', kind: 'up', file: 'Seriana_SalitaAviaticoForcaPoieto_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Salita da Selvino al Monte Purito', kind: 'up', file: 'Seriana_SalitaPurito_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana,lonno', name: 'Salita da Alzano a Lonno', kind: 'up', file: 'Seriana_SalitaLonno.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Salita da Nembro a Selvino', kind: 'up', file: 'Seriana_SalitaNembroSelvino.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana, 520', name: 'Trasferimento da Selvino a Ganda', kind: 'up', file: 'Seriana_SalitaSelvinoGanda.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Salita dalla Forcella al Monte Cavallo', kind: 'up', file: 'Seriana_SalitaMonteCavallo.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Salita da Nese alla Forcella', kind: 'up', file: 'Seriana_SalitaNeseForcella.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 99, zone: 'bassa_seriana', name: 'Salita Albino, Col du Bates, Ganda, Monte Poieto', kind: 'up', file: 'Seriana_SalitaAlbinoBatesGandaPoieto_EBIKE.gpx' },

// sud
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana, 520', name: 'Ciclabile Valle Seriana', kind: 'up', file: 'Seriana_CiclabileValleSeriana.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Ciclovia delle Rogge', kind: 'up', file: 'Seriana_CicloviaDelleRogge.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 5, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Pradale, Costa Sorgenti, Cornale', kind: 'down', file: 'Seriana_PradaleCostaSorgenti.gpx', link: '2021/03/pradale-costa-sorgenti' },
{ vote: 4, rate: 1, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Pradale, Val Coler, Rinnovata', kind: 'down', file: 'Seriana_PradaleColerRinnovata.gpx', link: '2021/03/pradale-val-coler-rinnovata' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_seriana, misma', name: 'Misma, Pradale', kind: 'down', file: 'Seriana_MismaPradale.gpx', link: '2020/05/misma' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_seriana, misma', name: 'Misma, Pratolina', kind: 'down', file: 'Seriana_MismaPratolina.gpx', link: '2021/03/misma-pratolina' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Val Coler, Sant Antonio', kind: 'down', file: 'Seriana_ColerSantAntonio.gpx', link: '2021/06/val-coler-sant-antonio' },
{ vote: 5, rate: 3, rate_max: 4, cycle: 100, zone: 'bassa_seriana', name: 'Val Coler, Vertical', kind: 'down', file: 'Seriana_ColerVertical.gpx', link: '2021/04/val-coler-vertical' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Val Coler, Biroli, Cornale', kind: 'down', file: 'Seriana_ColerBiroliCornale.gpx', link: '2021/04/val-coler-biroli-cornale' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_seriana, bastia', name: 'Bastia, Carezzola', kind: 'down', file: 'Seriana_BastiaCarezzola.gpx', link: '2021/04/scanzorosciate' },
{ vote: 5, rate: 1, rate_max: 2, cycle: 100, zone: 'bassa_seriana, bastia', name: 'Bastia, Carezzola 2', kind: 'down', file: 'Seriana_BastiaCarezzola2.gpx', link: '2021/04/scanzorosciate' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'bassa_seriana, bastia', name: 'Bastia, Centrale', kind: 'down', file: 'Seriana_BastiaCentrale.gpx', link: '2021/04/scanzorosciate' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_seriana, bastia', name: 'Bastia, Fola', kind: 'down', file: 'Seriana_BastiaFola.gpx', link: '2021/04/scanzorosciate' },
{ vote: 3, rate: 3, rate_max: 4, cycle: 100, zone: 'bassa_seriana, bastia', name: 'Bastia, Gianino', kind: 'down', file: 'Seriana_BastiaGianino.gpx', link: '2021/04/scanzorosciate' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_seriana, bastia', name: 'Bastia, Valbona', kind: 'down', file: 'Seriana_BastiaValbona.gpx', link: '2021/04/scanzorosciate' },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Morosini, Ripetitori, Monte Misma', kind: 'up', file: 'Seriana_SalitaMismaRipetitori_EBIKE.gpx', link: '2021/04/misma-santa-maria-cenate-sopra' },
/*
removed as not significative
Con una MTB conviene fare la salita alternativa, che passa da Fiobbio, e prosegue per il 511, pedalabile fino all'incrocio con il sentiero per la Santa Maria di Misma. Da qui occorre spingere o spallare per 200 metri di dislivello.
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Morosini, 511, Monte Misma', kind: 'up', file: 'Seriana_SalitaMisma511.gpx', link: '2019/03/salite-valle-seriana' },
*/
{ vote: 0, rate: 0, rate_max: 0, cycle: 80, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Forcella, Monte Misma', kind: 'up', file: 'Seriana_SalitaForcellaMisma_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 99, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Forcella, Ripetitori, Monte Misma', kind: 'up', file: 'Seriana_SalitaForcellaRipetitoriMisma_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana, bastia', name: 'Salita al Monte Bastia', kind: 'up', file: 'Seriana_SalitaBastia_EBIKE.gpx', link: '2021/04/scanzorosciate' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana, bastia', name: 'Salita alla Forcella del Cagnolo, Moette', kind: 'up', file: 'Seriana_SalitaCagnoloMoette_EBIKE.gpx', link: '2021/04/scanzorosciate' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana, bastia', name: 'Salita alla Via Pomarolo', kind: 'up', file: 'Seriana_SalitaPomarolo_EBIKE.gpx', link: '2021/04/scanzorosciate' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Salita alla Val Coler', kind: 'up', file: 'Seriana_SalitaTribulinaColer_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_seriana', name: 'Salita da Cornale, Pradale', kind: 'up', file: 'Seriana_SalitaCornalePradale_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita da Ganda al Monte Poieto', kind: 'up', file: 'Seriana_SalitaGandaPoieto.gpx', link: '2019/03/salite-valle-seriana' },

//
// MEDIA SERIANA (oltre Gazzaniga)
//
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'media_seriana', name: 'Forcella Vaccaro, 240, Parre', kind: 'down', file: 'Seriana_ForcellaVaccaro240Parre.gpx', link: '2021/11/vaccaro-forcella' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'media_seriana', name: 'Salita Parre, Rifugio Vaccaro, Forcella', kind: 'up', file: 'Seriana_SalitaParreVaccaroForcella_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'media_seriana', name: 'Passo di Bliben, 529 Easy, Vertova', kind: 'down', file: 'Seriana_Bliben529EasyVertova.gpx', link: '2021/12/529-easy' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'media_seriana', name: 'Baita Garda, Dasla, 528 Special, Vertova', kind: 'down', file: 'Seriana_GardaDasla528SpecialVertova.gpx', link: '2021/12/528-special' },
{ vote: 3, rate: 1, rate_max: 3, cycle: 100, zone: 'media_seriana', name: 'Tisa, 518, Bondo, Ponte Nossa', kind: 'down', file: 'Seriana_Tisa518BondoPonteNossa.gpx', link: '2022/01/monte-tisa-518-bondo' },
{ vote: 3, rate: 4, rate_max: 0, cycle: 100, zone: 'media_seriana', name: 'Passo di Bliben, 529 Hard, Vertova', kind: 'down', file: 'Seriana_Bliben529HardVertova.gpx', link: '2022/01/529-hard' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'media_seriana', name: 'Salita Vertova, Passo di Bliben', kind: 'up', file: 'Seriana_SalitaVertovaDaslaBliben_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'media_seriana', name: 'Salita Vertova, Bondo, Cavlera, Baita Garda', kind: 'up', file: 'Seriana_SalitaVertovaBondoCavleraGarda_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 90, zone: 'media_seriana', name: 'Salita Ponte Nossa, Barbata, Tisa', kind: 'up', file: 'Seriana_SalitaPonteNossaBarbataTisa_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },

//
// GANDINO
//
{ vote: 5, rate: 1, rate_max: 3, cycle: 100, zone: 'media_seriana, gandino', name: 'Pizzo Formico, Monte Farno, 543, Casnigo', kind: 'down', file: 'Gandino_FormicoFarno543Casnigo.gpx', link: '2022/01/formico-543-casnigo' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'media_seriana, gandino', name: 'Pizzo Formico, Rifugio Parafulmine, Groaro, Gandino', kind: 'down', file: 'Gandino_FormicoParafulmineGroaroGandino.gpx', link: '2022/01/pizzo-formico-groaro' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'media_seriana, gandino', name: 'Giro Val Gandino, Rifugio Parafulmine, Malga Lunga, Monte Sparavera', kind: 'down', file: 'Gandino_ParafulmineMalgaLungaSparavera547Gandino.gpx', link: '2022/01/giro-val-gandino' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'media_seriana, gandino', name: 'Monte Sparavera, Leffe', kind: 'down', file: 'Gandino_SparaveraLeffe.gpx', link: '2022/02/leffe-malga-lunga' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 90, comm: "90%, ultimi 100m dislivello a spinta", zone: 'media_seriana, gandino', name: 'Salita Casnigo, Monte Farno, Pizzo Formico', kind: 'up', file: 'Gandino_SalitaCasnigoFarnoFormico_EBIKE.gpx', link: '2022/01/formico-543-casnigo' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 92, comm: "95%, ultimi 100m dislivello a spinta", zone: 'media_seriana, gandino', name: 'Salita Gandino, Monte Farno, Pizzo Formico', kind: 'up', file: 'Gandino_SalitaGandinoFarnoFormico_EBIKE.gpx', link: '2022/01/pizzo-formico-groaro' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'media_seriana, gandino', name: 'Salita Gandino, Monte Farno, Rifugio Parafulmine', kind: 'up', file: 'Gandino_SalitaGandinoFarnoParafulmine_EBIKE.gpx', link: '2019/03/salite-valle-seriana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'media_seriana, gandino', name: 'Salita Leffe, Malga Lunga, Monte Sparavera', kind: 'up', file: 'Gandino_SalitaLeffeMalgaLungaSparevera_EBIKE.gpx', link: '2022/02/leffe-malga-lunga' },

//
// VALSASSINA
//
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'valsassina', name: 'Arvaggio 2000, Piani di Artavaggio, Vasca, Moggio', kind: 'down', file: 'Valsassina_CazzanigaArtavaggioVascaNeve.gpx', link: '2020/01/artavaggio' },
{ vote: 5, rate: 2, rate_max: 0, cycle: 100, zone: 'valsassina', name: 'Salita Moggio, Piani di Artavaggio, Artavaggio 2000', kind: 'up', file: 'Valsassina_MoggioArtavaggioCazzaniga.gpx', link: '2020/01/artavaggio' },

//
// TALEGGIO
//
{ vote: 5, rate: 2, rate_max: 0, cycle: 100, zone: 'taleggio', name: 'Piani di Artavaggio, Rifugio Gherardi, Ponte Becco', kind: 'down', file: 'Taleggio_ArtavaggioGherardiPonteBecco.gpx', link: '2022/03/artavaggio-gherardi-becco' },
{ vote: 5, rate: 2, rate_max: 3, cycle: 100, zone: 'taleggio', name: 'Sella, Corno Zuccone, Reggetto, Sottochiesa', kind: 'down', file: 'Taleggio_SellaZucconeReggettoSottochiesa.gpx', link:'2022/04/corno-zuccone' },
{ vote: 4, rate: 3, rate_max: 4, cycle: 96, zone: 'taleggio', name: 'Passo Grialeggio, Baita Canvervo, Cantiglio, Ponte Becco', kind: 'down', file: 'Taleggio_GrialeggioCancervoCantiglioBecco.gpx', link: '2022/05/grialeggio-ponte-becco' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 90, zone: 'taleggio', name: 'Canti, Tre Faggi, Corna Bianca, Peghera', kind: 'down', file: 'Taleggio_CantiTreFaggiCornaBiancaPeghera.gpx', link: '2022/05/canti-tre-faggi-corna-bianca' },
{ vote: 2, rate: 2, rate_max: 4, cycle: 100, zone: 'taleggio', name: 'Canti, Peghera', kind: 'down', file: 'Taleggio_CantiPeghera.gpx', link: '2022/08/canti-peghera' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'taleggio', name: 'Pizzo Baciamorti, Pizzino, Sottochiesa', kind: 'down', file: 'Taleggio_BaciamortiSottochiesa.gpx', link: '2022/05/baciamorti' },
{ vote: 5, rate: 1, rate_max: 2, cycle: 100, zone: 'taleggio', name: 'Piani di Artavaggio, Reggetto, Sottochiesa', kind: 'down', file: 'Taleggio_ArtavaggioReggettoSottochiesa.gpx', link: '2022/09/artavaggio-reggetto' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'taleggio', name: 'Pizzo Baciamorti, Bocchetta di Regadur, Ridugio Gherardi, Sottochiesa', kind: 'down', file: 'Taleggio_BaciamortiRegadurGherardiSottochiesa.gpx', link: '2022/09/baciamorti-antiorario' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'taleggio', name: 'Cima di Piazzo, Bocchetta di Regadur, Ridugio Gherardi, Fraggio, Sottochiesa', kind: 'down', file: 'Taleggio_CimaPiazzoNicolaRegadurGherardiFraggioSottochiesa.gpx', link: '2022/10/cima-di-piazzo' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'taleggio', name: 'Rifugio Nicola, Piani di Artavaggio, Corno Zuccone, Fraggio, Pizzino, Sottochiesa', kind: 'down', file: 'Taleggio_NicolaZucconeSudFraggioSottochiesa.gpx', link: '2022/10/corno-zuccone-sud' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'taleggio', name: 'Rifugio Nicola, Piani di Artavaggio, Corno Zuccone, 151B, Reggetto, Pizzino, Sottochiesa', kind: 'down', file: 'Taleggio_NicolaArtavaggioZuccone151BPizzinoSottochiesa.gpx', link: '2022/10/corno-zuccone-151b' },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'taleggio, brembana', name: 'Salita, Ponte Becco, Sottochiesa, Piani di Artavaggio', kind: 'up', file: 'Taleggio_SalitaBeccoSottochiesaArtavaggio_EBIKE.gpx', link: '2022/03/artavaggio-gherardi-becco' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Fraggio, Reggetto', kind: 'up', file: 'Taleggio_SalitaSottochiesaFraggio155Reggetto_EBIKE.gpx' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Reggetto, Avolasio, Sella', kind: 'up', file: 'Taleggio_SalitaSottochiesaReggettoAvolasioSella_EBIKE.gpx', link:'2022/04/corno-zuccone' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 85, zone: 'taleggio, brembana', name: 'Salita San Giovanni Bianco, Pianca, Passo Grialeggio', kind: 'up', file: 'Taleggio_SalitaSGBiancoPiancaGrialeggio_EBIKE.gpx', link: '2022/05/grialeggio-ponte-becco' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 93, zone: 'taleggio, brembana', name: 'Salita Peghera, Ponte Senesi, Vedeseta, Bocca del Grassello, Canti', kind: 'up', file: 'Taleggio_SalitaPegheraVedesetaCanti_EBIKE.gpx', link: '2022/05/canti-tre-faggi-corna-bianca' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 90, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Piani di Artavaggio, Pizzo Baciamorti', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioBaciamorti_EBIKE.gpx', link: '2022/05/baciamorti' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Rifugio Gherardi, Piani di Artavaggio', kind: 'up', file: 'Taleggio_SalitaSottochiesaGherardiArtavaggio_EBIKE.gpx', link: '2022/09/artavaggio-reggetto' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 70, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Quindicina, Passo e Pizzo Baciamorti', kind: 'up', file: 'Taleggio_SalitaSottochiesaQuindicinaBaciamorti_EBIKE.gpx', link: '2022/09/baciamorti-antiorario' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 95, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola, Cima di Piazzo', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicolaCimaPiazzo_EBIKE.gpx', link: '2022/10/cima-di-piazzo' },

// overlapping
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: '', name: 'Rifugio Nicola, Bocchetta di Redagur, Rifugio Gherardi, Fraggio, Sottochiesa', kind: 'down', file: 'Taleggio_NicolaGherardiFraggioSottochiesa.gpx', link: '2022/03/nicola-regadur-gherardi' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicola_EBIKE.gpx', link: '2022/03/nicola-regadur-gherardi' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: '', name: 'Piani di Artavaggio, Fraggio, Sottochiesa', kind: 'down', file: 'Taleggio_ArtavaggioFraggioSottochiesa.gpx', link: '2022/04/artagaggio-fraggio' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita Sottochiesa, Avolasio, Piani di Artavaggio', kind: 'up', file: 'Taleggio_SalitaSottochiesaAvolasioArtavaggio_EBIKE.gpx', link: '2022/04/artagaggio-fraggio' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita Sottochiesa, Rifugio Gherardi, Piani di Artavaggio, Rifugio Nicola', kind: 'up', file: 'Taleggio_SalitaSottochiesaGherardiArtavaggioNicola_EBIKE.gpx', link: '2022/10/corno-zuccone-sud' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicola_EBIKE.gpx', link: '2022/10/corno-zuccone-151b' },

//
// BREMBILLA
//
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Tre Faggi, Blello, Brembilla', kind: 'down', file: 'Brembilla_TreFaggiBlelloBrembilla.gpx', link: '2021/07/tre-faggi-blello-brembilla' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Piazzacava, Gerosa, Foppa, Brembilla', kind: 'down', file: 'Brembilla_PiazzacavaFoppaBrembilla.gpx', link: '2021/07/piazzacava-gerosa-foppa' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Pizzo Cerro, Piane, Brembilla', kind: 'down', file: 'Brembilla_PizzoCerroPianeBrembilla.gpx', link: '2021/07/pizzo-cerro-piane-brembilla' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Pizzo Cerro, Fienili, Brembilla', kind: 'down', file: 'Brembilla_PizzoCerroFieniliBrembilla.gpx', link: '2021/08/pizzo-cerro-fienili-brembilla' },
{ vote: 2, rate: 3, rate_max: 0, cycle: 97, zone: 'bassa_brembana, brembilla', name: 'Pizzo Cerro, Cavaglia, Brembilla', kind: 'down', file: 'Brembilla_PizzoCerroCavaglia.gpx', link: '2021/07/pizzo-cerro-cavaglia-brembilla' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Forcella di Berbenno, Ripe, Brembilla', kind: 'down', file: 'Brembilla_BerbennoRipeBrembilla.gpx', link: '2021/09/ripe' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Berbenno CAT, Lera, Brembilla', kind: 'down', file: 'Brembilla_BerbennoLeraBrembilla.gpx', link: '2021/09/lera' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Passo del Canto, Laxolo, Brembilla', kind: 'down', file: 'Brembilla_CantoLaxoloBrembilla.gpx', link: '2021/11/laxolo' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Catremerio, Truca, Brembilla', kind: 'down', file: 'Brembana_CatremerioTruca.gpx', link: '2020/11/catremerio-truca-brembilla' },
{ vote: 5, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Passo Mercante del Ferro, Forcella di Bura, Brembilla', kind: 'down', file: 'Brembana_PassoMercanteDelFerroBuraBrembilla.gpx', link: '2021/08/monte-foldone-e-sornadello' },
// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 90, zone: 'bassa_brembana, brembilla', name: 'Salita da Brembilla a Piazzacava', kind: 'up', file: 'Brembilla_SalitaBrembillaPiazzacava_EBIKE.gpx', link: '2021/07/piazzacava-gerosa-foppa' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 98, zone: 'bassa_brembana, brembilla', name: 'Salita da Brembilla ai Tre Faggi', kind: 'up', file: 'Brembilla_SalitaBrembillaTreFaggi_EBIKE.gpx', link: '2021/07/tre-faggi-blello-brembilla' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 95, zone: 'bassa_brembana, brembilla', name: 'Salita da Brembilla a Crosnello e al Pizzo Cerro', kind: 'up', file: 'Brembilla_SalitaBrembillaCrosnelloPizzoCerro_EBIKE.gpx', link: '2021/07/pizzo-cerro-piane-brembilla' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, comm: "50% da Catremerio, 200m dislivello a spinta", zone: 'bassa_brembana, brembilla', name: 'Salita da Catremerio al Passo del Mercante del Ferro', kind: 'up', file: 'Brembana_SalitaCatremerioPassoMercanteDelFerro_EBIKE.gpx', link: '2021/08/monte-foldone-e-sornadello' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Salita da Brembilla a Berbenno CAT', kind: 'up', file: 'Brembilla_SalitaBrembillaCAT_EBIKE.gpx', link: '2021/09/lera' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Salita da Brembilla alla Forcella di Berbenno', kind: 'up', file: 'Brembilla_SalitaBrembillaForcellaBerbenno_EBIKE.gpx', link: '2021/09/ripe' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Salita da Brembilla, Castignola, S. Antonio Abbandonato, Strada Taverna, Catremerio', kind: 'up', file: 'Brembilla_SalitaCastignolaSAntonioTavernaCatremerio_EBIKE.gpx', link: '2020/11/catremerio-truca-brembilla' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_brembana, brembilla', name: 'Salita dal Colle di Berbenno al Passo del Canto', kind: 'up', file: 'Brembilla_SalitaColleBerbennoCanto_EBIKE.gpx', link: '2021/11/laxolo' },

//
// BASSA BREMBANA
//
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_brembana', name: 'S. Antonio Abbandonato, Casarielli, Zogno', kind: 'down', file: 'Brembana_SAntonioCasarielli.gpx', link: '2020/07/casarielli' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'bassa_brembana', name: 'S. Antonio Abbandonato, Strada Taverna, Ponti', kind: 'down', file: 'Brembana_SAntonioTaverna.gpx', link: '2020/07/strada-taverna' },
{ vote: 2, rate: 2, rate_max: 4, cycle: 100, zone: 'bassa_brembana', name: 'Ca del C\u00E8co, Sonzogno, Pernice, Zogno', kind: 'down', file: 'Brembana_CecoSonzognoPerniceZogno.gpx', link: '2021/06/ceco-sonzogno-pernice' },
{ vote: 2, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_brembana', name: '505A, Zogno', kind: 'down', file: 'Brembana_505AZogno.gpx', link: '2021/06/ceco-sonzogno-pernice' },
{ vote: 2, rate: 3, rate_max: 0, cycle: 100, zone: 'bassa_brembana', name: 'Monte Castello, Algua, Zogno', kind: 'down', file: 'Brembana_MonteCastelloAlguaZogno.gpx', link: '2021/06/monte-castello' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_brembana', name: 'Crosnello, Sussia, Vettarola', kind: 'down', file: 'Brembana_CrosnelloSussiaVettarola.gpx', link: '2020/08/crosnello-sussia-vettarola-san' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_brembana', name: 'Pizzo di Spino, San Pellegrino', kind: 'down', file: 'Brembana_PizzoSpinoSanPellegrino.gpx', link: '2020/11/pizzo-spino' },
{ vote: 2, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_brembana', name: 'Forcella di Spettino, Molini, San Pellegrino', kind: 'down', file: 'Brembana_ForcellaSpettinoMolini.gpx', link: '2021/02/forcella-di-spettino-molini' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 99, zone: 'bassa_brembana', name: 'Periplo del Monte Gioco', kind: 'down', file: 'Brembana_PeriploMonteGioco_EBIKE.gpx', link: '2021/02/periplo-monte-gioco' },
{ vote: 5, rate: 4, rate_max: 0, cycle: 100, zone: 'bassa_brembana', name: 'Valcumina', kind: 'down', file: 'Brembana_Valcumina.gpx', link: '2021/05/valcumina' },
{ vote: 1, rate: 3, rate_max: 0, cycle: 100, zone: 'bassa_brembana, frasnito', name: 'Sussia Alta, Frasnito, San Pellegrino', kind: 'down', file: 'Brembana_SussiaFrasnito.gpx', link: '2021/03/sussia-frasnito' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'bassa_brembana, frasnito', name: 'Vetta, Frasnito', kind: 'down', file: 'Brembana_VettaFrasnito.gpx', link: '2021/03/sussia-frasnito' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_brembana', name: 'Monte Molinasco, San Giovanni Bianco', kind: 'down', file: 'Brembana_MolinascoSanGiovanniBianco.gpx', link: '2021/03/monte-molinasco' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_brembana, pradai', name: 'Panchina Gigante, Pradai, Frasnadello', kind: 'down', file: 'Brembana_PanchinaGigantePradaiFrasnadello.gpx', link: '2021/06/panchina-gigante-pradai-frasnadello' },
{ vote: 2, rate: 2, rate_max: 3, cycle: 100, zone: 'bassa_brembana, pradai', name: 'Campel, Cresta, Frasnadello', kind: 'down', file: 'Brembana_CampelCrestaFrasnadello.gpx', link: '2021/06/panchina-gigante-pradai-frasnadello' },
// climp
{ vote: 0, rate: 0, rate_max: 0, cycle: 90, zone: 'bassa_brembana', name: 'Salita da S. Antonio Abbandonato a Ca del C\u00E8co', kind: 'up', file: 'Brembana_SalitaSantAntonioCeco_EBIKE.gpx', link: '2021/06/ceco-sonzogno-pernice' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_brembana, pradai', name: 'Salita da Spettino alla Panchina Gigante', kind: 'up', file: 'Brembana_SalitaSpettinoPanchinaGigante_EBIKE.gpx', link: '2021/06/panchina-gigante-pradai-frasnadello' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_brembana', name: 'Salita da Zogno al Monte Castello', kind: 'up', file: 'Brembana_SalitaZognoMonteCastello_EBIKE.gpx', link: '2021/06/monte-castello' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_brembana', name: 'Salita da Zogno a S. Antonio Abbandonato', kind: 'up', file: 'Brembana_SalitaZognoSAntonio_EBIKE.gpx', link: '2020/07/casarielli' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 75, zone: 'bassa_brembana', name: 'Salita da San Pellegrino al Pizzo di Spino', kind: 'up', file: 'Brembana_SalitaSantaCrocePizzoSpino_EBIKE.gpx', link: '2020/11/pizzo-spino' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_brembana', name: 'Salita da San Pellegrino alla Forcella di Spettino', kind: 'up', file: 'Brembana_SalitaForcellaSpettino_EBIKE.gpx', link: '2021/02/forcella-di-spettino-molini' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'bassa_brembana, frasnito', name: 'Salita da San Pellegrino a Frasnito e Sussia', kind: 'up', file: 'Brembana_SalitaFrasnitoSussia_EBIKE.gpx', link: '2021/03/sussia-frasnito' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 95, zone: 'bassa_brembana', name: 'Salita da San Giovanni Bianco al Monte Molinasco', kind: 'up', file: 'Brembana_SalitaMolinasco_EBIKE.gpx', link: '2021/03/monte-molinasco' },
// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 98, zone: '', name: 'Salita da Salvarizza alla Forcella della Valcumina', kind: 'up', file: 'Brembana_SalvarizzaForcellaValcumina_EBIKE.gpx', link: '2021/05/valcumina' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita da San Pellegrino a Salvarizza', kind: 'up', file: 'Brembana_SalitaSalvarizza_EBIKE.gpx', link: '2021/02/periplo-monte-gioco' },

//
// SERINA
//
{ vote: 5, rate: 2, rate_max: 3, cycle: 99, zone: 'serina, brembana', name: 'Cima di Grem, Cresta, Zambla Alta', kind: 'down', file: 'Serina_CimaGremCrestaZambla.gpx', link: '2022/11/cima-di-grem' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 80, zone: 'serina, brembana', name: 'Salita Zambla Alta, Capanna 2000, Cima di Grem', kind: 'up', file: 'Serina_SalitaZamblaPlassaCapanna200CimaGrem_EBIKE.gpx', link: '2022/11/cima-di-grem'  },
{ vote: 4, rate: 2, rate_max: 3, cycle: 95, zone: 'serina, brembana', name: 'Capanna 2000, Sentiero dei Fiori, Val Vedra', kind: 'down', file: 'Serina_Capanna2000VedraOltreIlColle.gpx', link: '2022/11/val-vedra' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'serina, brembana', name: 'Salita Oltre il Colle, Capanna 2000', kind: 'up', file: 'Serina_SalitaOltreIlColleCapanna2000_EBIKE.gpx', link: '2022/11/val-vedra' },

//
// ALTA BREMBANA
//
{ vote: 5, rate: 2, rate_max: 3, cycle: 100, zone: 'alta_brembana', name: 'Terza dell\'Avaro', kind: 'down', file: 'Brembana_AvaroTerza.gpx', link: '2020/08/terza-avaro' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Piani dell\' Avaro, Monte Disner', kind: 'down', file: 'Brembana_AvaroDisner.gpx', link: '2021/09/avaro-disner' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'alta_brembana', name: 'Monte Torcola, Piazza Brembana', kind: 'down', file: 'Brembana_TorcolaPiazzaBrembana.gpx', link: '2020/09/monte-torcola-piazza-brembana' },
{ vote: 5, rate: 3, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Rifugio Torcole, Bolli Arancio, Piazzolo', kind: 'down', file: 'Brembana_TorcolaBolliArancioPiazzolo.gpx', link: '2020/09/rifugio-torcole-bolli-arancio-piazzolo' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'alta_brembana', name: 'Passo San Marco, 113, via del Ferro', kind: 'down', file: 'Brembana_SanMarco113Ferro.gpx', link: '2020/09/passo-san-marco-113-via-del-ferro' },
{ vote: 4, rate: 2, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Val Terzera, Piazzatorre', kind: 'down', file: 'Brembana_TerzeraPiazzatorre.gpx', link: '2021/08/val-terzera' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'alta_brembana', name: 'Baita Campo, 127, Olmo al Brembo', kind: 'down', file: 'Brembana_BaitaCampoOlmo.gpx', link: '2020/09/baita-campo-olmo-al-brembo' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'alta_brembana', name: 'Enzo Ronzoni (Ornica, Caprile)', kind: 'down', file: 'Brembana_EnzoRonzoni.gpx', link: '2021/10/enzo-ronzoni' },
{ vote: 4, rate: 3, rate_max: 4, cycle: 100, zone: 'alta_brembana', name: 'Pizzo Badile, Piazzatorre', kind: 'down', file: 'Brembana_PizzoBadilePiazzatorre.gpx', link: '2021/08/pizzo-badile' },
{ vote: 5, rate: 2, rate_max: 3, cycle: 100, zone: 'alta_brembana', name: 'Monte Mincucco, Diga di Valmora, Cantedoldo, Averara', kind: 'down', file: 'Brembana_MincuccoDigaValMoraCantedoldoAverara.gpx', link: '2022/07/mincuccocantedoldo' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Laghetti di Ponteranica, Diga di Valmora, Caprile, Santa Brigida', kind: 'down', file: 'Brembana_PonteranicaDigaValmoraCaprileSantaBrigida.gpx', link: '2022/07/ponteranica-valmora' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Piani dell\'Avaro, Corna Rossa', kind: 'down', file: 'Brembana_AvaroCornaRossa.gpx', link: '2021/11/corna-rossa' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 99, zone: 'alta_brembana', name: 'Valle d\'Inferno', kind: 'down', file: 'Brembana_ValInferno.gpx', link: '2021/10/val-dinferno' },
{ vote: 3, rate: 3, rate_max: 4, cycle: 80, zone: 'alta_brembana', name: 'Passo Selletta, Rifugio Calvi, Sentiero Estivo, Carona', kind: 'down', file: 'Brembana_SellettaCalviEstivoCarona.gpx', link: '2022/07/selletta-calvi-estivo' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 98, zone: 'alta_brembana', name: 'Cima di Lemma, Passo Tartano, Prato Marino, Valleve', kind: 'down', file: 'Brembana_CimaLemmaPassoTartanoPratoMarinoValleve.gpx', link: '2022/07/cima-lemma-tartano' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 95, zone: 'alta_brembana', name: 'Cresta Monte Chierico, Val Sambuzza, Carona', kind: 'down', file: 'Brembana_ChiericoSambuzzaCarona.gpx', link: '2022/07/carisole-sambuzza' },
{ vote: 4, rate: 3, rate_max: 4, cycle: 98, zone: 'alta_brembana', name: 'Cima Montebello, Passo Dordona, Valleve', kind: 'down', file: 'Brembana_CimaMontebelloPassoDordonaValleve.gpx', link: '2022/08/valcervia-dordona' },
{ vote: 5, rate: 4, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Lago Colombo, 212, Branzi', kind: 'down', file: 'Brembana_Colombo212Branzi.gpx', link: '2022/08/colombo-212' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'alta_brembana', name: 'Cima Montebello, Lago Moro, Rifugio Mirtillo, Carona', kind: 'down', file: 'Brembana_CimaMontebelloLagoMoroMirtilloCarona.gpx', link: '2022/08/lago-moro' },
{ vote: 5, rate: 1, rate_max: 2, cycle: 100, zone: 'alta_brembana', name: 'Porta delle Cornacchie, Piccarelli, Lenna', kind: 'down', file: 'Brembana_CornacchiePiccarelliLenna.gpx', link: '2022/09/cornacchie' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'alta_brembana', name: 'Baite di Mezzeno, Passo del Vendulo, Piccarelli, Lenna', kind: 'down', file: 'Brembana_MezzenoVenduloPiccarelliLenna.gpx', link: '2022/09/mezzeno' },
{ vote: 1, rate: 3, rate_max: 5, cycle: 80, zone: 'alta_brembana', name: 'Monte Torcola, 126, Moio de Calvi', kind: 'down', file: 'Brembana_Torcola126Moio.gpx', link: '2021/11/monte-torcola-126-moio-de-calvi' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Passo San Marco, Via Priula', kind: 'down', file: 'Brembana_SanMarcoViaPriula.gpx', link: '2021/11/via-priula' },
// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Salita da Piazza Brembana al Monte Torcola', kind: 'up', file: 'Brembana_SalitaPiazzaBrembanaTorcola_EBIKE.gpx', link: '2020/09/monte-torcola-piazza-brembana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Salita da Olmo al Brembo al Passo San Marco', kind: 'up', file: 'Brembana_SalitaOlmoSanMarco_EBIKE.gpx', link: '2020/09/passo-san-marco-113-via-del-ferro' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Salita da Olmo al Brembo al Monte Torcola', kind: 'up', file: 'Brembana_SalitaOlmoPiazzatorreTorcola_EBIKE.gpx', link: '2020/09/rifugio-torcole-bolli-arancio-piazzolo' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Salita alla Baita Campo', kind: 'up', file: 'Brembana_SalitaBaitaCampo_EBIKE.gpx', link: '2020/09/baita-campo-olmo-al-brembo' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Salita Piazzatorre, Via Priula, Val Terzera', kind: 'up', file: 'Brembana_SalitaPiazzatorePriulaTerzera_EBIKE.gpx', link: '2021/08/val-terzera' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 95, zone: 'alta_brembana', name: 'Salita Piazzatorre, Forcolino, Pizzo Badile', kind: 'up', file: 'Brembana_SalitaPiazzatorreForcolinoPizzoBadile_EBIKE.gpx', link: '2021/08/pizzo-badile' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 76, zone: 'alta_brembana', name: 'Salita Averara, Piani dell\'Avaro, Monte Mincucco', kind: 'up', file: 'Brembana_SalitaAveraraAvaroMincucco_EBIKE.gpx', link: '2022/07/mincuccocantedoldo' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 80, zone: 'alta_brembana', name: 'Salita Santa Brigida, Piani dell\'Avaro, Monte Mincucco', kind: 'up', file: 'Brembana_SalitaSantaBrigidaAvaroPonteranica_EBIKE.gpx', link: '2022/07/ponteranica-valmora' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Salita Mezzoldo, Via Priula, Passo San Marco', kind: 'up', file: 'Brembana_SalitaViaPriulaSanMarco_EBIKE.gpx', link: '2021/11/via-priula' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 60, zone: 'alta_brembana', name: 'Salita Carona, Rifugio Longo, Lago del Diavolo, Passo Selletta', kind: 'up', file: 'Brembana_SalitaCaronaLongoDiavoloSelletta_EBIKE.gpx', link: '2022/07/selletta-calvi-estivo' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 50, zone: 'alta_brembana', name: 'Salita Valleve, San Simone, Passo di Lemma, Cima di Lemma', kind: 'up', file: 'Brembana_SalitaValleveSanSimoneCimaLemma_EBIKE.gpx', link: '2022/07/cima-lemma-tartano' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 85, zone: 'alta_brembana', name: 'Carona, Val Carisole, Lago di Carisole, Cresta Monte Chierico', kind: 'up', file: 'Brembana_SalitaCaronaCarisoleChierico_EBIKE.gpx', link: '2022/07/carisole-sambuzza' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 70, zone: 'alta_brembana', name: 'Salita Valleve, Lago Moro, Passo Valcervia, Cima Montebello', kind: 'up', file: 'Brembana_SalitaValleveLagoMoroCimaMontebello_EBIKE.gpx', link: '2022/08/valcervia-dordona' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 80, zone: 'alta_brembana', name: 'Salita Branzi, Carona, Laghi Gemelli, Lago Colombo', kind: 'up', file: 'Brembana_BranziCaronaGemelliColombo_EBIKE.gpx', link: '2022/08/colombo-212' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 80, zone: 'alta_brembana', name: 'Salita Carona, Lago Moro, Cima Montebello', kind: 'up', file: 'Brembana_SalitaCaronaLagoMoroCimaMontenbello_EBIKE.gpx', link: '2022/08/lago-moro' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'alta_brembana', name: 'Salita Lenna, Roncobello, Mezzeno', kind: 'up', file: 'Brembana_SalitaLennaRoncobelloMezzeno_EBIKE.gpx', link: '2022/09/mezzeno' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 99, zone: 'alta_brembana', name: 'Salita Lenna, Valsecca, Strada Piana, Porta delle Cornacchie', kind: 'up', file: 'Brembana_SalitaLennaValseccaPianaCornacchie_EBIKE.gpx', link: '2022/09/cornacchie' },
// replaced
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: '', name: 'Lago Moro, Rifugio Mirtillo, Carona', kind: 'down', file: 'Brembana_LagoMoroCarona.gpx', link: '2021/10/lago-moro' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita Branzi, Foppolo, Lago Moro', kind: 'up', file: 'Brembana_SalitaFoppoloLagoMoro_EBIKE.gpx', link: '2021/10/lago-moro' },
// replaced
{ vote: 3, rate: 3, rate_max: 0, cycle: 97, zone: '', name: 'Incrocio 101, Acqua Nera, Diga Valmora, Caprile', kind: 'down', file: 'Brembana_Incrocio101AcquaNeraDigaValmoraCaprile.gpx', link: '2021/10/101-valmora' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 98, zone: '', name: 'Salita Santa Brigida, Piani dell\'Avaro, Incrocio 101', kind: 'up', file: 'Brembana_SalitaSantaBrigidaAvaroIncrocio101_EBIKE.gpx', link: '2021/10/101-valmora' },
// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita da Olmo al Brembo ai Piani dell\'Avaro', kind: 'up', file: 'Brembana_SalitaOlmoAvaro_EBIKE.gpx', link: '2020/08/terza-avaro' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: '', name: 'Salita Santa Brigida, Colle Maddalena', kind: 'up', file: 'Brembana_SalitaSantaBrigidaColleMaddalena_EBIKE.gpx', link: '2021/10/val-dinferno' },

//
// CAVALLINA
//
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'cavallina, argon', name: 'Percorso Vita', kind: 'down', file: 'Cavallina_ArgonPercorsoVita.gpx', link: '2021/05/argon' },
{ vote: 2, rate: 1, rate_max: 3, cycle: 100, zone: 'cavallina, argon', name: 'Pietria dell\'Eremo', kind: 'down', file: 'Cavallina_ArgonPietraiaEremo.gpx', link: '2021/05/argon' },
{ vote: 3, rate: 1, rate_max: 2, cycle: 100, zone: 'cavallina, argon', name: 'San Giorgio, Valle d\'Albano', kind: 'down', file: 'Cavallina_ArgonSanGiorgioValleAlbano.gpx', link: '2021/05/argon' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'cavallina, argon', name: 'Valle d\'Albano', kind: 'down', file: 'Cavallina_ArgonValleAlbano.gpx', link: '2021/05/argon' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'cavallina, argon', name: 'Sentiero della Luna', kind: 'down', file: 'Cavallina_ArgonSentieroDellaLuna.gpx', link: '2021/05/argon' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina, argon', name: 'Vertical', kind: 'down', file: 'Cavallina_ArgonVertical.gpx', link: '2021/05/argon' },
{ vote: 3, rate: 1, rate_max: 0, cycle: 100, zone: 'cavallina, argon', name: 'Welcome to the Jungle', kind: 'down', file: 'Cavallina_ArgonWelcomeToTheJungle.gpx', link: '2021/05/argon' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina, argon', name: 'Salita al Colle di Pasta e Monte d\'Argon', kind: 'up', file: 'Cavallina_ArgonSalitaPastaArgon_EBIKE.gpx', link: '2021/05/argon' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina, argon', name: 'Salita al Colle di Pasta', kind: 'up', file: 'Cavallina_ArgonSalitaPasta_EBIKE.gpx', link: '2021/05/argon' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina, argon', name: 'Salita al Monte d\'Argon', kind: 'up', file: 'Cavallina_ArgonSalitaMonteArgon_EBIKE.gpx', link: '2021/05/argon' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 99, zone: 'cavallina, misma', name: 'Misma, Santa Maria, Cenate', kind: 'down', file: 'Cavallina_MismaCenate.gpx', link: '2021/04/misma-santa-maria-cenate-sopra' },
{ vote: 5, rate: 2, rate_max: 3, cycle: 100, zone: 'cavallina, misma', name: 'Corna Clima, Sant\'Ambrogio', kind: 'down', file: 'Cavallina_CornaClimaSantAmbrogio.gpx', link: '2021/05/sant-ambrogio' },
{ vote: 5, rate: 2, rate_max: 0, cycle: 100, zone: 'cavallina, misma', name: 'Corna Clima, Mirabile', kind: 'down', file: 'Cavallina_CornaClimaMirabileVallese.gpx', link: '2022/03/mirabile' },
{ vote: 4, rate: 2, rate_max: 3, cycle: 100, zone: 'cavallina', name: 'Faisecco, Prati Alti, 611, Luzzana', kind: 'down', file: 'Cavallina_FaiseccoPratiAlti611Luzzana.gpx', link: '2022/03/pranza-luzzana' },
{ vote: 2, rate: 1, rate_max: 0, cycle: 100, zone: 'cavallina, minardi', name: 'Pistino Minardi 1', kind: 'down', file: 'Cavallina_Minardi1.gpx', link: '2022/03/minardi' },
{ vote: 4, rate: 1, rate_max: 0, cycle: 100, zone: 'cavallina, minardi', name: 'Pistino Minardi 2', kind: 'down', file: 'Cavallina_Minardi2.gpx', link: '2022/03/minardi' },
{ vote: 4, rate: 1, rate_max: 2, cycle: 100, zone: 'cavallina, minardi', name: 'Pistino Minardi 3', kind: 'down', file: 'Cavallina_Minardi3.gpx', link: '2022/03/minardi' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina, minardi', name: 'Pistino Minardi Muro', kind: 'down', file: 'Cavallina_MinardiMuro.gpx', link: '2022/03/minardi' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina, minardi', name: 'Salita a Minardi', kind: 'up', file: 'Cavallina_SalitaMinardi_EBIKE.gpx', link: '2022/03/minardi' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Prati Alti, 611A, Luzzana', kind: 'down', file: 'Cavallina_PratiAlti611AEntratico.gpx', link: '2022/04/prati-alti-luzzana' },
{ vote: 5, rate: 2, rate_max: 0, cycle: 100, zone: '', name: 'Corna Clima, Mirabile, Entratico', kind: 'down', file: 'Cavallina_CornaClimaMirabileEntratico.gpx', link: '2022/03/mirabile' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina, misma', name: 'Valpredina, Cenate Sopra', kind: 'down', file: 'Cavallina_ValpredinaCenateSopra.gpx', link: '2021/05/valpredina' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Salita da Entratico alla Corna Clima', kind: 'up', file: 'Cavallina_SalitaEntraticoCornaClima_EBIKE.gpx', link: '2022/03/mirabile' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Salita da Entratico ai Prati Alti ', kind: 'up', file: 'Cavallina_SalitaEntraticoLuzzanaPratiAlti_EBIKE.gpx', link: '2022/04/prati-alti-luzzana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina, misma', name: 'Salita da Tribulina alla Corna Clima', kind: 'up', file: 'Cavallina_SalitaTribuliaCornaClima_EBIKE.gpx', link: '2021/05/sant-ambrogio' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Monte Grione, 618, Endine Gaiano', kind: 'down', file: 'Cavallina_Grione618Endine.gpx', link: '2022/02/monte-grione' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Malga Lunga, 563, Sovere, Endine Gaiano', kind: 'down', file: 'Cavallina_MalgaLonga563SovereEndine.gpx', link: '2022/02/malga-lunga-563' },
{ vote: 4, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Monte Ballerino, Cummia, Colognola, Borgo di Terzo', kind: 'down', file: 'Cavallina_BallerinoCummiaColognola.gpx', link: '2022/03/colli-san-fermo-cummia-colognola' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Monte Gremalto, Val Torrezzo, Colognola, Borgo di Terzo', kind: 'down', file: 'Cavallina_GremaltoTorrezzoColognola.gpx', link: '2022/06/val-torrezzo' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Monte Sicolo, Endine Gaiano', kind: 'down', file: 'Cavallina_SicoloEndine.gpx', link: '2022/04/monte-sicolo' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 98, zone: 'cavallina', name: 'Monte Torrezzo, Endine Gaiano', kind: 'down', file: 'Cavallina_TorrezzoEndine.gpx', link: '2022/04/monte-torrezzo' },
{ vote: 2, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Monte Boario, Solto Collina', kind: 'down', file: 'Cavallina_BoarioSoltoCollina.gpx', link: '2022/05/monte-boario' },
{ vote: 3, rate: 2, rate_max: 4, cycle: 100, zone: 'cavallina', name: 'Monte Pranz\u00E0, Cesul\u00EC, Casazza', kind: 'down', file: 'Cavallina_PranzaCesuliCasazza.gpx', link: '2022/05/pranza-cesuli-casazza' },
{ vote: 3, rate: 2, rate_max: 3, cycle: 100, zone: 'cavallina', name: 'Monte Colombina, Forcellino di Bossico, Bossico, Sovere', kind: 'down', file: 'Cavallina_ColombinaForcellinoBossicoSovere.gpx', link: '2022/06/monte-colombina' },
{ vote: 3, rate: 2, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Valico di San Fermo, Buca del Corno, Zandobbio', kind: 'down', file: 'Cavallina_SanFermoCornoZandobbio.gpx', link: '2022/06/buca-del-corno' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 90, zone: 'cavallina', name: 'Salita Casazza, Colle Gallo, Monte Pranz\u00E0', kind: 'up', file: 'Cavallina_SalitaCasazzaPranza_EBIKE.gpx', link: '2022/05/pranza-cesuli-casazza' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Salita Endine Gaiano, Forcella di Ranzanico, Monte Grione', kind: 'up', file: 'Cavallina_SalitaEndineForcellaGrione_EBIKE.gpx', link: '2022/02/monte-grione' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Salita Endine Gaiano, Forcella di Ranzanico, Malga Lunga', kind: 'up', file: 'Cavallina_SalitaEndineForcellaMalgaLunga_EBIKE.gpx', link: '2022/02/malga-lunga-563' },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina, ranzanico', name: 'Forcella di Ranzanico, 618, Ranzanico', kind: 'down', file: 'Cavallina_Forcella618Ranzanico.gpx', link: '2022/02/doppietta-ranzanico'  },
{ vote: 3, rate: 3, rate_max: 0, cycle: 100, zone: 'cavallina, ranzanico', name: 'Forcella di Ranzanico, Sorgenti Bondo, Ranzanico', kind: 'down', file: 'Cavallina_ForcellaSorgenteRanzanico.gpx', link: '2022/02/doppietta-ranzanico'  },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina, ranzanico', name: 'Salita Spinone al Lago, Forcella di Ranzanico', kind: 'up', file: 'Cavallina_SalitaSpinoneForcellaRanzanico_EBIKE.gpx', link: '2022/02/doppietta-ranzanico' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina, ranzanico', name: 'Collegamento Ranzanico, Spinone al Lago', kind: 'up', file: 'Cavallina_CollegamentoRanzanicoSpinone_EBIKE.gpx', link: '2022/02/doppietta-ranzanico' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Salita Entratico, Casazza, Colle Gallo, Faisecco', kind: 'up', file: 'Cavallina_SalitaEntraticoCasazzaFaisecco_EBIKE.gpx', link: '2022/03/pranza-luzzana' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Salita Borgo di Terzo, 615, Colle di San Fermo, Monte Ballerino', kind: 'up', file: 'Cavallina_SalitaTerzo615SanFermoBallerino_EBIKE.gpx', link: '2022/03/colli-san-fermo-cummia-colognola' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Salita Borgo di Terzo, Grone, Colle di San Fermo, Monte Gremalto', kind: 'up', file: 'Cavallina_SalitaTerzoGroneSanFermoGremalto_EBIKE.gpx', link: '2022/06/val-torrezzo' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Salita Endine Gaiano, Fonteno, Monte Sicolo', kind: 'up', file: 'Cavallina_SalitaEndineSicolo_EBIKE.gpx', link: '2022/04/monte-sicolo' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Salita Endine Gaiano, Fonteno, Monte Torrezzo', kind: 'up', file: 'Cavallina_SalitaEndineTorrezzo_EBIKE.gpx', link: '2022/04/monte-torrezzo' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 99, zone: 'cavallina', name: 'Salita Solto Collina, Fonteno, Monte Boario', kind: 'up', file: 'Cavallina_SalitaSoltoCollinaBoario_EBIKE.gpx', link: '2022/05/monte-boario' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 95, zone: 'cavallina', name: 'Salita Sovere, Falecchio, Monte Colombia', kind: 'up', file: 'Cavallina_SalitaSovereFalecchioColombina_EBILE.gpx', link: '2022/06/monte-colombina' },
{ vote: 0, rate: 0, rate_max: 0, cycle: 100, zone: 'cavallina', name: 'Salita Zandobbio, Grone, Valico San Fermo', kind: 'up', file: 'Cavallina_SalitaZandobbioGroneSanFermo_EBIKE.gpx', link: '2022/06/buca-del-corno' },
];
