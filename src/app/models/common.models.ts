// import {
//     Action,
//     Activite,
//     Agent,
//     BudgetProgramme,
//     Exercice,
//     Fonction,
//     Indicateur,
//     IndicateurDescription,
//     MultilingualLabel,
//     Objectif,
//     Organigramme,
//     Programme,
//     Responsable,
//     SaveActionDto,
//     SaveActiviteDto,
//     SaveIndicateurDto,
//     SaveObjectif,
//     SaveParagraphe,
//     SaveParagrapheRealisation,
//     SaveParagrapheUnitePhysique,
//     SaveProgrammeDto,
//     SaveTacheAEP,
//     SaveTacheCTD,
//     SaveTacheDto,
//     SaveTacheFINEX,
//     SourceFinancement,
//     Tache,
//     TacheAEP,
//     TacheCTD,
//     TacheFINEX,
//     TacheLocalisation
// } from '@probmis/utils';
//
// export function createDefaultExercice(): Exercice {
//     return {
//         exerciceId: '',
//         exCode: '',
//         exLibelle: {
//             fr: '',
//             en: ''
//         },
//         exDateDebut: new Date(),
//         exDateFin: new Date(),
//         exDateMaj: true,
//     }
// }
//
// export function createDefaultSourceFinancement(): SourceFinancement {
//     return {
//         sourceFinancementId: '',
//         objetFinancementId: '',
//         typeFinancementId: '',
//         bailleursDeFondsId: '',
//         sfCode: '',
//         sfLibelle: {
//             fr: '',
//             en: ''
//         }
//     }
// }
//
// export function createDefaultIndicateurDescription(): IndicateurDescription[] {
//     return [
//         {
//             indicateurDescriptionId: null,
//             serviceRespAtteinteObjectif: {
//                 fr: '',
//                 en: ''
//             },
//             autresServicesAtteinteObjectif: {
//                 fr: '',
//                 en: ''
//             },
//             naturePrecise: {
//                 fr: '',
//                 en: ''
//             },
//             modeCalcul: {
//                 fr: '',
//                 en: ''
//             },
//             periodiciteMesure: {
//                 fr: '',
//                 en: ''
//             },
//             dernierResultatDate: '', // ISO date string
//             dernierResultatValeur: {
//                 fr: '',
//                 en: ''
//             },
//             previsionAnnuelleDate1: '', // ISO date string
//             previsionAnnuelleValeur1: {fr: ''},
//             previsionAnnuelleDate2: '', // ISO date string
//             previsionAnnuelleValeur2: {fr: ''},
//             previsionAnnuelleDate3: '', // ISO date string
//             previsionAnnuelleValeur3: {fr: ''},
//             sourceDonnee: {
//                 fr: '',
//                 en: ''
//             },
//             modeCollecte: {
//                 fr: '',
//                 en: ''
//             },
//             serviceCollecte: {
//                 fr: '',
//                 en: ''
//             },
//             verificationDonnee: {
//                 fr: '',
//                 en: ''
//             },
//             serviceResponsableSyntDonnee: {
//                 fr: '',
//                 en: ''
//             },
//             serviceResponsableAnalyse: {
//                 fr: '',
//                 en: ''
//             },
//             coutCollecteAnalyse: {
//                 fr: '',
//                 en: ''
//             },
//             limiteConnu: {
//                 fr: '',
//                 en: ''
//             },
//             modaliteInterpretation: {
//                 fr: '',
//                 en: ''
//             },
//             commentaires: {
//                 fr: '',
//                 en: ''
//             },
//         }
//     ]
// }
//
// export function createDefaultBudgetProgramme(): BudgetProgramme {
//     return {
//         budgetProgrammeId: '',
//         bpCode: '',
//         bpLibelle: createDefaultMultilingualLabel(),
//         bpNbreAnnee: 0,
//         bpAnneeDebutBudgetProgramme: '',
//         bpAnneeFinBudgetProgramme: '',
//         nbreAnnee: 0
//     };
// }
//
// export function createDefaultIndicateur(): Indicateur[] {
//     return [
//         {
//             indicateurId: null,
//             inNumOrdre: 0,
//             inLibelle: {
//                 fr: '',
//                 en: ''
//             },
//             inDescription: {
//                 fr: '',
//                 en: ''
//             },
//             inValeurRef: 0,
//             inDateRef: "",
//             inValeurCible: 0,
//             inDateCible: '',
//             inPeriodicite: 0,
//             inSourceVerification: {
//                 fr: '',
//                 en: ''
//             },
//             inSeuil: 0,
//             inAmplitude: 0,
//             inSensEvolution: '',
//             umSymboleMesure: '',
//             umSymbolePeriodicite: '',
//             inSiNouveau: false,
//             inSiDeclencheur: false,
//             inValeurDeclencheur: 0,
//             trCodeTranche: 0,
//             inUserMaj: '',
//             inDateMaj: '',
//             inSourceDonnee: '',
//             inValeurIntermediaire1: 0,
//             inDateIntermediaire1: "",
//             inValeurIntermediaire2: 0,
//             inDateIntermediaire2: "",
//             inValeurIntermediaire3: 0,
//             inDateIntermediaire3: "",
//             realisatioNm1: 0,
//             inValeurCSP1: 0,
//             inValeurCSP2: 0,
//             inValeurCSP3: 0,
//             inValeurCSP0: 0,
//             inValeurCibleBudget: 0,
//             inDateCibleBudget: '',
//             inValeurRefBudget: 0,
//             inDateRefBudget: '',
//             inValeurPassee: 0,
//             inDatePassee: '',
//             inValeurAttendue: 0,
//             inDateAttendue: '',
//             indicateurDescriptions: createDefaultIndicateurDescription()
//         }
//     ]
// }
//
// export function createDefaultObjectif(): Objectif[] {
//     return [
//         {
//             objectifId: null,
//             obNumOrdre: 0,
//             obLibelle: {
//                 fr: '',
//                 en: ''
//             },
//             obUserMaj: "",
//             obDateMaj: "",
//             indicateurs: createDefaultIndicateur(),
//         }
//     ]
// }
//
// export function createDefaultResponsable(): Responsable {
//     return {
//         agent: {} as Agent,
//         organigramme: {} as Organigramme,
//         resDateDebut: '',
//         respDateFin: '',
//         responsableId: ''
//     }
// }
//
// export function createDefaultProgramme(): Programme {
//     return {
//         programmeId: null,
//         budgetProgrammeId: createDefaultBudgetProgramme().budgetProgrammeId,
//         programmeCodeId: null,
//         pgPresentation: {
//             fr: '',
//             en: ''
//         },
//         pgStrategique: {
//             fr: '',
//             en: ''
//         },
//         pgUserMaj: '',
//         pgDateMaj: '',
//         pgDateDebut: '',
//         pgDateFin: '',
//         pgEtat: 0,
//         pgApprobation: 0,
//         pgSndVersion: 0,
//         pgNumOrdre: 0,
//         pgCode: '',
//         pgAbbreviation: '',
//         pgLibelle: {
//             fr: '',
//             en: ''
//         },
//         pgProgrammeIdOld: '',
//         pgContexte: {
//             fr: '',
//             en: ''
//         },
//         pgDispositif: {
//             fr: '',
//             en: ''
//         },
//         pgIsDotation: true,
//         objectifs: createDefaultObjectif(),
//         responsable: createDefaultResponsable()
//     };
// }
//
// export function createDefaultAction(): Action {
//     return {
//         actionId: null,
//         acCode: '',
//         acNumOrdre: 0,
//         acAbbreviation: '',
//         acLibelle: {
//             fr: '',
//             en: ''
//         },
//         acPresentation: {
//             fr: '',
//             en: ''
//         },
//         acUserMaj: '',
//         acDateMaj: '',
//         acLieuExecution: {
//             fr: '',
//             en: ''
//         },
//         acSndVersion: 0,
//         acIdOld: '',
//         acJustifCout: {
//             fr: '',
//             en: ''
//         },
//         acIsSousDotation: true,
//         programme: createDefaultProgramme(),
//         responsable: createDefaultResponsable()
//     }
// }
//
// export function createDefaultSaveTache(): SaveTacheDto {
//     return {
//         agMatricule: null,
//         organigrammeId: null,
//         taFonctionId: '',
//         tacheId: '',
//         taProjetOperationId: '',
//         taActiviteId: '',
//         //taBeneficiaireId: '',
//         taExerciceId: '',
//         taOrganisationId: '',
//         taSourceFinancementId: '',
//         taCompetenceId: '',
//         localisationIds: [],
//         taCode: '',
//         taNumOrdre: 0,
//         taLibelle: {
//             fr: '',
//             en: ''
//         },
//         taCout: 0,
//         taCoutAEAnneeN: 0,
//         taCoutAEAnneeNp1: 0,
//         taCoutAEAnneeNp2: 0,
//         taCoutAEAnneeNm1: 0,
//         taCoutAEAnneeNm2: 0,
//         taCoutAEAnneeNm3: 0,
//         taCoutCPAnneeN: 0,
//         taCoutCPAnneeNp1: 0,
//         taCoutCPAnneeNp2: 0,
//         taCoutCPAnneeNm1: 0,
//         taCoutCPAnneeNm2: 0,
//         taCoutCPAnneeNm3: 0,
//         taSiLigneReferenceAnneeN: false,
//         taSiLigneReferenceAnneeNp1: false,
//         taSiLigneReferenceAnneeNp2: false,
//         taSiMesureNouvelleAnneeN: false,
//         taSiMesureNouvelleAnneeNp1: false,
//         taSiMesureNouvelleAnneeNp2: false,
//         taDateDebut: '',
//         taDateFin: '',
//         taSiInvestissement: false,
//         taVisa: false,
//         taSiAep: false,
//         taSiCreeEnBudgetisation: false,
//         taSiDotation: 0,
//         taSiGrandProjet: false,
//         taSiExercee: false,
//         taSiDeleted: false
//     }
// }
//
// export function createDefaultTacheAEP(): TacheAEP {
//     return {
//         tacheAEPId: '',
//         tache: createDefaultTache(),
//         aepBailleurId: '',
//         aepCoutTotal: 0,
//         aepMontantAE: 0,
//         aepAnneeDemarrage: '',
//         aepMontantCPAvantAnneeN: 0,
//         aepMontantCPAnneeN: 0,
//         aepMontantCPAnneeNp1: 0,
//         aepMontantCPAnneeNp2: 0,
//         aepMontantCPRestantACouvrir: 0,
//         dateMaj: '',
//         userMaj: ''
//     };
// }
//
// export function createDefaultTacheFINEX(): TacheFINEX {
//     return {
//         tacheFINEXId: '',
//         tache: createDefaultTache(),
//         finexCoutTotal: 0,
//         finexAnneeDemarrage: '',
//         finexMontantFinancement: 0,
//         finexDebutSignature: '',
//         finexCumulDecaissement: 0,
//         finexDecaissementAnneeN: 0,
//         finexDecaissementAnneeNp1: 0,
//         finexDecaissementAnneeNp2: 0,
//         finexDecaissementRestant: 0,
//         finexDateMaj: '',
//         finexUserMaj: ''
//     };
// }
//
// export function createDefaultTacheCTD(): TacheCTD {
//     return {
//         tacheCTDId: '',
//         tache: createDefaultTache()
//     };
// }
//
// export function createDefaultSaveTacheAEP(): SaveTacheAEP {
//     return {
//         tacheId: '',
//         tacheAEPId: null,
//         aepBailleurId: '',
//         aepCoutTotal: 0,
//         aepMontantAE: 0,
//         aepAnneeDemarrage: '',
//         aepMontantCPAvantAnneeN: 0,
//         aepMontantCPAnneeN: 0,
//         aepMontantCPAnneeNp1: 0,
//         aepMontantCPAnneeNp2: 0,
//         aepMontantCPRestantACouvrir: 0
//     };
// }
//
// export function createDefaultSaveTacheFINEX(): SaveTacheFINEX {
//     return {
//         tacheFINEXId: null,
//         tacheId: '',
//         finexBailleurId: '',
//         finexOrigineFinancementId: '',
//         finexCoutTotal: 0,
//         finexAnneeDemarrage: '',
//         finexMontantFinancement: 0,
//         finexDebutSignature: '',
//         finexCumulDecaissement: 0,
//         finexDecaissementAnneeN: 0,
//         finexDecaissementAnneeNp1: 0,
//         finexDecaissementAnneeNp2: 0,
//         finexDecaissementRestant: 0
//     };
// }
//
// export function createDefaultSaveTacheCTD(): SaveTacheCTD {
//     return {
//         tacheCTDId: null,
//         tacheId: ''
//     };
// }
//
// export function createDefaultSaveParagrapheUnitePhysique(): SaveParagrapheUnitePhysique {
//     return {
//         paragrapheUnitePhysiqueId: null,
//         pupPragrapheId: '',
//         pupUnitePhysiqueId: '',
//         pupQuantite: 0,
//         pupPrixUnitaire: 0
//     };
// }
//
// export function createDefaultFonction(): Fonction {
//     return {
//         fonctionId: '',
//         foFonctionParentId: '',
//         foFonctionType: {
//             fonctionTypeId: '',
//             ftyCode: '',
//             ftyLibelle: createDefaultMultilingualLabel(),
//         },
//         foFonctionTypeId: '',
//         foCode: '',
//         foLibelle: createDefaultMultilingualLabel(),
//         foLibelleParent: createDefaultMultilingualLabel(),
//     }
// }
//
// export function createDefaultTache(): Tache {
//     return {
//         tacheId: '',
//         taProjetOperationId: '',
//         taActivite: createDefaultActivite(),
//         taBeneficiaire: {},
//         taExerciceId: '',
//         taSourceFinancementId: '',
//         taCompetenceId: '',
//         taCode: '',
//         taNumOrdre: 0,
//         taLibelle: {
//             fr: '',
//             en: ''
//         },
//         taCout: 0,
//         taCoutAEAnneeN: 0,
//         taCoutAEAnneeNp1: 0,
//         taCoutAEAnneeNp2: 0,
//         taCoutAEAnneeNm1: 0,
//         taCoutAEAnneeNm2: 0,
//         taCoutAEAnneeNm3: 0,
//         taCoutCPAnneeN: 0,
//         taCoutCPAnneeNp1: 0,
//         taCoutCPAnneeNp2: 0,
//         taCoutCPAnneeNm1: 0,
//         taCoutCPAnneeNm2: 0,
//         taCoutCPAnneeNm3: 0,
//         taSiLigneReferenceAnneeN: false,
//         taSiLigneReferenceAnneeNp1: false,
//         taSiLigneReferenceAnneeNp2: false,
//         taSiMesureNouvelleAnneeN: false,
//         taSiMesureNouvelleAnneeNp1: false,
//         taSiMesureNouvelleAnneeNp2: false,
//         taDateDebut: '',
//         taDateFin: '',
//         taSiInvestissement: false,
//         taVisa: false,
//         taSiAep: false,
//         taSiCreeEnBudgetisation: false,
//         taSiDotation: 0,
//         taSiGrandProjet: false,
//         taSiExercee: false,
//         taSiDeleted: false,
//     }
// }
//
// export function createDefaultActivite(): Activite {
//     return {
//         atActionId: '',
//         activiteId: '',
//         atAbbreviation: '',
//         atFonction: createDefaultFonction(),
//         atCodeActivite: '',
//         atDateDebut: '',
//         atDateFin: '',
//         atDateMAJ: '',
//         atJustifCout: {
//             fr: '',
//             en: ''
//         },
//         atLibelle: {
//             fr: '',
//             en: ''
//         },
//         atNiveauContribution: '',
//         atNumOrdre: '',
//         atPresentation: {
//             fr: '',
//             en: ''
//         },
//         atSousType: 0,
//         atType: 0,
//         atTypeActivite: '',
//         atTypeActiviteDescription: '',
//         atUserMAJ: '',
//         atCompetenceMere: '',
//         atOrganisationId: '',
//         atSndVersion: 0,
//         responsable: createDefaultResponsable(),
//         objectifs: createDefaultObjectif()
//     }
// }
//
// export function createDefaultSaveActivite(actionId?: string, organisationId?: string): SaveActiviteDto {
//     return {
//         actionId: actionId || '',
//         activiteId: null,
//         atFonctionId: '',
//         agMatricule: null,
//         atAbbreviation: '',
//         exerciceId: null,
//         atCodeActivite: null,
//         atJustifCout: {
//             fr: '',
//             en: ''
//         },
//         atLibelle: {
//             fr: '',
//             en: ''
//         },
//         atNiveauContribution: '',
//         atPresentation: {
//             fr: '',
//             en: ''
//         },
//         atSousType: 0,
//         atType: 0,
//         atTypeActivite: '',
//         atTypeActiviteDescription: '',
//         competenceMere: '',
//         organigrammeId: null,
//         organisationId: organisationId || '',
//         sndVersion: 0,
//         objectifs: createDefaultObjectif(),
//         atExtrants: createDefaultMultilingualLabel()
//
//     }
// }
//
// export function createDefaultSaveAction(): SaveActionDto {
//     return {
//         actionId: null,
//         acCode: null,
//         acAbbreviation: "",
//         acLibelle: {
//             fr: '',
//             en: ''
//         },
//         programmeId: "",
//         acJustifCout: {
//             fr: '',
//             en: ''
//         },
//         agMatricule: "",
//         organigrammeId: "",
//         isSousDotation: true,
//         acLieuExecution: {
//             fr: '',
//             en: ''
//         },
//         acSndVersion: 0,
//         acIdOld: "",
//         acPresentation: {
//             fr: '',
//             en: ''
//         },
//         objectifs: [],
//     }
// }
//
// export function createDefaultSaveProgramme(): SaveProgrammeDto {
//     return {
//         agMatricule: '',
//         budgetProgrammeId: '',
//         isDotation: false,
//         organigrammeId: '',
//         organisationId: '',
//         pgAbbreviation: '',
//         pgApprobation: 0,
//         pgCode: '',
//         pgContexte: {
//             fr: '',
//             en: ''
//         },
//         pgDispositif: {
//             fr: '',
//             en: ''
//         },
//         pgEtat: 0,
//         pgLibelle: {
//             fr: '',
//             en: ''
//         },
//         pgPresentation: {
//             fr: '',
//             en: ''
//         },
//         pgProgrammeIdOld: '',
//         pgSndVersion: 0,
//         pgStrategique: {
//             fr: '',
//             en: ''
//         },
//         programmeId: null,
//         objectifs: createDefaultObjectif()
//
//     }
// }
//
// export function createDefaultSaveIndicateur(): SaveIndicateurDto[] {
//     return [
//         {
//             indicateurId: '',
//             inNumOrdre: 0,
//             inLibelle: {
//                 fr: '',
//                 en: ''
//             },
//             inDescription: {
//                 fr: '',
//                 en: ''
//             },
//             inValeurRef: 0,
//             inDateRef: '',
//             inValeurCible: 0,
//             inDateCible: '',
//             inPeriodicite: 0,
//             inSourceVerification: {
//                 fr: '',
//                 en: ''
//             },
//             inSeuil: 0,
//             inAmplitude: 0,
//             inSensEvolution: '',
//             umSymboleMesure: '',
//             umSymbolePeriodicite: '',
//             inSiNouveau: true,
//             inSiDeclencheur: true,
//             inValeurDeclencheur: 0,
//             trCodeTranche: 0,
//             inUserMaj: '',
//             inDateMaj: '',
//             inSourceDonnee: '',
//             inValeurIntermediaire1: 0,
//             inDateIntermediaire1: '',
//             inValeurIntermediaire2: 0,
//             inDateIntermediaire2: '',
//             inValeurIntermediaire3: 0,
//             inDateIntermediaire3: '',
//             realisatioNm1: 0,
//             inValeurCSP1: 0,
//             inValeurCSP2: 0,
//             inValeurCSP3: 0,
//             inValeurCSP0: 0,
//             inValeurCibleBudget: 0,
//             inDateCibleBudget: '',
//             inValeurRefBudget: 0,
//             inDateRefBudget: '',
//             inValeurPassee: 0,
//             inDatePassee: '',
//             inValeurAttendue: 0,
//             inDateAttendue: '',
//             indicateurDescriptions: createDefaultIndicateurDescription()
//         }
//     ];
// }
//
// export function createDefaultMultilingualLabel(): MultilingualLabel {
//     return {
//         fr: '',
//         en: '',
//     }
// }
//
// export function createDefaultSaveParagraphe(): SaveParagraphe {
//     return {
//         paragrapheId: null,
//         paNumeroOrdre: 0,
//         paLibelle: createDefaultMultilingualLabel(),
//         paNumImputation: "",
//         paAE: 0,
//         paCP: 0,
//         paResultat: createDefaultMultilingualLabel(),
//         paIndicateur: createDefaultMultilingualLabel(),
//         paSourceVerification: createDefaultMultilingualLabel(),
//         paLivrable: createDefaultMultilingualLabel(),
//         paGestionnaire: "",
//         paLocalite: "",
//         paMarquageC2DCode: "",
//         paType: "",
//         paDelegUnq: false,
//         paSiAutDep: false,
//         paExerciceId: "",
//         paTacheId: "",
//         paParagrapheParentId: "",
//         paModeGestionId: "",
//         paPosteComptableId: "",
//         paOrdonnateurId: "",
//         paLocalisationId: "",
//         paTypeOperationParagrapheId: "",
//         paSourceFinancementId: "",
//         paNatureEconomiqueId: "",
//         paBeneficiaireId: "",
//         paOrganisationId: "",
//         paEtat: true,
//         paDelPonctuelle: null,
//         paNumSemestre: null,
//         paCreeEnExecution: false
//     }
// }
//
// export function createDefaultTacheLocalisation(): TacheLocalisation {
//     return {
//         tacheId: '',
//         localisationId: '',
//         localisationTypeId: '',
//         dateMAJ: '',
//         userMAJ: '',
//     }
// }
//
// export function createDefaultSaveParagrapheRealisation(): SaveParagrapheRealisation {
//     return {
//         paragrapheRealisationId: null,
//         paragrapheId: '',
//         parJanvier: 0,
//         parFevrier: 0,
//         parMars: 0,
//         parAvril: 0,
//         parMai: 0,
//         parJuin: 0,
//         parJuillet: 0,
//         parAout: 0,
//         parSeptembre: 0,
//         parOctobre: 0,
//         parNovembre: 0,
//         parDecembre: 0,
//         parJanvierExec: false,
//         parFevrierExec: false,
//         parMarsExec: false,
//         parAvrilExec: false,
//         parMaiExec: false,
//         parJuinExec: false,
//         parJuilletExec: false,
//         parAoutExec: false,
//         parSeptembreExec: false,
//         parOctobreExec: false,
//         parNovembreExec: false,
//         parDecembreExec: false,
//         parType: ''
//     }
// }
//
// export function createDefaultSaveObjectif(): SaveObjectif {
//     return {
//         objectifId: null,
//         obNumOrdre: 0,
//         obLibelle: createDefaultMultilingualLabel(),
//         indicateurs: [],
//     }
// }
//
// export enum TypeEtatMarquage {
//     ACTIVITE = 'activite',
//     CHAPITRE = 'chapitre',
//     IMPUTATION = 'imputation'
// }
// export interface EtatMarquageRequest {
//     exerciceId?: string;
//     organisationId?: string;
//     programmeId?: string;
//     actionId?: string;
//     activiteId?: string;
//     typePresentation?: string;
//     useEnterOnPgAc?: boolean;
//     marquageTypeId?: string;
//     useTache?: boolean | null;
//     langue?: string;
//     typeEtat?: TypeEtatMarquage;
// }
