import { MultilingualLabel } from '@probmis/utils';

export interface ElabProjetProgramme {
    pgId: string;
    exMillesime: string;
    chCodeChapitre: string;
    pgCodeProgramme: string;
    pgNumOrdre: number;
    fpCode: string;
    bpCode: string;
    pgCodeLRFE: string;
    pgAbbreviation: string;
    pgLibelleFrancais: string;
    pgLibelleAnglais: string;
    pgPresentationFrancais: string;
    pgPresentationAnglais: string;
    pgPlanStrategiqueFrancais: string;
    pgPlanStrategiqueAnglais: string;
    pgJustificationFrancais: string;
    pgJustificationAnglais: string;
    pgUserMaj: string;
    pgDateMaj: Date;
    pgVersion?: any;
    pgCadreInstitutionnel: string;
    pgResponsable: string;
    pgAxeStrategiqueFrancais: string;
    pgAxeStrategiqueAnglais: string;
    pgPriorite: number;
    pgType: number;
    pgDateDebut: Date;
    pgDateFin: Date;
    pgEtat: number;
    pgApprobation: number;
    sndVersion: number;
    hasChilds: boolean;
    pgContexteFrancais: string;
    pgContexteAnglais: string;
    pgDispositifFrancais: string;
    pgDispositifAnglais: string;
    hasPerformance: boolean;
}

export interface PrepaIndicateurDescription {
    inCode?: string;
    serviceRespAtteinteObjectifFrancais?: string;
    serviceRespAtteinteObjectifAnglais?: string;
    autresServicesAtteinteObjectifFrancais?: string;
    autresServicesAtteinteObjectifAnglais?: string;
    naturePreciseFrancais?: string;
    naturePreciseAnglais?: string;
    modeCalculFrancais?: string;
    modeCalculAnglais?: string;
    periodiciteMesureFrancais?: string;
    periodiciteMesureAnglais?: string;
    dernierResultatValeurFrancais?: string;
    dernierResultatValeurAnglais?: string;
    dernierResultatDateStr?: string;
    previsionAnnuelleDate1Str?: string;
    previsionAnnuelleDate2Str?: string;
    previsionAnnuelleDate3Str?: string;
    previsionAnnuelleValeur1Francais?: string;
    previsionAnnuelleValeur1Anglais?: string;
    previsionAnnuelleValeur2Francais?: string;
    previsionAnnuelleValeur2Anglais?: string;
    previsionAnnuelleValeur3Francais?: string;
    previsionAnnuelleValeur3Anglais?: string;
    sourceDonneeFrancais?: string;
    sourceDonneeAnglais?: string;
    modeCollecteFrancais?: string;
    modeCollecteAnglais?: string;
    serviceCollecteFrancais?: string;
    serviceCollecteAnglais?: string;
    verificationDonneeFrancais?: string;
    verificationDonneeAnglais?: string;
    serviceResponsableSyntDonneeFrancais?: string;
    serviceResponsableSyntDonneeAnglais?: string;
    serviceResponsableAnalyseFrancais?: string;
    serviceResponsableAnalyseAnglais?: string;
    coutCollecteAnalyseFrancais?: string;
    coutCollecteAnalyseAnglais?: string;
    limiteConnuFrancais?: string;
    limiteConnuAnglais?: string;
    modaliteInterpretationFrancais?: string;
    modaliteInterpretationAnglais?: string;
    commentairesFrancais?: string;
    commentairesAnglais?: string;
}

export interface VuePrepaIndicateurDescription extends PrepaIndicateurDescription {
    inLibelleFrancais?: string;
    inLibelleAnglais?: string;
    obLibelleFrancais?: string;
    obLibelleAnglais?: string;
    acLibelleFrancais?: string;
    acLibelleAnglais?: string;
    pgLibelleFrancais?: string;
    pgLibelleAnglais?: string;
    pgAxeStrategiqueFrancais?: string;
    pgAxeStrategiqueAnglais?: string;
    arCodeArticle?: string;
    arLibelleFrancais?: string;
    arLibelleAnglais?: string;
    inDateCibleStr?: string;
    inValeurCible?: number;
    umSymboleMesure?: string;
    umLibelleFrancais?: string;
    umLibelleAnglais?: string;
    inDateRefStr?: string;
    inValeurRef?: number;
}

export interface VueIndicateur {
    inCode: string;
    obCode: string;
    inNumOrdreInd: number;
    inLibelleFrancais: string;
    inLibelleAnglais: string;
    inDescriptionFrancais: string;
    inDescriptionAnglais: string;
    inValeurRef: number;
    inDateRef: Date;
    inValeurRefBudget: number;
    inDateRefBudget: Date;
    inValeurCible: number;
    inDateCible: Date;
    inValeurCibleBudget: number;
    inDateCibleBudget: Date;
    inPeriodicite: number;
    inSourceVerification: string;
    inSeuil: number;
    inAmplitude: number;
    inSensEvolution: string;
    umSymboleMesure: string;
    umSymbolePeriodicite: string;
    inSiNouveau: boolean;
    inSiDeclencheur: boolean;
    inValeurDeclencheur: number;
    trCodeTranche: number;
    inUserMaj: string;
    inDateMaj: Date;
    inSourceDonnee: string;
    inResponsableStructure: string;
    inLibelleFrancais2: string;
    inLibelleAnglais2: string;
    inLibelleFrancais3: string;
    inLibelleAnglais3: string;
    inLibelleFrancais4: string;
    inLibelleAnglais4: string;
    inLibelleFrancais5: string;
    inLibelleAnglais5: string;
    inValeurIntermediaire1: number;
    inDateIntermediaire1: Date;
    inValeurIntermediaire2: number;
    inDateIntermediaire2: Date;
    inValeurIntermediaire3: number;
    inDateIntermediaire3: Date;
    inValeurIntermediaire4: number;
    inDateIntermediaire4: Date;
    inSourceVerificationFr: string;
    inSourceVerificationUs: string;
    realisatioNm1: number;
    sndVersion: number;
    inValeurCSP0: number;
    inValeurCSP1: number;
    inValeurCSP2: number;
    inValeurCSP3: number;
    description: VuePrepaIndicateurDescription;
    niveau: string;
    onlyCible: boolean;
    inValeurPasse: number;
    inValeurAttendue: number;
    inDatePasse: Date;
    inDateAttendue: Date;
}


export interface ElabProjetAction {
    acId: string;
    pgId: string;
    exMillesime: string;
    chCodeChapitre: string;
    pgCodeProgramme: string;
    acCodeAction: string;
    acCodeLRFE: string;
    atNumOrdre: number;
    acAbbreviation: string;
    acLibelleFrancais: string;
    acLibelleAnglais: string;
    acPresentationFrancais: string;
    acPresentationAnglais: string;
    acUserMaj: string;
    acDateMaj: Date;
    acVersion?: any;
    acLieuExecutionFrancais: string;
    acLieuExecutionAnglais: string;
    acReconduit: boolean;
    hasChilds: boolean;
    sndVersion: number;
    acJustifCoutFrancais: string;
    acJustifCoutAnglais: string;
}

