export default class HawkmoonActorSheet extends ActorSheet {
    get template(){
        console.log(`HawkmoonActorSheet | Récupération du fichier html ${this.actor.data.type}-sheet.`);
        
        return `systems/Hawkmoon-2nd-edition-custom/templates/sheets/${this.actor.data.type}-sheet.html`;
    }
        
    getData(){

        const baseData = super.getData();
        let sheetData = {
            owner: this.actor.isOwner,
            editable: this.isEditable,
            actor : baseData.actor,
            data: baseData.actor.data.data
        };
        console.log(sheetData);
        
        return sheetData;
    }
}