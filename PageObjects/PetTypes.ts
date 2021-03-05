import { element,by, ElementFinder } from "protractor";
const log=require('../Logs/Log4JS').file;
const expect=require('chai').expect;

export class PetTypes{
   

    private addbtn=element(by.cssContainingText('.btn-default',' Add '));

    private homeBtn=element(by.cssContainingText('.btn-default','Home'));

    private title=element(by.css('div .xd-container h2'));

    private editBtn=element.all(by.cssContainingText('.btn-default','Edit')).first();

    private deleteBtn=element.all(by.cssContainingText('.btn-default','Delete')).first();

    private petName=element(by.css("#name"));

    private save=element(by.cssContainingText('.btn-default','Save'));

    private firstPet=element.all(by.css('tbody tr td')).first();

    // private table=element(by.css('.table.table-striped tbody'))


    public async verifyTitle()
    {
        await this.title.getText().then(function(txt){

            log.debug(txt);
            expect(txt).to.equal('Pet Types');
            log.debug("Pet Types page title is verified");
        });
    }

    public async isAddHomeDeleteEditEnable()
    {
        let status=await this.addbtn.isEnabled();
        expect(status).to.equal(true);
        log.debug("Add button is enabled in Pet Types page");

        let status1=await this.homeBtn.isEnabled();
        expect(status1).to.equal(true);
        log.debug("Home button is Enabled in Pet Types page");

        let status2=await this.editBtn.isEnabled();
        expect(status2).to.equal(true);
        log.debug("Edit button is Enabled in Pet Types page");

        let status3=await this.deleteBtn.isEnabled();
        expect(status3).to.equal(true);
        log.debug("Delete button is Enabled in Pet Types page");

    }

    public async clickOnAdd()
    {
        await this.addbtn.click();
        log.debug("Clicked on Add button in Pet Types page");
    }

    public async enterName({Name} : {Name : any}){

        await this.petName.sendKeys(Name);
        log.debug("Pet name Entered");

    }

    public async clickOnSave()
    {
        let status=await this.save.isEnabled();
        expect(status).to.equal(true);
        log.debug("save button is Enabled");
        await this.save.click();
        log.debug("Clicked on Save button is Enabled");
    }

    public async countAndDisplay(){
        let row =this.table.$$("tr");
        let count= await row.count();
        log.debug("No of pet present-- "+count);
        for(let i=0; i<count; i++)
        {
          let firstTD=row.get(i).$$("td");
          let firstdata:ElementFinder=firstTD.get(0);
        //   browser.wait(ec.presenceOf(firstdata), 5000);
          await firstdata.element(by.name('pettype_name')).getAttribute('value').then((title)=>{
            log.debug("PetType  ::" +title);
          
          
        } );
      
      }
    }
    public async deleteFirstPet()
    {
        await this.firstPet.element(by.name('pettype_name')).getAttribute('value').then(async (petName)=>{
            log.debug("Deleted PetType Name is ::" +petName)
        await this.deleteBtn.click();

    });
    }

}