export interface VueProjetCDMT{
	cdmtId?: string;
	cdmtIdPrec?: string;
	annee1?: number;
	exMillesime1?: string;
	annee2?: number;
	exMillesime2?: string;
	annee3?: number;
	exMillesime3?: string;
	libelleFr?: string;
	libelleEn?: string;
	userMaj?: string;
	dateMaj?: string;
	enCours?: boolean;
}

export interface ProgrammationFinanciereParamDto {
  format?: string;
  etat?: number;
  syntheseStrategiqueEtat?: string;
  imprChap?: boolean;
  currentVersion?: number;
  cdmtID?: string;
  typeProgTache?: string;
  chapitreTab?: string;
  typologie?: string;
  natDep?: string;
  imprProgCombo?: string;
  imprActCombo?: string;
  imprActivCombo?: string;
  lrlm?: string;
  subvEP?: boolean;
  nivPriorite?: boolean;
  besoinAdd?: boolean;
}

export interface TableauFinancierParamDto {
  currentLnk?: string;
  format?: string;
  unite?: number;
  exMillesimeCdmt?: string;
  imgFond?: boolean;
  natureDep?: string;
  chaps?: string;
  cdmtID?: string;
}

export interface ImpressionCdmtCbmtNature {
    cdmtId: string;
    cdmtVersion: number;
    chCodeL: string;
    unite: number;
    activePage: string;
    typeImpression: string;
    annee1: string;
    annee3: string;
    libelleFr?: string;
    lblUnite: string;
    checkDetailGM?: boolean;
    checkAfficherTitre?: boolean;
    checkAfficherChapitreDetail?: boolean;
    checkAfficherRecap?: boolean;
    checkAfficherSF?: boolean;
}

export interface ImpressionCompetenceCtdDto {
   format?: string;
  chapitreTab?: string;
  currentVersion?: number;
  cdmtID?: string;
  etat?: number;
}

export interface EtatGlobalMemoParamDto {
  format?: string;
  typeActivite: string;
  cdmtID: string;
  chapitreTab: string;
  titre: string;
  currentVersion: number;
}

export const ElabProjetActiviteConstants = {
    TYPE_BIP: 3,
    TYPE_BF: 1,
    TYPE_ORDINAIRE: 'ORDINAIRE',
    TYPE_CTD: 'CTD',
    TYPE_GENRE: 'GENRE',
    TYPE_IMPORT_SUBST: 'IMPORT_SUBST',
    TYPE_CLIMAT: 'CLIMAT',
    TYPE_PIISA: 'PIISAH',
    TYPE_LR: 'LR',
    TYPE_MN: 'MN'
};

export interface ElabProjetActivite {
    atId: string;
    acId: string;
    exMillesime: string;
    chCodeChapitre: string;
    pgCodeProgramme: string;
    acCodeAction: string
    atCodeActivite: string;
    acNumOrdre: number;
    atAbbreviation: string;
    atLibelleFrancais: string;
    atLibelleAnglais: string;
    atPresentationFrancais: string;
    atPresentationAnglais: string;
    atCP: number;
    atCP2: number;
    atCP3: number;
    atDateDebut: Date;
    atDateFin: Date;
    atUserMaj: string;
    atDateMaj: Date;
    atVersion?: any;
    atLock: boolean;
    atSommePA: number;
    atContientBIP: boolean;
    atType: number;
    atCodeProjet: string;
    atSousType: number;
    atPrioritaire: boolean;
    atRang: number;
    atZone: string;
    fpCode: string;
    atCP4: number;
    atCP5: number;
    atCodeLRFE: string;
    atPartiePrenantes: string;
    atReconduit: boolean;
    administrationCode: string;
    sndVersion: number;
    atTypeActivite: string;
    atTypeActiviteDescription: string;
    competenceMere: string;
    atJustifCoutFrancais: string;
    atJustifCoutAnglais: string;
    divisionId: string;
    groupeId: string;
    classeId: string;
    nbTA: number;
    index: number;
    selected: boolean;
    hasChilds: boolean;
    sectoriel: string;
}

export interface TblChapitrePK{
	exMillesime: string;
	chCodeChapitre: string;
}

export interface TblExercice{
	exDateDebutStr: string;
	exDateFinStr: string;
	exDateFinEffective: string;
	exDateMAJConso: string;
	exDateMAJ: string;
	exVersion: any;
	exMillesimePrec: string;
	exPhase: number;
	exMillesime: string;
	exLibelleFr: string;
	exLibelleUs: string;
	exCloture: boolean;
	exUserMAJ: string;
	exDateArretEngag: string;
	exDateArretOrdo: string;
	exStatut: boolean;
	checked: boolean;
}

export interface TblChapitrePK{
	exMillesime: string;
	chCodeChapitre: string;
}

export interface TblChapitre{
	exMillesime: string;
	chCodeChapitre: string;
	seCode: string;
	chEnveloppeBF: number;
	chEnveloppeBIP: number;
	chValider: boolean;
	chDateMAJ: string;
	chTypeChapitre: string;
	chAbreviation: string;
	chLibelleUs: string;
	chLibelleFr: string;
	chLibelle: string;
	chLibelleReduitUs: string;
	chLibelleReduitFr: string;
	chUserMAJ: string;
	tblExercice: TblExercice;
	seCodeMinepat: string;
	checKed: boolean;
	pk: TblChapitrePK;
	chapCommun: boolean;
}

export interface VueProjetProgramme {
    pgId?: string;
    exMillesime?: string;
    chCodeChapitre?: string;
    pgCodeProgramme?: string;
    pgNumOrdre?: number;
    fpCode?: string;
    bpCode?: string;
    pgCodeLRFE?: string;
    pgAbbreviation?: string;
    libelle?: string;
    pgLibelleFrancais?: string;
    pgLibelleAnglais?: string;
    pgPresentationFrancais?: string;
    pgPresentationAnglais?: string;
    pgPlanStrategiqueFrancais?: string;
    pgPlanStrategiqueAnglais?: string;
    pgJustificationFrancais?: string;
    pgJustificationAnglais?: string;
    pgUserMaj?: string;
    pgDateMaj?: string;
    pgCadreInstitutionnel?: string;
    pgResponsable?: string;
    pgAxeStrategiqueFrancais?: string;
    pgAxeStrategiqueAnglais?: string;
    pgPriorite?: number;
    pgType?: number;
    pgDateDebut?: string;
    pgDateFin?: string;
    pgEtat?: number;
    pgApprobation?: number;
    pgContexteFrancais?: string;
    pgContexteAnglais?: string;
    pgDispositifFrancais?: string;
    pgDispositifAnglais?: string;
}

export interface VueProjetInitiateur {
    initiateurProjetID?: string;
    code?: string;
    libelle?: string;
    libelleFr?: string;
    libelleUs?: string;
    userMAJ?: string;
    dateMAJ?: string;
}

export interface VueProjetEtatExecution {
    etatExecutionProjetID?: string;
    libelle?: string;
    libelleFr?: string;
    libelleUs?: string;
    userMaj?: string;
    dateMaj?: string;
    typeEtatExecution?: number;
}

