var choixArticle, prixArticle=2, prenom, nom, mail, nbreItems, nomArticle, prixLiv, prixAvantTotal, total=0, prixExtra=0, choixExtra;

function changerImage_onchange()
{
nomArticle = document.querySelector("#lstAchat").value;

    
    nomArticle = document.querySelector("#lstAchat").value;

    
    switch(nomArticle)
    {
        case "pinceau":
        choixArticle = "pinceau";
        prixArticle = 2;
        break;
        case "feutre":
            choixArticle = "feutre";
            prixArticle = 5;
        break;
        case "Aquarelle":
            choixArticle = "aquarelle";
            prixArticle = 10;
        break;
        case "carnet-de-dessin":
            choixArticle = "carnet-de-dessin";
            prixArticle = 30;
        break;
        case "encre":
            choixArticle = "encre";
            prixArticle = 20;
        break;
    }
    document.querySelector("#imgObjet").src = "img/" + choixArticle + ".jpg";
}

function saisirInfo()
{
    prenom = document.querySelector("#txtPrenom").value;
    nom = document.querySelector("#txtNom").value;
    mail = document.querySelector("#txtEmail").value;
}

function accumItem()
{
 
    
    
}

function choisirLivraison()
{

}

function btnCalculer_onclick()
{
    if(document.querySelector("#chkPeinture").checked === true)
    {
        choixExtra = "Peinture";
        prixExtra += 10;
    }
    if(document.querySelector("#chkEncres").checked === true)
    {
        choixLivraison = "Encres";
        prixExtra += 20;
    }
    if(document.querySelector("#chkCarnet-de-dessin").checked === true)
    {
        choixLivraison = "Carnet de dessin";
        prixExtra += 30;
    }


    nbreItems = document.querySelector("#number").value;

    if(document.querySelector("#chkStandard").checked === true)
    {
        choixLivraison = "Standard";
        prixLiv = 5;
    }
    else if(document.querySelector("#chkRapide").checked === true)
    {
        choixLivraison = "Rapide";
        prixLiv = 10;
    }
    else
    {
        choixLivraison = "Express";
        prixLiv = 15;
    }
    prixAvantTotal = prixArticle + prixLiv + prixExtra;
    document.querySelector("#tps").value = prixAvantTotal * 0.05;
    document.querySelector("#tvq").value = prixAvantTotal * 0.09975;
   
    total = (prixAvantTotal * 0.05) + (prixAvantTotal * 0.09975) + prixAvantTotal;
    document.querySelector("#montant_total").value = total;
    prixExtra=0;
}

