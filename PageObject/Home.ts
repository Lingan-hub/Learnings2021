import { by, element } from "protractor";
const expect = require( 'chai' ).expect;
const log=require('../Logs/Log4JS').file;
import testdata from "../TestData/Properties"

export class Home
{
      private hometab = element(by.css("a[href='/petclinic/welcome']"));

      private hometitle = element(by.css("app-welcome h1"));

      private specialistBtn= element(by.css("a[href='/petclinic/specialties']"));

      private specialtiestitle=element(by.css('div .xd-container h2'));

      private addbtn=element(by.cssContainingText('.btn-default',' Add '));

      private editBtn=element.all(by.cssContainingText('.btn-default','Edit')).first();

      private homeBtn=element(by.cssContainingText('.btn-default','Home'));

      private deleteBtn=element.all(by.cssContainingText('.btn-default','Delete')).first();
  
      private specaltiName=element(by.css("#name"));
  
      private save=element(by.cssContainingText('.btn-default','Save'));

      private firstSpecialty=element.all(by.css('tbody tr td')).first();

      private table=element(by.css('.table.table-striped tbody'))
       

        public async navigateToHomepage()
        {
          await this.hometab.click();
        }

        public async titleVerification()
        {
          await this.hometitle.getText().then(async(text)=>{
            log.debug(text);
           await log.debug( text );
           await expect(text).to.equal("Welcome to Petclinic");    
          })
        }

        public async navigateToSpecialtiesPage()
        {
          await this.specialistBtn.click();
        }

        public async specialtiestitleVerification()
        {
          await this.specialtiestitle.getText().then(async(text)=>{
            log.debug(text);
           await log.debug( text );
           await expect(text).to.equal("Specialties");    
          })
        }

        public async isAddHomeDeleteEditEnable()
    {
        let status=await this.addbtn.isEnabled();
        expect(status).to.equal(true);

        let status1=await this.homeBtn.isEnabled();
        expect(status1).to.equal(true);  

        let status2=await this.editBtn.isEnabled();
        expect(status2).to.equal(true);
    
        let status3=await this.deleteBtn.isEnabled();
        expect(status3).to.equal(true);

    }

    public async clickOnAdd()
    {
      await this.addbtn.click();
      
    }

    public async enterName()
    {
      await this.specaltiName.sendKeys(testdata.userData.Data.SpecialtiesName);
      
    }

    public async clickSave()
    {
      let status=await this.save.isEnabled();
        expect(status).to.equal(true);
        await this.save.click();
        
    }




}