export interface VueProjetPertinenceEconomique {
    pertinenceEconomiqueID?: string;
    libelle?: string;
    libelleFr?: string;
    libelleUs?: string;
    userMaj?: string;
    dateMaj?: string;
    typePertinence?: number;
}

export interface VueProjetAction {
    acId?: string;
    pgId?: string;
    exMillesime?: string;
    chCodeChapitre?: string;
    pgCodeProgramme?: string;
    acCodeAction?: string;
    acCodeLRFE?: string;
    atNumOrdre?: number;
    acAbbreviation?: string;
    libelle?: string;
    acLibelleFrancais?: string;
    acLibelleAnglais?: string;
    acPresentationFrancais?: string;
    acPresentationAnglais?: string;
    acUserMaj?: string;
    acDateMaj?: string;
    acLieuExecutionFrancais?: string;
    acLieuExecutionAnglais?: string;
    acReconduit?: boolean;
}

export interface VueAutreRestitutionDto {
    cdmt: VueProjetCDMT | null;
    chCode: string | null;
    cdmtVersion:  number;
    localeFrench: boolean;

    // ajoute

    imageFond:boolean;
    unite: number;
    lblUnite: string;
    activePage: string;
    sect: TblChapitre | null;

}

export interface VueImpressionLienDto {
    exMillesime: string;
    cdmtId: string;
    chCode: string;
    version: number;
    annee1: number;
    annee2: number;
    annee3: number;
    isUs: boolean;
    unite: number;
    lblUnite: string;
    langueAnglaise: boolean;
    typePresentation: string;

}

export interface VueRestitutionTiGmDto {
    cdmtId: string | null;
    annee1: number;
    annee2: number;
    annee3: number;
    chCode: string | null;
    pgId: string | null;
    version: number;
    unite: number;
    lblUnite: string;
    activePage: string;
    isUS: boolean;
    afficherSf: boolean ;
    afficherT1pourChapNormaux: boolean;
    ajouterCU: boolean;
    afficherTitre: boolean;
    // typeBudget: boolean;

    // AJOUTER
    progrannationDepense : boolean;
}

export interface VueProjetActivite {
    atId?: string;
    acId?: string;
    exMillesime?: string;
    chCodeChapitre?: string;
    pgCodeProgramme?: string;
    acCodeAction?: string;
    atCodeActivite?: string;
    acNumOrdre?: number;
    atAbbreviation?: string;
    libelle?: string;
    atLibelleFrancais?: string;
    atLibelleAnglais?: string;
    atPresentationFrancais?: string;
    atPresentationAnglais?: string;
    atCP?: number;
    atCP2?: number;
    atCP3?: number;
    atDateDebut?: string;
    atDateFin?: string;
    atUserMaj?: string;
    atDateMaj?: string;
    atLock?: boolean;
    atSommePA?: number;
    atContientBIP?: boolean;
    atType?: number;
    atCodeProjet?: string;
    atSousType?: number;
    atPrioritaire?: boolean;
    atRang?: number;
    atZone?: string;
    fpCode?: string;
    atCP4?: number;
    atCP5?: number;
    atCodeLRFE?: string;
    atPartiePrenantes?: string;
    atReconduit?: boolean;
    atTypeActivite?: string;
}

export interface VueCDMTProjetProgrammation {
    actionEN?: string | null;
    actionFR?: string | null;
    actionID?: string | null;
    activiteEN?: string | null;
    activiteFR?: string | null;
    activiteID?: string | null;
    chapitreEN?: string | null;
    chapitreFR?: string | null;
    chapitreID?: string | null;
    exerciceDeCreation?: string | null;
    fctPrincipaleEN?: string | null;
    fctPrincipaleFR?: string | null;
    fctPrincipaleID?: string | null;
    fctSecondaireEN?: string | null;
    fctSecondaireFR?: string | null;
    fctSecondaireID?: string | null;
    fpCodeBanque?: string | null;
    fpCodeProjetBanque?: string | null;
    exerciceDeVersioning?: string | null;
    fpCoutProjet?: number | null;
    fpDateCreation?: string | null;
    fpDateDebut?: string | null;
    fpDateFin?: string | null;
    fpDateMAJ?: string | null;
    fpDescriptionFR?: string | null;
    fpDescriptionEN?: string | null;
    fpDureeRealisation?: number | null;
    fpInitiateurDuProjetCode?: string | null;
    fpInitiateurDuProjetEN?: string | null;
    fpInitiateurDuProjetFR?: string | null;
    fpInitiateurDuProjetID?: string | null;
    fpIntituleEN?: string | null;
    fpIntituleFR?: string | null;
    fpLocalisationArrondissementEN?: string | null;
    fpLocalisationArrondissementFR?: string | null;
    fpLocalisationArrondissementID?: string | null;
    fpLocalisationArrondissementPlusieurs?: boolean | null;
    fpLocalisationCommuneEN?: string | null;
    fpLocalisationCommuneFR?: string | null;
    fpLocalisationCommuneID?: string | null;
    fpLocalisationCommunePlusieurs?: boolean | null;
    fpLocalisationDepartementEN?: string | null;
    fpLocalisationDepartementFR?: string | null;
    fpLocalisationDepartementID?: string | null;
    fpLocalisationDepartementPlusieurs?: boolean | null;
    fpLocalisationGroupementEN?: string | null;
    fpLocalisationGroupementFR?: string | null;
    fpLocalisationGroupementID?: string | null;
    fpLocalisationGroupementPlusieurs?: boolean | null;
    fpLocalisationRegionEN?: string | null;
    fpLocalisationRegionFR?: string | null;
    fpLocalisationRegionID?: string | null;
    fpLocalisationRegionPlusieurs?: boolean | null;
    fpLocalisationVillageEN?: string | null;
    fpLocalisationVillageFR?: string | null;
    fpLocalisationVillageID?: string | null;
    fpLocalisationVillagePlusieurs?: boolean | null;
    fpNumCode?: number | null;
    fpObjectifEN?: string | null;
    fpObjectifFR?: string | null;
    fpPertinenceEconomiqueEN?: string | null;
    fpPertinenceEconomiqueFR?: string | null;
    typePertinence?: number | null;
    fpPertinenceEconomiqueID?: string | null;
    fpResultatEN?: string | null;
    fpResultatFR?: string | null;
    fpUniteGestion?: string | null;
    fpUniteGestionTelephone?: string | null;
    fpUserCreation?: string | null;
    fpUserMAJ?: string | null;
    fpVisa?: boolean | null;
    programmeEN?: string | null;
    programmeFR?: string | null;
    programmeID?: string | null;
    secteurEN?: string | null;
    secteurFR?: string | null;
    secteurID?: string | null;
    siInvestissement?: boolean | null;
    codeInitiateur?: string | null;
    fpLocalisationContinentID?: number | null;
    fpLocalisationContinentEN?: string | null;
    fpLocalisationContinentFR?: string | null;
    fpLocalisationPaysID?: number | null;
    fpLocalisationPaysEN?: string | null;
    fpLocalisationPaysFR?: string | null;
    fpLocalisationExterieur?: boolean | null;
    fpLocalisationPosteComptableExtID?: string | null;
    fpLocalisationPosteComptableExtEN?: string | null;
    fpLocalisationPosteComptableExtFR?: string | null;
    fpLocalisationLocaliteExtID?: number | null;
    fpLocalisationLocaliteExtEN?: string | null;
    fpLocalisationLocaliteExtFR?: string | null;
    fpCodeProjet?: string | null;
    fpCode?: string | null;
    cdmtId?: string | null;
    exMillesime?: string | null;
    priorite?: number | null;
    grandeMasseID?: string | null;
    fpCoutAEAnneeN?: number | null;
    fpCoutAEAnneeNp1?: number | null;
    fpCoutAEAnneeNp2?: number | null;
    fpCoutAnneeN?: number | null;
    fpCoutAnneeNp1?: number | null;
    fpCoutAnneeNp2?: number | null;
    fpCoutApresAnneeNp2?: number | null;
    fpCoutAnneeNm1?: number | null;
    fpCoutAnneeNm2?: number | null;
    fpCoutAnneeNm3?: number | null;
    neCode?: string | null;
    siLigneReference?: boolean | null;
    siLigneReferenceNp1?: boolean | null;
    siLigneReferenceNp2?: boolean | null;
    siMesureNouvelle?: boolean | null;
    siMesureNouvelleNp1?: boolean | null;
    siMesureNouvelleNp2?: boolean | null;
    statutSelectionnerPourBIP?: boolean | null;
    statutSelectionDate?: string | null;
    statutSelectionUser?: string | null;
    inscritAuBIP?: boolean | null;
    dateInscription?: string | null;
    operateurInscription?: string | null;
    cdmtVersion?: number | null;
    fpStructureResp?: string | null;
    fpStructureRespAgent?: string | null;
    selected?: boolean | null;
    etatAvancementProjetID?: string | null;
    etatAvancementProjetLibelle?: string | null;
    avancementGlobalProjet?: string | null;
    typeBenefId?: string | null;
    typeBenefLibelle?: string | null;
    beneficiaireCode?: string | null;
    etatFinancementID?: string | null;
    etatFinancementLibelle?: string | null;
    arCodeArticleBeneficiare?: string | null;
    aep?: boolean | null;
    nbreAB?: number | null;
    sfCodeSrcFin?: string | null;
    baCodebailleur?: string | null;
    responsable?: string | null;
    coutBudgetisation?: number | null;
    virtuelle?: boolean | null;
    budget?: boolean | null;
    banqueIntituleFR?: string | null;
    banqueIntituleEN?: string | null;
    sourceFinancement?: string | null;
    destinataire?: string | null;
    codeBailleur?: string | null;
    codeDonateur?: string | null;
    tacheOperation?: boolean | null;
    typeRecette?: string | null;
    afficherProjetCommeActivite?: boolean | null;
    typeDotation?: number | null;
    competenceMere?: string | null;
    noConvention?: string | null;
    montantConvention?: number | null;
    montantDecaissement?: number | null;
    sfNumeroType?: number | null;
    bailleurId?: string | null;
    dateSignatureConvention?: string | null;
    nbreFcpD?: number | null;
    nbreFcpT?: number | null;
    numCertificat?: string | null;
    natureTitre?: string | null;
    grandProjet?: boolean | null;
    epLibelle?: string | null;
    anneeDemarrage?: number | null;
    prioriteN?: number | null;
    prioriteNp1?: number | null;
    prioriteNp2?: number | null;
    besAdd?: boolean | null;
}

