export default class HawkmoonItemSheet extends ItemSheet{
    get template(){
        console.log(`HawkmoonItemSheet | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/Hawkmoon-2nd-edition-custom/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){

        const baseData = super.getData();
        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item : baseData.item,
            data: baseData.item.data.data
        };
        console.log(sheetData);

        return sheetData;
    }
}