
import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import companyService from '@services/company-service';
import { ParamMissingError, RegistryNotFoundError } from '@shared/errors';
import { IUser } from '@models/User';
import { ICompany } from '@models/Company';


// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;


// Paths
export const p = {
    getAll: '/all',
    getOne: '/:id',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
} as const;


/**
 * Get all companies (Admin route)
 */
 router.get(p.getAll, async (_: Request, res: Response) => {
    const companies = await companyService.getAll();
    return res.status(OK).json({companies});
 });

/**
 * Get all companies by company
 */
router.get(p.getAll, async (req: Request, res: Response) => {
    const {user_id} = req.params;
    // Check param
    if (!user_id) {
        throw new ParamMissingError();
    }
    const companies = await companyService.getByUser(Number(user_id));
    return res.status(OK).json({companies});
});

/**
 * Get company by id
 */
 router.get(p.getOne, async (req: Request, res: Response) => {
    const {id} = req.params;
    // Check param
    if (!id) {
        throw new ParamMissingError();
    }
     const company = await companyService.getOneById(Number(id));
     if (!company)
         throw new RegistryNotFoundError();

    return res.status(OK).json({company});
});

/**
 * Add one company.
 */
router.post(p.add, async (req: Request, res: Response) => {
    const company: ICompany = req.body;
    // Check param
    if (!company.name) {
        throw new ParamMissingError();
    }
    // Fetch data
    await companyService.addOne(req.body);
    return res.status(CREATED).end();
});


/**
 * Update one company.
 */
router.put(p.update, async (req: Request, res: Response) => {
    const company: ICompany = req.body;
    // Check param
    if (!company) {
        throw new ParamMissingError();
    }
    // Fetch data
    await companyService.updateOne(company);
    return res.status(OK).end();
});


/**
 * Delete one company.
 */
router.delete(p.delete, async (req: Request, res: Response) => {
    const { id } = req.params;
    // Check param
    if (!id) {
        throw new ParamMissingError();
    }
    // Fetch data
    await companyService.delete(Number(id));
    return res.status(OK).end();
});


// Export default
export default router;