export function createDefaultVueCDMTProjetProgrammation() {
    return {
        actionEN: null,
        actionFR: null,
        actionID: null,
        activiteEN: null,
        activiteFR: null,
        activiteID: null,
        chapitreEN: null,
        chapitreFR: null,
        chapitreID: null,
        exerciceDeCreation: null,
        fctPrincipaleEN: null,
        fctPrincipaleFR: null,
        fctPrincipaleID: null,
        fctSecondaireEN: null,
        fctSecondaireFR: null,
        fctSecondaireID: null,
        fpCodeBanque: null,
        fpCodeProjetBanque: null,
        exerciceDeVersioning: null,
        fpCoutProjet: null,
        fpDateCreation: null,
        fpDateDebut: null,
        fpDateFin: null,
        fpDateMAJ: null,
        fpDescriptionFR: null,
        fpDescriptionEN: null,
        fpDureeRealisation: null,
        fpInitiateurDuProjetCode: null,
        fpInitiateurDuProjetEN: null,
        fpInitiateurDuProjetFR: null,
        fpInitiateurDuProjetID: null,
        fpIntituleEN: null,
        fpIntituleFR: null,
        fpLocalisationArrondissementEN: null,
        fpLocalisationArrondissementFR: null,
        fpLocalisationArrondissementID: null,
        fpLocalisationArrondissementPlusieurs: null,
        fpLocalisationCommuneEN: null,
        fpLocalisationCommuneFR: null,
        fpLocalisationCommuneID: null,
        fpLocalisationCommunePlusieurs: null,
        fpLocalisationDepartementEN: null,
        fpLocalisationDepartementFR: null,
        fpLocalisationDepartementID: null,
        fpLocalisationDepartementPlusieurs: null,
        fpLocalisationGroupementEN: null,
        fpLocalisationGroupementFR: null,
        fpLocalisationGroupementID: null,
        fpLocalisationGroupementPlusieurs: null,
        fpLocalisationRegionEN: null,
        fpLocalisationRegionFR: null,
        fpLocalisationRegionID: null,
        fpLocalisationRegionPlusieurs: null,
        fpLocalisationVillageEN: null,
        fpLocalisationVillageFR: null,
        fpLocalisationVillageID: null,
        fpLocalisationVillagePlusieurs: false,
        fpNumCode: null,
        fpObjectifEN: null,
        fpObjectifFR: null,
        fpPertinenceEconomiqueEN: null,
        fpPertinenceEconomiqueFR: null,
        typePertinence: null,
        fpPertinenceEconomiqueID: null,
        fpResultatEN: null,
        fpResultatFR: null,
        fpUniteGestion: null,
        fpUniteGestionTelephone: null,
        fpUserCreation: null,
        fpUserMAJ: null,
        fpVisa: null,
        programmeEN: null,
        programmeFR: null,
        programmeID: null,
        secteurEN: null,
        secteurFR: null,
        secteurID: null,
        siInvestissement: false,
        codeInitiateur: null,
        fpLocalisationContinentID: null,
        fpLocalisationContinentEN: null,
        fpLocalisationContinentFR: null,
        fpLocalisationPaysID: null,
        fpLocalisationPaysEN: null,
        fpLocalisationPaysFR: null,
        fpLocalisationExterieur: null,
        fpLocalisationPosteComptableExtID: null,
        fpLocalisationPosteComptableExtEN: null,
        fpLocalisationPosteComptableExtFR: null,
        fpLocalisationLocaliteExtID: null,
        fpLocalisationLocaliteExtEN: null,
        fpLocalisationLocaliteExtFR: null,
        fpCodeProjet: null,
        fpCode: null,
        cdmtId: null,
        exMillesime: null,
        priorite: null,
        grandeMasseID: null,
        fpCoutAEAnneeN: null,
        fpCoutAEAnneeNp1: null,
        fpCoutAEAnneeNp2: null,
        fpCoutAnneeN: null,
        fpCoutAnneeNp1: null,
        fpCoutAnneeNp2: null,
        fpCoutApresAnneeNp2: null,
        fpCoutAnneeNm1: null,
        fpCoutAnneeNm2: null,
        fpCoutAnneeNm3: null,
        neCode: null,
        siLigneReference: null,
        siLigneReferenceNp1: null,
        siLigneReferenceNp2: null,
        siMesureNouvelle: null,
        siMesureNouvelleNp1: null,
        siMesureNouvelleNp2: null,
        statutSelectionnerPourBIP: null,
        statutSelectionDate: null,
        statutSelectionUser: null,
        inscritAuBIP: null,
        dateInscription: null,
        operateurInscription: null,
        cdmtVersion: null,
        fpStructureResp: null,
        fpStructureRespAgent: null,
        selected: null,
        etatAvancementProjetID: null,
        etatAvancementProjetLibelle: null,
        avancementGlobalProjet: null,
        typeBenefId: null,
        typeBenefLibelle: null,
        beneficiaireCode: null,
        etatFinancementID: null,
        etatFinancementLibelle: null,
        arCodeArticleBeneficiare: null,
        aep: null,
        nbreAB: null,
        sfCodeSrcFin: null,
        baCodebailleur: null,
        responsable: null,
        coutBudgetisation: null,
        virtuelle: null,
        budget: null,
        banqueIntituleFR: null,
        banqueIntituleEN: null,
        sourceFinancement: null,
        destinataire: null,
        codeBailleur: null,
        codeDonateur: null,
        tacheOperation: null,
        typeRecette: null,
        afficherProjetCommeActivite: null,
        typeDotation: null,
        competenceMere: null,
        noConvention: null,
        montantConvention: null,
        montantDecaissement: null,
        sfNumeroType: null,
        bailleurId: null,
        dateSignatureConvention: null,
        nbreFcpD: null,
        nbreFcpT: null,
        numCertificat: null,
        natureTitre: null,
        grandProjet: null,
        epLibelle: null,
        anneeDemarrage: null,
        prioriteN: null,
        prioriteNp1: null,
        prioriteNp2: null,
        besAdd: false
    };
}

