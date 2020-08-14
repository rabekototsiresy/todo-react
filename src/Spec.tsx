import React from "react";

export function Spec() {
    return (
        <>
            Pour ce test, vous allez créer une application{" "}
            <strong>TODOLIST</strong>, avec les spécifications suivantes :
            <h2>Guidelines</h2>
            <ul>
                <li>
                    Utilisez l'interface <code>ITodo</code> dans le fichier{" "}
                    <code>ITodo.ts</code>
                </li>
                <li>
                    Les composants sont de type{" "}
                    <strong>functional component</strong> de préférence.
                </li>
                <li>
                    Utilisez les composants <strong>@material-ui</strong> dès
                    que l'occasion se présente.
                </li>
                <li>
                    BONUS : utilisez <strong>typescript</strong> si vous pouvez.
                </li>
            </ul>
            <h2>Fonctionnalités</h2>
            <ul>
                <li>
                    Créez un composant <code>TodoEditor</code> qui comprend :
                    <ul>
                        <li>Un champ de saisie pour le titre de la tâche</li>
                        <li>Un champ texte pour sa déscription</li>
                        <li>
                            Un bouton <strong>Enregistrer</strong> pour ajouter
                            la tâche parmi la liste
                        </li>
                    </ul>
                </li>
                <li>
                    Créez un composant <code>TodoList</code> qui comprend :
                    <ul>
                        <li>La liste des todos</li>
                        <li>
                            Au clic d'un élément de la liste, le composant{" "}
                            <code>TodoEditor</code> réapparaît pour pouvoir
                            éditer la tâche
                        </li>
                        <li>
                            A côté de chaque élément de la liste, un checkbox
                            pour marquer la tâche comme terminée
                        </li>
                        <li>
                            Les tâches terminées sont affichés parmi la liste
                            mais <strong>grisés</strong> et{" "}
                            <strong>rayés</strong>
                        </li>
                        <li>
                            A côté de chaque ligne rayée, il y aura, en plus, un
                            bouton <strong>Supprimer</strong>
                        </li>
                        <li>
                            En haut de la liste, il y aura un bouton{" "}
                            <em>toggle</em> qui permet d'afficher/cacher les
                            éléments terminés.
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
}
