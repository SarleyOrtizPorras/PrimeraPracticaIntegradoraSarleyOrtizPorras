import { Router } from "express";
import CompaniesManager from "../dao/fileSystem/Managers/companies.js";

const router = Router();
const companiesService = new CompaniesManager();

router.get('/',async(req,res)=>{
    const companies = await companiesService.getCompanies();
    res.render('companies',{companies});
})


export default router;