export class VueCDMTBanqueProjet {
    actionEN!: string;
    actionFR!: string;
    actionID!: string;
    activiteEN!: string;
    activiteFR!: string;
    activiteID!: string;
    cdmtVersion!: number | null;
    chapitreEN!: string;
    chapitreFR!: string;
    chapitreID!: string;
    exerciceDeCreation!: string;
    fctPrincipaleEN!: string;
    fctPrincipaleFR!: string;
    fctPrincipaleID!: string;
    fctSecondaireEN!: string;
    fctSecondaireFR!: string;
    fctSecondaireID!: string;
    fpCodeBanque!: string | null;
    fpCodeProjetBanque!: string;
    exerciceDeVersioning!: string;
    fpCoutProjet!: number;
    coutNm1!: number;
    coutNm2!: number;
    coutNm3!: number;
    fpDateCreation!: string;
    fpDateDebut!: string;
    fpDateFin!: string;
    fpDateMAJ!: string;
    fpDescriptionFR!: string;
    fpDescriptionEN!: string;
    fpDureeRealisation!: number;
    fpInitiateurDuProjetCode!: string;
    fpInitiateurDuProjetEN!: string;
    fpInitiateurDuProjetFR!: string;
    fpInitiateurDuProjetID!: string;
    fpIntituleEN!: string;
    fpIntituleFR!: string;
    fpLocalisationArrondissementEN!: string;
    fpLocalisationArrondissementFR!: string;
    fpLocalisationArrondissementID!: string;
    fpLocalisationArrondissementPlusieurs!: boolean;
    fpLocalisationCommuneEN!: string;
    fpLocalisationCommuneFR!: string;
    fpLocalisationCommuneID!: string;
    fpLocalisationCommunePlusieurs!: boolean;
    fpLocalisationDepartementEN!: string;
    fpLocalisationDepartementFR!: string;
    fpLocalisationDepartementID!: string;
    fpLocalisationDepartementPlusieurs!: boolean;
    fpLocalisationGroupementEN!: string;
    fpLocalisationGroupementFR!: string;
    fpLocalisationGroupementID!: string;
    fpLocalisationGroupementPlusieurs!: boolean;
    fpLocalisationRegionEN!: string;
    fpLocalisationRegionFR!: string;
    fpLocalisationRegionID!: string;
    fpLocalisationRegionPlusieurs!: boolean;
    fpLocalisationVillageFR!: string;
    fpLocalisationVillageEN!: string;
    fpLocalisationVillageID!: string;
    fpLocalisationVillagePlusieurs!: boolean;
    fpNumCode!: number | null;
    fpObjectifEN!: string;
    fpObjectifFR!: string;
    etatAvancementProjetID!: string;
    etatAvancementProjetLibelle!: string;
    avancementGlobalProjet!: string;
    fpPertinenceEconomiqueEN!: string;
    fpPertinenceEconomiqueFR!: string;
    typePertinence!: number;
    fpPertinenceEconomiqueID!: string;
    fpPertinenceEconomiqueENTP!: string;
    fpPertinenceEconomiqueFRTP!: string;
    typePertinenceTP!: number;
    fpPertinenceEconomiqueIDTP!: string;
    fpResultatEN!: string;
    fpResultatFR!: string;
    fpUniteGestion!: string;
    fpUniteGestionTelephone!: string;
    fpUserCreation!: string;
    fpUserMAJ!: string;
    fpVisa!: boolean;
    programmeEN!: string;
    programmeFR!: string;
    programmeID!: string;
    secteurEN!: string;
    codeInitiateur!: string;
    secteurFR!: string;
    secteurID!: string;
    siInvestissement!: boolean;
    fpLocalisationContinentID!: number;
    fpLocalisationContinentEN!: string;
    fpLocalisationContinentFR!: string;
    fpLocalisationPaysID!: number;
    fpLocalisationPaysEN!: string;
    fpLocalisationPaysFR!: string;
    fpLocalisationExterieur!: boolean;
    fpLocalisationPosteComptableExtID!: string;
    fpLocalisationPosteComptableExtEN!: string;
    fpLocalisationPosteComptableExtFR!: string;
    fpLocalisationLocaliteExtID!: number;
    fpLocalisationLocaliteExtEN!: string;
    fpLocalisationLocaliteExtFR!: string;
    projetOperationID!: string;
    selected!: boolean;
    hasOperations!: boolean;
    numOrdreOp!: number;
    intituleOp!: string;
    coutOp!: number;
    etatExecutionProjetLibelleOp!: string;
    etatFinancementLibelleOp!: string;
    natureOperationOp!: string;
    etatDeMaturiteOp!: string;
    localisationOp!: string;
    sourceDeFinancementOp!: string;
    etatFinancementIDOp!: string;
    fpCodeBanqueOld!: string;
    siImporter!: boolean;
    siBudgetise!: boolean;
    siBudgetiseV2!: boolean;
    siBudgetiseV3!: boolean;
    elementDeMaturite!: string;
    localisationRegionOp!: string;
    localisationDepartementOp!: string;
    localisationArrondissementOp!: string;
    localisationCommuneOp!: string;
    localisationGroupementOp!: string;
    localisationVillageOp!: string;
    actif!: boolean;
    nbMarquageSuivi!: number;
}

