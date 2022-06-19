
import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import userService from '@services/user-service';
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
 * Get all users (Admin route)
 */
 router.get(p.getAll, async (_: Request, res: Response) => {
    const users = await userService.getAll();
    return res.status(OK).json({users});
 });

/**
 * Get all users by company
 */
router.get(p.getAll, async (req: Request, res: Response) => {
    const {company_id} = req.params;
    // Check param
    if (!company_id) {
        throw new ParamMissingError();
    }
    const company: ICompany = { id: Number(company_id), code: '', name: '', nickname: '' };
    const users = await userService.getByCustomer(company);
    return res.status(OK).json({users});
});

/**
 * Get user by id
 */
 router.get(p.getOne, async (req: Request, res: Response) => {
    const {id} = req.params;
    // Check param
    if (!id) {
        throw new ParamMissingError();
    }
     const user = await userService.getOneById(Number(id));
     if (!user)
         throw new RegistryNotFoundError();

    return res.status(OK).json({user});
});

/**
 * Add one user.
 */
router.post(p.add, async (req: Request, res: Response) => {
    const user: IUser = req.body;
    // Check param
    if (!user.name || !user.email || !user.role) {
        throw new ParamMissingError();
    }
    // Fetch data
    await userService.addOne(req.body);
    return res.status(CREATED).end();
});


/**
 * Update one user.
 */
router.put(p.update, async (req: Request, res: Response) => {
    const user: IUser = req.body;
    // Check param
    if (!user) {
        throw new ParamMissingError();
    }
    // Fetch data
    await userService.updateOne(user);
    return res.status(OK).end();
});


/**
 * Delete one user.
 */
router.delete(p.delete, async (req: Request, res: Response) => {
    const { id } = req.params;
    // Check param
    if (!id) {
        throw new ParamMissingError();
    }
    // Fetch data
    await userService.delete(Number(id));
    return res.status(OK).end();
});


// Export default
export default router;

