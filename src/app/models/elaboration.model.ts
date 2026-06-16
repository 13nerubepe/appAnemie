import {MultilingualLabel} from "@probmis/utils";

export interface Ppa {
    ppaId?: string;
    exerciceId?: string;
    organisationId?: string;
    programmeId?: string;
    userMaj?: string;
    dateMaj?: Date;
    lockFr?: boolean;
    lockEn?: boolean;
}


export interface PpaDetail {
    ppaDetailsId?: string;
    ppaDetailsParentId?: string;
    code?: string;
    numOrdre?: number;
    titre?: MultilingualLabel;
    texte?: MultilingualLabel;
    isTableauGenere?: string;
    isPaysage?: string;
    codeTitre?: string;
    niveauTitre?: string;
    lock?: boolean;
    userMaj?: string;
    dateMaj?: Date;
}


export interface exerciceFind {
    budgetProgrammeId?: string,

}