export class VueCDMTBanqueProjetOperation {
    projetOperationID!: string;
    codeOperation!: string;
    fpCodeBanque!: string;
    fpCodeProjetBanque!: string;
    exerciceDeVersioning!: string;
    fpIntituleFR!: string;
    numOrdre!: number;
    intitule!: string;
    intituleEn!: string;
    userMaj!: string;
    dateMaj!: string;
    siInvestissement!: boolean;
    natureOperation!: string;
    cout!: number;
    coutNm1!: number;
    coutNm2!: number;
    coutNm3!: number;
    elementDeMaturite!: string;
    siVisaMaturite!: boolean;
    etatDeMaturite!: string;
    etatExecutionID!: string;
    etatExecutionLibelle!: string;
    etatFinancementID!: string;
    etatFinancementLibelle!: string;
    sourceDeFinancement!: string;
    localisationRegionPlusieurs!: boolean;
    localisationDepartementPlusieurs!: boolean;
    localisationArrondissementPlusieurs!: boolean;
    localisationCommunePlusieurs!: boolean;
    localisationGroupementPlusieurs!: boolean;
    localisationVillagePlusieurs!: boolean;
    localisationRegionID!: string;
    localisationDepartementID!: string;
    localisationArrondissementID!: string;
    localisationCommuneID!: string;
    localisationGroupementID!: string;
    localisationVillageID!: string;
    localisationExterieur!: boolean;
    localisationContinentID!: number;
    localisationPaysID!: number;
    localisationLocaliteExtID!: number;
    localisationPosteComptableExtID!: string;
    localisation!: string;
    siImporter!: boolean;
    fpCodeBanqueOld!: string;
    titreId!: string;
    titreLibelleFR!: string;
    titreLibelleEN!: string;
    siBudgetise!: boolean;
    siBudgetiseV2!: boolean;
    siBudgetiseV3!: boolean;
    selected!: boolean;
    gpsLatitude!: number;
    gpsLongitude!: number;
    anneeDem!: number;
    dateMarquage!: string;
    coutMarquage!: number;
    besoinFin!: number;
    inBanqueEnCours!: boolean;
    cumulCP!: number;
    dotationCP!: number;
    ResteMobil!: number;
    ResteCPRev!: number;
    dateSignature!: string;
    tauxReal!: number;
    link1!: string;
    link2!: string;
    link3!: string;
    siEtude!: boolean;
}


export interface SaveCDMTProjet {
    vueCDMTProjetProgrammation?: VueCDMTProjetProgrammation;
    listSelectedRegions?: VueProjetRegion[];
    listSelectedDepartements?: VueProjetDepartement[];
    listSelectedArrondissements?: VueProjetArrondissement[];
    listSelectedCommunes?: VueProjetPosteComptable[];
    listSelectedGroupements?: VueProjetGroupement[];
    listSelectedVillages?: VueProjetVillage[];
    detailsGM?: ElabCdmtProjetProgrammationGm[];
    bip?: boolean;
    besAdd?: boolean;
}

export interface SaveCDMTProjetProgrammationList {
    cdmtPP: VueCDMTBanqueProjet[];
    cdmtId: string;
    exMillesime: string;
    priorite: number;
}

export interface List {}

export interface Map {}

export interface TacheSaveDto {
    tacheId?: string;
    taActiviteId?: string;
    taBeneficiaireId?: string;
    taExerciceId?: string;
    taFonctionId?: string;
    taSourceFinancementId?: string;
    taCompetenceId?: string;
    taCode?: string;
    taNumOrdre?: number;
    taOrganisationId?: string;
    taProjetOperationId?: string;
    taLibelle?: MultilingualLabel;
    taStructureId?: string;
    taCout?: number;
    taCoutAEAnneeN?: number;
    taCoutAEAnneeNp1?: number;
    taCoutAEAnneeNp2?: number;
    taCoutAEAnneeNm1?: number;
    taCoutAEAnneeNm2?: number;
    taCoutAEAnneeNm3?: number;
    taCoutCPAnneeN?: number;
    taCoutCPAnneeNp1?: number;
    taCoutCPAnneeNp2?: number;
    taCoutCPAnneeNm1?: number;
    taCoutCPAnneeNm2?: number;
    taCoutCPAnneeNm3?: number;
    taSiLigneReferenceAnneeN?: boolean;
    taSiLigneReferenceAnneeNp1?: boolean;
    taSiLigneReferenceAnneeNp2?: boolean;
    taSiMesureNouvelleAnneeN?: boolean;
    taSiMesureNouvelleAnneeNp1?: boolean;
    taSiMesureNouvelleAnneeNp2?: boolean;
    taDateDebut?: string;
    taDateFin?: string;
    taSiInvestissement?: boolean;
    taVisa?: boolean;
    taSiAep?: boolean;
    taSiCreeEnBudgetisation?: boolean;
    taSiDotation?: boolean;
    taSiGrandProjet?: boolean;
    taSiExercee?: boolean;
    agMatricule?: string;
    organigrammeId?: string;
    localisationIds?: string[];
    taBailleursId?: string;
}


export interface VueParagrapheMarquage {
    paId?: string;
    exMillesime?: string;
    chCodeChapitre?: string;
    pgCodeLRFE?: string;
    pgLibelleFrancais?: string;
    pgLibelleAnglais?: string;
    acCodeLRFE?: string;
    acLibelleFrancais?: string;
    acLibelleAnglais?: string;
    atCodeActivite?: string;
    atLibelleFrancais?: string;
    atLibelleAnglais?: string;
    taCodeTache?: string;
    taLibelleFrancais?: string;
    taLibelleAnglais?: string;
    paLibelleFrancais?: string;
    paLibelleAnglais?: string;
    arCodeArticle?: string;
    paAE?: number;
    paCP?: number;
    paId2003?: string;
    neCodeNatureEco2003?: string;
    imNumImput?: string;
    neCodeNatureEco?: string;
    marque?: boolean;
    exercee?: boolean;
    nonExercee?: boolean;
    inCompetence?: boolean;
    userMaj?: string;
    dateMarquer?: Date;
    pgId?: string;
    acId?: string;
    atId?: string;
    taId?: string;
    demarque?: boolean;
}

