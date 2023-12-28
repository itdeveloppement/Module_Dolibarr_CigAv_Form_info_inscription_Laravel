-- VUE POIDS
CREATE VIEW `poids` (id, code, libelle, ordre, active)
AS
SELECT  rowid, code,  libelle, ordre, active
FROM llx_cgl_c_poids
WHERE active =  1;

-- TABLE Dolibarr    llx_cgl_c_ages   
	 
CREATE TABLE `llx_cgl_c_ages` (
  `code` varchar(3) COLLATE utf8mb3_unicode_ci NOT NULL,
  `rowid` int(11) NOT NULL AUTO_INCREMENT,
  `active` smallint(6) DEFAULT 1,
  `libelle` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  `ordre` smallint(6) NOT NULL,
 PRIMARY KEY (`rowid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- VUE AGES 
CREATE VIEW `ages` (id, code, active, libelle, ordre)
AS
SELECT  rowid,  code, active, libelle, ordre
FROM llx_cgl_c_ages
WHERE active =  1;


-- TABLE Dolibarr    llx_cgl_c_tailles  
CREATE TABLE `llx_cgl_c_tailles` (
  `rowid` int(11) NOT NULL,
  `libelle` varchar(25) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `ordre` int(11) NOT NULL,
  `active` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;


-- VUE TAILLES
CREATE VIEW `tailles` (id, libelle, ordre, active)
AS
SELECT  rowid,  libelle, ordre,  active
FROM llx_cgl_c_tailles
WHERE active =  1;


-- VUE CALENDRIER
CREATE  VIEW   calendriers (id, heured)
AS
SELECT rowid, heured
FROM  llx_agefodd_session_calendrier
WHERE year(heured) = year(now());



-- VUE permettant de transcoder les bukketu=ibs molti-sessions en un bulletin-session   
CREATE  VIEW   bull_det_ses ( bullSesId, fk_bull,fk_session)
AS
SELECT fk_bull * 100000 + fk_activite , fk_bull,fk_activite
FROM  llx_cglinscription_bull_det
WHERE year(datec) = year(now());

-- VUE BULLETIN

CREATE VIEW `bulletins` (id ,  NomTiers, Ref, session_id)
	AS
	SELECT bullSesId,  soc.nom, bull.ref, ses.rowid
	FROM llx_cglinscription_bull as bull
		LEFT JOIN  bull_det_ses as bds on bds.fk_bull = bull.rowid 
		LEFT JOIN  llx_agefodd_session as ses ON  bds.fk_session = ses.rowid
		LEFT JOIN   llx_societe as soc ON bull.fk_soc = soc.rowid
	WHERE year(bull.datec) = year(now()) and bds.fk_session > 0
		and  bull.typebull = 'Insc';


-- VUE SESSION
	CREATE VIEW sessions (id, intitule_custom, Lieu_Activite, calendrier_id)
	AS 
	SELECT ses.rowid  ,	intitule_custo , site. ref_interne, cal.rowid
	FROM llx_agefodd_session as ses
		LEFT JOIN  llx_agefodd_session_calendrier as cal ON ses.rowid =  	cal.fk_agefodd_session
		LEFT JOIN  llx_agefodd_place as site ON site.rowid =  	ses.fk_session_place
	WHERE year(ses.datec) = year(now());


-- VUE PARTICIPANT

ALTER TABLE `llx_cglinscription_bull_det` ADD `fk_taille` INT(11) NULL AFTER `taille`, ADD INDEX `taille` (`fk_taille`); 

ALTER TABLE `llx_cglinscription_bull_det` ADD `fk_age` INT(11) NULL AFTER `taille`, ADD INDEX `age` (`fk_age`); 

ALTER TABLE `llx_cglinscription_bull_det` ADD `fk_poid` INT(11) NULL AFTER `taille`, ADD INDEX `poids` (`fk_poid`); 

ALTER TABLE `llx_cglinscription_bull_det` ADD `fk_bullSes` VARCHAR(20) NOT NULL AFTER `fk_bull`; 

UPDATE llx_cglinscription_bull_det set fk_bullSes = fk_bull*100000+fk_activite
			WHERE action not in ('S','X') and type = 0 and 
			(EXISTS(SELECT (1) FROM llx_cglinscription_bull as b WHERE b.rowid = fk_bull and  b.typebull = 'Insc'));

SELECT fk_bullSes ,fk_bull*100000+fk_activite
FROM llx_cglinscription_bull_det
WHERE action not in ('S','X') and type = 0 and 
	(EXISTS(SELECT (1) FROM llx_cglinscription_bull as b WHERE b.rowid = fk_bull and  b.typebull = 'Insc'));

CREATE VIEW participants (id, bulletin_id,  NomPrenom, age_id, poid_id, taille_id, updated_at, created_at)
AS
SELECT rowid, fk_bullSes, NomPrenom, fk_age, fk_poid, fk_taille, tms, datec
FROM  llx_cglinscription_bull_det
WHERE action not in ('S','X') and type = 0 and  year(datec) = year(now())and 
	(EXISTS(SELECT (1) FROM llx_cglinscription_bull as b WHERE b.rowid = fk_bull and  b.typebull = 'Insc'));


TEST


select * from bulletins


SELECT b.id, p.id as ParticipantId, b.ref, b.NomTiers, p.age_id, a.id, a.libelle as Age, intitule_custom ,heured as DateDebut, Lieu_Activite,  p.NomPrenom , pd.libelle as Poids, t.libelle as Taille
FROM bulletins as b
	LEFT JOIN sessions as s ON s.id = b.session_id	
	LEFT JOIN calendriers as c ON s.calendrier_id = c.id
	LEFT JOIN participants as p ON p.bulletin_id = b.id
	LEFT JOIN tailles as t ON p.taille_id = t.id
	LEFT JOIN poids as pd ON p.poid_id = pd.id
	LEFT JOIN ages as a ON p.age_id = a.id
where b.id = 	16900169
where b.id = 590001844


UPDATE participants 
set poid_id = 1 where id = 33743