export interface VueProjetGrandeMasse {
    grandeMasseProjetID?: string;
    libelleFr?: string;
    libelleUs?: string;
    libelle?: string;
    userMaj?: string;
    dateMaj?: string;
    siInvestissement?: boolean;
    codeTitre?: string;
    titreFr?: string;
    titreEn?: string;
}

export interface VueCDMTProjetProgrammationTypeBeneficiaire {
    typeBenefId?: string;
    abreviation?: string;
    libelleFr?: string;
    libelleUs?: string;
    libelle?: string;
}

export interface TblPSFEArticleBudgetaire {
    arCode?: string;
    arCode2?: string;
    exMillesime?: string;
    chCode?: string;
    caCode?: string;
    reCode?: string;
    arNumOrdre?: string;
    arAbreviation?: string;
    arLibelleReduitFr?: string;
    arLibelleReduitUs?: string;
    arLibelleFrancais?: string;
    arLibelleAnglais?: string;
    fsCode?: string;
    loLocaliteExtID?: number;
    prProvinceID?: string;
    deDepartementID?: string;
    aoArrondissementID?: string;
    diDistrictID?: string;
    pcCode?: string;
    orCode?: string;
    arDateMAJ?: string;
    arUserMAJ?: string;
    arType?: number;
    arCodeBenef?: string;
    coContinentID?: number;
    paPaysID?: number;
    seCode?: string;
    fpCode?: string;
}

export interface VueProjetStructure {
    arCode?: string;
    exMillesime?: string;
    chCode?: string;
    caCode?: string;
    reCode?: string;
    arNumOrdre?: string;
    arAbreviation?: string;
    arLibelleReduitFr?: string;
    arLibelleReduitUs?: string;
    arLibelleFrancais?: string;
    arLibelleAnglais?: string;
    fsCode?: string;
    loLocaliteExtID?: number;
    prProvinceID?: string;
    deDepartementID?: string;
    aoArrondissementID?: string;
    diDistrictID?: string;
    pcCode?: string;
    orCode?: string;
    arDateMAJ?: string;
    arUserMAJ?: string;
    arType?: number;
    selected?: boolean;
    libelle?: string;
    libelleReduit?: string;
}

export interface ElabCdmtProjetProgrammationGm {
    ligneId?: string;
    fpCodeProjet?: string;
    gmCodeGrandeMasse?: string;
    coutAE1?: number;
    coutAE2?: number;
    coutAE3?: number;
    coutCP1?: number;
    coutCP2?: number;
    coutCP3?: number;
    userMaj?: string;
    dateMaj?: string;
    gmLibelle?: string;
    codeTitre?: string;
    titreLibelle?: string;
}

export interface TblFonctionPrincipale {
    fpCode?: string;
    fpAbreviation?: string;
    fpLibelleReduitFr?: string;
    fpLibelleReduitUs?: string;
    fpLibelleFrancais?: string;
    fpLibelleAnglais?: string;
    fpDateMAJ?: Date;
    fpUserMAJ?: string;
    seCode?: TblSecteur;
    libelle?: string;
    libelleReduit?: string;
}

export interface TblFonctionSecondaire {
    fsCode?: string;
    fsAbreviation?: string;
    fsLibelleReduitFr?: string;
    fsLibelleReduitUs?: string;
    fsLibelleFrancais?: string;
    fsLibelleAnglais?: string;
    fsDateMAJ?: string;
    fsUserMAJ?: string;
    fpCode?: TblFonctionPrincipale;
    libelle?: string;
    libelleReduit?: string;
}

export interface TblSecteur {
    seCode?: string;
    seAbreviation?: string;
    seLibelleReduitFr?: string;
    seLibelleReduitUs?: string;
    seLibelleFrancais?: string;
    seLibelleAnglais?: string;
    seDateMAJ?: string;
    seUserMAJ?: string;
    libelle?: string;
    libelleReduit?: string;
}

export enum TYPE_RESTITUTION {
    TYPE_RESTITUTION_CBMT = 'TYPE_RESTITUTION_CBMT',
    TYPE_ECART_CDMT_CBMT = 'TYPE_ECART_CDMT_CBMT',
    TYPE_AUTRE_RESTITUTION = 'TYPE_AUTRE_RESTITUTION',
    TYPE_AUTRE_RESTITUTION_TITRE_GM = 'TYPE_AUTRE_RESTITUTION_TITRE_GM',
}

export interface VueSecteur {
    seCode?: string;
    seAbreviation?: string;
    seLibelleReduitFr?: string;
    seLibelleReduitUs?: string;
    seLibelleFrancais?: string;
    seLibelleAnglais?: string;
}


export interface ImpressionGeneralParamDto{
	etat?: number;
    format?: string;
	activeOperation?: boolean;
	periodeDu?: string;
	periodeAu?: string;
	secteurID?: string;
	fonctPrinc?: string;
	fonctSecond?: string;
	orga?: string;
	region?: string;
	commune?: string;
	exerciceCreation?: string;
	chapitreID?: string;
	programmeID?: string;
	actionID?: string;
	activiteID?: string;
}

export interface VueProjetOrganismePublique{
	projetOrganismePubliqueID?: string;
	code?: string;
	libelleFr?: string;
	libelleUs?: string;
	userMAJ?: string;
	dateMAJ?: string;
}


export interface TblPSFESourceFinancement {
    RESSOURCES_INTERNES_ORDINAIRES?: number;
    RESSOURCES_INTERNES_SPECIALES?: number;
    RESSOURCES_EXTERNES_DON?: number;
    RESSOURCES_EXTERNES_PRET?: number;
    sfCodeSrcFin?: string;
    sfAbbreviation?: string;
    sfLibelleFrancais?: string;
    sfLibelleAnglais?: string;
    sfTypeFinancement?: string;
    sfNumeroType?: number;
    sfUserMaj?: string;
    sfDateMaj?: string;
    sourceFinancementType?: TblPSFESourceFinancementType;
}

export interface TblPSFESourceFinancementType {
    sfNumeroType?: number;
    sfLibelleFrancais?: string;
    sfAbbreviationFrancais?: string;
    sfLibelleAnglais?: string;
    sfAbbreviationAnglais?: string;
    siInterne?: boolean;
}

export interface PrepaBailleur {
    bailleurId?: string;
    baCodebailleur?: string;
    baAbbreviation?: string;
    baLibelleFrancais?: string;
    baLibelleAnglais?: string;
    baUserMaj?: string;
}

export interface VueProjetRegion {
    prProvinceID?: string;
    prLibelleReduitFr?: string;
    prLibelleReduitUs?: string;
    prLibelleFrancais?: string;
    prLibelleAnglais?: string;
    prChefLieu?: string;
    prNumOdre?: string;
    selected?: boolean;
    libelle?: string;
    libelleReduit?: string;
}

export interface VueProjetDepartement {
    deDepartementID?: string;
    prProvinceID?: string;
    deLibelleReduitFr?: string;
    deLibelleReduitUs?: string;
    deLibelleFrancais?: string;
    deLibelleAnglais?: string;
    deChefLieu?: string;
    deNumOrdre?: string;
    libelle?: string;
    libelleReduit?: string;
}

export interface VueProjetArrondissement {
    aoArrondissementID?: string;
    deDepartementID?: string;
    aoLibelleReduitFr?: string;
    aoLibelleReduitUs?: string;
    aoLibelleFrancais?: string;
    aoLibelleAnglais?: string;
    aoChefLieu?: string;
    aoNumOrdre?: string;
    libelle?: string;
    libelleReduit?: string;
}

export interface VueCDMTProjetProgrammationLocalisationRegion {
    localisationRegionID?: string;
    fpCodeProjet?: string;
    libelleFrancais?: string;
    libelleAnglais?: string;
    userMaj?: string;
    dateMaj?: string;
    regionID?: string;
    selected?: boolean;
}


export interface VueProjetContinent {
    continentID?: number;
    code?: string;
    libelleFrancais?: string;
    libelleAnglais?: string;
    dateMAJ?: string;
    userMAJ?: string;
    selected?: boolean;
    libelle?: string;
}

export interface VueProjetPays {
    paysID?: number;
    continentID?: number;
    code?: string;
    libelleFrancais?: string;
    libelleAnglais?: string;
    numOrdre?: string;
    dateMAJ?: string;
    userMAJ?: string;
    selected?: boolean;
    libelle?: string;
}

export interface VueProjetLocaliteExterieure {
    localiteExtID?: number;
    paysID?: number;
    code?: string;
    libelleReduitFr?: string;
    libelleReduitUs?: string;
    libelleFrancais?: string;
    libelleAnglais?: string;
    numOrdre?: string;
    dateMAJ?: string;
    userMAJ?: string;
    selected?: boolean;
    libelle?: string;
}

export interface VueProjetDepartement {
    deDepartementID?: string;
    prProvinceID?: string;
    deLibelleReduitFr?: string;
    deLibelleReduitUs?: string;
    deLibelleFrancais?: string;
    deLibelleAnglais?: string;
    deChefLieu?: string;
    deNumOrdre?: string;
    libelle?: string;
    libelleReduit?: string;
}

export interface VueProjetArrondissement {
    aoArrondissementID?: string;
    deDepartementID?: string;
    aoLibelleReduitFr?: string;
    aoLibelleReduitUs?: string;
    aoLibelleFrancais?: string;
    aoLibelleAnglais?: string;
    aoChefLieu?: string;
    aoNumOrdre?: string;
    libelle?: string;
    libelleReduit?: string;
}

export interface VueProjetPosteComptable {
    pcCode?: string;
    pcNature?: string;
    pcAbreviation?: string;
    pcLibelleFr?: string;
    pcLibelleUs?: string;
    prProvinceID?: string;
    deDepartementID?: string;
    aoArrondissementID?: string;
    diDistrictID?: string;
    loLocaliteExtID?: number;
    pcCodeExecution?: string;
    pcCodeTresor?: string;
    pcLibelleFrSave?: string;
    libelle?: string;
}

export interface VueProjetGroupement {
    grGroupementID?: string;
    grLibelleFr?: string;
    grLibelleUs?: string;
    deDepartementID?: string;
    aoArrondissementID?: string;
    grDateMAJ?: string;
    grUserMAJ?: string;
    libelle?: string;
}

export interface VueProjetVillage {
    viVillageID?: string;
    viLibelleFr?: string;
    viLibelleUs?: string;
    grGroupementID?: string;
    viDateMAJ?: string;
    viUserMAJ?: string;
    libelle?: string;
}

export interface VueProjetPosteComptable {
    pcCode?: string;
    pcNature?: string;
    pcAbreviation?: string;
    pcLibelleFr?: string;
    pcLibelleUs?: string;
    prProvinceID?: string;
    deDepartementID?: string;
    aoArrondissementID?: string;
    diDistrictID?: string;
    loLocaliteExtID?: number;
    pcCodeExecution?: string;
    pcCodeTresor?: string;
    pcLibelleFrSave?: string;
    libelle?: string;
}

export interface ElabCadrageProjectionGmBip {
    cadrageGMId: string;
    cdmtId: string;
    annee: number;
    chChapitreId: string;
    chAbreviation?: string;
    chCodeChapitre?: string;
    caRio: number;
    caFinex: number;
    caPPTE: number;
    caC2D: number;
    caIADM: number;
    caProv: number;
    caContrepartie: number;
    caRT: number;
    caUserMaj: string;
    version: number;
    caRioAe: number;
    caFinexAe: number;
    caPPTEAe: number;
    caC2DAe: number;
    caIADMAe: number;
    caHepipAe: number;
    caCtdIAe: number;
    caHepipCp: number;
    caCtdICp: number;
    caHorsCtdI: number;
    caHorsCtdIAE: number;
}

export interface ElabCadrageProjectionGmBf {
    cadrageGMId: string;
    cdmtId: string;
    annee: number;
    chChapitreId: string;
    chAbreviation?: string;
    chCodeChapitre?: string;
    caSal: number;
    caDepPers: number;
    caBStage: number;
    caB1EtServ: number;
    caC2D: number;
    caSalAe: number;
    caDepPersAe: number;
    caB1EtServAe: number;
    caC2DAe: number;
    caChargeFinDetteAe: number;
    caChargeFinDetteCp: number;
    caAutreTransfertAe: number;
    caAutreTransfertCp: number;
    caAutreDepenseAe: number;
    caAutreDepenseCp: number;
    caFinexCourantAe: number;
    caFinexCourantCp: number;
    caUserMaj: string;
    version: number;
}

export enum TypeMarquage {
    TYPE_MARQUAGE_IMPORT_SUBST = 1021,
    TYPE_MARQUAGE_IMPORT_SUBST_PIISAH= 10210,
    TYPE_MARQUAGE_CLIMAT= 1022,
    TYPE_MARQUAGE_SENSIBLE_GENRE= 1023,
}

export interface ProjetComposante {
    intitule: string;
    cout: number | null;
    etatExecution: string | null;
}

export interface ProjetOperation {
    intitule: MultilingualLabel;
    nature: string | null;
    cout: number | null;
    elementMaturation: string;
    etatFinancement: string;
    etatExecution: string;
    longitude: number | null;
    latitude: number | null;
}

export interface SaveProjetInvestissementDto {
    projetId?: string | null;
    codeProjet: string;
    initiateur: string | null;
    organisationId: string | null;
    intitule: MultilingualLabel;
    description: MultilingualLabel;
    objectif: MultilingualLabel;
    resultats: MultilingualLabel;
    structurant: boolean | null;
    type: string | null;
    secteurId: string | null;
    fonctionPrincipaleId: string | null;
    fonctionSecondaireId: string | null;
    coutEstimatif: number | null;
    localisationIds: string[];
    uniteStructure: MultilingualLabel;
    contact: string;
    programmeId: string | null;
    actionId: string | null;
    activiteId: string | null;
    dateDebut: string | null;
    dateFin: string | null;
    dureePrevisionnelle: number | null;
    composantes: ProjetComposante[];
    etatAvancement: string;
    descriptionEtatAvancement: string;
    operations: ProjetOperation[];
}






